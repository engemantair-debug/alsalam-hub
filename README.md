# Al-Salam Hub | مساحة عمل السلام

موقع React + Tailwind CSS احترافي ومتجاوب بالكامل لمساحة عمل السلام، يتضمن صفحة رئيسية وصفحة اشتراكات مستقلة.

---

## 1) طريقة تشغيل المشروع

يتطلب المشروع Node.js (نسخة 18 أو أحدث).

```bash
# 1. تثبيت الحزم
npm install

# 2. تشغيل المشروع محليًا للمعاينة والتطوير
npm run dev
# سيعمل الموقع على http://localhost:5173

# 3. بناء نسخة الإنتاج (production build)
npm run build
# الملفات النهائية الجاهزة للنشر ستكون داخل مجلد dist/

# 4. معاينة نسخة الإنتاج محليًا
npm run preview
```

يمكنك بعد ذلك رفع محتوى مجلد `dist/` إلى أي استضافة (Vercel, Netlify, GitHub Pages, أو أي استضافة عادية).

---

## 2) الأماكن التي تغيّر منها روابط Wi-Fi وطلب المشروبات

كل الروابط والبيانات القابلة للتعديل موجودة في **ملف واحد فقط**:

📁 `src/config/siteConfig.js`

```javascript
const SITE_CONFIG = {
  wifiLoginUrl: "WIFI_LOGIN_URL",     // ← ضع هنا رابط تسجيل الدخول لشبكة الواي فاي
  drinkOrderUrl: "DRINK_ORDER_URL",   // ← ضع هنا رابط طلب المشروبات

  phone: "PHONE_NUMBER",
  email: "EMAIL_ADDRESS",
  address: "ADDRESS",

  social: {
    facebook: "...",
    instagram: "...",
    linkedin: "...",
  },
};
```

بمجرد تعديل هذا الملف، ستتحدث كل الأزرار في الموقع (Header، Hero، قسم "جاهز تبدأ؟"، قسم المشروبات، الزر العائم على الهاتف، الـ Footer) تلقائيًا — لا حاجة للبحث في أي صفحة أخرى.

---

## 3) المكان الذي تعدّل منه أسعار ومميزات الاشتراكات

📁 `src/data/subscriptionPlans.js`

هذا الملف يحتوي على Array واحد بكل الباقات. كل باقة كائن (object) يحتوي على:

```javascript
{
  id: "standard",
  name: "الباقة القياسية",
  price: "XX",              // ← عدّل السعر هنا
  currency: "₪",
  period: "شهر",
  duration: "اشتراك شهري",
  hours: "XX ساعة استخدام / شهر",
  featured: true,            // ← اجعلها true لباقة واحدة فقط لتظهر كـ "الأكثر طلبًا"
  features: [
    "جميع مميزات الباقة الأساسية",
    "عدد ساعات أكبر",
    // أضف أو احذف مميزات كما تريد
  ],
}
```

- لإضافة باقة رابعة: أضف كائنًا جديدًا لنفس الـ Array.
- لحذف باقة: احذف كائنها من الـ Array.
- الصفحة الرئيسية تعرض أول 3 باقات فقط (Preview)، بينما صفحة `/subscriptions` تعرض جميع الباقات الموجودة في الملف تلقائيًا.

الخدمات المعروضة في قسم "خدماتنا" في الصفحة الرئيسية موجودة بنفس الطريقة في:
📁 `src/data/servicesData.js`

---

## 4) طريقة إضافة صور حقيقية للمكان لاحقًا

1. ضع صورك داخل مجلد: `src/assets/`
2. استوردها داخل أي Component، مثال:
   ```javascript
   import workspacePhoto from "../assets/workspace-real.jpg";
   // ثم استخدمها:
   <img src={workspacePhoto} alt="مساحة العمل" />
   ```
3. أماكن مقترحة لإضافة صور حقيقية:
   - `src/components/Hero.jsx` — يمكن استبدال التركيبة البصرية بصورة حقيقية للمكان.
   - `src/components/About.jsx` — قسم "عن مساحة السلام".
   - يمكن أيضًا إضافة قسم "معرض صور" جديد بسهولة باستخدام نفس الأسلوب.

الشعار الحالي موجود في: `src/assets/logo.png` (تم اقتصاصه من الصورة التي أرفقتها). لاستبداله بنسخة أعلى جودة أو بخلفية شفافة، فقط استبدل هذا الملف بنفس الاسم.

---

## 5) نموذج الاشتراك (Subscription Form)

النموذج حاليًا تجريبي (Submit وهمي يعرض رسالة نجاح بعد ثانية). الكود جاهز للربط الحقيقي:

📁 `src/components/SubscriptionForm.jsx` — ابحث عن دالة `handleSubmit` وستجد تعليقات توضح بالضبط كيف تربطها بـ:
- **Google Forms**: عبر إرسال `fetch POST` إلى رابط `formResponse` مع أسماء الحقول `entry.xxxxxxx`.
- **Backend / API خاص**: عبر استبدال المحاكاة بطلب `fetch` حقيقي لعنوان الـ API الخاص بك.

---

## هيكل المشروع

```
src/
├── assets/
│   └── logo.png                 # شعار Al-Salam Hub
├── config/
│   └── siteConfig.js            # ← الروابط وبيانات التواصل (عدّل هنا)
├── data/
│   ├── servicesData.js          # ← بيانات قسم "خدماتنا"
│   └── subscriptionPlans.js     # ← بيانات وأسعار الباقات (عدّل هنا)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── WifiAccess.jsx
│   ├── SubscriptionPreview.jsx
│   ├── SubscriptionCard.jsx
│   ├── SubscriptionForm.jsx
│   ├── DrinkOrder.jsx
│   ├── About.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   ├── MobileStickyBar.jsx
│   ├── Logo.jsx
│   ├── SectionHeading.jsx
│   ├── DiamondMotif.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx                 # الصفحة الرئيسية (المسار /)
│   └── SubscriptionsPage.jsx    # صفحة الاشتراكات (المسار /subscriptions)
├── App.jsx
├── main.jsx
└── index.css
```

## الهوية البصرية

| الاستخدام | اللون |
|---|---|
| Primary (أزرق داكن) | `#14345B` |
| Secondary (أزرق متوسط) | `#2159A0` |
| Accent (أحمر/قرمزي) | `#E31E3C` |
| الخلفية | `#FAF9F5` (off-white) |

الخطوط: **Cairo** للعناوين، **Tajawal** للنصوص — عبر Google Fonts، مع دعم RTL كامل (`dir="rtl"` على مستوى الصفحة).
