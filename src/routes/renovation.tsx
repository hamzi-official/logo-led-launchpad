import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { House, Paintbrush, Bath, Zap } from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Motion";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Gallery } from "@/components/site/Gallery";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/renovation")({
  head: () => ({ meta: [{ title: "Rénovation de Maisons | AMJ+ Srl" }, { name: "description", content: "Rénovation de Maisons — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Rénovation de Maisons | AMJ+ Srl" }, { property: "og:description", content: "Rénovation de Maisons — AMJ+ Srl" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.renovation;
  const icons = [House, Paintbrush, Bath, Zap];
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.house} /><section className="mx-auto max-w-7xl px-6 py-20"><div className="grid gap-6 md:grid-cols-2 ">{s.services.map((item, i) => <ServiceCard key={item.title} icon={icons[i] ?? House} title={item.title} desc={item.desc} index={i} />)}</div></section><section className="bg-slate-soft px-6 py-20"><div className="mx-auto max-w-5xl"><SectionTitle title={s.baTitle} sub={t.common.illustration} /><BeforeAfter image={IMG.living} /></div></section><section className="mx-auto max-w-7xl px-6 py-20"><SectionTitle title={s.galleryTitle} /><Gallery /></section><CtaBand /></>);
}
