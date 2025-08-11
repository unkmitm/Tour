import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";

const jungleTours = [
  {
    id: 1,
    name: "تور جنگل‌های شمال",
    duration: "3 روز و 2 شب",
    price: "2,500,000 تومان",
    highlights: [
      "پیاده‌روی در جنگل",
      "شب‌مانی در کلبه",
      "تماشای حیات وحش",
      "عکاسی طبیعت",
    ],
    includes: [
      "اقامت در کلبه جنگلی",
      "صبحانه و شام",
      "راهنمای محلی",
      "حمل و نقل",
      "تجهیزات پیاده‌روی",
    ],
  },
  {
    id: 2,
    name: "تور جنگل‌های زاگرس",
    duration: "4 روز و 3 شب",
    price: "3,200,000 تومان",
    highlights: ["کوه‌نوردی", "کمپینگ", "عکاسی طبیعت", "تماشای غروب"],
    includes: [
      "اقامت در کمپ",
      "تمام وعده‌ها",
      "تجهیزات کمپینگ",
      "راهنمای حرفه‌ای",
      "بیمه سفر",
    ],
  },
  {
    id: 3,
    name: "تور جنگل‌های ارسباران",
    duration: "5 روز و 4 شب",
    price: "3,800,000 تومان",
    highlights: ["جنگل‌های باستانی", "آبشارها", "منظره کوهستان", "فرهنگ محلی"],
    includes: [
      "اقامت در اقامتگاه بوم‌گردی",
      "تمام وعده‌ها",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
];

function JungleTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-green-800">
              تورهای جنگلی ایران
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تجربه‌ای منحصر به فرد در دل طبیعت بکر جنگل‌های ایران. از جنگل‌های
              سرسبز شمال تا جنگل‌های باستانی زاگرس، لحظات فراموش‌نشدنی را تجربه
              کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jungleTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
              چرا تورهای جنگلی؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  مزایای سفر به جنگل
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    هوای پاک و تازه
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    آرامش و دوری از شلوغی شهر
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    تماشای حیات وحش
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    فعالیت‌های ورزشی در طبیعت
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  بهترین زمان سفر
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    بهار: شکوفه‌ها و هوای معتدل
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    تابستان: هوای خنک و سرسبزی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    پاییز: رنگ‌های زیبا و هوای خنک
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JungleTours;
