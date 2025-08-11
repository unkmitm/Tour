import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const TABS = [
  { id: "external", label: "تورهای خارجی" },
  { id: "internal", label: "تورهای داخلی" },
];

const CITIES = ["تهران", "شیراز", "اصفهان", "رشت", "تبریز"];
const COUNTRIES = [
  "ترکیه",
  "امارات",
  "ارمنستان",
  "آذربایجان",
  "قطر",
  "عمان",
  "گرجستان",
];

function SearchBox() {
  const navigate = useNavigate();

  const [tab, setTab] = useState("external");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [originOpen, setOriginOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [error, setError] = useState("");

  const isExternal = tab === "external";
  const destinationOptions = isExternal ? COUNTRIES : CITIES;
  const destinationPlaceholder = isExternal
    ? "انتخاب کشور مقصد"
    : "انتخاب شهر مقصد";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!origin || !destination) {
      setError("لطفاً مبدا و مقصد را انتخاب کنید.");
      return;
    }
    if (!CITIES.includes(origin)) {
      setError(
        "مبدا فقط از میان شهرهای مجاز است: تهران، شیراز، اصفهان، رشت، تبریز."
      );
      return;
    }
    if (!destinationOptions.includes(destination)) {
      setError(
        isExternal
          ? "کشور مقصد را از لیست انتخاب کنید."
          : "شهر مقصد را از لیست انتخاب کنید."
      );
      return;
    }
    if (!isExternal && origin === destination) {
      setError("انتخاب مبدا و مقصد یکسان مجاز نیست.");
      return;
    }

    setError("");
    navigate(
      `/search?type=${tab}&origin=${encodeURIComponent(
        origin
      )}&destination=${encodeURIComponent(destination)}`
    );
  };

  return (
    <div className="w-full flex justify-center -mt-20 z-10 relative font-persian">
      <div className="bg-white rounded-3xl shadow p-8 w-[90%] max-w-6xl flex flex-col gap-6 border border-gray-200">
        {/* Tabs (no bottom divider line) */}
        <div className="flex gap-8 pb-2 rtl">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`text-lg font-medium pb-2 transition-colors border-b-2 ${
                tab === t.id
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 border-transparent hover:text-blue-600"
              }`}
              onClick={() => {
                setTab(t.id);
                setDestination("");
                setOriginOpen(false);
                setDestinationOpen(false);
                setError("");
              }}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="flex gap-4 items-end rtl" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl px-10 py-3 text-lg font-bold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            جستجو
          </button>

          {/* Destination */}
          <div className="flex-1">
            <label className="block text-right text-gray-500 mb-1 pr-2">
              مقصد
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-between border rounded-xl px-4 py-3 text-right text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => {
                  setDestinationOpen((v) => !v);
                  setOriginOpen(false);
                }}
              >
                <span
                  className={destination ? "text-gray-900" : "text-gray-400"}
                >
                  {destination || destinationPlaceholder}
                </span>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </button>
              {destinationOpen && (
                <div className="absolute right-0 left-0 mt-2 bg-white border rounded-xl shadow-lg z-20 max-h-48 overflow-auto">
                  {destinationOptions.map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-right"
                      onClick={() => {
                        setDestination(opt);
                        setDestinationOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Origin */}
          <div className="flex-1">
            <label className="block text-right text-gray-500 mb-1 pr-2">
              مبدا
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-between border rounded-xl px-4 py-3 text-right text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => {
                  setOriginOpen((v) => !v);
                  setDestinationOpen(false);
                }}
              >
                <span className={origin ? "text-gray-900" : "text-gray-400"}>
                  {origin || "انتخاب شهر مبدا"}
                </span>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </button>
              {originOpen && (
                <div className="absolute right-0 left-0 mt-2 bg-white border rounded-xl shadow-lg z-20 max-h-48 overflow-auto">
                  {CITIES.map((city) => (
                    <div
                      key={city}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-right"
                      onClick={() => {
                        setOrigin(city);
                        setOriginOpen(false);
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>

        {error && (
          <div className="text-right text-sm text-red-600 pr-2">{error}</div>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
