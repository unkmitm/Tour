import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";
import BulletList from "./common/BulletList";
import SectionCard from "./common/SectionCard";

const beachTours = [
  {
    id: 1,
    name: "تور ساحل چابهار",
    duration: "یک روز",
    price: "2,200,000 تومان",
    highlights: ["ساحل شنی زیبا", "کوه‌های مریخی", "غروب آفتاب", "غذاهای محلی"],
    includes: [
      "اقامت در هتل ساحلی",
      "صبحانه و شام",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
  {
    id: 2,
    name: "تور ساحل کیش",
    duration: "یک روز",
    price: "1,900,000 تومان",
    highlights: ["ساحل مرجانی", "غواصی", "خرید", "تفریحات آبی"],
    includes: ["اقامت در هتل", "صبحانه", "تجهیزات غواصی", "راهنما", "بیمه"],
  },
  {
    id: 3,
    name: "تور ساحل هرمز",
    duration: "یک روز",
    price: "1,600,000 تومان",
    highlights: ["ساحل رنگی", "کوه‌های رنگی", "فرهنگ محلی", "غذاهای سنتی"],
    includes: [
      "اقامت در اقامتگاه بوم‌گردی",
      "صبحانه و شام",
      "راهنما",
      "حمل و نقل",
      "بیمه",
    ],
  },
];

const tours = beachTours.map((tour) => {
  return <TourCard key={tour.id} tour={tour} />;
});

function BeachTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours}
          </div>

          <SectionCard
            title="ویژگی‌های سواحل ایران"
            gradient="from-blue-50 to-cyan-50"
            textColor="text-blue-800"
            cols={3}
            items={[
              {
                icon: "🏖️",
                bgColor: "bg-blue-100",
                title: "سواحل متنوع",
                titleColor: "text-blue-700",
                description: "از سواحل شنی تا مرجانی با مناظر متفاوت",
              },
              {
                icon: "🌊",
                bgColor: "bg-cyan-100",
                title: "آب‌های شفاف",
                titleColor: "text-cyan-700",
                description: "آب‌های زلال و تمیز برای شنا و غواصی",
              },
              {
                icon: "🌅",
                bgColor: "bg-indigo-100",
                title: "غروب زیبا",
                titleColor: "text-indigo-700",
                description: "تماشای غروب آفتاب در کنار دریا",
              },
            ]}
          />

          <div className="mt-12 bg-gradient-to-br from-teal-100 via-teal-50 to-green-100 rounded-3xl p-10 shadow-lg">
            <p className="text-4xl font-extrabold mb-10 text-teal-900 text-center drop-shadow-sm">
              فعالیت‌های ساحلی
            </p>

            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md w-full max-w-sm text-center">
                <h3 className="text-2xl font-bold mb-6 text-teal-700">
                  🌊 ورزش‌های آبی
                </h3>
                <BulletList
                  items={[
                    "شنا در دریا 🏊‍♂️",
                    "غواصی 🤿",
                    "قایق‌سواری 🚤",
                    "ماهیگیری 🎣",
                  ]}
                />
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md w-full max-w-sm text-center">
                <h3 className="text-2xl font-bold mb-6 text-teal-700">
                  🏖️ فعالیت‌های تفریحی
                </h3>
                <BulletList
                  items={[
                    "آفتاب‌گرفتن ☀️",
                    "پیاده‌روی ساحلی 🚶‍♂️",
                    "عکاسی 📸",
                    "پیک‌نیک 🧺",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-yellow-100 via-yellow-50 to-orange-100 rounded-3xl p-10 shadow-lg">
            <p className="text-4xl font-extrabold mb-10 text-yellow-900 text-center drop-shadow-sm">
              بهترین زمان سفر
            </p>

            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md w-full max-w-sm text-center">
                <h3 className="text-2xl font-bold mb-6 text-yellow-700">
                  🌤️ فصول مناسب
                </h3>
                <BulletList items={["تابستون ☀️", "بهار 🌸"]} />
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md w-full max-w-sm text-center">
                <h3 className="text-2xl font-bold mb-6 text-yellow-700">
                  ⚠️ نکات مهم
                </h3>
                <BulletList items={["کرم ضد آفتاب 🧴", "آوردن غذا 🍱"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeachTours;
