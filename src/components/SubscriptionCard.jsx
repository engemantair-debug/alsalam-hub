import { Check, Wifi, Zap, Star } from "lucide-react";

export default function SubscriptionCard({
  plan,
  onSubscribe,
  compact = false,
}) {
  return (
    <div
      className={`group relative h-full min-h-[520px] rounded-2xl p-7 sm:p-8 overflow-visible transition-all duration-300 ${
        plan.featured
          ? "bg-primary text-white shadow-lift lg:-translate-y-3 border-2 border-primary mt-6"
          : "bg-white text-ink shadow-card border border-paper-line hover:shadow-lift hover:-translate-y-1.5 mt-6"
      }`}
    >
      {/* شارة الأكثر طلباً */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
          <Star size={12} fill="currentColor" />
          <span>الأكثر طلباً</span>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* اسم الباقة */}
        <div className="mb-6">
          <h3
            className={`font-display font-bold text-xl mb-1 ${
              plan.featured ? "text-white" : "text-ink"
            }`}
          >
            {plan.name}
          </h3>

          <p
            className={`text-sm ${
              plan.featured ? "text-white/70" : "text-ink-soft"
            }`}
          >
            {plan.duration}
          </p>
        </div>

        {/* السعر */}
        <div className="flex items-baseline gap-1.5 mb-1">
          <span
            className={`font-display font-black text-4xl sm:text-5xl ${
              plan.featured ? "text-white" : "text-primary"
            }`}
          >
            {plan.price}
          </span>

          <span
            className={`text-lg font-bold ${
              plan.featured ? "text-white/80" : "text-ink-soft"
            }`}
          >
            {plan.currency}
          </span>

          <span
            className={`text-sm ${
              plan.featured ? "text-white/60" : "text-ink-soft"
            }`}
          >
            / {plan.period}
          </span>
        </div>

        {/* الإنترنت والكهرباء */}
        {!compact && (
          <div
            className={`flex items-center gap-4 text-xs font-semibold mb-6 mt-6 pb-6 border-b ${
              plan.featured
                ? "border-white/15"
                : "border-paper-line"
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 ${
                plan.featured
                  ? "text-white/85"
                  : "text-ink-soft"
              }`}
            >
              <Wifi size={14} />
              إنترنت
            </span>

            <span
              className={`inline-flex items-center gap-1.5 ${
                plan.featured
                  ? "text-white/85"
                  : "text-ink-soft"
              }`}
            >
              <Zap size={14} />
              كهرباء
            </span>

            {plan.hours && (
              <span
                className={
                  plan.featured
                    ? "text-white/85"
                    : "text-ink-soft"
                }
              >
                {plan.hours}
              </span>
            )}
          </div>
        )}

        {/* المميزات */}
        <ul className="flex flex-col gap-3 flex-1 mb-8">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm leading-relaxed"
            >
              <span
                className={`mt-0.5 shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${
                  plan.featured
                    ? "bg-white/15 text-white"
                    : "bg-primary/[0.08] text-primary"
                }`}
              >
                <Check size={12} strokeWidth={3} />
              </span>

              <span
                className={
                  plan.featured
                    ? "text-white/90"
                    : "text-ink-soft"
                }
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* زر الاشتراك */}
        <button
          onClick={() => onSubscribe(plan)}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-full font-bold px-6 py-3.5 transition-all duration-200 ${
            plan.featured
              ? "bg-accent text-white hover:bg-accent-deep"
              : "bg-accent/[0.08] text-accent hover:bg-accent hover:text-white"
          }`}
        >
          اشترك الآن
        </button>
      </div>

      {/* =========================
          Hover Overlay
      ========================= */}

      {plan.variants && (
        <div
          className={`absolute inset-0 z-50 flex flex-col p-6 sm:p-7 rounded-2xl transition-all duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible ${
            plan.featured
              ? "bg-primary"
              : "bg-white"
          }`}
        >
          {/* عنوان التفاصيل */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4
                className={`text-xl font-bold ${
                  plan.featured
                    ? "text-white"
                    : "text-primary"
                }`}
              >
                تفاصيل الاشتراك
              </h4>

              <p
                className={`text-xs mt-1 ${
                  plan.featured
                    ? "text-white/60"
                    : "text-ink-soft"
                }`}
              >
                الأسعار حسب نوع الاستخدام
              </p>
            </div>

            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                plan.featured
                  ? "bg-white/10"
                  : "bg-primary/[0.08]"
              }`}
            >
              <Star
                size={17}
                className={
                  plan.featured
                    ? "text-white"
                    : "text-primary"
                }
              />
            </div>
          </div>

          {/* الأسعار */}
          <div className="grid grid-cols-2 gap-3 flex-1 content-start overflow-y-auto">
            {plan.variants.map((variant) => (
              <div
                key={variant.category}
                className={`rounded-xl p-4 border ${
                  plan.featured
                    ? "bg-white/10 border-white/10"
                    : "bg-paper-alt border-paper-line"
                }`}
              >
                <h5
                  className={`text-sm font-bold mb-3 ${
                    plan.featured
                      ? "text-white"
                      : "text-primary"
                  }`}
                >
                  {variant.category}
                </h5>

                <div className="space-y-2">
                  {variant.options.map((option) => (
                    <div
                      key={option.name}
                      className={`flex items-center justify-between gap-2 text-xs ${
                        plan.featured
                          ? "text-white/75"
                          : "text-ink-soft"
                      }`}
                    >
                      <span>{option.name}</span>

                      <span
                        className={`font-bold whitespace-nowrap ${
                          plan.featured
                            ? "text-white"
                            : "text-ink"
                        }`}
                      >
                        {option.price} ₪
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* أسفل الـOverlay */}
          <div
            className={`mt-5 pt-4 border-t text-center ${
              plan.featured
                ? "border-white/10"
                : "border-paper-line"
            }`}
          >
            <span
              className={`text-xs ${
                plan.featured
                  ? "text-white/50"
                  : "text-ink-soft"
              }`}
            >
              حرّك المؤشر خارج البطاقة للعودة
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
