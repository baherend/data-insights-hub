import { useLang } from "@/lib/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  const quick = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="shell">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-extrabold text-gradient">Baher Mikhael Azer</h3>
            <p className="mt-3 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-card-foreground">{t.footer.quickLinks}</h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {quick.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-card-foreground">{t.footer.contactInfo}</h4>
            <div className="mt-4 flex gap-3">
              <a href="https://github.com/baherend" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/baher-azer-932019217" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin size={18} />
              </a>
              <a href="mailto:mikhaelbaher@gmail.com" aria-label="Email" className="rounded-lg bg-secondary p-2.5 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Baher Mikhael Azer. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
