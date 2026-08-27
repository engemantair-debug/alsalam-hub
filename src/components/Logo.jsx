import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Logo({ variant = "dark", withText = true, size = "md" }) {
  const sizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-16 w-16",
  };
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-ink-soft";

  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
      <img
        src={logo}
        alt="شعار Al-Salam Hub"
        className={`${sizes[size]} rounded-full shadow-card ring-1 ring-black/5 shrink-0 transition-transform duration-300 group-hover:scale-105`}
      />
      {withText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-display font-extrabold text-lg ${textColor}`}>
            Al-Salam Hub
          </span>
          <span className={`text-xs font-medium ${subColor}`}>
            مساحة عمل السلام
          </span>
        </span>
      )}
    </Link>
  );
}
