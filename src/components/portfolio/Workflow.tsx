import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Database, Sparkles, Search, BarChart3, FileText } from "lucide-react";

const icons = [Database, Sparkles, Search, BarChart3, FileText];

export default function Workflow() {
  const { t } = useLang();

  return (
    <SectionWrapper id="workflow" alt heading={t.workflow.heading} kicker={t.workflow.kicker}>
      <div className="relative">
        {/* Connector line (desktop) */}
        <div className="absolute inset-x-0 top-[46px] hidden lg:block">
          <div className="h-px w-full bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="h-px w-full -translate-y-px bg-gradient-to-r from-primary to-data"
          />
        </div>
        {/* Connector line (mobile) */}
        <div className="absolute bottom-6 top-6 start-[27px] w-px bg-border lg:hidden" />

        <div className="relative grid gap-6 lg:grid-cols-5">
          {t.workflow.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="flex items-start gap-4 lg:block"
              >
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-card text-primary transition-colors lg:mb-5">
                  <Icon size={24} />
                  <span className="absolute -top-2 -end-2 grid h-6 w-6 place-items-center rounded-full bg-data text-[0.7rem] font-bold text-[hsl(var(--data-foreground))]">
                    {i + 1}
                  </span>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 lg:min-h-[150px]">
                  <h3 className="font-display text-base md:text-lg font-bold text-card-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
