import { Link } from "react-router-dom";
import { Wifi } from "lucide-react";
import SITE_CONFIG from "../config/siteConfig.js";
import DiamondMotif from "./DiamondMotif.jsx";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-ink overflow-hidden">
      <DiamondMotif tone="light" className="absolute left-1/2 -translate-x-1/2 -top-20 w-[500px] h-[500px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
          مكان واحد... إمكانيات لا محدودة
        </h2>
        <p className="text-lg text-white/70 max-w-xl">
          سواء كنت طالبًا، مستقلًا، مدربًا أو صاحب مشروع، مساحة السلام جاهزة
          لتكون جزءًا من رحلتك.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
          <Link
            to="/subscriptions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white font-bold px-8 py-4 shadow-soft hover:bg-accent-deep hover:-translate-y-0.5 transition-all duration-200"
          >
            اشترك الآن
          </Link>
          <a
            href={SITE_CONFIG.wifiLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Wifi size={18} />
            دخول الإنترنت
          </a>
        </div>
      </div>
    </section>
  );
}
