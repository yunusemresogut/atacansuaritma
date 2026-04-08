import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Ev tipi, kurumsal ve endüstriyel su arıtma cihazları. Reverse osmoz, UV sterilizasyon ve alkali su sistemleri. Tüm ürünlerimizi inceleyin.",
};

export default function UrunlerPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Su Arıtma Cihazları
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Ev, iş yeri ve endüstriyel kullanım için su arıtma ürünlerimiz.
            Fiyat ve satış bilgisi için iletişim sayfamızdan bize ulaşabilirsiniz.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
