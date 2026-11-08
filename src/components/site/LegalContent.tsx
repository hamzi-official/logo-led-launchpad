import { COMPANY } from "@/lib/company";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
export function LegalContent({ privacy = false }: { privacy?: boolean }) {
  const { t, lang } = useI18n();
  const labels = t.legal.labels;
  const rows = [[labels.company, COMPANY.name], [labels.vat, COMPANY.vat], [labels.seat, `${COMPANY.address}, ${COMPANY.country[lang]}`], [labels.manager, COMPANY.manager], [labels.email, COMPANY.email], [labels.phone, COMPANY.phoneIntl]];
  const sections = privacy ? t.privacy.sections : t.legal.sections;
  return <section className="mx-auto max-w-4xl px-6 py-16"><dl className="mb-12 divide-y divide-border border-y border-border">{rows.map(([label, value]) => <div key={label} className="grid gap-2 py-4 sm:grid-cols-[200px_1fr]"><dt className="font-semibold">{label}</dt><dd className="break-words">{value}</dd></div>)}</dl>
    <div className="space-y-9">{sections.map(s => <article key={s.title}><h2 className="font-display text-xl font-bold">{s.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p></article>)}{privacy && t.privacy.extra.map(s => <article key={s.title}><h2 className="font-display text-xl font-bold">{s.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p></article>)}</div>
    {privacy && <div className="mt-10 border-t border-border pt-8"><p>{t.privacy.contactLine} <a href={COMPANY.emailHref} className="break-all text-royal underline">{COMPANY.email}</a></p><a href="https://www.autoriteprotectiondonnees.be/" target="_blank" rel="noreferrer" className="mt-4 block text-royal underline">{t.privacy.authority}</a><Button className="mt-5" variant="outline" onClick={() => window.dispatchEvent(new Event("amj-consent-settings"))}>{t.cookie.customize}</Button></div>}
  </section>;
}