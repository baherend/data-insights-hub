import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const skills = [
  { name: "Python (Pandas, NumPy)", level: 85, color: "primary" },
  { name: "SQL Server", level: 80, color: "primary" },
  { name: "Power BI (DAX, Modeling)", level: 90, color: "accent" },
  { name: "Excel (Power Query, Pivots)", level: 88, color: "primary" },
  { name: "ETL Processes", level: 75, color: "accent" },
  { name: "EDA", level: 82, color: "primary" },
  { name: "Data Visualization", level: 88, color: "accent" },
  { name: "Statistical Analysis", level: 78, color: "primary" },
  { name: "Git & GitHub", level: 70, color: "accent" },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <SectionWrapper id="skills" alt>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.skills.heading}</h2>
      <div className="max-w-3xl mx-auto space-y-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className={`h-full rounded-full ${skill.color === "accent" ? "bg-accent" : "bg-primary"}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
