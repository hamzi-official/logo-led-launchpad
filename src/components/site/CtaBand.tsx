import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";
import { Reveal } from "./Motion";

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="bg-gradient-navy px-6 py-20">
      <Reveal className="relative mx-auto max-w-6xl text-center">
        <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-5xl">{t.common.getStarted}</h2>
        <p className="relative mt-4 text-lg text-primary-foreground/75">{t.common.getStartedSub}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="rounded-full bg-gradient-gold px-8 py-4 font-bold text-navy shadow-gold transition hover:-translate-y-1">{t.common.quote}</Link>
          <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-primary-foreground transition hover:-translate-y-1">
            <MessageCircle className="h-5 w-5" /> {t.common.whatsapp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
