import { useParams, Link } from "react-router-dom";
import {
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  HeartIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

// Mock data for country tours
const countryTours = {
  turkey: {
    name: "ترکیه",
    flag: "🇹🇷",
    description: "کشور زیبای ترکیه با تاریخی غنی و مناظر طبیعی فوق‌العاده",
    tours: [
      {
        id: 1,
        title: "تور استانبول و کاپادوکیا",
        duration: "۷ شب و ۸ روز",
        price: "45,000,000",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=400&q=80",
        highlights: ["کاخ توپکاپی", "مسجد آبی", "کاپادوکیا", "هات بالون"],
        departure: "۱۴۰۳/۰۹/۱۵",
        return: "۱۴۰۳/۰۹/۲۳",
      },
      {
        id: 2,
        title: "تور آنتالیا و بدروم",
        duration: "۵ شب و ۶ روز",
        price: "38,000,000",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
        highlights: [
          "ساحل مدیترانه",
          "قلعه بدروم",
          "موزه زیر آب",
          "کشتی‌سواری",
        ],
        departure: "۱۴۰۳/۰۹/۲۰",
        return: "۱۴۰۳/۰۹/۲۶",
      },
      {
        id: 3,
        title: "تور کامل ترکیه",
        duration: "۱۲ شب و ۱۳ روز",
        price: "75,000,000",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
        highlights: ["استانبول", "کاپادوکیا", "آنتالیا", "بدروم", "ازمیر"],
        departure: "۱۴۰۳/۱۰/۰۱",
        return: "۱۴۰۳/۱۰/۱۴",
      },
    ],
  },
  uae: {
    name: "امارات متحده عربی",
    flag: "🇦🇪",
    description: "سرزمین آسمان‌خراش‌ها و تجارت مدرن",
    tours: [
      {
        id: 1,
        title: "تور دبی و ابوظبی",
        duration: "۵ شب و ۶ روز",
        price: "42,000,000",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
        highlights: ["برج خلیفه", "جزیره پالم", "مسجد شیخ زاید", "ساحل جومیرا"],
        departure: "۱۴۰۳/۰۹/۱۸",
        return: "۱۴۰۳/۰۹/۲۴",
      },
    ],
  },
  armenia: {
    name: "ارمنستان",
    flag: "🇦🇲",
    description: "کشور باستانی با کلیساهای تاریخی و مناظر کوهستانی",
    tours: [
      {
        id: 1,
        title: "تور ایروان و گارنی",
        duration: "۴ شب و ۵ روز",
        price: "28,000,000",
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=400&q=80",
        highlights: [
          "کلیسای اچمیادزین",
          "معبد گارنی",
          "موزه تاریخ",
          "کوه آرارات",
        ],
        departure: "۱۴۰۳/۰۹/۲۵",
        return: "۱۴۰۳/۰۹/۳۰",
      },
    ],
  },
  georgia: {
    name: "گرجستان",
    flag: "🇬🇪",
    description: "سرزمین شراب و کوه‌های قفقاز",
    tours: [
      {
        id: 1,
        title: "تور تفلیس و باتومی",
        duration: "۶ شب و ۷ روز",
        price: "32,000,000",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=400&q=80",
        highlights: [
          "کلیسای جامع تثلیث",
          "قلعه ناریکالا",
          "ساحل باتومی",
          "کوه کازبک",
        ],
        departure: "۱۴۰۳/۱۰/۰۵",
        return: "۱۴۰۳/۱۰/۱۲",
      },
    ],
  },
};

function CountryPage() {
  const { country } = useParams();
  const countryData = countryTours[country];

  if (!countryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center font-persian">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            کشور یافت نشد
          </h1>
          <Link
            to="/external"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            بازگشت به تورهای خارجی
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-persian">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 rtl">
            <Link
              to="/external"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>بازگشت به تورهای خارجی</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">{countryData.flag}</div>
          <h1 className="text-4xl font-bold mb-4">{countryData.name}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {countryData.description}
          </p>
        </div>
      </div>

      {/* Tours Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 rtl">
            <h2 className="text-3xl font-bold text-gray-900">
              تورهای {countryData.name}
            </h2>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-5 h-5" />
              <span>{countryData.tours.length} تور موجود</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <HeartIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    <StarIcon className="w-3 h-3" />
                    {tour.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 rtl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tour.title}
                  </h3>

                  {/* Tour Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <ClockIcon className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarIcon className="w-4 h-4" />
                      <span>خروج: {tour.departure}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarIcon className="w-4 h-4" />
                      <span>بازگشت: {tour.return}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      نکات برجسته:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">
                        {tour.price}
                      </span>
                      <span className="text-gray-500">تومان</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      رزرو تور
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            اطلاعات تکمیلی {countryData.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">موقعیت جغرافیایی</h4>
              <p className="text-gray-600 text-sm">
                {countryData.name} در منطقه‌ای استراتژیک قرار دارد و دسترسی
                آسانی به سایر کشورها دارد.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">بهترین زمان سفر</h4>
              <p className="text-gray-600 text-sm">
                فصل‌های بهار و پاییز بهترین زمان برای بازدید از{" "}
                {countryData.name} است.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">هزینه سفر</h4>
              <p className="text-gray-600 text-sm">
                هزینه‌های سفر به {countryData.name} نسبت به سایر کشورهای اروپایی
                مقرون به صرفه است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
