import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/amj-logo.png.asset.json";
import { useI18n, LANGS } from "@/lib/i18n";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/centre-affaires", label: t.nav.business },
    { to: "/nettoyage", label: t.nav.cleaning },
    { to: "/renovation", label: t.nav.renovation },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const LangSwitch = () => (
    <div className="flex items-center rounded-full border border-border bg-background p-1">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase transition ${lang === l ? "bg-navy text-primary-foreground" : "text-muted-foreground hover:text-navy"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-light py-2 shadow-luxe" : "bg-background/95 py-3"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="shrink-0">
          <img src={logo.url} alt="AMJ+ Srl" className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="relative text-sm font-semibold text-navy/80 transition hover:text-navy data-[status=active]:text-navy after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full data-[status=active]:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch />
          <Link to="/contact" className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-navy shadow-gold transition hover:-translate-y-0.5">
            {t.nav.cta}
          </Link>
        </div>
        <button className="text-navy lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-background lg:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-lg font-semibold text-navy">{l.label}</Link>
              ))}
              <LangSwitch />
              <Link to="/contact" onClick={() => setOpen(false)} className="rounded-full bg-gradient-gold px-5 py-3 text-center font-bold text-navy">{t.nav.cta}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
