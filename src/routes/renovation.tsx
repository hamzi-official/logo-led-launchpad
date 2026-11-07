import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/renovation")({
  head: () => ({ meta: [{ title: "Rénovation de Maisons | AMJ+ Srl" }, { name: "description", content: "Rénovation de Maisons — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Rénovation de Maisons | AMJ+ Srl" }, { property: "og:description", content: "Rénovation de Maisons — AMJ+ Srl" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.renovation;
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.house} /><CtaBand /></>);
}
