import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Github, Lock, Star } from "lucide-react";

type Project = (typeof import("@/lib/i18n").translations)["en"]["projects"]["items"][number];

function ProjectVisual({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-secondary ${featured ? "min-h-[190px]" : "min-h-[140px]"}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className={`h-full w-full object-cover ${featured ? "min-h-[190px]" : "min-h-[140px]"}`}
      />
    </div>
  );
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  const { t } = useLang();
  const L = t.projects.labels;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group rounded-2xl border bg-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
        featured ? "border-primary/40 hover:border-primary/70 hover:glow-primary" : "border-border hover:border-data/50"
      }`}
    >
      {!featured && <div className="mb-5"><ProjectVisual project={project} featured={false} /></div>}
      <div className={featured ? "grid gap-8 lg:grid-cols-[1.35fr_0.65fr]" : ""}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-data/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-data">
              {project.category}
            </span>
            {featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Star size={12} /> Featured
              </span>
            )}
          </div>

          <h3 className={`mt-4 font-display font-extrabold text-card-foreground ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{project.subtitle}</p>

          <dl className="mt-5 space-y-4 text-[0.975rem] leading-relaxed">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{L.problem}</dt>
              <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{L.built}</dt>
              <dd className="mt-1 text-foreground/85">{project.built}</dd>
            </div>
          </dl>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{L.capabilities}</p>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.capabilities.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-data" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{L.tech}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Github size={16} /> {L.repo}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-muted-foreground">
                <Lock size={14} /> {L.noRepo}
              </span>
            )}
          </div>
        </div>

        {featured && <ProjectVisual project={project} featured />}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const featured = t.projects.items.filter((p) => p.featured);
  const rest = t.projects.items.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" alt heading={t.projects.heading} kicker={t.projects.kicker}>
      <div className="space-y-6">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} featured />
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} featured={false} />
        ))}
      </div>
    </SectionWrapper>
  );
}
