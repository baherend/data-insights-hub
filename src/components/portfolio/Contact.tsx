import { useLang } from "@/lib/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    { icon: Mail, label: "mikhaelbaher@gmail.com", href: "mailto:mikhaelbaher@gmail.com" },
    { icon: Phone, label: "+20 127 878 2339", href: "tel:+201278782339" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/baher-azer-932019217" },
    { icon: Github, label: "GitHub", href: "https://github.com/baherend" },
  ];

  return (
    <SectionWrapper id="contact">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">{t.contact.heading}</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-4">
          {contactLinks.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.icon size={20} />
              </div>
              <span className="text-sm font-medium text-card-foreground">{c.label}</span>
            </a>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t.contact.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <input
            type="email"
            placeholder={t.contact.email}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <textarea
            placeholder={t.contact.message}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
          />
          <button type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
            {t.contact.send}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
