import { Link, useLocation } from "react-router-dom";

const tourCategories = [
  { path: "jungle", title: "جنگلی", icon: "🌲" },
  { path: "south", title: "جنوب", icon: "🌅" },
  { path: "beach", title: "ساحلی", icon: "🏖️" },
  { path: "mountain", title: "کوه‌نوردی", icon: "⛰️" },
  { path: "north", title: "شمال", icon: "🌿" },
  { path: "camping", title: "کمپینگ", icon: "⛺" },
];

function TourNavigation() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  return (
    <div className="bg-white shadow-md border-b" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Back link */}
          <Link
            to="/internal"
            className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <span>←</span>
            <span>بازگشت به تورهای داخلی</span>
          </Link>

          {/* Categories */}
          <div className="flex items-center space-x-6 space-x-reverse">
            {tourCategories.map((category) => (
              <Link
                key={category.path}
                to={`/internal/${category.path}`}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPath === category.path
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourNavigation;
