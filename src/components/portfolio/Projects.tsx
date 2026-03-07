import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { t } = useLang();

  return (
    <SectionWrapper id="projects" alt>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.projects.heading}</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {t.projects.items.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-medium text-muted-foreground">{project.tools}</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                <Github size={14} /> GitHub
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                <ExternalLink size={14} /> Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
