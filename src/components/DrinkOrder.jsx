import { Coffee } from "lucide-react";
import SITE_CONFIG from "../config/siteConfig.js";

export default function DrinkOrder() {
  return (
    <section className="relative py-20 sm:py-24 bg-paper-alt overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-[2rem] bg-white border border-paper-line shadow-card overflow-hidden">
          <div className="absolute -left-10 -bottom-16 w-56 h-56 rounded-full bg-accent/[0.06]" />
          <div className="absolute -right-8 -top-14 w-40 h-40 rounded-full bg-primary/[0.05]" />

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 px-7 sm:px-12 py-12 sm:py-14">
            <div className="shrink-0 h-20 w-20 rounded-2xl bg-accent/10 flex items-center justify-center rotate-3">
              <Coffee size={36} className="text-accent" strokeWidth={1.7} />
            </div>

            <div className="flex-1 text-center md:text-right">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
                مشروبك المفضل، وأنت في مكانك ☕
              </h2>
              <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
                لا تحتاج تترك مكانك. اطلب مشروبك وسنجهزه لك.
              </p>
            </div>

            <a
              href={SITE_CONFIG.drinkOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white font-bold px-7 py-4 shadow-soft hover:bg-accent-deep hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              اطلب مشروبك ☕
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
