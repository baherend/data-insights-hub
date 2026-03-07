import { useLang } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Phone, Download } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  const buttons = [
    { label: t.hero.cta_linkedin, icon: Linkedin, href: "https://linkedin.com/in/baher-azer-932019217", variant: "primary" as const },
    { label: t.hero.cta_whatsapp, icon: MessageCircle, href: "https://wa.me/201278782339", variant: "secondary" as const },
    { label: t.hero.cta_call, icon: Phone, href: "tel:+201278782339", variant: "secondary" as const },
    { label: t.hero.cta_resume, icon: Download, href: "/Baher_Azer_Resume.pdf", variant: "accent" as const },
  ];

  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(174 72% 45%) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-primary font-display text-lg mb-2">
          {t.hero.greeting}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight" style={{ color: "hsl(0 0% 95%)" }}>
          {t.hero.name}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl mb-3 font-medium" style={{ color: "hsl(174 72% 55%)" }}>
          {t.hero.title}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-2xl mx-auto text-base md:text-lg mb-8" style={{ color: "hsl(220 15% 70%)" }}>
          {t.hero.summary}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-3">
          {buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target={b.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              download={b.variant === "accent" ? true : undefined}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                b.variant === "primary"
                  ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                  : b.variant === "accent"
                  ? "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
                  : "border border-border/50 hover:bg-secondary/50 hover:scale-105"
              }`}
              style={b.variant === "secondary" ? { color: "hsl(220 15% 80%)" } : undefined}
            >
              <b.icon size={16} />
              {b.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
