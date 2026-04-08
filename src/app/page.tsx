import Link from "next/link";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { SectionDivider } from "@/components/SectionDivider";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary-dark via-primary to-primary-light py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <Container className="relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sağlıklı su, huzurlu yaşam
            </h1>
            <p className="mt-6 text-lg text-(--navy-200) sm:text-xl">
              Ev tipi ve endüstriyel su arıtma cihazları ile musluk suyunuzu
              içme suyu kalitesine yükseltin. Temiz ve güvenli su için
              profesyonel çözümler.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary shadow transition hover:bg-(--navy-50)"
              >
                Ürünleri İncele
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </Container>
      <SectionDivider fill="var(--primary-light)" variant="down" className="absolute bottom-0" />
      </section>


      {/* Öne çıkan ürünler */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Öne Çıkan Ürünler
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              İhtiyacınıza uygun su arıtma cihazlarını keşfedin. Fiyat ve
              satış bilgisi için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/urunler"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Tüm Ürünler
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      <SectionDivider fill="var(--navy-50)" variant="up" />

      {/* CTA */}
      <section className="bg-(--navy-50) py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl bg-primary px-6 py-12 text-center sm:px-12 lg:py-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Su arıtma ihtiyacınız için bize ulaşın
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-(--navy-200)">
              Eviniz veya işletmeniz için en uygun sistemi birlikte
              belirleyelim. Ücretsiz keşif ve bilgi için iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition hover:bg-(--navy-50)"
            >
              İletişim
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
