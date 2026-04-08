export const siteConfig = {
  brandName: "Atacan Suarıtma Teknolojileri",

  contact: {
    phone: "+90 541 909 54 40",
    email: "berkayatcn2603@gmail.com",
    address: "Yıldıztepe Mah. Dumlupınar Cad. No: 21/B",
    city: "Eskişehir, Türkiye",
    workingHours: "Her gün: 09:00 - 18:00",
  },

  /**
   * Google Harita embed URL'si:
   * Google Maps'te konumunuzu açın → Paylaş → Haritayı yerleştir → HTML'i kopyalayın → src="..." içindeki adresi buraya yapıştırın.
   * Aşağıdaki adres arama ile Eskişehir gösterir; kendi konumunuzun embed linki ile değiştirin.
   */
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.116641275213!2d30.509705776657935!3d39.75948947155286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc163d8da5d3e5%3A0x9308ab59e2cff823!2zWcSxbGTEsXp0ZXBlLCBEdW1sdXDEsW5hciBDZC4gTm86MjEgRDpiLCAyNjA0MCBPZHVucGF6YXLEsS9Fc2tpxZ9laGly!5e0!3m2!1str!2str!4v1775647621631!5m2!1str!2str",

  /**
   * Sosyal medya linkleri. Kullanılmayanları boş string bırakın veya satırı silin.
   */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579594960903&ref=FB_PL_BIDIRECTIONAL_ig_profile_ac",
    instagram: "https://www.instagram.com/atacansuaritmateknolojileri",
    twitter: "",
    linkedin: "",
    youtube: "",
    whatsapp: "https://wa.me/905419095440",
  },
} as const;

/** WhatsApp sohbet linki: önce `social.whatsapp`, yoksa telefon numarasından üretilir. */
export function getWhatsAppChatUrl(): string | null {
  const explicit = siteConfig.social.whatsapp?.trim();
  if (explicit) return explicit;
  const digits = siteConfig.contact.phone.replace(/\D/g, "");
  return digits.length >= 10 ? `https://wa.me/${digits}` : null;
}
