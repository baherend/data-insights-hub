import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function SectionWrapper({ id, children, className = "", alt }: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 ${alt ? "section-alt" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
}
