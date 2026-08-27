import { useEffect, useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import subscriptionPlans from "../data/subscriptionPlans.js";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  planId: "",
  startDate: "",
  notes: "",
};

export default function SubscriptionForm({ open, onClose, selectedPlan }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  useEffect(() => {
    if (open) {
      setForm((prev) => ({ ...initialState, planId: selectedPlan?.id || "" }));
      setStatus("idle");
    }
  }, [open, selectedPlan]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ==========================================================================
  // TODO(تكامل لاحق): هذا Submit تجريبي حاليًا.
  // لربطه بـ Google Forms: أرسل fetch POST إلى رابط Google Form (formResponse)
  // مع تحويل الحقول إلى FormData بأسماء entry.xxxxxxx الخاصة بالنموذج.
  // لربطه بـ Backend/API خاص: استبدل الكتلة أدناه بـ:
  //   await fetch("https://YOUR_API/subscriptions", { method: "POST", body: JSON.stringify(form) })
  // ==========================================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900)); // محاكاة إرسال
    setStatus("sent");
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fadeUp"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-[2rem] sm:rounded-[2rem] shadow-lift max-h-[92vh] overflow-y-auto animate-fadeUp">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-paper-line z-10">
          <div>
            <h3 className="font-display font-bold text-xl text-ink">طلب اشتراك</h3>
            {selectedPlan && (
              <p className="text-sm text-ink-soft mt-0.5">{selectedPlan.name}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="إغلاق النموذج"
            className="h-10 w-10 rounded-full bg-paper-alt hover:bg-paper-line flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {status === "sent" ? (
          <div className="flex flex-col items-center text-center gap-4 px-8 py-14">
            <div className="h-16 w-16 rounded-full bg-primary/[0.08] flex items-center justify-center">
              <CheckCircle2 size={32} className="text-primary" strokeWidth={1.8} />
            </div>
            <h4 className="font-display font-bold text-xl text-ink">تم إرسال طلبك بنجاح!</h4>
            <p className="text-ink-soft text-sm leading-relaxed max-w-xs">
              سيتواصل معك فريق مساحة السلام قريبًا لتأكيد الاشتراك.
            </p>
            <button
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-white font-bold px-7 py-3 hover:bg-primary-light transition-colors"
            >
              حسنًا
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 flex flex-col gap-4">
            <Field label="الاسم الكامل" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="مثال: محمد أحمد" />
            <Field label="رقم الهاتف" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="05XXXXXXXX" dir="ltr" />
            <Field label="البريد الإلكتروني" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" dir="ltr" />

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-bold text-ink">الباقة المطلوبة</span>
              <select
                name="planId"
                value={form.planId}
                onChange={handleChange}
                required
                className="rounded-xl border border-paper-line bg-paper-alt px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="" disabled>اختر الباقة</option>
                {subscriptionPlans.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </label>

            <Field label="تاريخ البدء" name="startDate" type="date" value={form.startDate} onChange={handleChange} required />

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-bold text-ink">ملاحظات (اختياري)</span>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="أي تفاصيل إضافية تود إخبارنا بها"
                className="rounded-xl border border-paper-line bg-paper-alt px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white font-bold py-4 hover:bg-accent-deep transition-colors disabled:opacity-70"
            >
              {status === "sending" && <Loader2 size={18} className="animate-spin" />}
              {status === "sending" ? "جارٍ الإرسال..." : "إرسال طلب الاشتراك"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required, placeholder, dir }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-bold text-ink">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        dir={dir}
        className="rounded-xl border border-paper-line bg-paper-alt px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}
