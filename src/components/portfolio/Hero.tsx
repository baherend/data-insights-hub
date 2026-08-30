import { useLang } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Download, Github, ArrowRight, TrendingUp } from "lucide-react";

const bars = [42, 58, 36, 70, 52, 84, 64];
const trend = "M0,72 C24,60 42,66 62,48 C82,30 100,42 122,26 C144,12 164,20 186,8";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 data-grid-bg opacity-[0.35]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="shell relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-center">
        {/* Left */}
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm font-semibold uppercase tracking-[0.2em] text-data mb-4">
            {t.hero.greeting}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1]">
            {t.hero.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-4 font-display text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold leading-tight text-gradient">
            {t.hero.positioning}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-4 text-base md:text-lg font-medium text-foreground/80">
            {t.hero.title}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            {t.hero.summary}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-5 max-w-xl rounded-xl border border-border bg-card/60 p-4 text-[0.95rem] leading-relaxed text-muted-foreground border-s-2 border-s-data">
            {t.hero.differentiator}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 glow-primary">
              {t.hero.cta_projects} <ArrowRight size={16} className="rtl:rotate-180" />
            </a>
            <a href="/Baher_Azer_Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-data/60">
              <Download size={16} /> {t.hero.cta_resume}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.44 }} className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a href="https://linkedin.com/in/baher-azer-932019217" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Linkedin size={16} /> {t.hero.cta_linkedin}
            </a>
            <a href="https://github.com/baherend" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Github size={16} /> {t.hero.cta_github}
            </a>
            <a href="https://wa.me/201278782339" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-data">
              <MessageCircle size={16} /> {t.hero.cta_whatsapp}
            </a>
          </motion.div>
        </div>

        {/* Right: decorative analytics composition */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="relative" aria-hidden="true">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-elevated rounded-xl border border-border p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.hero.panel.kpi_label}</p>
                <p className="mt-2 font-display text-xl font-bold text-foreground">{t.hero.panel.kpi_value}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-data">
                  <TrendingUp size={14} /> {t.hero.panel.trend}
                </div>
              </div>
              <div className="card-elevated rounded-xl border border-border p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.hero.panel.stack}</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {["SQL", "Python", "Power BI", "Excel"].map((s) => (
                    <span key={s} className="rounded-lg bg-primary/10 px-2 py-1.5 text-center text-xs font-semibold text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Trend chart */}
            <div className="card-elevated mt-4 rounded-xl border border-border p-4">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.hero.panel.trend}</p>
                <span className="text-[0.7rem] text-muted-foreground">{t.hero.panel.kpi_note}</span>
              </div>
              <svg viewBox="0 0 190 84" className="mt-3 h-24 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--data))" />
                  </linearGradient>
                </defs>
                {[0, 21, 42, 63, 84].map((y) => (
                  <line key={y} x1="0" y1={y} x2="190" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" />
                ))}
                <motion.path
                  d={trend}
                  fill="none"
                  stroke="url(#heroLine)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
                />
              </svg>
              <div className="mt-3 flex h-16 items-end gap-2">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.7 + i * 0.07, ease: "easeOut" }}
                    className={`flex-1 rounded-t-md ${i % 3 === 0 ? "bg-data/70" : "bg-primary/60"}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {t.hero.panel.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
