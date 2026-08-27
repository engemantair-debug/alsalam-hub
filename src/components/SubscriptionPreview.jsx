import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import SubscriptionCard from "./SubscriptionCard.jsx";
import subscriptionPlans from "../data/subscriptionPlans.js";

export default function SubscriptionPreview({ onSubscribe }) {
  return (
    <section id="subscriptions" className="relative py-20 sm:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="الاشتراكات"
          title="اختر اشتراكك الشهري"
          subtitle="باقات مرنة تناسب الطلاب، المستقلين، وأصحاب الأعمال."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {subscriptionPlans.slice(0, 3).map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} onSubscribe={onSubscribe} compact />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/subscriptions"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/15 text-primary font-bold px-7 py-3.5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
          >
            عرض جميع الباقات
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
