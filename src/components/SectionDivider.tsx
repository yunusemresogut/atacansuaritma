/**
 * Bölümler arası kıvrımlı (wave) ayırıcı.
 * fill = hemen altındaki bölümün arka plan rengi; üst bölümün alt kenarı dalgalı görünür.
 */

interface SectionDividerProps {
  /** Alt bölümün arka plan rengi (CSS değişkeni veya hex) */
  fill: string;
  /** Ek class'lar (yükseklik vb.) */
  className?: string;
  /** Dalga yönü: "down" = üst bölüm altta dalgalı, "up" = alt bölüm üstte dalgalı */
  variant?: "down" | "up";
}

export function SectionDivider({
  fill,
  className = "",
  variant = "down",
}: SectionDividerProps) {
  const viewBox = "0 0 1440 120";
  const preserveAspectRatio = "none";

  // Dalga aşağı: üst bölümün alt kenarı dalgalı, doldurma = alt bölüm rengi
  const waveDownPath =
    "M0,80 Q360,120 720,80 T1440,80 L1440,120 L0,120 Z";
  // Dalga yukarı: alt bölümün üst kenarı dalgalı
  const waveUpPath =
    "M0,120 L0,40 Q360,0 720,40 T1440,40 L1440,120 Z";

  const d = variant === "down" ? waveDownPath : waveUpPath;

  return (
    <div
      className={` w-full overflow-hidden ${className}`}
      style={{ lineHeight: 0 }}
      aria-hidden
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
        className="block h-auto w-full"
        style={{ minHeight: "clamp(48px, 8vw, 120px)" }}
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}
