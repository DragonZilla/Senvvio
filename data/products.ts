export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  detailsSection: { title: string; description: string; imageAlt: string };
  freshnessSection: { title: string; description: string };
  buyNowSection: {
      price: string;
      unit: string;
      processingParams: string[];
      deliveryPromise: string;
      returnPolicy: string;
  };
}

export const products: Product[] = [
  {
      id: "hamilton-44-classic",
      name: "Hamilton 44 Tee",
      subName: "Built for champions.",
      price: "45 CHF",
      description: "Heavyweight Cotton - Boxy Fit - Exclusive Artwork",
      folderPath: "/images/model",
      themeColor: "#DF2424",
      gradient: "linear-gradient(135deg, #111111 0%, #2A0808 100%)",
      features: ["Heavyweight Cotton", "Drop Shoulder", "High-Density Print"],
      stats: [{ label: "Cotton", val: "100%" }, { label: "Weight", val: "280GSM" }, { label: "Fit", val: "Boxy" }],
      section1: { title: "Unapologetic Speed.", subtitle: "A tribute to a legend." },
      section2: { title: "Bold. Loud. 44.", subtitle: "Featuring the iconic number 44 on the chest in a stark, collegiate outline." },
      section3: { title: "Museum-grade artwork.", subtitle: "The back features a stunning, thick oil-paint style graphic of Lewis Hamilton in his element." },
      section4: { title: "Streetwear meets the grid.", subtitle: "" },
      detailsSection: {
          title: "Premium Construction",
          description: "This isn't your average merch. Constructed from 280GSM ultra-heavyweight cotton, this piece drapes perfectly over the shoulders to create the ultimate modern boxy silhouette. The vibrant red graphics are applied using a specialized high-density screen printing technique that won't crack or fade over time.",
          imageAlt: "Hamilton 44 Back Graphic"
      },
      freshnessSection: {
          title: "Limited Drop",
          description: "The artwork on the back captures the relaxed confidence of a 7-time World Champion. Printed in limited runs strictly to maintain exclusivity. Once a size runs out, it's gone for the season."
      },
      buyNowSection: {
          price: "45 CHF",
          unit: "CHF",
          processingParams: ["Exclusive Oil Paint Graphic", "Pre-Shrunk", "True to Size"],
          deliveryPromise: "Worldwide shipping. Dispatched from Switzerland within 48 hours.",
          returnPolicy: "Free exchanges within 14 days if the tags are attached."
      }
  }
];
