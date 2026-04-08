import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // const imageSrc = product.image.startsWith("http")
  //   ? product.image
  //   : undefined;
  const imageSrc = product.image ? product.image : undefined;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--card-bg) shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/urunler/${product.slug}`} className="flex flex-col flex-1">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-[--navy-100]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary to-primary-dark"
              aria-hidden
            >
              <svg
                className="h-16 w-16 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          )}
          <span className="absolute right-3 top-3 rounded-full bg-(--primary)/90 px-2 py-0.5 text-xs font-medium text-white">
            {product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
            {product.name}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-muted">
            {product.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
            Detayları gör
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
