import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Gizlilik Politikası",
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <article className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Gizlilik Politikası</h1>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Atacan Su Arıtma Teknolojileri olarak kullanıcı gizliliğine önem veriyoruz. Bu politika, web sitemizi
            ziyaret ettiğinizde kişisel verilerinize ilişkin temel yaklaşımımızı açıklamaktadır.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Toplanan Bilgiler</h2>
            <p className="text-base leading-relaxed text-muted">
              Web sitemiz üzerinde doğrudan form aracılığıyla veri toplanmamaktadır. Ancak WhatsApp üzerinden bizimle
              iletişime geçtiğinizde paylaştığınız iletişim bilgileri ve mesaj içerikleri ilgili platform üzerinden
              işlenebilir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Üçüncü Taraf Hizmetler</h2>
            <p className="text-base leading-relaxed text-muted">
              Web sitemizde yer alan WhatsApp butonu aracılığıyla kullanıcılar üçüncü taraf bir hizmete
              yönlendirilmektedir. Bu süreçte ilgili platformun kendi kullanım koşulları ve gizlilik politikası geçerli
              olur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Veri Güvenliği</h2>
            <p className="text-base leading-relaxed text-muted">
              Kullanıcı verilerinin güvenliği için makul teknik ve idari önlemler alınmaktadır. Buna rağmen internet
              üzerinden gerçekleştirilen veri iletimlerinin mutlak güvenliği garanti edilememektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Saklama ve İşleme Süresi</h2>
            <p className="text-base leading-relaxed text-muted">
              Kişisel veriler, işleme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen yasal saklama
              süreleri kadar muhafaza edilir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Değişiklikler</h2>
            <p className="text-base leading-relaxed text-muted">
              Bu gizlilik politikası gerektiğinde güncellenebilir. Güncel versiyon web sitemizde yayınlandığı tarihten
              itibaren geçerlidir.
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}
