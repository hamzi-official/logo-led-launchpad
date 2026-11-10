import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function Gallery({ images, labels }: { images: string[]; labels: string[] }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);
  const count = images.length;
  const current = selected ?? 0;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <Button
            key={image}
            variant="ghost"
            className="group relative h-auto overflow-hidden rounded-lg p-0 shadow-sm"
            onClick={() => setSelected(index)}
            aria-label={labels[index]}
          >
            <img
              src={image}
              alt={labels[index]}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 whitespace-normal bg-navy/80 p-4 text-start text-primary-foreground">
              {labels[index]}
            </span>
          </Button>
        ))}
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="max-w-5xl p-5">
          <DialogTitle>{labels[current]}</DialogTitle>
          <img src={images[current]} alt={labels[current]} className="max-h-[65vh] w-full object-contain" />
          <div className="flex justify-between">
            <Button variant="outline" size="icon" aria-label={t.common.before} onClick={() => setSelected((current - 1 + count) % count)}><ChevronLeft /></Button>
            <Button variant="outline" size="icon" aria-label={t.common.after} onClick={() => setSelected((current + 1) % count)}><ChevronRight /></Button>
            <Button variant="ghost" size="icon" aria-label={t.common.close} onClick={() => setSelected(null)}><X /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
