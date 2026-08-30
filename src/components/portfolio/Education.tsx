import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { t } = useLang();

  return (
    <SectionWrapper id="education" alt heading={t.education.heading} kicker={t.education.kicker}>
      <div className="grid gap-6 lg:grid-cols-3">
        {t.education.items.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
              i === 0 ? "border-primary/40 card-elevated hover:glow-primary" : "border-border bg-card hover:border-data/50"
            }`}
          >
            <div className={`grid h-12 w-12 place-items-center rounded-xl ${i === 0 ? "bg-primary text-primary-foreground" : "bg-data/10 text-data"}`}>
              <GraduationCap size={24} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.year}</p>
            <h3 className="mt-2 font-display text-lg font-bold text-card-foreground">{item.degree}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{item.school}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
