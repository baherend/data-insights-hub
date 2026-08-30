import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const { t } = useLang();

  const contactLinks = [
    { icon: Mail, label: "mikhaelbaher@gmail.com", href: "mailto:mikhaelbaher@gmail.com", external: false },
    { icon: Phone, label: "+20 127 878 2339", href: "tel:+201278782339", external: false },
    { icon: Linkedin, label: "linkedin.com/in/baher-azer", href: "https://linkedin.com/in/baher-azer-932019217", external: true },
    { icon: Github, label: "github.com/baherend", href: "https://github.com/baherend", external: true },
  ];

  return (
    <SectionWrapper id="contact" alt heading={t.contact.heading} kicker={t.contact.kicker}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-3 content-start sm:grid-cols-2">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="rounded-lg bg-data/10 p-2.5 text-data transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon size={20} />
              </div>
              <span className="break-all text-sm font-semibold text-card-foreground">{c.label}</span>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/40 card-elevated p-7 md:p-8">
          <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">{t.contact.blurb}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:mikhaelbaher@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} /> {t.contact.emailCta} <ArrowRight size={16} className="rtl:rotate-180" />
            </a>
            <a
              href="https://wa.me/201278782339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-data/60"
            >
              <MessageCircle size={16} /> {t.contact.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
