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
