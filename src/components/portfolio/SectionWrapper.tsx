import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
  heading?: string;
  kicker?: string;
}

export default function SectionWrapper({ id, children, className = "", alt, heading, kicker }: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 ${alt ? "section-alt" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="shell"
      >
        {heading && (
          <header className="mb-12 md:mb-16 max-w-2xl">
            {kicker && (
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-data">
                <span className="h-1.5 w-1.5 rounded-full bg-data" />
                {kicker}
              </p>
            )}
            <h2 className="font-display text-3xl md:text-[2.6rem] font-extrabold leading-tight text-foreground">{heading}</h2>
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
