import { Wifi, Coffee } from "lucide-react";
import SITE_CONFIG from "../config/siteConfig.js";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pt-2 pointer-events-none">
      <div className="pointer-events-auto max-w-md mx-auto grid grid-cols-2 gap-3 bg-white/95 backdrop-blur-md border border-paper-line rounded-2xl shadow-lift p-2">
        <a
          href={SITE_CONFIG.wifiLoginUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold py-3 text-sm active:scale-[0.97] transition-transform"
        >
          <Wifi size={16} strokeWidth={2.5} />
          دخول الإنترنت
        </a>
        <a
          href={SITE_CONFIG.drinkOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-white font-bold py-3 text-sm active:scale-[0.97] transition-transform"
        >
          <Coffee size={16} strokeWidth={2.5} />
          طلب مشروب
        </a>
      </div>
    </div>
  );
}
