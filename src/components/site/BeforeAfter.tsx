import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function BeforeAfter({ image, beforeImage, diptych = false }: { image: string; beforeImage?: string; diptych?: boolean }) {
  const { t } = useI18n();
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      dir="ltr"
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-lg shadow-luxe"
      onPointerDown={(e) => { dragging.current = true; move(e.clientX); }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img src={image} alt={t.common.after} loading="lazy" className={`absolute inset-y-0 h-full max-w-none object-cover ${diptych ? "right-0 w-[200%]" : "inset-x-0 w-full"}`} draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={beforeImage ?? image}
          alt={t.common.before}
          className={`absolute inset-y-0 h-full max-w-none object-cover ${diptych ? "left-0 w-[200%]" : "inset-x-0 w-full"}`}
          loading="lazy"
          style={beforeImage ? undefined : { filter: "grayscale(0.85) sepia(0.45) brightness(0.62) contrast(0.85) blur(1px)" }}
          draggable={false}
        />
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-navy/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">{t.common.before}</span>
      <span className="absolute top-4 right-4 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy">{t.common.after}</span>
      <div className="absolute inset-y-0 w-1 bg-gold" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy shadow-gold">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${t.common.before} / ${t.common.after}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
