import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: string; sub: string; image: string }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-32 pb-20">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-4xl font-display text-4xl font-bold text-primary-foreground md:text-6xl">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
          {sub}
        </motion.p>
      </div>
    </section>
  );
}
