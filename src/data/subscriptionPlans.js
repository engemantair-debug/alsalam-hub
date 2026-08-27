// ============================================================================
// subscriptionPlans — عدّل الاسم، السعر، والمميزات هنا فقط.
// كل باقة تظهر تلقائيًا في الصفحة الرئيسية (أول 3 باقات) وفي صفحة /subscriptions
// ============================================================================

const subscriptionPlans = [
  {
    id: "basic",
    name: "الباقة الأساسية",
    nameEn: "Basic",
    price: "XX",
    currency: "₪",
    period: "شهر",
    duration: "اشتراك شهري",
    hours: "XX ساعة استخدام / شهر",
    internet: true,
    power: true,
    featured: false,
    features: [
      "استخدام مساحة العمل",
      "الإنترنت",
      "الكهرباء",
      "المميزات حسب الباقة",
    ],
  },
  {
    id: "standard",
    name: "الباقة القياسية",
    nameEn: "Standard",
    price: "XX",
    currency: "₪",
    period: "شهر",
    duration: "اشتراك شهري",
    hours: "XX ساعة استخدام / شهر",
    internet: true,
    power: true,
    featured: true,
    features: [
      "جميع مميزات الباقة الأساسية",
      "عدد ساعات أكبر",
      "مزايا إضافية",
      "خصم على الورشات التدريبية",
    ],
  },
  {
    id: "premium",
    name: "الباقة المميزة",
    nameEn: "Premium",
    price: "XX",
    currency: "₪",
    period: "شهر",
    duration: "اشتراك شهري",
    hours: "استخدام غير محدود تقريبًا",
    internet: true,
    power: true,
    featured: false,
    features: [
      "جميع المميزات",
      "استخدام أكبر للمساحة",
      "أولوية في حجز القاعة",
      "أولوية في بعض الخدمات",
    ],
  },
];

export default subscriptionPlans;
