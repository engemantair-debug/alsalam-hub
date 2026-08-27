import { Wifi, ArrowLeft } from "lucide-react";
import SITE_CONFIG from "../config/siteConfig.js";
import DiamondMotif from "./DiamondMotif.jsx";

export default function WifiAccess() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-l from-primary-deep via-primary to-primary-light">
      <DiamondMotif
        tone="light"
        className="absolute -left-10 -top-10 w-72 h-72 opacity-70 pointer-events-none"
      />
      <DiamondMotif
        tone="light"
        className="absolute -right-16 bottom-0 w-96 h-96 opacity-40 pointer-events-none rotate-12"
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6">
        <div className="h-16 w-16 rounded-2xl bg-white/10 border border-white/20 rotate-45 flex items-center justify-center">
          <Wifi size={28} className="text-white -rotate-45" strokeWidth={2} />
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          جاهز تبدأ؟
        </h2>
        <p className="text-lg text-white/80 max-w-lg">
          اتصل بالإنترنت وابدأ عملك أو دراستك الآن.
        </p>
        <a
          href={SITE_CONFIG.wifiLoginUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-8 py-4 text-lg shadow-lift hover:-translate-y-1 hover:bg-paper transition-all duration-200"
        >
          دخول الإنترنت
          <ArrowLeft size={20} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
