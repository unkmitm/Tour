import { Link } from "react-router-dom";

function TourCategories({ title, description, categories, basePath }) {
  return (
    <div className="rtl p-8 text-right">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`${basePath}/${category.id}`}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}
                >
                  <span className="text-6xl">{category.icon}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">مقاصد محبوب:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tours.slice(0, 3).map((tour, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tour}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      مشاهده تورها
                    </span>
                    <span className="text-gray-400 group-hover:text-blue-600 transition-colors">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">چرا تورهای ما؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">کیفیت بالا</h3>
              <p className="text-gray-600">تورهای با کیفیت و حرفه‌ای با بهترین خدمات</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">قیمت مناسب</h3>
              <p className="text-gray-600">قیمت‌های رقابتی و مناسب برای همه سلیقه‌ها</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">امنیت کامل</h3>
              <p className="text-gray-600">سفرهای امن و مطمئن با بیمه کامل</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCategories;
