import SectionHeading from "./SectionHeading.jsx";
import servicesData from "../data/servicesData.js";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-paper-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="كل ما تحتاجه في مكان واحد"
          subtitle="من الإنترنت إلى القاعات التدريبية، جهّزنا كل التفاصيل حتى تركّز على عملك فقط."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 shadow-card hover:shadow-lift border border-paper-line hover:border-primary/15 transition-all duration-300 hover:-translate-y-1.5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative w-14 h-14 mb-5">
                  <div className="absolute inset-0 rounded-[1.1rem] rotate-45 bg-primary/[0.07] group-hover:bg-accent/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={26} strokeWidth={1.8} className="text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-ink-soft leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
