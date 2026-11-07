import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({ meta: [{ title: "Mentions légales | AMJ+ Srl" }, { name: "description", content: "Mentions légales — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Mentions légales | AMJ+ Srl" }, { property: "og:description", content: "Mentions légales — AMJ+ Srl" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.legal;
  return (<><PageHero eyebrow={"AMJ+ Srl"} title={s.title} sub={"AMJ+ Srl · BE 1027.549.902"} image={IMG.meeting} /><CtaBand /></>);
}
