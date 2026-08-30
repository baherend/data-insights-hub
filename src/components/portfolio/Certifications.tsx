import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

export default function Certifications() {
  const { t } = useLang();
  const priority = t.certifications.items.filter((c) => c.priority);
  const others = t.certifications.items.filter((c) => !c.priority);

  return (
    <SectionWrapper id="certifications" heading={t.certifications.heading} kicker={t.certifications.kicker}>
      <div className="grid gap-5 md:grid-cols-3">
        {priority.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-primary/40 card-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-primary"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
              <BadgeCheck size={22} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-data">{cert.issuer}</p>
            <h3 className="mt-2 font-display text-lg font-bold leading-snug text-card-foreground">{cert.name}</h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {others.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-data/50"
          >
            <Award size={20} className="mt-0.5 shrink-0 text-data" />
            <div>
              <h3 className="font-display text-base font-semibold leading-snug text-card-foreground">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
