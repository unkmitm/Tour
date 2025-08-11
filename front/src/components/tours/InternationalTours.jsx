import Tours from "../common/Tours";

const internationalTours = [
  {
    id: "uae",
    title: "تورهای امارات",
    description: "سفر به سرزمین مدرن و لوکس امارات",
    icon: "🏰",
    color: "from-blue-500 to-blue-700",
    tours: ["دبی", "ابوظبی", "شارجه"],
  },
  {
    id: "turkey",
    title: "تورهای ترکیه",
    description: "کشف فرهنگ‌های متنوع و طبیعت بکر ترکیه",
    icon: "🕌",
    color: "from-yellow-500 to-red-500",
    tours: ["استانبول", "کاپادوکیا", "آنتالیا"],
  },
  {
    id: "qatar",
    title: "تورهای قطر",
    description: "کشف فرهنگ‌های غنی و جاذبه‌های طبیعی قطر",
    icon: "🏙️",
    color: "from-red-500 to-yellow-500",
    tours: ["دوحه", "الریان", "الخور"],
  },
  {
    id: "azerbaijan",
    title: "تورهای آذربایجان",
    description: "کشف فرهنگ‌های غنی و جاذبه‌های طبیعی آذربایجان",
    icon: "🏛️",
    color: "from-green-500 to-blue-500",
    tours: ["باکو", "گنجه", "شیروان"],
  },
  {
    id: "georgia",
    title: "تورهای گرجستان",
    description: "کشف فرهنگ‌های غنی و جاذبه‌های طبیعی گرجستان",
    icon: "💃",
    color: "from-green-500 to-blue-500",
    tours: ["تفلیس", "باتومی", "کوتایسی"],
  },
  {
    id: "armenia",
    title: "تورهای ارمنستان",
    description: "کشف فرهنگ‌های غنی و جاذبه‌های طبیعی ارمنستان",
    icon: "🏛️",
    color: "from-green-500 to-blue-500",
    tours: ["ایروان", "دولت آباد", "گغارد"],
  },

];
function InternationalToursPage() {
  return (
    <Tours
      title="تورهای خارجی"
      description="سفر به مقاصد بین‌المللی با بهترین خدمات و قیمت‌ها"
      categories={internationalTours}
      basePath="/external"
    />
  );
}

export default InternationalToursPage;
