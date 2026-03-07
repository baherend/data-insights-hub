import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { Brain, BarChart3, Lightbulb } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const highlights = [
    { icon: Brain, label: "Psychology", value: "Behavioral Insight" },
    { icon: BarChart3, label: "Data Analysis", value: "Business Intelligence" },
    { icon: Lightbulb, label: "Applied AI", value: "Smart Solutions" },
  ];

  return (
    <SectionWrapper id="about">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.about.heading}</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <p className="text-muted-foreground leading-relaxed">{t.about.p1}</p>
          <p className="text-muted-foreground leading-relaxed">{t.about.p2}</p>
          <p className="text-muted-foreground leading-relaxed">{t.about.p3}</p>
        </div>
        <div className="grid gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300 group">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <h.icon size={24} />
              </div>
              <div>
                <p className="font-display font-semibold text-card-foreground">{h.label}</p>
                <p className="text-sm text-muted-foreground">{h.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
