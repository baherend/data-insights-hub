import { useLang } from "@/lib/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold text-gradient mb-3">Baher Azer</h3>
            <p className="text-sm text-muted-foreground">Data Analyst | BI | Applied AI</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card-foreground mb-3">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {[t.nav.about, t.nav.skills, t.nav.experience, t.nav.projects, t.nav.contact].map((l, i) => (
                <a key={i} href={`#${["about", "skills", "experience", "projects", "contact"][i]}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-card-foreground mb-3">{t.footer.contactInfo}</h4>
            <div className="flex gap-3">
              <a href="https://github.com/baherend" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/baher-azer-932019217" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:mikhaelbaher@gmail.com" className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Baher Azer. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
