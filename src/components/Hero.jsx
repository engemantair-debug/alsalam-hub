import { Wifi, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SITE_CONFIG from "../config/siteConfig.js";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      {/* faint diamond field backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -top-24 -left-24 w-[520px] h-[520px] opacity-[0.05] animate-spinSlow"
          viewBox="0 0 400 400" fill="none" aria-hidden="true"
        >
          <rect x="70" y="70" width="260" height="260" rx="54" stroke="#14345B" strokeWidth="14" transform="rotate(45 200 200)" />
        </svg>
        <div className="absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-secondary/[0.06] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text column */}
          <div className="flex flex-col items-start text-right gap-6 order-2 lg:order-1 animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              <Sparkles size={15} />
              مساحة عمل مجتمعية في قلب المدينة
            </span>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-ink">
              مساحتك للعمل، <span className="text-primary">التعلم</span>،
              <br className="hidden sm:block" /> و<span className="relative inline-block text-accent">
                الإبداع
                <svg className="absolute -bottom-1 right-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 8 C 50 2, 150 2, 198 8" stroke="#E31E3C" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.55" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
              مساحة عمل مجهزة توفر لك الإنترنت، الكهرباء، بيئة عمل مريحة، قاعات
              للورشات والتدريب، وخدمات تساعدك على إنجاز المزيد.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
              <a
                href={SITE_CONFIG.wifiLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white font-bold px-7 py-4 shadow-soft hover:bg-primary-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
              >
                <Wifi size={19} strokeWidth={2.5} />
                دخول الإنترنت
              </a>
              <a
                href="#subscriptions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-primary/15 text-primary font-bold px-7 py-4 hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
              >
                استكشف الاشتراكات
                <ArrowLeft size={19} />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-ink-soft">
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl text-ink">6+</span>
                <span>خدمات متكاملة</span>
              </div>
              <div className="h-8 w-px bg-paper-line" />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl text-ink">Wi-Fi</span>
                <span>اتصال دائم وسريع</span>
              </div>
            </div>
          </div>

          {/* Visual column — signature diamond composition around the logo */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div
                className="absolute inset-0 rounded-[2.5rem] rotate-45 bg-gradient-to-br from-primary to-secondary/90 shadow-lift animate-floatSlow"
                aria-hidden="true"
              />
              <div
                className="absolute inset-6 rounded-[2rem] rotate-45 border-2 border-white/25"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={logo}
                  alt="شعار Al-Salam Hub"
                  className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full shadow-2xl ring-8 ring-white"
                />
              </div>
              {/* small accent chip */}
              <div className="absolute -bottom-3 -left-3 sm:bottom-0 sm:left-0 bg-white rounded-2xl shadow-lift px-4 py-3 flex items-center gap-2 border border-paper-line">
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold text-ink">مفتوح الآن</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
