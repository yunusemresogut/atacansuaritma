import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Atacan Suarıtma Teknolojileri ile iletişime geçin. Ürün bilgisi, fiyat teklifi ve teknik destek için bizi arayın veya mesaj gönderin.",
};

export default function IletisimPage() {
  const { contact, googleMapsEmbedUrl } = siteConfig;

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            İletişim
          </h1>
          <p className="mt-4 text-lg text-muted">
            Ürünlerimiz, fiyat bilgisi veya teknik destek için bize ulaşın. En
            kısa sürede size dönüş yapacağız.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Telefon
              </h2>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg font-medium text-foreground hover:text-accent"
              >
                {contact.phone}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                E-posta
              </h2>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-lg font-medium text-foreground hover:text-accent"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Adres
              </h2>
              <p className="mt-2 text-lg text-foreground">
                {contact.address}
                <br />
                {contact.city}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Çalışma saatleri
              </h2>
              <p className="mt-2 whitespace-pre-line text-foreground">
                {contact.workingHours}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Bizi takip edin
              </h2>
              <div className="mt-3">
                <SocialLinks variant="light" iconClassName="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-(--border) shadow-sm">
            <div className="relative w-full aspect-square">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atacan Suarıtma Teknolojileri konum haritası"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
