import logoAsset from "@/assets/amj-logo.png.asset.json";
import { assetUrl } from "@/lib/company";

export function BrandLogo({ light = false }: { light?: boolean }) {
  const image = (
    <img
      src={assetUrl(logoAsset.url)}
      alt="AMJ+ Srl"
      className="h-14 w-auto object-contain mix-blend-multiply"
    />
  );

  return light ? (
    <div className="inline-flex rounded-xl bg-white px-4 py-2 shadow-sm">{image}</div>
  ) : (
    image
  );
}
