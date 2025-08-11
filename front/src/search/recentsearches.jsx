import { useState } from "react";
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const mockRecentSearches = [
  { id: 1, origin: "شیراز", destination: "آمریکا", type: "external" },
  { id: 2, origin: "تهران", destination: "ترکیه", type: "external" },
  { id: 3, origin: "اصفهان", destination: "امارات", type: "external" },
  { id: 4, origin: "مشهد", destination: "ارمنستان", type: "external" },
  { id: 5, origin: "تبریز", destination: "گرجستان", type: "external" },
  { id: 6, origin: "تهران", destination: "شیراز", type: "internal" },
  { id: 7, origin: "اصفهان", destination: "مشهد", type: "internal" },
  { id: 8, origin: "شیراز", destination: "کیش", type: "internal" },
];

function RecentSearches() {
  const [searches, setSearches] = useState(mockRecentSearches);

  const clearAll = () => {
    setSearches([]);
  };

  const handleSearchClick = (search) => {
    // Navigate to search results or pre-fill search box
    console.log("Search clicked:", search);
  };

  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4 rtl">
          {/* Title with icon */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <ArrowPathIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">جستجوهای اخیر</h3>
          </div>

          {/* Clear All Button */}
          <button
            onClick={clearAll}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
            type="button"
          >
            پاک کردن همه
          </button>
        </div>

        <div className="relative">
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors z-10">
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors z-10">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-10">
            {searches.map((search) => (
              <button
                key={search.id}
                onClick={() => handleSearchClick(search)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer whitespace-nowrap rtl"
                type="button"
              >
                <span className="text-gray-900 font-medium">
                  {search.origin}
                </span>
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-900 font-medium">
                  {search.destination}
                </span>
                {search.type === "external" && (
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    خارجی
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentSearches;
