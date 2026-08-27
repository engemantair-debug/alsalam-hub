// عنصر بصري متكرر مستوحى من شكل الشعار (مربعات دوّارة متداخلة)
// يُستخدم كخلفية زخرفية خفيفة خلف الأقسام الرئيسية دون أن يشتت الانتباه.
export default function DiamondMotif({ className = "", tone = "primary" }) {
  const stroke = tone === "accent" ? "#E31E3C" : tone === "light" ? "#FFFFFF" : "#14345B";
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="60" y="60" width="220" height="220" rx="46"
        transform="rotate(45 170 170)"
        stroke={stroke} strokeOpacity="0.16" strokeWidth="10"
      />
      <rect
        x="120" y="120" width="220" height="220" rx="46"
        transform="rotate(45 230 230)"
        stroke={stroke} strokeOpacity="0.28" strokeWidth="10"
      />
    </svg>
  );
}
