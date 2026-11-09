import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/company";

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <BrandLogo light />
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">{t.slogan}</p>
          <p className="mt-4 text-xs font-semibold text-gold">BCE / KBO / TVA: {COMPANY.vat}</p>
        </div>
        <div>
          <h4 className="mb-5 font-display text-lg font-bold text-gold">{t.footer.nav}</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/centre-affaires" className="hover:text-gold">{t.nav.business}</Link></li>
            <li><Link to="/nettoyage" className="hover:text-gold">{t.nav.cleaning}</Link></li>
            <li><Link to="/renovation" className="hover:text-gold">{t.nav.renovation}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-display text-lg font-bold text-gold">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" />{COMPANY.address}, {COMPANY.country[lang]}</li>
            <li><a href={COMPANY.phoneHref} className="flex gap-3 hover:text-gold"><Phone className="h-4 w-4 text-gold" /><span dir="ltr">{COMPANY.phoneDisplay}</span></a></li>
            <li><a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold"><MessageCircle className="h-4 w-4 text-gold" /><span dir="ltr">{COMPANY.whatsappDisplay}</span></a></li>
            <li><a href={COMPANY.emailHref} className="flex gap-3 hover:text-gold"><Mail className="h-4 w-4 text-gold" />{COMPANY.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name} — {t.footer.rights}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/mentions-legales" className="hover:text-gold">{t.footer.legal}</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-gold">{t.footer.privacy}</Link>
          <Button variant="link" className="h-auto p-0 text-xs text-primary-foreground/60" onClick={() => window.dispatchEvent(new Event("amj-consent-settings"))}>{t.cookie.customize}</Button></div>
        </div>
      </div>
    </footer>
  );
}
