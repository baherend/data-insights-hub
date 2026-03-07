import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <SectionWrapper id="testimonials" alt>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">{t.testimonials.heading}</h2>
      <div className="max-w-md mx-auto text-center">
        <div className="p-8 rounded-xl bg-card border border-border border-dashed">
          <MessageSquareQuote size={32} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground italic">{t.testimonials.placeholder}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
