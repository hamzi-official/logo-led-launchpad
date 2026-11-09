import { useEffect, useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Reveal } from "./Motion";
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
  const destination = "Bergensesteenweg 423 A 1600 Sint-Pieters-Leeuw Belgium";
  return <section className="bg-slate-soft px-6 py-16"><div className="mx-auto max-w-7xl">
    <h2 className="mb-8 font-display text-3xl font-bold">{t.contact.locationTitle}</h2>
    <div className="relative">
    {allowed ? <iframe src={COMPANY.mapEmbed} title={`${t.contact.address} — AMJ+ Srl`} className="h-[520px] w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="flex min-h-[380px] flex-col items-center justify-center gap-5 border border-border px-6 text-center"><MapPin className="h-10 w-10 text-gold" /><p>{COMPANY.address}</p><p className="max-w-lg text-sm text-muted-foreground">{t.contact.mapNote}</p><Button onClick={() => setAllowed(true)}>{t.contact.mapLoad}</Button></div>}
    <Reveal className="glass-light relative mt-5 max-w-lg rounded-lg border border-gold/30 p-6 shadow-luxe md:absolute md:end-6 md:bottom-6 md:mt-0">
      <div className="flex items-start gap-4"><span className="relative mt-1 text-gold"><span className="absolute inset-0 rounded-full border border-gold animate-pulse-ring" /><MapPin className="h-8 w-8" /></span><div><h3 className="text-lg font-bold">AMJ+ Srl</h3><p className="mt-1 text-sm leading-relaxed">{COMPANY.address}</p></div></div><p className="my-5 text-sm font-semibold text-royal">{t.contact.distance}</p><div className="flex flex-wrap gap-3"><Button asChild className="h-auto whitespace-normal bg-gradient-gold py-3 text-navy"><a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`} target="_blank" rel="noopener noreferrer"><Navigation />{t.contact.directions}</a></Button><Button asChild variant="outline" className="h-auto whitespace-normal py-3"><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address + " Belgium")}`} target="_blank" rel="noopener noreferrer"><ExternalLink />{t.contact.openMap}</a></Button></div>
    </Reveal></div>
  </div></section>;
}