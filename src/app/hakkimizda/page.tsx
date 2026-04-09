import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Atacan Su Arıtma Teknolojileri olarak su arıtma sektöründe kalite ve güveni ön planda tutuyoruz. Misyonumuz ve değerlerimiz hakkında bilgi edinin.",
};

const values = [
  {
    title: "Kalite",
    description: "Tüm ürün ve hizmetlerimizde en yüksek kalite standartlarını hedefliyoruz.",
  },
  {
    title: "Güven",
    description: "Müşteri memnuniyeti ve güveni, işimizin temel taşıdır.",
  },
  {
    title: "Sürdürülebilirlik",
    description: "Su kaynaklarının korunması ve verimli kullanımı için çözümler sunuyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Hakkımızda</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Atacan Su Arıtma Teknolojileri olarak, evlerden işletmelere ve endüstriyel tesislere kadar her ölçekte temiz ve güvenli su
            ihtiyacına yanıt veren su arıtma çözümleri sunuyoruz.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Yılların deneyimi ve sektördeki güncel teknolojileri bir araya getirerek, müşterilerimize en uygun cihazı
            seçmelerinde yardımcı oluyoruz. Ürünlerimiz sadece satışla sınırlı kalmıyor; kurulum, bakım ve filtre
            değişimi konularında da destek sağlıyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-(--border) bg-(--card-bg) p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
              <p className="mt-3 text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-(--navy-50) p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-foreground">Neden Atacan Su Arıtma Teknolojileri?</h2>
          <ul className="mt-6 space-y-4 text-muted">
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              Geniş ürün yelpazesi ile ev tipi, kurumsal ve endüstriyel ihtiyaçlara çözüm
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              Deneyimli teknik ekip ve satış sonrası destek
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              Kaliteli filtre ve yedek parça temini
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              Müşteri ihtiyacına özel proje ve danışmanlık
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
