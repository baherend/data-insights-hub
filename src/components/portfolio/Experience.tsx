import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useLang();

  return (
    <SectionWrapper id="experience" heading={t.experience.heading} kicker={t.experience.kicker}>
      <div className="relative max-w-4xl">
        <div className="absolute bottom-2 top-2 start-[15px] w-px bg-border md:start-[19px]" />
        <div className="space-y-6">
          {t.experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative ps-12 md:ps-16"
            >
              <div className="absolute start-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-primary md:h-10 md:w-10">
                <Briefcase size={16} />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.period}</span>
                  <span className="rounded-full bg-data/10 px-2.5 py-0.5 text-xs font-semibold text-data">{item.tag}</span>
                </div>
                <h3 className="mt-3 font-display text-lg md:text-xl font-bold text-card-foreground">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[0.975rem] leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-data" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
