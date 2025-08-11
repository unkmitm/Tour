import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";

const southTours = [
  {
    id: 1,
    name: "تور جزیره قشم",
    duration: "2 روز و 1 شب",
    price: "1,800,000 تومان",
    highlights: ["ساحل زیبا", "غذاهای محلی", "بازار سنتی", "دره ستارگان"],
    includes: ["اقامت در هتل", "صبحانه", "راهنما", "حمل و نقل", "بیمه"],
  },
  {
    id: 2,
    name: "تور بندر عباس",
    duration: "3 روز و 2 شب",
    price: "2,100,000 تومان",
    highlights: ["ساحل مرجانی", "غواصی", "بازار ماهی", "غروب آفتاب"],
    includes: ["اقامت", "صبحانه و شام", "تجهیزات غواصی", "راهنما", "بیمه"],
  },
  {
    id: 3,
    name: "تور چابهار",
    duration: "4 روز و 3 شب",
    price: "2,800,000 تومان",
    highlights: ["ساحل شنی", "کوه‌های مریخی", "غذاهای محلی", "فرهنگ بلوچی"],
    includes: [
      "اقامت در هتل ساحلی",
      "تمام وعده‌ها",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
  {
    id: 4,
    name: "تور بوشهر",
    duration: "3 روز و 2 شب",
    price: "2,300,000 تومان",
    highlights: ["ساحل زیبا", "بافت تاریخی", "غذاهای دریایی", "فرهنگ محلی"],
    includes: ["اقامت", "صبحانه و شام", "راهنما", "حمل و نقل", "بیمه"],
  },
];

function SouthTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-orange-800">
              جنوب گردی ایران
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سفر به سرزمین گرم و آفتابی جنوب ایران. از جزایر زیبای خلیج فارس تا
              سواحل مرجانی، تجربه‌ای متفاوت و دل‌انگیز خواهید داشت.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {southTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">
              ویژگی‌های جنوب ایران
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-700">
                  آب و هوای گرم
                </h3>
                <p className="text-gray-600">
                  آب و هوای گرم و آفتابی در تمام طول سال
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-red-700">
                  سواحل زیبا
                </h3>
                <p className="text-gray-600">
                  سواحل شنی و مرجانی با آب‌های شفاف
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">
                  غذاهای محلی
                </h3>
                <p className="text-gray-600">غذاهای خوشمزه و تازه دریایی</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
              فعالیت‌های آبی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  ورزش‌های آبی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    غواصی در آب‌های شفاف
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    قایق‌سواری
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    ماهیگیری
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    شنا در دریا
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  بهترین زمان سفر
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    پاییز تا بهار: هوای معتدل
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    زمستان: هوای گرم و آفتابی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    تابستان: گرم اما زیبا
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

export default SouthTours;
