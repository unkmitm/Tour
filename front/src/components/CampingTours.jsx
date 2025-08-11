import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";
import BulletList from "./common/BulletList";
import SectionCard from "./common/SectionCard";
import CampingData from "./data/CampingData";

function CampingTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CampingData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <SectionCard
            title="ویژگی‌های کمپینگ در طبیعت"
            gradient="from-green-50 to-emerald-50"
            textColor="text-green-800"
            cols={3}
            items={[
              {
                icon: "🏕️",
                bgColor: "bg-green-100",
                title: "محیط‌های خفن",
                titleColor: "text-green-700",
                description:
                  "کمپینگ در جنگل‌ها، کویر و کوهستان با مناظر طبیعی ",
              },
              {
                icon: "🔥",
                bgColor: "bg-emerald-100",
                title: "آتیش بازی",
                titleColor: "text-emerald-700",
                description: "ایجاد فضای گرم و صمیمی دور آتش در شب‌های کمپینگ",
              },
              {
                icon: "🌌",
                bgColor: "bg-teal-100",
                title: "شب موندن زیر ستاره ها",
                titleColor: "text-teal-700",
                description: "تجربه‌ی تماشای آسمان پرستاره و آرامش طبیعت در شب",
              },
            ]}
          />

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
              تجهیزات کمپینگ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  تجهیزات اصلی
                </h3>
                <BulletList
                  items={["چادر کمپینگ", "کیسه خواب", "زیرانداز", "چراغ قوه"]}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  تجهیزات آشپزی
                </h3>
                <BulletList
                  items={["چادر کمپینگ", "کیسه خواب", "زیرانداز", "چراغ قوه"]}
                />
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
                <BulletList
                  items={["چادر کمپینگ", "کیسه خواب", "زیرانداز", "چراغ قوه"]}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  حین کمپینگ
                </h3>
                <BulletList
                  items={["چادر کمپینگ", "کیسه خواب", "زیرانداز", "چراغ قوه"]}
                />
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
                <BulletList
                  items={["چادر کمپینگ", "کیسه خواب", "زیرانداز", "چراغ قوه"]}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  فعالیت‌های شبانه
                </h3>
                <BulletList
                  items={["چادر کمپینگ", "کیسه خواب", "زیرانداز", "چراغ قوه"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampingTours;
