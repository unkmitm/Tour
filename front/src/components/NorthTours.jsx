import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";

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
            <h1 className="text-5xl font-bold mb-6 text-emerald-800">
              شمال ایران
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سفر به سرزمین سبز و خوش آب و هوای شمال ایران. از جنگل‌های سرسبز
              گیلان تا کوه‌های البرز مازندران، تجربه‌ای دل‌انگیز و آرامش‌بخش
              خواهید داشت.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {northTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-emerald-800 text-center">
              ویژگی‌های شمال ایران
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-700">
                  طبیعت سرسبز
                </h3>
                <p className="text-gray-600">جنگل‌های انبوه و مزارع سرسبز</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌧️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  آب و هوای معتدل
                </h3>
                <p className="text-gray-600">بارش باران و هوای خنک و دلپذیر</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-700">
                  کوه و دریا
                </h3>
                <p className="text-gray-600">ترکیب زیبای کوهستان و دریای خزر</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
              فعالیت‌های تفریحی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  فعالیت‌های طبیعت
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    پیاده‌روی در جنگل
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    کوه‌نوردی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    عکاسی طبیعت
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    تماشای حیات وحش
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  فعالیت‌های فرهنگی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    بازدید از روستاها
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    آشپزی محلی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    صنایع دستی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    موسیقی محلی
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">
              غذاهای محلی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-700">
                  برنج و ماهی
                </h3>
                <p className="text-gray-600">برنج معطر و ماهی تازه دریای خزر</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥘</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">
                  خورشت‌های محلی
                </h3>
                <p className="text-gray-600">خورشت فسنجان و میرزا قاسمی</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-red-700">
                  شیرینی‌های سنتی
                </h3>
                <p className="text-gray-600">
                  باقلوای گیلانی و شیرینی‌های محلی
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 text-center">
              بهترین زمان سفر
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  فصول مناسب
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    بهار: شکوفه‌ها و هوای معتدل
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    تابستان: هوای خنک و سرسبزی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    پاییز: رنگ‌های زیبا و هوای خنک
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  نکات مهم
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    همراه داشتن چتر
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    لباس مناسب فصل
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    کفش مناسب پیاده‌روی
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

export default NorthTours;
