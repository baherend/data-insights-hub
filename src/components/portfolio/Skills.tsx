import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, Code2, BrainCircuit } from "lucide-react";

const icons = [BarChart3, LayoutDashboard, Code2, BrainCircuit];

export default function Skills() {
  const { t } = useLang();

  return (
    <SectionWrapper id="skills" heading={t.skills.heading} kicker={t.skills.kicker}>
      <div className="grid gap-6 md:grid-cols-2">
        {t.skills.groups.map((group, i) => {
          const Icon = icons[i];
          const primaryGroup = i < 2;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
                primaryGroup ? "border-primary/35 card-elevated hover:border-primary/60" : "border-border bg-card hover:border-data/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2.5 ${primaryGroup ? "bg-primary/15 text-primary" : "bg-data/10 text-data"}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-card-foreground">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
