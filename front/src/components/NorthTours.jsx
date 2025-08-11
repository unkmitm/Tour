import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";
import SectionCard from "./common/SectionCard";
import InfoSection from "./data/infoSection";
import NorthData from "./data/NorthData";

const northTours = [
  {
    id: 1,
    name: "تور گیلان",
    duration: "4 روز و 3 شب",
    price: "3,200,000 تومان",
    highlights: ["جنگل‌های سرسبز", "مزارع برنج", "فرهنگ محلی", "غذاهای گیلانی"],
    includes: [
      "اقامت در اقامتگاه بوم‌گردی",
      "تمام وعده‌ها",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
  {
    id: 2,
    name: "تور مازندران",
    duration: "3 روز و 2 شب",
    price: "2,800,000 تومان",
    highlights: [
      "ساحل دریای خزر",
      "کوه‌های البرز",
      "باغ‌های مرکبات",
      "آبشارها",
    ],
    includes: ["اقامت در هتل", "صبحانه و شام", "راهنما", "حمل و نقل", "بیمه"],
  },
  {
    id: 3,
    name: "تور گلستان",
    duration: "5 روز و 4 شب",
    price: "3,600,000 تومان",
    highlights: [
      "جنگل‌های هیرکانی",
      "منظره کوهستان",
      "فرهنگ ترکمنی",
      "طبیعت بکر",
    ],
    includes: [
      "اقامت در کلبه جنگلی",
      "تمام وعده‌ها",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
];

function NorthTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-emerald-800">شمال ایران</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سفر به سرزمین سبز و خوش آب و هوای شمال ایران. از جنگل‌های سرسبز گیلان تا کوه‌های البرز مازندران، تجربه‌ای دل‌انگیز و آرامش‌بخش خواهید داشت.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NorthData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <SectionCard
            title="ویژگی‌های شمال ایران"
            gradient="from-emerald-50 to-green-50"
            textColor="text-emerald-800"
            cols={3}
            items={[
              { icon: "🌿", bgColor: "bg-emerald-100", title: "طبیعت سرسبز", titleColor: "text-emerald-700", description: "جنگل‌های انبوه و مزارع سرسبز" },
              { icon: "🌧️", bgColor: "bg-green-100", title: "آب و هوای معتدل", titleColor: "text-green-700", description: "بارش باران و هوای خنک و دلپذیر" },
              { icon: "🏔️", bgColor: "bg-teal-100", title: "کوه و دریا", titleColor: "text-teal-700", description: "ترکیب زیبای کوهستان و دریای خزر" },
            ]}
          />

          <InfoSection
            title="فعالیت‌های تفریحی"
            fromColor="from-blue-50"
            toColor="to-cyan-50"
            textColor="text-blue-700"
            sections={[
              { heading: "فعالیت‌های طبیعت", items: ["پیاده‌روی در جنگل", "کوه‌نوردی", "عکاسی طبیعت", "تماشای حیات وحش"] },
              { heading: "فعالیت‌های فرهنگی", items: ["بازدید از روستاها", "آشپزی محلی", "صنایع دستی", "موسیقی محلی"] },
            ]}
          />

          <SectionCard
            title="غذاهای محلی"
            gradient="from-orange-50 to-yellow-50"
            textColor="text-orange-800"
            cols={3}
            items={[
              { icon: "🍚", bgColor: "bg-orange-100", title: "برنج و ماهی", titleColor: "text-orange-700", description: "برنج معطر و ماهی تازه دریای خزر" },
              { icon: "🥘", bgColor: "bg-yellow-100", title: "خورشت‌های محلی", titleColor: "text-yellow-700", description: "خورشت فسنجان و میرزا قاسمی" },
              { icon: "🍰", bgColor: "bg-red-100", title: "شیرینی‌های سنتی", titleColor: "text-red-700", description: "باقلوا و شیرینی‌های محلی" },
            ]}
          />

          <InfoSection
            title="بهترین زمان سفر"
            fromColor="from-purple-50"
            toColor="to-pink-50"
            textColor="text-purple-700"
            sections={[
              { heading: "فصول مناسب", items: ["بهار: شکوفه‌ها و هوای معتدل", "تابستان: هوای خنک و سرسبزی", "پاییز: رنگ‌های زیبا و هوای خنک"] },
              { heading: "نکات مهم", items: ["همراه داشتن چتر", "لباس مناسب فصل", "کفش مناسب پیاده‌روی"] },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default NorthTours;
