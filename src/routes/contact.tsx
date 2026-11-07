import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { IMG } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string } => ({ service: typeof s.service === "string" ? s.service : undefined }),
  head: () => ({ meta: [{ title: "Contact & Devis | AMJ+ Srl" }, { name: "description", content: "Contact & Devis — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Contact & Devis | AMJ+ Srl" }, { property: "og:description", content: "Contact & Devis — AMJ+ Srl" }] }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  const s = t.contact;
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.office2} /><CtaBand /></>);
}
