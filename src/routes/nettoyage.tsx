import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/nettoyage")({
  head: () => ({ meta: [{ title: "Nettoyage Bureaux & Chantiers | AMJ+ Srl" }, { name: "description", content: "Nettoyage Bureaux & Chantiers — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Nettoyage Bureaux & Chantiers | AMJ+ Srl" }, { property: "og:description", content: "Nettoyage Bureaux & Chantiers — AMJ+ Srl" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.cleaning;
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.cleaning} /><CtaBand /></>);
}
