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
    "https://www.google.com/maps?q=Bergensesteenweg+423A,+1600+Sint-Pieters-Leeuw,+Belgium&output=embed",
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("photo-1486406146926-c627a92ad1ab", 2000),
  office: u("photo-1497366216548-37526070297c"),
  office2: u("photo-1497366811353-6870744d04b2"),
  cleaning: u("photo-1581578731548-c64695cc6952"),
  cleaning2: u("photo-1527515637462-cff94eecc1ac"),
  construction: u("photo-1503387762-592deb58ef4e"),
  house: u("photo-1600585154340-be6161a56a0c"),
  kitchen: u("photo-1556909114-f6e7ad7d3136"),
  bathroom: u("photo-1552321554-5fefe8c9ef14"),
  living: u("photo-1600210492486-724fe5c67fb0"),
  painting: u("photo-1589939705384-5185137a7f0f"),
  meeting: u("photo-1556761175-5973dc0f32e7"),
};
