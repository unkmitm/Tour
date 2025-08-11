import Tours from "../common/Tours";

const domesticTours = [
  {
    id: "jungle",
    title: "تورهای جنگلی",
    description: "تجربه‌ای منحصر به فرد در دل طبیعت بکر جنگل‌های ایران",
    icon: "🌲",
    color: "from-green-500 to-green-700",
    tours: ["جنگل‌های شمال", "جنگل‌های زاگرس", "جنگل‌های ارسباران"],
  },
  {
    id: "south",
    title: "جنوب گردی",
    description: "سفر به سرزمین گرم و آفتابی جنوب ایران",
    icon: "🌅",
    color: "from-orange-500 to-red-600",
    tours: ["جزیره قشم", "بندر عباس", "چابهار", "بوشهر"],
  },
  {
    id: "beach",
    title: "تورهای ساحلی",
    description: "لذت بردن از زیبایی‌های ساحل و دریا",
    icon: "🏖️",
    color: "from-blue-500 to-blue-700",
    tours: ["ساحل چابهار", "ساحل کیش", "ساحل هرمز"],
  },
  {
    id: "mountain",
    title: "کوه‌نوردی",
    description: "ماجراجویی در ارتفاعات و قله‌های ایران",
    icon: "⛰️",
    color: "from-gray-600 to-gray-800",
    tours: ["قله دماوند", "کوه‌های زاگرس", "کوه‌های البرز"],
  },
  {
    id: "north",
    title: "شمال",
    description: "سفر به سرزمین سبز و خوش آب و هوای شمال ایران",
    icon: "🌿",
    color: "from-emerald-500 to-emerald-700",
    tours: ["گیلان", "مازندران", "گلستان"],
  },
  {
    id: "camping",
    title: "کمپینگ",
    description: "تجربه زندگی در طبیعت و شب‌مانی زیر ستارگان",
    icon: "⛺",
    color: "from-purple-500 to-purple-700",
    tours: ["کمپینگ در کویر", "کمپینگ جنگلی", "کمپینگ کوهستانی"],
  },
];
function DomesticTours() {
  return (
    <div className="rtl p-8 text-right">
      <Tours
        title="تورهای داخلی ایران"
        description="کشف زیبایی‌های سرزمین ایران با تورهای متنوع و حرفه‌ای ما..."
        categories={domesticTours}
        basePath="/internal"
      />
    </div>
  );
}

export default DomesticTours;
