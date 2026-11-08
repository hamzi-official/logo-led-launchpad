import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { canSendQuote, quoteLinks, type Quote } from "@/lib/quote";

export function QuoteForm({ initialService = "" }: { initialService?: string }) {
  const { t } = useI18n();
  const [q, setQ] = useState<Quote>({ name: "", phone: "", email: "", service: initialService, message: "", consent: false });
  const [error, setError] = useState(false);
  useEffect(() => { setQ(previous => ({ ...previous, service: initialService })); }, [initialService]);
  const services = [...t.business.services, ...t.cleaning.services, ...t.renovation.services];
  const update = (key: keyof Quote, value: string | boolean) => setQ(previous => ({ ...previous, [key]: value }));
  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSendQuote(q)) { setError(true); return; }
    setError(false);
    const links = quoteLinks(q, t.contact.msgIntro, t.contact, t.contact.formTitle);
    const channel = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");
    if (channel === "email") window.location.href = links.email;
    else window.open(links.whatsapp, "_blank", "noopener,noreferrer");
  };
  const fieldClass = "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  return <form onSubmit={send} className="space-y-6">
    <h2 className="font-display text-3xl font-bold">{t.contact.formTitle}</h2>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">{t.contact.name} *<input name="name" autoComplete="name" required value={q.name} onChange={e => update("name", e.target.value)} className={fieldClass} /></label>
      <label className="text-sm font-semibold">{t.contact.phoneField} *<input name="phone" type="tel" autoComplete="tel" required value={q.phone} onChange={e => update("phone", e.target.value)} className={fieldClass} /></label>
      <label className="text-sm font-semibold">{t.contact.emailField}<input name="email" type="email" autoComplete="email" value={q.email} onChange={e => update("email", e.target.value)} className={fieldClass} /></label>
      <label className="text-sm font-semibold">{t.contact.service}<select name="service" value={q.service} onChange={e => update("service", e.target.value)} className={fieldClass}><option value="">{t.contact.choose}</option>{q.service && !services.some(s => s.title === q.service) && <option>{q.service}</option>}{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
    </div>
    <label className="block text-sm font-semibold">{t.contact.message}<textarea name="message" rows={5} value={q.message} onChange={e => update("message", e.target.value)} className={fieldClass} /></label>
    <label className="flex items-start gap-3 text-sm leading-relaxed"><input type="checkbox" required checked={q.consent} onChange={e => update("consent", e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-gold" /><span>{t.contact.gdpr} <Link to="/politique-de-confidentialite" className="text-royal underline">{t.footer.privacy}</Link></span></label>
    {error && <p role="alert" className="text-destructive">{t.contact.required}</p>}
    <div className="flex flex-wrap gap-3"><Button type="submit" value="whatsapp" size="lg" className="h-auto whitespace-normal bg-gradient-gold py-3 text-navy"><MessageCircle />{t.contact.sendWa}</Button><Button type="submit" value="email" size="lg" variant="outline" className="h-auto whitespace-normal py-3"><Mail />{t.contact.sendMail}</Button></div>
  </form>;
}