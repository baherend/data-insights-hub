import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useLang();

  return (
    <SectionWrapper id="experience">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.experience.heading}</h2>
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
        {t.experience.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start gap-4 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
          >
            {/* Dot */}
            <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-2 z-10" />
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
              <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-xs font-medium text-primary">{item.period}</span>
                </div>
                <h3 className="font-display font-semibold text-card-foreground text-left">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 text-left">{item.company}</p>
                <ul className="space-y-1.5 text-left">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
