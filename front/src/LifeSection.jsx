import { useState } from "react";
import {
  HeartIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

function LifeSection() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 font-persian">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 rtl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            زندگی را تجربه کنید
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            با تریپ چت، لحظات خاطره‌انگیز را در کنار عزیزانتان رقم بزنید و
            تجربه‌های جدیدی را کشف کنید
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/src/images/life.jpg"
                alt="زندگی و سفر"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay with like button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isLiked
                      ? "bg-red-500 text-white shadow-lg"
                      : "bg-white/80 text-gray-600 hover:bg-white"
                  }`}
                  type="button"
                  aria-label="Add to favorites"
                >
                  <HeartIcon
                    className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`}
                  />
                </button>
              </div>
              {/* Rating badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
                <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-800">۴.۹</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 rtl">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                سفر به معنای واقعی
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                هر سفر داستان جدیدی است که باید روایت شود. با تریپ چت، شما نه
                تنها مقصد را می‌بینید، بلکه فرهنگ، مردم و روح آن سرزمین را نیز
                تجربه می‌کنید.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  تجربه‌های منحصر به فرد و شخصی‌سازی شده
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">راهنمایان محلی و متخصص</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  پشتیبانی ۲۴ ساعته در طول سفر
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 rtl">
                <span>شروع سفر جدید</span>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">۱۰۰۰+</div>
                <div className="text-gray-600 text-sm">مسافر راضی</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">۵۰+</div>
                <div className="text-gray-600 text-sm">مقصد مختلف</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">۹۸%</div>
                <div className="text-gray-600 text-sm">رضایت مشتری</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeSection;
