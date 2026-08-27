import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo.jsx";
import SITE_CONFIG from "../config/siteConfig.js";

// أيقونات التواصل الاجتماعي (SVG بسيط) — lucide-react لا يوفر أيقونات العلامات التجارية
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M13.5 21v-8.1h2.72l.4-3.16h-3.12V7.72c0-.91.25-1.53 1.56-1.53h1.67V3.36C15.99 3.25 15.05 3.2 13.94 3.2c-2.33 0-3.93 1.42-3.93 4.03v2.5H7.28v3.17h2.73V21h3.49Z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3v11.5h-3V9Zm6.4 0h2.87v1.57h.04c.4-.76 1.38-1.57 2.85-1.57 3.05 0 3.61 2 3.61 4.6v6.9h-3v-6.12c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.6-2.35 3.24v6.22h-3V9Z" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { label: "الرئيسية", href: "/#home" },
  { label: "خدماتنا", href: "/#services" },
  { label: "الاشتراكات", href: "/#subscriptions" },
  { label: "عن المساحة", href: "/#about" },
  { label: "تواصل معنا", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-deep text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Logo variant="light" size="sm" />
            <p className="text-sm text-white/60 leading-relaxed">
              مساحة عمل وتعلم مجتمعية، جهزناها لتكون امتدادًا لطموحك.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <FacebookIcon />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white/50 mb-4 tracking-wide">روابط</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/80 hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white/50 mb-4 tracking-wide">تواصل معنا</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-accent shrink-0" />
                <span dir="ltr">{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-accent shrink-0" />
                <span dir="ltr">{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white/50 mb-4 tracking-wide">ساعات العمل</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li className="flex justify-between gap-4"><span>السبت - الخميس</span><span dir="ltr">8:00 - 5:00</span></li>
              <li className="flex justify-between gap-4"><span>الجمعة</span><span dir="ltr">10:00 - 5:00</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 text-center">
          <p className="text-xs text-white/50">
            © 2026 Al-Salam Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
