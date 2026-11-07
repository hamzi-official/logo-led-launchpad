import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({ meta: [{ title: "Politique de confidentialité | AMJ+ Srl" }, { name: "description", content: "Politique de confidentialité — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Politique de confidentialité | AMJ+ Srl" }, { property: "og:description", content: "Politique de confidentialité — AMJ+ Srl" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.privacy;
  return (<><PageHero eyebrow={"AMJ+ Srl"} title={s.title} sub={"AMJ+ Srl · BE 1027.549.902"} image={IMG.meeting} /><CtaBand /></>);
}
