import TourNavigation from "./TourNavigation";
import TourCard from "./TourCard";
import SectionCard from "./common/SectionCard";
import InfoSection from "./data/infoSection";
import JungleData from "./data/JungleData";

const jungleBenefits = [
  "هوای پاک و تازه",
  "آرامش و دوری از شلوغی شهر",
  "تماشای حیات وحش",
  "فعالیت‌های ورزشی در طبیعت",
];

const jungleBestSeasons = [
  "بهار: شکوفه‌ها و هوای معتدل",
  "تابستان: هوای خنک و سرسبزی",
  "پاییز: رنگ‌های زیبا و هوای خنک",
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
            {JungleData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <SectionCard
            title="چرا تورهای جنگلی؟"
            gradient="from-green-50 to-emerald-50"
            textColor="text-green-800"
            cols={3}
            items={[
              {
                icon: "🌿",
                bgColor: "bg-green-100",
                title: "هوای پاک",
                titleColor: "text-green-700",
                description: "نفس کشیدن در هوای تمیز و تازه جنگل",
              },
              {
                icon: "🦌",
                bgColor: "bg-emerald-100",
                title: "حیات وحش",
                titleColor: "text-emerald-700",
                description: "تماشای گونه‌های جانوری در زیستگاه طبیعی",
              },
              {
                icon: "🧘‍♂️",
                bgColor: "bg-teal-100",
                title: "آرامش",
                titleColor: "text-teal-700",
                description: "دوری از شلوغی شهر و آرامش عمیق طبیعت",
              },
            ]}
          />

          <InfoSection
            title="اطلاعات سفر"
            fromColor="from-green-50"
            toColor="to-emerald-50"
            textColor="text-green-700"
            sections={[
              { heading: "مزایای سفر به جنگل", items: jungleBenefits },
              { heading: "بهترین زمان سفر", items: jungleBestSeasons },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default JungleTours;
