import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ContactMap } from "@/components/site/ContactMap";
import { Mail, MapPin, Phone, MessageCircle, User } from "lucide-react";
import { IMG, COMPANY } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string } => (typeof s["service"] === "string" ? { service: s["service"] } : {}),
  head: () => ({ meta: [{ title: "Contact & Devis | AMJ+ Srl" }, { name: "description", content: "Contact & Devis — AMJ+ Srl, Sint-Pieters-Leeuw." }, { property: "og:title", content: "Contact & Devis | AMJ+ Srl" }, { property: "og:description", content: "Contact & Devis — AMJ+ Srl" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Page,
});

function Page() {
  const { t, lang } = useI18n();
  const { service } = Route.useSearch();
  const contacts = [{ label: t.contact.manager, value: COMPANY.manager, href: COMPANY.emailHref, icon: User }, { label: t.contact.phone, value: COMPANY.phoneDisplay, href: COMPANY.phoneHref, icon: Phone }, { label: t.contact.whatsapp, value: COMPANY.whatsappDisplay, href: COMPANY.whatsappHref, icon: MessageCircle }, { label: t.contact.email, value: COMPANY.email, href: COMPANY.emailHref, icon: Mail }, { label: t.contact.address, value: `${COMPANY.address}, ${COMPANY.country[lang]}`, href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(COMPANY.address), icon: MapPin }];
  const s = t.contact;
  return (<><PageHero eyebrow={s.eyebrow ?? ""} title={s.title} sub={s.sub ?? ""} image={IMG.office2} /><section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1fr_1.5fr]"><div className="space-y-7">{contacts.map(c => <a key={c.label} href={c.href} className="flex items-start gap-4 border-b border-border pb-6"><c.icon className="mt-1 h-5 w-5 shrink-0 text-gold" /><div className="min-w-0"><p className="text-sm text-muted-foreground">{c.label}</p><p className="mt-2 break-words font-semibold">{c.value}</p></div></a>)}</div><QuoteForm initialService={service ?? ""} /></section><ContactMap /></>);
}
