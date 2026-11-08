import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { IMG } from "@/lib/company";
export function Gallery() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);
  const images = [IMG.living, IMG.kitchen, IMG.bathroom, IMG.house, IMG.painting, IMG.construction];
  return <><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{images.map((image, i) => <Button key={image} variant="ghost" className="group relative h-auto overflow-hidden rounded-lg p-0" onClick={() => setSelected(i)} aria-label={t.renovation.gallery[i]}><img src={image} alt={t.renovation.gallery[i]} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 whitespace-normal bg-navy/80 p-4 text-start text-primary-foreground">{t.renovation.gallery[i]}</span></Button>)}</div>
  <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-5xl p-5"><DialogTitle>{t.renovation.gallery[selected ?? 0]}</DialogTitle><img src={images[selected ?? 0]} alt={t.renovation.gallery[selected ?? 0]} className="max-h-[65vh] w-full object-contain" /><div className="flex justify-between"><Button variant="outline" size="icon" aria-label={t.common.before} onClick={() => setSelected(i => ((i ?? 0) + 5) % 6)}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label={t.common.after} onClick={() => setSelected(i => ((i ?? 0) + 1) % 6)}><ChevronRight /></Button><Button variant="ghost" size="icon" aria-label={t.common.close} onClick={() => setSelected(null)}><X /></Button></div></DialogContent></Dialog></>;
}