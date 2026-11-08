import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ServiceCard({ icon: Icon, title, desc, index, image }: { icon: LucideIcon; title: string; desc: string; index: number; image?: string }) {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -10 }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-luxe"
    >
      {image && (
        <div className="h-52 overflow-hidden">
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-navy text-gold transition group-hover:bg-gradient-gold group-hover:text-navy">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <Link
          to="/contact"
          search={{ service: title }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-royal transition group-hover:text-gold"
        >
          {t.common.request} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </div>
    </motion.div>
  );
}
