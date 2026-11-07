import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/centre-affaires")({
  head: () => ({ meta: [{ title: "Centre d'Affaires | AMJ+ Srl" }, { name: "description", content: "Centre d'Affaires — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Centre d'Affaires | AMJ+ Srl" }, { property: "og:description", content: "Centre d'Affaires — AMJ+ Srl" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.business;
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.office} /><CtaBand /></>);
}
