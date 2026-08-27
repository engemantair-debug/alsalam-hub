import { Laptop, Wifi, Zap, Presentation, GraduationCap, Coffee } from "lucide-react";

const servicesData = [
  {
    id: "workspace",
    icon: Laptop,
    title: "مساحة عمل",
    description: "بيئة مناسبة للطلاب، المستقلين، وأصحاب المشاريع للعمل والدراسة وإنجاز المهام.",
  },
  {
    id: "internet",
    icon: Wifi,
    title: "إنترنت",
    description: "اتصال إنترنت سريع وموثوق لمساعدتك على العمل والتعلم بدون انقطاع.",
  },
  {
    id: "power",
    icon: Zap,
    title: "كهرباء",
    description: "توفير الكهرباء لشحن الأجهزة والاستمرار في العمل دون قلق.",
  },
  {
    id: "hall",
    icon: Presentation,
    title: "قاعة ورشات وتدريب",
    description: "قاعة مجهزة لاستضافة الورشات، التدريبات، الاجتماعات والفعاليات.",
  },
  {
    id: "workshops",
    icon: GraduationCap,
    title: "ورشات تدريبية",
    description: "ورشات في مجالات متنوعة للكبار والصغار على مدار الشهر.",
  },
  {
    id: "hospitality",
    icon: Coffee,
    title: "ضيافة ومشروبات",
    description: "إمكانية طلب المشروبات أثناء العمل أو الدراسة دون مغادرة مكانك.",
  },
];

export default servicesData;
