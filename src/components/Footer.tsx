import Link from "next/link";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/aydinlatma-metni", label: "Aydınlatma Metni" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { brandName, contact } = siteConfig;

  return (
    <footer className="border-t border-(--border) bg-(--navy-900) text-(--navy-100)">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              {brandName}
            </Link>
            <p className="mt-3 text-sm text-(--navy-300)">
              Su arıtma cihazları ile sağlıklı ve temiz su.
            </p>
            <div className="mt-4">
              <SocialLinks iconClassName="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Sayfalar</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-(--navy-300) transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">İletişim</h3>
            <ul className="mt-4 space-y-2 text-sm text-(--navy-300)">
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Adres</h3>
            <p className="mt-4 text-sm text-(--navy-300)">
              {contact.address}
              <br />
              {contact.city}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-(--navy-700) pt-8 text-center text-sm text-(--navy-400)">
          © {currentYear} {brandName}. Tüm hakları saklıdır. Geliştiren <a href="https://yunusemresogut.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">Yunus Emre Söğüt</a>
        </div>
      </Container>
    </footer>
  );
}
