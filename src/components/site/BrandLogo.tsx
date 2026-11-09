export function BrandLogo({ light = false }: { light?: boolean }) {
  return <svg direction="ltr" viewBox="0 0 300 74" role="img" aria-label="AMJ+ Srl" className={`h-12 w-auto md:h-14 ${light ? "text-primary-foreground" : "text-navy"}`} xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"><path d="M7 64V26L24 18V64M24 64V10L44 3V64M44 64V29L61 21V64M2 65H67" /><path d="M12 33h7m-7 8h7m-7 8h7m-7 8h7M30 19h8m-8 9h8m-8 9h8m-8 9h8m-8 9h8M49 36h7m-7 9h7m-7 9h7" /></g>
    <path d="M24 10L44 3M2 65H67" fill="none" className="stroke-gold" strokeWidth="3" />
    <text x="79" y="51" fill="currentColor" fontFamily="Montserrat, sans-serif" fontSize="45" fontWeight="800">AMJ</text><text x="185" y="50" className="fill-gold" fontFamily="Montserrat, sans-serif" fontSize="43" fontWeight="700">+</text><text x="223" y="50" fill="currentColor" fontFamily="Montserrat, sans-serif" fontSize="28" fontWeight="600">Srl</text>
  </svg>;
}