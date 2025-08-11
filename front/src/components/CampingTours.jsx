import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";

const campingTours = [
  {
    id: 1,
    name: "تور کمپینگ در کویر",
    duration: "3 روز و 2 شب",
    price: "2,500,000 تومان",
    highlights: [
      "شب‌مانی زیر ستارگان",
      "تماشای طلوع و غروب",
      "سفری با شتر",
      "فرهنگ کویری",
    ],
    includes: [
      "چادر و تجهیزات کمپینگ",
      "تمام وعده‌ها",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
  {
    id: 2,
    name: "تور کمپینگ جنگلی",
    duration: "4 روز و 3 شب",
    price: "3,200,000 تومان",
    highlights: [
      "کمپینگ در جنگل",
      "پیاده‌روی شبانه",
      "تماشای حیات وحش",
      "آتش‌افروزی",
    ],
    includes: [
      "چادر و تجهیزات",
      "تمام وعده‌ها",
      "راهنمای حرفه‌ای",
      "حمل و نقل",
      "بیمه",
    ],
  },
  {
    id: 3,
    name: "تور کمپینگ کوهستانی",
    duration: "5 روز و 4 شب",
    price: "3,800,000 تومان",
    highlights: ["کمپینگ در ارتفاعات", "منظره کوهستان", "کوه‌نوردی", "عکاسی"],
    includes: [
      "تجهیزات حرفه‌ای",
      "تمام وعده‌ها",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
];

function CampingTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-purple-800">
              کمپینگ ایران
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تجربه زندگی در طبیعت و شب‌مانی زیر ستارگان. از کویرهای گرم تا
              جنگل‌های سرسبز، لحظات فراموش‌نشدنی را در دل طبیعت تجربه کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campingTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 text-center">
              ویژگی‌های کمپینگ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⛺</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">
                  زندگی در طبیعت
                </h3>
                <p className="text-gray-600">تجربه زندگی ساده و طبیعی</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-violet-700">
                  شب‌مانی زیر ستارگان
                </h3>
                <p className="text-gray-600">تماشای آسمان شب و ستارگان</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  آتش‌افروزی
                </h3>
                <p className="text-gray-600">گرم شدن دور آتش و داستان‌سرایی</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
              انواع کمپینگ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏜️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  کمپینگ کویری
                </h3>
                <p className="text-gray-600">
                  شب‌مانی در کویر و تماشای ستارگان
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌲</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-700">
                  کمپینگ جنگلی
                </h3>
                <p className="text-gray-600">کمپینگ در جنگل و طبیعت سرسبز</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⛰️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-700">
                  کمپینگ کوهستانی
                </h3>
                <p className="text-gray-600">کمپینگ در ارتفاعات و کوهستان</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
              تجهیزات کمپینگ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  تجهیزات اصلی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    چادر کمپینگ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    کیسه خواب
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    زیرانداز
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    چراغ قوه
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  تجهیزات آشپزی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    اجاق گاز مسافرتی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    قابلمه و ظروف
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    چاقو و قاشق
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                    فنجان و بشقاب
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-800 text-center">
              نکات ایمنی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  قبل از سفر
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    بررسی آب و هوا
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    اطلاع از منطقه
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    آماده‌سازی تجهیزات
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    اطلاع‌رسانی به خانواده
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  حین کمپینگ
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    رعایت فاصله از آتش
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    نگهداری غذا در جای امن
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    تمیز نگه داشتن محیط
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                    رعایت سکوت شبانه
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-800 text-center">
              فعالیت‌های تفریحی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  فعالیت‌های روزانه
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    پیاده‌روی در طبیعت
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    عکاسی از مناظر
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    تماشای حیات وحش
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    جمع‌آوری هیزم
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  فعالیت‌های شبانه
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    تماشای ستارگان
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    داستان‌سرایی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    آواز خوانی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
                    بازی‌های گروهی
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

export default CampingTours;
