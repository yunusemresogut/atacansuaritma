import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Aydınlatma Metni",
  description: "Aydınlatma Metni",
};

export default function AydinlatmaMetniPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <article className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Aydınlatma Metni</h1>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla Atacan
            Su Arıtma Teknolojileri olarak kişisel verileriniz, aşağıda açıklanan kapsamda işlenebilecektir.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. İşlenen Kişisel Veriler</h2>
            <p className="text-base leading-relaxed text-muted">
              Web sitemizi ziyaret etmeniz veya WhatsApp üzerinden bizimle iletişime geçmeniz halinde aşağıdaki veriler
              işlenebilir:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base leading-relaxed text-muted">
              <li>IP adresi</li>
              <li>Tarayıcı ve cihaz bilgileri</li>
              <li>WhatsApp üzerinden tarafınızca paylaşılan iletişim bilgileri</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-base leading-relaxed text-muted">Toplanan veriler aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc space-y-1 pl-6 text-base leading-relaxed text-muted">
              <li>Ürün ve hizmetler hakkında bilgi verilmesi</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
              <li>Talep ve soruların cevaplanması</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Verilerin Aktarılması</h2>
            <p className="text-base leading-relaxed text-muted">
              Kişisel verileriniz, iletişim altyapısının gereklilikleri doğrultusunda ve yasal yükümlülükler kapsamında
              aşağıdaki taraflarla paylaşılabilir:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base leading-relaxed text-muted">
              <li>WhatsApp iletişim altyapısı nedeniyle yurt dışındaki sunucular</li>
              <li>Yetkili kamu kurum ve kuruluşları</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Hukuki Sebep</h2>
            <p className="text-base leading-relaxed text-muted">
              Kişisel verileriniz KVKK madde 5/2 kapsamında, iletişim faaliyetlerinin yürütülmesi ve veri sorumlusunun
              meşru menfaatleri doğrultusunda işlenmektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Haklarınız</h2>
            <p className="text-base leading-relaxed text-muted">
              KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base leading-relaxed text-muted">
              <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Verilerinizin düzeltilmesini isteme</li>
              <li>Verilerinizin silinmesini veya yok edilmesini talep etme</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Değişiklikler</h2>
            <p className="text-base leading-relaxed text-muted">
              Bu aydınlatma metni gerektiğinde güncellenebilir. Güncel metin web sitemiz üzerinden yayınlandığı tarihte
              yürürlüğe girer.
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}