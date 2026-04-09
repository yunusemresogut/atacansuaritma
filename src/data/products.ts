export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "asus-pompasiz-su-aritma-cihazi",
    name: "Asus Pompasız Su Arıtma Cihazı",
    shortDescription: "Pompasız tasarımı ve yüksek verimli filtrasyon yapısı ile evsel kullanımda güvenli ve sağlıklı içme suyu sağlar.",
    description: "Asus Pompasız Su Arıtma Cihazı, pompasız tasarımı ve yüksek verimli filtrasyon yapısı ile evsel kullanımda güvenli ve sağlıklı içme suyu sağlar.",
    image: "/asus.png",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "60 PSI Basınç Düşürücü", "5 Aşamalı Sistem", "2.2 Galon Metal Basınç Denge Tankı"],
  },
  {
    id: "2",
    slug: "pure-water-dijital-su-aritma-cihazi",
    name: "Pure Water Dijital Su Arıtma Cihazı",
    shortDescription: "Dijital kontrol paneli ve yüksek performanslı filtrasyon yapısı ile evsel kullanımda güvenli ve sağlıklı içme suyu sağlar.",
    description: "Pure Water Dijital Su Arıtma Cihazı, dijital kontrol paneli ve yüksek performanslı filtrasyon yapısı ile evsel kullanımda güvenli ve sağlıklı içme suyu sağlar.",
    image: "/pure-water.jpeg",
    category: "Ev Tipi",
    features: [],
  },
  {
    id: "3",
    slug: "roben-pompasiz-su-aritma-cihazi",
    name: "Roben Pompasız Su Arıtma Cihazı",
    shortDescription: "Pompasız tasarımı ve yüksek verimli filtrasyon yapısı ile evsel kullanımda güvenli ve sağlıklı içme suyu sağlar.",
    description: "Roben Pompasız Su Arıtma Cihazı, pompasız tasarımı ve yüksek verimli filtrasyon yapısı ile evsel kullanımda güvenli ve sağlıklı içme suyu sağlar.",
    image: "/roben-pompasiz.png",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "Basınç Kırıcı ", "3,2 Metal TR Tank", "Quick Fittings"],
  },
  {
    id: "6",
    slug: "stratos-su-aritma-cihazi",
    name: "Stratos Su Arıtma Cihazı",
    shortDescription: "Modern tasarımı ve güvenilir filtrasyon performansı ile evsel kullanımda berrak ve sağlıklı içme suyu sunar.",
    description: "Stratos Su Arıtma Cihazı, modern tasarımı ve güvenilir filtrasyon performansı ile evsel kullanımda berrak ve sağlıklı içme suyu sunar.",
    image: "/stratos.png",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "75 GPD, Yüksek Verimli, Sessiz", "8 lt Metal Tank (2.2 G)"],
  },
  {
    id: "8",
    slug: "aquaglass-su-aritma-cihazi",
    name: "Aquaglass Su Arıtma Cihazı",
    shortDescription: "Şık tasarımı ve etkili filtrasyon aşamalarıyla evsel kullanımda estetik ve performansı bir arada sunar.",
    description: "Aquaglass Su Arıtma Cihazı, şık tasarımı ve etkili filtrasyon aşamalarıyla evsel kullanımda estetik ve performansı bir arada sunar.",
    image: "/aquaglass.jpg",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "75 GPD, Yüksek Verimli, Sessiz", "8 lt Metal Tank (2.2 G)"],
  },
  {
    id: "5",
    slug: "aquabest-su-aritma-cihazi",
    name: "Aquabest Su Arıtma Cihazı",
    shortDescription: "Evsel kullanım için geliştirilmiş, yüksek performanslı filtrasyon yapısı ile güvenli ve kaliteli içme suyu sağlar.",
    description: "Aquabest Su Arıtma Cihazı, evsel kullanım için geliştirilmiş, yüksek performanslı filtrasyon yapısı ile güvenli ve kaliteli içme suyu sağlar.",
    image: "/aquabest.jpg",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "75 GPD, Yüksek Verimli, Sessiz", "8 lt Metal Tank (2.2 G)"],
  },
  {
    id: "4",
    slug: "ecoplus-su-aritma-cihazi",
    name: "Ecoplus Su Arıtma Cihazı",
    shortDescription: "Evsel kullanım için tasarlanmış, yüksek performanslı filtrasyon yapısı ile güvenli ve sağlıklı içme suyu sağlar.",
    description: "Ecoplus Su Arıtma Cihazı, evsel kullanım için tasarlanmış olup 10” housing filtre yapısı ve yüksek verimli membranı sayesinde güvenilir ve sağlıklı içme suyu sağlar.",
    image: "/ecoplus.png",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "75 GPD, Yüksek Verimli, Sessiz", "12 Lt. Metal Tank (3.2 G) – Harici"],
  },
  
  {
    id: "7",
    slug: "ro-300-su-aritma-cihazi",
    name: "RO-300 Su Arıtma Cihazı",
    shortDescription: "300 GPD kapasiteli, pompasız su arıtma cihazı. 5 aşamalı filtrasyon yapısı ile güvenli ve sağlıklı içme suyu sağlar.",
    description: "RO-300 Su Arıtma Cihazı, 300 GPD kapasiteli, pompasız su arıtma cihazı. 5 aşamalı filtrasyon yapısı ile güvenli ve sağlıklı içme suyu sağlar.",
    image: "/ro300.png",
    category: "Endüstriyel",
    features: ["20” Mat Mavi Housing (2 Adet)", "20” Şeffaf Housing (1 Adet)", "20” 5 Mikron Spun (Sediment) Filtre", "12” Post Karbon Coconat", "300 GPD Pompa"],
  },
  {
    id: "9",
    slug: "roben-maxi-su-yumusatma-cihazi",
    name: "Roben Maxi Su Yumuşatma Cihazı",
    shortDescription: "Apartman , Müstakil ve Daire Girişlerine bağlayabileceğiniz otomatik valfli su yumuşatma sistemidir .",
    description: "Apartman , Müstakil ve Daire Girişlerine bağlayabileceğiniz otomatik valfli su yumuşatma sistemidir .",
    image: "/roben-maxi.jpeg",
    category: "Endüstriyel",
    features: ["Otomatik Zamanlayıcı Dijital valf", "Adaptör ( Elektrik Gereksinimi Duyar )", "Reçine tankı", "Şamandıra"],
  },
  {
    id: "10",
    slug: "roben-mini-su-yumusatma-cihazi",
    name: "Roben Mini Su Yumuşatma Cihazı",
    shortDescription: "Su yumuşatma sistemleri, sert suyun neden olduğu sorunları çözmek için çeşitli alanlarda giderek daha fazla tercih edilmektedir.",
    description: "Su yumuşatma sistemleri, sert suyun neden olduğu sorunları çözmek için çeşitli alanlarda giderek daha fazla tercih edilmektedir.",
    image: "/roben-mini.jpg",
    category: "Endüstriyel",
    features: ["Otomatik Zamanlayıcı Dijital valf", "Adaptör ( Elektrik Gereksinimi Duyar )", "Reçine tankı", "Şamandıra"],
  },
  {
    id: "11",
    slug: "mns-su-aritma-cihazi",
    name: "MNS Su Arıtma Cihazı",
    shortDescription: "",
    description: "",
    image: "/mns.png",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "2,2 Metal TR Tank", "Quick Fittings", "Roby 1840 Post Karbon Filtre"],
  },
  {
    id: "12",
    slug: "dj-water-su-aritma-cihazi",
    name: "DJ Water Su Arıtma Cihazı",
    shortDescription: "",
    description: "",
    image: "/dj-water.jpg",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "2,2 Metal TR Tank", "Quick Fittings", "TDS Göstergeli Dijital Ekran"],
  },
  {
    id: "13",
    slug: "orko-su-aritma-cihazi",
    name: "Orko Su Arıtma Cihazı",
    shortDescription: "",
    description: "",
    image: "/orko.png",
    category: "Ev Tipi",
    features: ["Lüks Musluk", "Quick Fittings", "75 Gpd Pompa", "Elektronik Adaptör"],
  },
  {
    id: "14",
    slug: "direk-akis-cihaz",
    name: "Direk Akış 300/500 GPD",
    shortDescription: "",
    description: "",
    image: "/direk-akis.png",
    category: "Endüstriyel",
    features: ["Lüks Musluk", "300/500 Gpd Pompa", "Quick Fittings", "Elektronik Adaptör"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
