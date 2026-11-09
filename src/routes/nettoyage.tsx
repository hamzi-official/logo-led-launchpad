import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Building2, Sparkles, Warehouse } from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Motion";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/nettoyage")({
  head: () => ({ meta: [{ title: "Nettoyage Bureaux & Chantiers | AMJ+ Srl" }, { name: "description", content: "Nettoyage Bureaux & Chantiers — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Nettoyage Bureaux & Chantiers | AMJ+ Srl" }, { property: "og:description", content: "Nettoyage Bureaux & Chantiers — AMJ+ Srl" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.cleaning;
  const icons = [Building2, Sparkles, Warehouse];
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.cleaning} /><section className="mx-auto max-w-7xl px-6 py-20"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{s.services.map((item, i) => <ServiceCard key={item.title} icon={icons[i] ?? Building2} title={item.title} desc={item.desc} index={i} />)}</div></section><section className="bg-slate-soft px-6 py-20"><div className="mx-auto max-w-5xl"><SectionTitle title={s.baTitle} sub={t.common.illustration} /><BeforeAfter image={IMG.office} beforeImage={IMG.cleaningBefore} /></div></section><CtaBand /></>);
}
