import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function SectionTitle({ eyebrow, title, sub, light }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase text-gold">{eyebrow}</p>}
      <h2 className={`font-display text-3xl font-bold md:text-5xl ${light ? "text-primary-foreground" : "text-navy"}`}>{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-gold" />
      {sub && <p className={`mt-5 text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{sub}</p>}
    </Reveal>
  );
}
