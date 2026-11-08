import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { MapPin, Building2, BriefcaseBusiness, ShieldCheck, Users, Scale, Handshake, Files } from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionTitle } from "@/components/site/Motion";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/centre-affaires")({
  head: () => ({ meta: [{ title: "Centre d'Affaires | AMJ+ Srl" }, { name: "description", content: "Centre d'Affaires — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Centre d'Affaires | AMJ+ Srl" }, { property: "og:description", content: "Centre d'Affaires — AMJ+ Srl" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.business;
  const icons = [MapPin, Building2, BriefcaseBusiness, ShieldCheck, Users, Scale, Handshake, Files];
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.office} /><section className="mx-auto max-w-7xl px-6 py-20"><div className="grid gap-6 md:grid-cols-2 ">{s.services.map((item, i) => <ServiceCard key={item.title} icon={icons[i] ?? MapPin} title={item.title} desc={item.desc} index={i} />)}</div></section><CtaBand /></>);
}
