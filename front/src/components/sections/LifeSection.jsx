import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Feature = ({ bgColor, textColor, text }) => (
  <div className="flex items-center gap-3 flex-row-reverse">
    {" "}
    <div
      className={`${bgColor} w-8 h-8 rounded-full flex items-center justify-center`}
    >
      <span className={`${textColor} font-bold text-sm`}>✓</span>
    </div>
    <span className="text-gray-700 text-right">{text}</span>{" "}
  </div>
);

const Stat = ({ value, label, color }) => (
  <div className="text-center">
    <div className={`text-3xl font-bold ${color}`}>{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

const TourLink = ({ title, to }) => (
  <Link
    to={{ pathname: to, search: "?ref=homepage" }}
    className="flex items-center justify-between bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex-row-reverse"
  >
    <span className="text-lg font-semibold text-gray-800 text-right">
      {title}
    </span>
    <span className="text-gray-400">→</span>{" "}
  </Link>
);

function LifeSection() {
  const [isLiked, setIsLiked] = useState(false);

  const otherTours = [
    { title: "تور گرجستان", to: "/external/georgia" },
    { title: "تور استانبول", to: "/external/turkey" },
    { title: "تور امارات", to: "/external/uae" },
    { title: "تور جنگلی", to: "/internal/jungle" },
    { title: "تور آذزبایجان", to: "/external/azerbaijan" },
    { title: "تور امان", to: "/external/oman" },
    { title: "تور قطر", to: "/external/qatar" },
    { title: "تور جنوب", to: "/internal/south" },
  ];

  const features = [
    {
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      text: "تجربه‌های منحصر به فرد و شخصی‌سازی شده",
    },
    {
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      text: "راهنمایان محلی و متخصص",
    },
    {
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      text: "پشتیبانی ۲۴ ساعته در طول سفر",
    },
  ];

  const stats = [
    { value: "۱۰۰۰+", label: "مسافر راضی", color: "text-blue-600" },
    { value: "۵۰+", label: "مقصد مختلف", color: "text-green-600" },
    { value: "۹۸%", label: "رضایت مشتری", color: "text-purple-600" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 font-persian">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 rtl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            زندگی را تجربه کنید
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            با تریپ جت، لحظات خاطره‌انگیز را در کنار عزیزانتان رقم بزنید و
            تجربه‌های جدیدی را کشف کنید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="./src/assests/images/life.jpg"
              alt="زندگی و سفر"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <button
              onClick={() => setIsLiked(!isLiked)}
              aria-label="Add to favorites"
              type="button"
              className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLiked
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/80 text-gray-600 hover:bg-white"
              }`}
            >
              <HeartIcon
                className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`}
              />
            </button>

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
              <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-800">۴.۹</span>
            </div>
          </div>

          <div className="space-y-8 rtl">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-right">
                سفر به معنای واقعی
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                هر سفر داستان جدیدی است که باید روایت شود. با تریپ جت، شما نه
                تنها مقصد را می‌بینید، بلکه فرهنگ، مردم و روح آن سرزمین را نیز
                تجربه می‌کنید.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {features.map((feature, idx) => (
                <Feature key={idx} {...feature} />
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3">
                <a href="login" className="flex items-center gap-2">
                  <span>شروع سفر جدید</span>
                  <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, idx) => (
                <Stat key={idx} {...stat} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rtl">
          <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
            سایر تورهای تریپ جت
          </h3>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            برای افرادی که به تازگی پا به عرصه‌ی گردشگری گذاشته‌اند، سفر با تور
            بهترین گزینه است. راهنمایان تور، به خاطر تجربه‌های زیاد، اطلاعات
            دقیق از مقصد گردشگری دارند و شما را در شناخت بهتر مقصد همراهی
            می‌کنند. در این بخش می‌توانید برخی از محبوب‌ترین تورهای تریپ جت را
            ببینید.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherTours.map((tour, idx) => (
              <TourLink key={idx} {...tour} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeSection;
