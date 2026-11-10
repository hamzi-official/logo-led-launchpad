import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function BeforeAfter({ image }: { image: string }) {
  const { t } = useI18n();
  const [sliderPosition, setSliderPosition] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    setSliderPosition(Math.min(100, Math.max(0, ((clientX - bounds.left) / bounds.width) * 100)));
  };

  return (
    <div
      ref={ref}
      dir="ltr"
      data-before-after
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-lg shadow-luxe focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-4"
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        dragging.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        move(event.clientX);
      }}
      onPointerMove={(event) => dragging.current && move(event.clientX)}
      onPointerUp={(event) => {
        dragging.current = false;
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => { dragging.current = false; }}
    >
      <img
        src={image}
        alt={t.common.after}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(1.05) brightness(1.04)" }}
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img
          src={image}
          alt={t.common.before}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "grayscale(0.82) sepia(0.12) brightness(0.68) contrast(0.9)" }}
          draggable={false}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
        <div aria-hidden="true" className="before-dust absolute inset-0" />
        <div aria-hidden="true" className="before-grid absolute inset-0" />
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">{t.common.before}</span>
      <span className="absolute right-4 top-4 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy">{t.common.after}</span>
      <div aria-hidden="true" className="absolute inset-y-0 w-1 bg-gold" style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy shadow-gold">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPosition}
        onChange={(event) => setSliderPosition(Number(event.target.value))}
        aria-label={`${t.common.before} / ${t.common.after}`}
        className="pointer-events-none absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
