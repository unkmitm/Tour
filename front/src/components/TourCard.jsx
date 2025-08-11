function TourCard({ tour }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      dir="rtl"
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white">
          <div className="text-4xl mb-2">🏔️</div>
          <div className="text-sm opacity-90">تصویر تور</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          {tour.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-green-600">{tour.price}</span>
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {tour.duration}
          </span>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">
            ویژگی‌های برجسته:
          </h4>
          <ul className="space-y-1">
            {tour.highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-center flex-row-reverse"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">شامل:</h4>
          <ul className="space-y-1">
            {tour.includes.map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-center flex-row-reverse"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
          رزرو تور
        </button>
      </div>
    </div>
  );
}

export default TourCard;
