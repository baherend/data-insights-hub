import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { t } = useLang();

  return (
    <SectionWrapper id="education">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.education.heading}</h2>
      <div className="max-w-md mx-auto text-center">
        <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={32} className="text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold text-card-foreground mb-1">{t.education.degree}</h3>
          <p className="text-muted-foreground">{t.education.school}</p>
          <p className="text-sm text-primary font-medium mt-1">{t.education.year}</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <h3 className="font-display text-2xl font-bold text-center mb-8 text-gradient">{t.certifications.heading}</h3>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {t.certifications.items.map((cert, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border text-center hover:border-primary/40 transition-colors">
              <p className="text-sm font-medium text-card-foreground">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
