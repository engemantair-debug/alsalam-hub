import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import SubscriptionCard from "../components/SubscriptionCard.jsx";
import SubscriptionForm from "../components/SubscriptionForm.jsx";
import DiamondMotif from "../components/DiamondMotif.jsx";
import subscriptionPlans from "../data/subscriptionPlans.js";

export default function SubscriptionsPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openForm = (plan) => {
    setSelectedPlan(plan);
    setFormOpen(true);
  };

  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-paper-alt pt-14 pb-20 sm:pt-20 sm:pb-24">
        <DiamondMotif
          tone="primary"
          className="absolute -left-20 -top-20 w-80 h-80 opacity-[0.08] pointer-events-none"
        />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-light transition-colors mb-2"
          >
            الرئيسية
            <ArrowRight size={15} />
          </Link>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight">
            اشتراكات مساحة السلام
          </h1>
          <p className="text-lg text-ink-soft max-w-xl">
            اختر الباقة التي تناسب احتياجاتك وابدأ رحلتك معنا.
          </p>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 -mt-10 sm:-mt-14 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} onSubscribe={openForm} />
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto flex items-start gap-4 bg-white border border-paper-line rounded-2xl p-6 shadow-card">
          <div className="shrink-0 h-10 w-10 rounded-full bg-primary/[0.08] flex items-center justify-center">
            <HelpCircle size={18} className="text-primary" />
          </div>
          <p className="text-sm text-ink-soft leading-relaxed">
            جميع الأسعار والمدد الظاهرة أعلاه هي أمثلة قابلة للتعديل. للاستفسار
            عن التفاصيل الكاملة أو طلب باقة مخصصة، تواصل معنا مباشرة عبر بيانات
            التواصل في أسفل الصفحة.
          </p>
        </div>
      </section>

      <SubscriptionForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
