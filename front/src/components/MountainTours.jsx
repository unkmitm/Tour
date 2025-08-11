import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";

const mountainTours = [
  {
    id: 1,
    name: "تور قله دماوند",
    duration: "5 روز و 4 شب",
    price: "4,500,000 تومان",
    highlights: ["صعود به قله", "منظره کوهستان", "کمپینگ", "عکاسی"],
    includes: [
      "اقامت در کمپ",
      "تمام وعده‌ها",
      "تجهیزات کوه‌نوردی",
      "راهنمای حرفه‌ای",
      "بیمه",
    ],
  },
  {
    id: 2,
    name: "تور کوه‌های زاگرس",
    duration: "4 روز و 3 شب",
    price: "3,800,000 تومان",
    highlights: ["پیاده‌روی", "منظره دره‌ها", "فرهنگ محلی", "طبیعت بکر"],
    includes: [
      "اقامت در اقامتگاه",
      "صبحانه و شام",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
  {
    id: 3,
    name: "تور کوه‌های البرز",
    duration: "3 روز و 2 شب",
    price: "2,900,000 تومان",
    highlights: ["کوه‌نوردی", "منظره تهران", "هوای پاک", "فعالیت‌های ورزشی"],
    includes: ["اقامت در کلبه", "صبحانه و شام", "راهنما", "تجهیزات", "بیمه"],
  },
];

function MountainTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              کوه‌نوردی ایران
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ماجراجویی در ارتفاعات و قله‌های ایران. از قله دماوند تا کوه‌های
              زاگرس، تجربه‌ای هیجان‌انگیز و فراموش‌نشدنی خواهید داشت.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mountainTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              ویژگی‌های کوه‌نوردی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⛰️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  مناظر زیبا
                </h3>
                <p className="text-gray-600">تماشای مناظر کوهستانی و دره‌ها</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌲</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-700">
                  طبیعت بکر
                </h3>
                <p className="text-gray-600">تجربه طبیعت دست‌نخورده و زیبا</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-700">
                  فعالیت ورزشی
                </h3>
                <p className="text-gray-600">
                  ورزش و فعالیت در هوای پاک کوهستان
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
              سطح‌بندی تورها
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🟢</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  مبتدی
                </h3>
                <p className="text-gray-600">مناسب برای افراد تازه‌کار</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🟡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">
                  متوسط
                </h3>
                <p className="text-gray-600">نیاز به تجربه قبلی دارد</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔴</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-red-700">
                  پیشرفته
                </h3>
                <p className="text-gray-600">فقط برای کوه‌نوردان حرفه‌ای</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
              تجهیزات مورد نیاز
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  تجهیزات شخصی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    کفش کوه‌نوردی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    لباس مناسب
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    کوله پشتی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    بطری آب
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  تجهیزات گروهی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    چادر کمپینگ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    طناب و کارابین
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    نقشه و قطب‌نما
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                    جعبه کمک‌های اولیه
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 text-center">
              نکات ایمنی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  قبل از سفر
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    بررسی وضعیت آب و هوا
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    اطلاع از مسیر
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    آمادگی جسمانی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    همراهی با گروه
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  حین سفر
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    رعایت سرعت مناسب
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    نوشیدن آب کافی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    توجه به علائم خستگی
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    تماس با راهنما در صورت مشکل
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

export default MountainTours;
