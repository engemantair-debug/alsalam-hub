import { ArrowLeft } from "lucide-react";
import DiamondMotif from "./DiamondMotif.jsx";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <DiamondMotif className="absolute inset-0 w-full h-full" tone="primary" />
              <div className="absolute inset-[18%] rounded-[2rem] bg-gradient-to-br from-primary/[0.04] to-secondary/[0.08] border border-primary/10 flex items-center justify-center">
                <img src={logo} alt="شعار Al-Salam Hub" className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-lift" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-right flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
              <span className="inline-block h-2 w-2 rotate-45 bg-current rounded-[3px]" />
              عن مساحة السلام
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink leading-tight">
              عن مساحة السلام
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              مساحة السلام هي مساحة عمل وتعلم مجتمعية تهدف إلى توفير بيئة
              مناسبة للطلاب، المستقلين، أصحاب المشاريع، والمدربين، من خلال
              توفير مساحة للعمل، الإنترنت والكهرباء، بالإضافة إلى قاعة مجهزة
              للورشات والتدريبات والفعاليات.
            </p>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-primary/15 text-primary font-bold px-7 py-3.5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              اعرف المزيد
              <ArrowLeft size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
