import TourNavigation from "../navigations/TourNavigation";
import TourCard from "../TourCard";
import SectionCard from "../common/SectionCard";
import BeachData from "../data/BeachData";
import InfoSection from "../data/infoSection";

function BeachTours() {
  return (
    <>
      <TourNavigation />
      <div className="rtl p-8 text-right">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BeachData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
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

          <InfoSection
            title="فعالیت‌های ساحلی"
            fromColor="from-teal-100"
            toColor="to-green-100"
            textColor="text-teal-700"
            sections={[
              {
                heading: "🌊 ورزش‌های آبی",
                items: [
                  "شنا در دریا 🏊‍♂️",
                  "غواصی 🤿",
                  "قایق‌سواری 🚤",
                  "ماهیگیری 🎣",
                ],
              },
              {
                heading: "🏖️ فعالیت‌های تفریحی",
                items: [
                  "آفتاب‌گرفتن ☀️",
                  "پیاده‌روی ساحلی 🚶‍♂️",
                  "عکاسی 📸",
                  "پیک‌نیک 🧺",
                ],
              },
            ]}
          />

          <InfoSection
            title="بهترین زمان سفر"
            fromColor="from-yellow-100"
            toColor="to-orange-100"
            textColor="text-yellow-700"
            sections={[
              { heading: "🌤️ فصول مناسب", items: ["تابستون ☀️", "بهار 🌸"] },
              {
                heading: "⚠️ نکات مهم",
                items: ["کرم ضد آفتاب 🧴", "آوردن غذا 🍱"],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default BeachTours;
