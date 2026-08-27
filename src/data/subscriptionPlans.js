// ============================================================================
// subscriptionPlans — عدّل الاسم، السعر، والمميزات هنا فقط.
// كل باقة تظهر تلقائيًا في الصفحة الرئيسية (أول 3 باقات) وفي صفحة /subscriptions
// ============================================================================

const subscriptionPlans = [
  {
    id: "basic",
    name: "اشتراك ساعات",
    nameEn: "Basic",
    price: "3",
    currency: "₪",
    period: "ساعة",
    duration: "اشتراك بالساعة",
    internet: true,
    power: true,
    featured: false,
    features: [
      "استخدام مساحة العمل",
      "الإنترنت",
      "الكهرباء",
    ],
  },
  {
    id: "standard",
    name: "الباقة اليومية",
    nameEn: "Standard",
    price: "18",
    currency: "₪",
    period: "8:00 AM-6:00PM",
    duration: "اشتراك يومي",
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
  name: "الباقة الشهرية",
  nameEn: "Premium",
  price: "ابتداءً من 150",
  currency: "₪",
  period: "شهر",
  duration: "اشتراك شهري",
  hours: "استخدام غير محدود تقريبًا",
  internet: true,
  power: true,
  featured: false,

  variants: [
    {
      category: "الطلاب",
      options: [
        { name: "مكتبي", price: 150 },
        { name: "Gaming", price: 200 },
      ],
    },
    {
      category: "الباحثون عن عمل",
      options: [
        { name: "مكتبي", price: 150 },
        { name: "Gaming", price: 200 },
      ],
    },
    {
      category: "الفريلانسر",
      options: [
        { name: "عادي", price: 200 },
        { name: "مكتبي", price: 250 },
      ],
    },
    {
      category: "الشباب",
      options: [
        { name: "اشتراك شهري", price: 300 },
      ],
    },
  ],

  features: [
    "جميع المميزات",
    "استخدام أكبر للمساحة",
    "أولوية في حجز القاعة",
    "أولوية في بعض الخدمات",
  ],
}
];

export default subscriptionPlans;
