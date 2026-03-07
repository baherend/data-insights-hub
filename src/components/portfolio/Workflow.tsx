import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Database, Sparkles, Search, BarChart3, FileText } from "lucide-react";

const icons = [Database, Sparkles, Search, BarChart3, FileText];

export default function Workflow() {
  const { t } = useLang();

  return (
    <SectionWrapper id="workflow" alt>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.workflow.heading}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-4xl mx-auto">
        {t.workflow.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2 md:gap-0"
            >
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors min-w-[120px]">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium text-card-foreground text-center">{step}</span>
              </div>
              {i < t.workflow.steps.length - 1 && (
                <div className="hidden md:block text-primary mx-2">→</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
