import { useLang } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Database, FileSpreadsheet, LineChart, Braces, GitBranch, Table2, NotebookPen, BarChart4 } from "lucide-react";

const tools = [
  { name: "Power BI", icon: BarChart4 },
  { name: "SQL Server", icon: Database },
  { name: "Python", icon: Braces },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Pandas", icon: Table2 },
  { name: "Jupyter", icon: NotebookPen },
  { name: "Matplotlib", icon: LineChart },
  { name: "Git & GitHub", icon: GitBranch },
];

export default function DataTools() {
  const { t } = useLang();

  return (
    <div className="shell pb-20 md:pb-28">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground">{t.tools.heading}</h3>
          <p className="text-sm text-muted-foreground">{t.tools.kicker}</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="card-elevated flex items-center gap-3 rounded-xl border border-border px-4 py-3.5 transition-colors hover:border-data/50"
            >
              <tool.icon size={20} className="shrink-0 text-data" />
              <span className="text-sm font-semibold text-card-foreground">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
