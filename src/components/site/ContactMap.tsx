import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
export function ContactMap() {
  const { t } = useI18n();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const revoke = () => setAllowed(false);
    window.addEventListener("amj-consent-change", revoke);
    return () => window.removeEventListener("amj-consent-change", revoke);
  }, []);
  return <section className="bg-slate-soft px-6 py-14"><div className="mx-auto max-w-7xl">
    <h2 className="mb-6 font-display text-2xl font-bold">{t.contact.address}</h2>
    {allowed ? <iframe src={COMPANY.mapEmbed} title={`${t.contact.address} — AMJ+ Srl`} className="h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> : <div className="flex min-h-[340px] flex-col items-center justify-center gap-5 border border-border px-6 text-center"><MapPin className="h-10 w-10 text-gold" /><p>{COMPANY.address}</p><p className="max-w-lg text-sm text-muted-foreground">{t.contact.mapNote}</p><Button onClick={() => setAllowed(true)}>{t.contact.mapLoad}</Button></div>}
  </div></section>;
}