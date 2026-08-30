import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="shell flex items-center justify-between py-4">
        <a href="#hero" className="font-display text-lg font-extrabold text-gradient">Baher Azer</a>
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="rounded-lg bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={toggleLang} className="flex items-center gap-1 rounded-lg bg-secondary p-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Toggle language">
            <Languages size={18} />
            <span>{lang === "en" ? "AR" : "EN"}</span>
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg bg-secondary p-2 text-secondary-foreground lg:hidden" aria-label="Menu">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 pb-4 backdrop-blur-lg animate-fade-up">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
