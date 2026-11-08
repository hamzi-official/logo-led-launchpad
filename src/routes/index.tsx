import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Sparkles, Hammer, MapPin, Languages, ShieldCheck, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY, IMG } from "@/lib/company";
import { Reveal, SectionTitle, Counter } from "@/components/site/Motion";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AMJ+ Srl | Centre d'Affaires, Nettoyage & Rénovation en Belgique" },
    { name: "description", content: "AMJ+ Srl : services aux entreprises, nettoyage professionnel et rénovation à Sint-Pieters-Leeuw, Belgique. BE 1027.549.902." },
    { property: "og:title", content: "AMJ+ Srl | Centre d'Affaires, Nettoyage & Rénovation en Belgique" },
    { property: "og:description", content: "Trois expertises, un seul partenaire en Belgique. Contactez AMJ+ Srl pour un devis gratuit." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() {
  const { t } = useI18n();
  const paths = ["/centre-affaires", "/nettoyage", "/renovation"] as const;
  const icons = [Building2, Sparkles, Hammer];
  const images = [IMG.office, IMG.cleaning, IMG.house];
  return <>
    <section className="home-cover relative flex items-center overflow-hidden bg-navy text-primary-foreground">
      <img src={IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-16">
        <Reveal><p className="mb-5 text-sm font-semibold text-gold">{t.home.eyebrow}</p>
        <h1 className="font-display text-5xl font-bold md:text-7xl">AMJ+ Srl<span className="text-gold">.</span></h1>
        <p className="mt-6 max-w-3xl font-display text-2xl font-semibold md:text-4xl">{t.home.title1} {t.home.title2}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">{t.slogan}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-auto whitespace-normal bg-gradient-gold py-4 text-navy"><a href="#divisions">{t.common.discover}<ArrowRight /></a></Button>
          <Button asChild variant="outline" size="lg" className="h-auto border-primary-foreground/40 bg-transparent py-4 text-primary-foreground"><a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />{t.common.whatsapp}</a></Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-primary-foreground/80"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" />{t.common.compliant}</span><span>{t.common.vatLabel}: {COMPANY.vat}</span></div>
        </Reveal>
      </div>
    </section>
    <section id="divisions" className="scroll-mt-24 px-6 py-16 md:py-24"><div className="mx-auto max-w-7xl">
      <SectionTitle title={t.home.pillarsTitle} sub={t.home.pillarsSub} />
      <div className="grid gap-7 md:grid-cols-3">{t.home.pillars.map((item, i) => { const Icon = icons[i] ?? Building2; return <Reveal key={item.title} delay={i * .1} className="group overflow-hidden rounded-lg border border-border bg-card">
        <Link to={paths[i] ?? "/centre-affaires"} className="block"><div className="aspect-[4/3] overflow-hidden"><img src={images[i]} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
        <div className="p-7"><Icon className="mb-5 h-7 w-7 text-gold" /><h3 className="font-display text-xl font-bold">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-royal">{t.common.learnMore}<ArrowRight className="h-4 w-4 rtl:rotate-180" /></span></div></Link>
      </Reveal>; })}</div>
    </div></section>
    <section className="bg-slate-soft px-6 py-20"><div className="mx-auto max-w-7xl"><SectionTitle title={t.home.whyTitle} />
      <div className="mb-14 grid grid-cols-2 gap-8 border-b border-border pb-10 text-center"><div><p className="font-display text-5xl font-bold text-royal"><Counter to={3} /></p><p className="mt-3 text-sm">{t.home.stats[0]}</p></div><div><p className="font-display text-5xl font-bold text-gold"><Counter to={4} /></p><p className="mt-3 text-sm">{t.home.stats[1]}</p></div></div>
      <div className="grid gap-10 md:grid-cols-3">{t.home.why.map((item, i) => { const Icon = [MapPin, Languages, ShieldCheck][i] ?? ShieldCheck; return <Reveal key={item.title}><Icon className="mb-5 h-8 w-8 text-gold" /><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{item.desc}</p></Reveal>; })}</div>
    </div></section><CtaBand />
  </>;
}
