import TourCard from "../TourCard";
import SectionCard from "../common/SectionCard";
import InfoSection from "../data/infoSection";
import MountainData from "../data/MountainData";
import TourNavigation from "../navigations/TourNavigation";

const personalEquipments = [
  "کفش کوه‌نوردی",
  "لباس مناسب",
  "کوله پشتی",
  "بطری آب",
];

const groupEquipments = [
  "چادر کمپینگ",
  "طناب و کارابین",
  "نقشه و قطب‌نما",
  "جعبه کمک‌های اولیه",
];

const safetyBefore = [
  "بررسی وضعیت آب و هوا",
  "اطلاع از مسیر",
  "آمادگی جسمانی",
  "همراهی با گروه",
];

const safetyDuring = [
  "رعایت سرعت مناسب",
  "نوشیدن آب کافی",
  "توجه به علائم خستگی",
  "تماس با راهنما در صورت مشکل",
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
            {MountainData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <SectionCard
            title="ویژگی‌های کوه‌نوردی"
            gradient="from-gray-50 to-slate-50"
            textColor="text-gray-800"
            cols={3}
            items={[
              {
                icon: "⛰️",
                bgColor: "bg-gray-100",
                title: "مناظر زیبا",
                titleColor: "text-gray-700",
                description: "تماشای مناظر کوهستانی و دره‌ها",
              },
              {
                icon: "🌲",
                bgColor: "bg-slate-100",
                title: "طبیعت بکر",
                titleColor: "text-slate-700",
                description: "تجربه طبیعت دست‌نخورده و زیبا",
              },
              {
                icon: "🏃",
                bgColor: "bg-zinc-100",
                title: "فعالیت ورزشی",
                titleColor: "text-zinc-700",
                description: "ورزش و فعالیت در هوای پاک کوهستان",
              },
            ]}
          />

          <InfoSection
            title="تجهیزات مورد نیاز"
            fromColor="from-green-50"
            toColor="to-emerald-50"
            textColor="text-green-700"
            sections={[
              { heading: "تجهیزات شخصی", items: personalEquipments },
              { heading: "تجهیزات گروهی", items: groupEquipments },
            ]}
          />

          <InfoSection
            title="نکات ایمنی"
            fromColor="from-purple-50"
            toColor="to-violet-50"
            textColor="text-purple-700"
            sections={[
              { heading: "قبل از سفر", items: safetyBefore },
              { heading: "حین سفر", items: safetyDuring },
            ]}
          />

          <SectionCard
            title="سطح‌بندی تورها"
            gradient="from-blue-50 to-indigo-50"
            textColor="text-blue-800"
            cols={3}
            items={[
              {
                icon: "🟢",
                bgColor: "bg-blue-100",
                title: "مبتدی",
                titleColor: "text-blue-700",
                description: "مناسب برای افراد تازه‌کار",
              },
              {
                icon: "🟡",
                bgColor: "bg-yellow-100",
                title: "متوسط",
                titleColor: "text-yellow-700",
                description: "نیاز به تجربه قبلی دارد",
              },
              {
                icon: "🔴",
                bgColor: "bg-red-100",
                title: "پیشرفته",
                titleColor: "text-red-700",
                description: "فقط برای کوه‌نوردان حرفه‌ای",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default MountainTours;
