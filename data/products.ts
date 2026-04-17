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
      id: "signature-trench",
      name: "The Obsidian Trench",
      subName: "Tailored to perfection.",
      price: "$1,250",
      description: "Water-Resistant - Italian Wool - Structural Silhouette",
      folderPath: "/images/model",
      themeColor: "#2F2F2F",
      gradient: "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)",
      features: ["Italian Wool", "Water-Resistant", "Hand-Stitched Details"],
      stats: [{ label: "Wool", val: "90%" }, { label: "Cashmere", val: "10%" }, { label: "Weight", val: "850g" }],
      section1: { title: "Uncompromising Elegance.", subtitle: "The ultimate outerwear staple." },
      section2: { title: "Drape and Structure.", subtitle: "Designed to provide a sharp silhouette while retaining effortless fluidity." },
      section3: { title: "Woven in Biella, Italy.", subtitle: "Crafted from premium virgin wool for unmatched insulation and breathability." },
      section4: { title: "A timeless investment.", subtitle: "" },
      detailsSection: {
          title: "Architectural Design",
          description: "The Obsidian Trench is born from a desire to merge architectural rigidity with the fluid dynamics of the human body. Every seam is calculated, every button specifically placed to ensure a flattering line that withstands the test of shifting trends.",
          imageAlt: "Trench Coat Details"
      },
      freshnessSection: {
          title: "Sartorial Excellence",
          description: "Our garments are not made on assembly lines. Each piece requires 40 hours of meticulous craftsmanship. The result is a coat that molds to your shape over time, becoming more uniquely yours with each wear."
      },
      buyNowSection: {
          price: "$1,250",
          unit: "USD",
          processingParams: ["Bespoke Tailoring", "Lifetime Warranty", "Complimentary Alterations"],
          deliveryPromise: "Dispatched within 24 hours. Express global shipping included.",
          returnPolicy: "Complimentary returns within 30 days. Home collection available."
      }
  },
  {
      id: "silk-slip",
      name: "Midnight Silk Dress",
      subName: "Fluid sensuality.",
      price: "$890",
      description: "100% Mulberry Silk - Bias Cut - Asymmetric Hem",
      folderPath: "/images/model",
      themeColor: "#4B0082",
      gradient: "linear-gradient(135deg, #2A0845 0%, #6441A5 100%)",
      features: ["Mulberry Silk", "Bias Cut", "Breathable Fabric"],
      stats: [{ label: "Silk", val: "100%" }, { label: "Momme", val: "22" }, { label: "Weight", val: "Light" }],
      section1: { title: "Midnight Silk.", subtitle: "Fluid sensuality." },
      section2: { title: "A second skin.", subtitle: "Cut on the bias to perfectly trace the natural curves of the body." },
      section3: { title: "Nocturnal allure.", subtitle: "A deep, rich violet hue that catches the light and turns heads." },
      section4: { title: "Confidence in motion.", subtitle: "" },
      detailsSection: {
          title: "The Bias Cut Mastery",
          description: "Cutting fabric on the bias is an art form. It allows the silk to stretch and mold dynamically without the need for elastane or stiff tailoring. The Midnight Silk Dress moves entirely in sync with you, offering unparalleled comfort and devastating elegance.",
          imageAlt: "Silk Dress Details"
      },
      freshnessSection: {
          title: "Ethically Spun",
          description: "We use only organic, peace silk. Sourced from farms that allow the silkmoth to emerge naturally, our silk is not only luxurious but cruelty-free, reflecting our commitment to conscious luxury."
      },
      buyNowSection: {
          price: "$890",
          unit: "USD",
          processingParams: ["Peace Silk", "Hand Finished", "Dry Clean Recommended"],
          deliveryPromise: "Delivered in signature protective garment bag.",
          returnPolicy: "Must be returned unworn with security tags intact."
      }
  },
  {
      id: "cashmere-knit",
      name: "Cloud Knit Sweater",
      subName: "Absolute comfort.",
      price: "$600",
      description: "Pure Cashmere - Oversized Fit - Ribbed Trims",
      folderPath: "/images/model",
      themeColor: "#D3C5B5",
      gradient: "linear-gradient(135deg, #EBE6E0 0%, #D3C5B5 100%)",
      features: ["Pure Cashmere", "Oversized Fit", "Thermoregulating"],
      stats: [{ label: "Cashmere", val: "100%" }, { label: "Ply", val: "4-Ply" }, { label: "Warmth", val: "High" }],
      section1: { title: "Cloud Knit.", subtitle: "Absolute comfort." },
      section2: { title: "Tactile perfection.", subtitle: "Softer than a cloud, warm enough for the harshest winters." },
      section3: { title: "Minimalist luxury.", subtitle: "Undyed, natural hues for an earthy, understated aesthetic." },
      section4: { title: "Elevated everyday.", subtitle: "" },
      detailsSection: {
          title: "Four-Ply Warmth",
          description: "While most standard cashmere sweaters use two-ply yarn, our Cloud Knit utilizes four-ply construction. This doubles the density, dramatically increasing longevity and insulating power while miraculously retaining a weightless feel.",
          imageAlt: "Cashmere Details"
      },
      freshnessSection: {
          title: "Nomadic Origins",
          description: "Sourced directly from herders in the high plateaus of Inner Mongolia. By bypassing intermediaries, we ensure the highest quality raw fiber and guarantee fair compensation for the communities that nurture these extraordinary animals."
      },
      buyNowSection: {
          price: "$600",
          unit: "USD",
          processingParams: ["Undyed Fiber", "Pilling Resistant", "Sustainable Sourcing"],
          deliveryPromise: "Wrapped in acid-free tissue. Arrives in 2-4 business days.",
          returnPolicy: "Fully refundable within 14 days."
      }
  }
];
