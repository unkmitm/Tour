import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";
import SectionCard from "./common/SectionCard";
import CampingData from "./data/CampingData";
import InfoSection from "./data/infoSection";

const campingMainEquipments = [
  "چادر کمپینگ",
  "کیسه خواب",
  "زیرانداز",
  "چراغ قوه",
];
const campingCookingEquipments = [
  "گاز پیک‌نیکی",
  "ظروف آشپزی",
  "کبریت",
  "منقل",
];
const safetyBeforeTrip = [
  "آب کافی همراه داشته باشید",
  "اطلاع دادن به نزدیکان",
  "چک کردن تجهیزات",
];
const safetyDuringCamping = [
  "آتش را کنترل کنید",
  "محل کمپ را تمیز نگه دارید",
  "از حیوانات وحشی دوری کنید",
];
const dailyActivities = ["پیاده‌روی", "شنا", "عکاسی"];
const nightActivities = ["تماشای ستارگان", "آتش‌بازی", "قصه‌گویی"];

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
                description: "کمپینگ در جنگل‌ها، کویر و کوهستان با مناظر طبیعی",
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

          <InfoSection
            title="تجهیزات کمپینگ"
            fromColor="from-blue-50"
            toColor="to-cyan-50"
            textColor="text-blue-700"
            sections={[
              { heading: "تجهیزات اصلی", items: campingMainEquipments },
              { heading: "تجهیزات آشپزی", items: campingCookingEquipments },
            ]}
          />

          <InfoSection
            title="نکات ایمنی"
            fromColor="from-orange-50"
            toColor="to-red-50"
            textColor="text-orange-700"
            sections={[
              { heading: "قبل از سفر", items: safetyBeforeTrip },
              { heading: "حین کمپینگ", items: safetyDuringCamping },
            ]}
          />

          <InfoSection
            title="فعالیت‌های تفریحی"
            fromColor="from-yellow-50"
            toColor="to-amber-50"
            textColor="text-yellow-700"
            sections={[
              { heading: "فعالیت‌های روزانه", items: dailyActivities },
              { heading: "فعالیت‌های شبانه", items: nightActivities },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default CampingTours;
