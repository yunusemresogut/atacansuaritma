# Atacan Su Arıtma Teknolojileri – Su Arıtma Tanıtım Sitesi

Next.js 16, TypeScript ve Tailwind CSS ile oluşturulmuş statik marka tanıtım sitesi. Su arıtma cihazları ürün listesi, hakkımızda ve iletişim sayfaları içerir. Fiyat/satış yok; sadece ürün tanıtımı.

## Özellikler

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**
- Mavi–lacivert tema, responsive, mobil uyumlu
- **Sayfalar:** Ana sayfa, Ürünler, Ürün detay, Hakkımızda, İletişim
- **SEO:** Metadata, sitemap.xml, robots.txt, semantic HTML
- Statik export uyumlu (SPA benzeri client-side navigasyon)

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açın.

## Production build

```bash
npm run build
npm start
```

## Özelleştirme

- **Marka adı:** `Header`, `Footer` ve `layout.tsx` içindeki "Atacan Su Arıtma Teknolojileri" metnini değiştirin; `metadata` içindeki title/description’ı güncelleyin.
- **Ürünler:** `src/data/products.ts` dosyasını düzenleyin. Gerçek ürün görselleri için `public/images/` klasörüne dosya ekleyin (örn. `product-1.jpg`) veya `image` alanında harici URL kullanın (Next.js `images.remotePatterns` gerekebilir).
- **İletişim bilgileri:** `Footer`, `src/app/iletisim/page.tsx` ve `layout.tsx` metadata içindeki telefon, e-posta ve adresi güncelleyin.
- **Site URL (SEO):** `.env.local` içinde `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` tanımlayın.

## Proje yapısı

```
src/
├── app/
│   ├── layout.tsx      # Ana layout, SEO metadata
│   ├── page.tsx        # Ana sayfa
│   ├── urunler/        # Ürün listesi ve [slug] detay
│   ├── hakkimizda/
│   ├── iletisim/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   └── ProductCard.tsx
└── data/
    └── products.ts     # Ürün verisi
```

## Lisans

Özel proje.
