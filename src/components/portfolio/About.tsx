import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { Brain, BarChart3, Sparkles } from "lucide-react";

const icons = [BarChart3, Brain, Sparkles];

export default function About() {
  const { t } = useLang();

  return (
    <SectionWrapper id="about" heading={t.about.heading} kicker={t.about.kicker}>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
          <p className="text-lg font-medium text-foreground">{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </div>

        <div className="grid gap-4 content-start">
          {t.about.cards.map((c, i) => {
            const Icon = icons[i];
            const dominant = i === 0;
            return (
              <div
                key={c.label}
                className={`group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  dominant
                    ? "border-primary/50 card-elevated p-6 glow-primary"
                    : "border-border bg-card hover:border-data/50"
                }`}
              >
                <div className={`rounded-xl p-3 ${dominant ? "bg-primary text-primary-foreground" : "bg-data/10 text-data"}`}>
                  <Icon size={dominant ? 26 : 22} />
                </div>
                <div>
                  <p className={`font-display font-bold text-card-foreground ${dominant ? "text-lg" : "text-base"}`}>{c.label}</p>
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
