import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "SQL Server", icon: "🗄️" },
  { name: "Power BI", icon: "📊" },
  { name: "Excel", icon: "📗" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "Scikit-learn", icon: "🤖" },
  { name: "Matplotlib", icon: "📈" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
];

export default function DataTools() {
  const { t } = useLang();

  return (
    <SectionWrapper id="tools">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.tools.heading}</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
          >
            <span className="text-xl">{tool.icon}</span>
            <span className="text-sm font-medium text-card-foreground">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
