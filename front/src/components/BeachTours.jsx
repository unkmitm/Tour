import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";
import BulletList from "./Bulletlist";

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
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-blue-800">
              تورهای ساحلی ایران
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              لذت بردن از زیبایی‌های ساحل و دریا. از سواحل شنی جنوب تا سواحل
              مرجانی خلیج فارس، لحظات آرامش‌بخشی را تجربه کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <p className="text-3xl font-bold mb-6 text-blue-800 text-center">
              ویژگی‌های سواحل ایران
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  سواحل متنوع
                </h3>
                <p className="text-gray-600">
                  از سواحل شنی تا مرجانی با مناظر متفاوت
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">
                  آب‌های شفاف
                </h3>
                <p className="text-gray-600">
                  آب‌های زلال و تمیز برای شنا و غواصی
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  غروب زیبا
                </h3>
                <p className="text-gray-600">تماشای غروب آفتاب در کنار دریا</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8">
            <p className="text-3xl font-bold mb-6 text-teal-800 text-center">
              فعالیت‌های ساحلی
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-700">
                  ورزش‌های آبی
                </h3>
                <BulletList
                  items={["شنا در دریا", "غواصی", "قایق‌سواری", "ماهیگیری"]}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-700">
                  فعالیت‌های تفریحی
                </h3>
                <BulletList
                  items={["شنا در دریا", "غواصی", "قایق‌سواری", "ماهیگیری"]} // Add Your Own list
                />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
            <p className="text-3xl font-bold mb-6 text-yellow-800 text-center">
              بهترین زمان سفر
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  فصول مناسب
                </h3>
                <BulletList items={["تابستون", "بهار"]} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  نکات مهم
                </h3> 
                <BulletList
                  items={["کرم ضد آفتاب" , "آوردن غذا"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeachTours;
