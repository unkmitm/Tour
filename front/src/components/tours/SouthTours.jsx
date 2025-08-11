import TourNavigation from "../navigations/TourNavigation";
import TourCard from "../TourCard";
import SectionCard from "../common/SectionCard";
import InfoSection from "../data/infoSection";
import SouthData from "../data/SouthData";

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
            {SouthData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <SectionCard
            title="ویژگی‌های جنوب ایران"
            gradient="from-orange-50 to-red-50"
            textColor="text-orange-800"
            cols={3}
            items={[
              {
                icon: "🌅",
                bgColor: "bg-orange-100",
                title: "آب و هوای گرم",
                titleColor: "text-orange-700",
                description: "آب و هوای گرم و آفتابی در تمام طول سال",
              },
              {
                icon: "🏖️",
                bgColor: "bg-red-100",
                title: "سواحل زیبا",
                titleColor: "text-red-700",
                description: "سواحل شنی و مرجانی با آب‌های شفاف",
              },
              {
                icon: "🍽️",
                bgColor: "bg-yellow-100",
                title: "غذاهای محلی",
                titleColor: "text-yellow-700",
                description: "غذاهای خوشمزه و تازه دریایی",
              },
            ]}
          />

          <InfoSection
            title="فعالیت‌ها و زمان مناسب"
            fromColor="from-blue-50"
            toColor="to-cyan-50"
            textColor="text-blue-700"
            sections={[
              {
                heading: "ورزش‌های آبی",
                items: [
                  "غواصی در آب‌های شفاف",
                  "قایق‌سواری",
                  "ماهیگیری",
                  "شنا در دریا",
                ],
              },
              {
                heading: "بهترین زمان سفر",
                items: [
                  "پاییز تا بهار: هوای معتدل",
                  "زمستان: هوای گرم و آفتابی",
                  "تابستان: گرم اما زیبا",
                ],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default SouthTours;
