import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";
import { Reveal } from "./Motion";

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="px-6 py-24">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-navy px-8 py-16 text-center shadow-luxe md:px-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-royal/50 blur-3xl" />
        <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">{t.common.getStarted}</h2>
        <p className="relative mt-4 text-lg text-primary-foreground/75">{t.common.getStartedSub}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="rounded-full bg-gradient-gold px-8 py-4 font-bold text-navy shadow-gold transition hover:-translate-y-1">{t.common.quote}</Link>
          <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-primary-foreground transition hover:-translate-y-1">
            <MessageCircle className="h-5 w-5" /> {t.common.whatsapp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
