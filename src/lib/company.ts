import cleaningBeforeAsset from "@/assets/cleaning-before.jpg.asset.json";
import renovationBeforeAsset from "@/assets/renovation-before.jpg.asset.json";
import heroAsset from "@/assets/hero.jpg.asset.json";
import officeAsset from "@/assets/office.jpg.asset.json";
import office2Asset from "@/assets/office2.jpg.asset.json";
import cleaningAsset from "@/assets/cleaning.jpg.asset.json";
import cleaning2Asset from "@/assets/cleaning2.jpg.asset.json";
import constructionAsset from "@/assets/construction.jpg.asset.json";
import houseAsset from "@/assets/house.jpg.asset.json";
import kitchenAsset from "@/assets/kitchen.jpg.asset.json";
import bathroomAsset from "@/assets/bathroom.jpg.asset.json";
import livingAsset from "@/assets/living.jpg.asset.json";
import paintingAsset from "@/assets/painting.jpg.asset.json";
import meetingAsset from "@/assets/meeting.jpg.asset.json";
export const COMPANY = {
  name: "AMJ+ Srl",
  vat: "BE 1027.549.902",
  address: "Bergensesteenweg 423 A bte 13, 1600 Sint-Pieters-Leeuw",
  country: { fr: "Belgique", nl: "België", en: "Belgium", ar: "بلجيكا" },
  manager: "Kabbani Maha",
  phoneDisplay: "0496 34 98 89",
  phoneIntl: "+32 496 34 98 89",
  phoneHref: "tel:+32496349889",
  whatsappDisplay: "0487 33 49 09",
  whatsappHref: "https://wa.me/32487334909",
  email: "Amjplus2025@gmail.com",
  emailHref: "mailto:Amjplus2025@gmail.com",
  mapEmbed:
    "https://www.google.com/maps?q=Bergensesteenweg+423+A,+1600+Sint-Pieters-Leeuw,+Belgium&output=embed",
};


export const assetUrl = (url: string) => import.meta.env["VITE_STATIC_PAGES"] === "true" && url.startsWith("/") ? `.${url}` : url;

export const IMG = {
  cleaningBefore: assetUrl(cleaningBeforeAsset.url),
  renovationBefore: assetUrl(renovationBeforeAsset.url),
  hero: assetUrl(heroAsset.url),
  office: assetUrl(officeAsset.url),
  office2: assetUrl(office2Asset.url),
  cleaning: assetUrl(cleaningAsset.url),
  cleaning2: assetUrl(cleaning2Asset.url),
  construction: assetUrl(constructionAsset.url),
  house: assetUrl(houseAsset.url),
  kitchen: assetUrl(kitchenAsset.url),
  bathroom: assetUrl(bathroomAsset.url),
  living: assetUrl(livingAsset.url),
  painting: assetUrl(paintingAsset.url),
  meeting: assetUrl(meetingAsset.url),
};
