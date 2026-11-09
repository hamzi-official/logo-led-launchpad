import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";

export function WhatsAppFloat() {
  return (
    <a
      href={COMPANY.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-navy shadow-gold transition hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-gold animate-pulse-ring" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}

type Consent = { necessary: true; analytics: boolean; marketing: boolean };

export function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("amj-cookie-consent")) setShow(true);
    const openSettings = () => {
      try {
        const saved = JSON.parse(localStorage.getItem("amj-cookie-consent") ?? "null") as Consent | null;
        setAnalytics(saved?.analytics === true);
        setMarketing(saved?.marketing === true);
      } catch { setAnalytics(false); setMarketing(false); }
      setCustom(true); setShow(true);
    };
    window.addEventListener("amj-consent-settings", openSettings);
    return () => window.removeEventListener("amj-consent-settings", openSettings);
  }, []);

  const save = (c: Consent) => {
    localStorage.setItem("amj-cookie-consent", JSON.stringify({ ...c, date: new Date().toISOString() }));
    window.dispatchEvent(new Event("amj-consent-change"));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}
          role="dialog" aria-label={t.cookie.policy} className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-h-[75svh] max-w-4xl overflow-y-auto rounded-lg border border-gold/30 bg-navy p-6 text-primary-foreground shadow-luxe md:right-28"
        >
          <p className="text-sm leading-relaxed text-primary-foreground/85">
            {t.cookie.text}{" "}
            <Link to="/politique-de-confidentialite" className="font-semibold text-gold underline">{t.cookie.policy}</Link>
          </p>
          {custom && (
            <div className="mt-4 space-y-2 text-sm">
              <label className="flex items-center gap-3 opacity-70"><input type="checkbox" checked disabled className="accent-gold" />{t.cookie.necessary}</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="accent-gold" />{t.cookie.analytics}</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="accent-gold" />{t.cookie.marketing}</label>
            </div>
          )}
          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={() => save({ necessary: true, analytics: true, marketing: true })} className="bg-gradient-gold text-navy">{t.cookie.accept}</Button>
            <Button variant="outline" onClick={() => save({ necessary: true, analytics: false, marketing: false })} className="border-primary-foreground/30 bg-transparent text-primary-foreground">{t.cookie.refuse}</Button>
            {custom ? (
              <Button variant="outline" onClick={() => save({ necessary: true, analytics, marketing })} className="border-gold bg-transparent text-gold">{t.cookie.save}</Button>
            ) : (
              <Button variant="link" onClick={() => setCustom(true)} className="text-gold">{t.cookie.customize}</Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
