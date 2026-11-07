import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";

export function WhatsAppFloat() {
  return (
    <a
      href={COMPANY.whatsappHref}
      target="_blank"
      rel="noreferrer"
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
  }, []);

  const save = (c: Consent) => {
    localStorage.setItem("amj-cookie-consent", JSON.stringify({ ...c, date: new Date().toISOString() }));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl rounded-2xl border border-gold/30 bg-navy p-6 text-primary-foreground shadow-luxe md:right-28"
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
            <button onClick={() => save({ necessary: true, analytics: true, marketing: true })} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-bold text-navy">{t.cookie.accept}</button>
            <button onClick={() => save({ necessary: true, analytics: false, marketing: false })} className="rounded-full border border-primary-foreground/30 px-5 py-2 text-sm font-semibold">{t.cookie.refuse}</button>
            {custom ? (
              <button onClick={() => save({ necessary: true, analytics, marketing })} className="rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold">{t.cookie.save}</button>
            ) : (
              <button onClick={() => setCustom(true)} className="rounded-full px-5 py-2 text-sm font-semibold text-gold underline">{t.cookie.customize}</button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
