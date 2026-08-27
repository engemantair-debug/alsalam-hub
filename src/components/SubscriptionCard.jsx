import { Check, Wifi, Zap, Star } from "lucide-react";

export default function SubscriptionCard({
  plan,
  onSubscribe,
  compact = false,
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl p-7 sm:p-8 transition-all duration-300 h-full overflow-hidden ${
        plan.featured
          ? "bg-primary text-white shadow-lift lg:-translate-y-3 border-2 border-primary"
          : "bg-white text-ink shadow-card border border-paper-line hover:shadow-lift hover:-translate-y-1.5"
      }`}
    >
      {/* الأكثر طلبًا */}
      {plan.featured && (
        <span className="absolute -top-3.5 right-1/2 translate-x-1/2 inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-soft whitespace-nowrap z-30">
          <Star size={13} fill="currentColor" />
          الأكثر طلبًا
        </span>
      )}

      {/* المحتوى الأساسي للكارد */}
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

      <p
        className={`text-xs mb-6 ${
          plan.featured ? "text-white/60" : "text-ink-soft/80"
        }`}
      >
        السعر مثال قابل للتعديل
      </p>

      {/* الإنترنت والكهرباء */}
      {!compact && (
        <div
          className={`flex items-center gap-4 text-xs font-semibold mb-6 pb-6 border-b ${
            plan.featured ? "border-white/15" : "border-paper-line"
          }`}
        >
          <span
            className={`inline-flex items-center gap-1.5 ${
              plan.featured ? "text-white/85" : "text-ink-soft"
            }`}
          >
            <Wifi size={14} />
            إنترنت
          </span>

          <span
            className={`inline-flex items-center gap-1.5 ${
              plan.featured ? "text-white/85" : "text-ink-soft"
            }`}
          >
            <Zap size={14} />
            كهرباء
          </span>

          {plan.hours && (
            <span
              className={
                plan.featured ? "text-white/85" : "text-ink-soft"
              }
            >
              {plan.hours}
            </span>
          )}
        </div>
      )}

      {/* المميزات */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
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
                plan.featured ? "text-white/90" : "text-ink-soft"
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
        className={`inline-flex items-center justify-center gap-2 rounded-full font-bold px-6 py-3.5 transition-all duration-200 ${
          plan.featured
            ? "bg-accent text-white hover:bg-accent-deep hover:-translate-y-0.5"
            : "bg-accent/[0.08] text-accent hover:bg-accent hover:text-white hover:-translate-y-0.5"
        }`}
      >
        اشترك الآن
      </button>

      {/* =========================
          Hover Overlay
          ========================= */}
      {plan.variants && (
        <div
          className={`absolute inset-0 z-20 rounded-2xl p-6 sm:p-7
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-300
            flex flex-col justify-center
            backdrop-blur-md
            ${
              plan.featured
                ? "bg-primary/95 text-white"
                : "bg-white/95 text-ink"
            }`}
        >
          {/* عنوان التفاصيل */}
          <div className="text-center mb-5">
            <h4
              className={`text-lg font-bold ${
                plan.featured ? "text-white" : "text-primary"
              }`}
            >
              تفاصيل الاشتراك
            </h4>

            <p
              className={`text-xs mt-1 ${
                plan.featured ? "text-white/60" : "text-ink-soft"
              }`}
            >
              مرّر المؤشر لرؤية الأسعار
            </p>
          </div>

          {/* الأسعار */}
          <div className="grid grid-cols-2 gap-3">
            {plan.variants.map((variant) => (
              <div
                key={variant.category}
                className={`rounded-xl p-3 border ${
                  plan.featured
                    ? "bg-white/10 border-white/15"
                    : "bg-paper-alt border-paper-line"
                }`}
              >
                <p
                  className={`text-xs font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-primary"
                  }`}
                >
                  {variant.category}
                </p>

                <div className="space-y-1">
                  {variant.options.map((option) => (
                    <div
                      key={option.name}
                      className={`flex justify-between items-center gap-2 text-xs ${
                        plan.featured
                          ? "text-white/80"
                          : "text-ink-soft"
                      }`}
                    >
                      <span>{option.name}</span>

                      <span
                        className={`font-bold whitespace-nowrap ${
                          plan.featured ? "text-white" : "text-ink"
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
        </div>
      )}
    </div>
  );
}
