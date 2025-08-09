import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  HeartIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

// Mock search results data
const mockSearchResults = [
  {
    id: 1,
    title: "تور استانبول و کاپادوکیا",
    type: "external",
    origin: "تهران",
    destination: "ترکیه",
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
    title: "تور شیراز و اصفهان",
    type: "internal",
    origin: "تهران",
    destination: "شیراز",
    duration: "۵ شب و ۶ روز",
    price: "18,000,000",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    highlights: ["تخت جمشید", "پاسارگاد", "شاهچراغ", "باغ ارم"],
    departure: "۱۴۰۳/۰۹/۲۰",
    return: "۱۴۰۳/۰۹/۲۶",
  },
  {
    id: 3,
    title: "تور دبی و ابوظبی",
    type: "external",
    origin: "شیراز",
    destination: "امارات",
    duration: "۵ شب و ۶ روز",
    price: "42,000,000",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    highlights: ["برج خلیفه", "جزیره پالم", "مسجد شیخ زاید", "ساحل جومیرا"],
    departure: "۱۴۰۳/۰۹/۱۸",
    return: "۱۴۰۳/۰۹/۲۴",
  },
];

function SearchResults() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");

  // Filter results based on search criteria
  const filteredResults = mockSearchResults.filter((result) => {
    if (type && result.type !== type) return false;
    if (origin && result.origin !== origin) return false;
    if (destination && result.destination !== destination) return false;
    return true;
  });

  const getTypeLabel = (type) => {
    return type === "external" ? "خارجی" : "داخلی";
  };

  const getTypeColor = (type) => {
    return type === "external"
      ? "bg-blue-100 text-blue-800"
      : "bg-green-100 text-green-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-persian">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between rtl">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
            <div className="text-sm text-gray-500">
              {filteredResults.length} نتیجه یافت شد
            </div>
          </div>
        </div>
      </div>

      {/* Search Summary */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              نتایج جستجو
            </h1>
            <div className="flex items-center justify-center gap-4 text-lg text-gray-600 rtl">
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-blue-600" />
                {origin}
              </span>
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-green-600" />
                {destination}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                  type
                )}`}
              >
                {getTypeLabel(type)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {filteredResults.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                نتیجه‌ای یافت نشد
              </h3>
              <p className="text-gray-600 mb-6">
                متأسفانه هیچ توری با این مشخصات یافت نشد. لطفاً معیارهای جستجو
                را تغییر دهید.
              </p>
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                جستجوی جدید
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                      <HeartIcon className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                      <StarIcon className="w-3 h-3" />
                      {result.rating}
                    </div>
                    <div
                      className={`absolute bottom-3 right-3 px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(
                        result.type
                      )}`}
                    >
                      {getTypeLabel(result.type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 rtl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {result.title}
                    </h3>

                    {/* Route Info */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <span>{result.origin}</span>
                      <div className="w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <span>{result.destination}</span>
                    </div>

                    {/* Tour Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <ClockIcon className="w-4 h-4" />
                        <span>{result.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <CalendarIcon className="w-4 h-4" />
                        <span>خروج: {result.departure}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <CalendarIcon className="w-4 h-4" />
                        <span>بازگشت: {result.return}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        نکات برجسته:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.highlights.map((highlight, index) => (
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
                          {result.price}
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
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
