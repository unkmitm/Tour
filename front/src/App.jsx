import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import SearchBox from "./SearchBox";
import TourPage from "./pages/TourPage";

function Home() {
  return (
    <>
      <SearchBox />
      <div className="p-8 text-center text-2xl">صفحه اصلی</div>
    </>
  );
}
function InternalTours() {
  return <div className="p-8 text-center text-2xl">تورهای داخلی</div>;
}
function ExternalTours() {
  return <div className="p-8 text-center text-2xl">تورهای خارجی</div>;
}

const internalTours = [
  { path: "jungle", title: "تورهای جنگلی" },
  { path: "south", title: "جنوب گردی" },
  { path: "beach", title: "تورهای ساحلی" },
  { path: "mountain", title: "کوه‌نوردی" },
  { path: "north", title: "شمال" },
  { path: "camping", title: "کمپینگ" },
];

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

function SearchResults() {
  const query = useQuery();
  const type = query.get("type");
  const origin = query.get("origin");
  const destination = query.get("destination");

  return (
    <div className="rtl p-8 text-right">
      <h2 className="text-2xl font-bold mb-4">نتایج جستجو</h2>
      <div className="space-y-2 text-lg">
        <div>
          <span className="text-gray-500">نوع تور: </span>
          <span className="font-medium">
            {type === "internal" ? "داخلی" : "خارجی"}
          </span>
        </div>
        <div>
          <span className="text-gray-500">مبدا: </span>
          <span className="font-medium">{origin}</span>
        </div>
        <div>
          <span className="text-gray-500">مقصد: </span>
          <span className="font-medium">{destination}</span>
        </div>
      </div>
    </div>
  );
}

function CountryPage() {
  const { country } = useParams();
  const names = {
    turkey: "ترکیه",
    uae: "امارات",
    armenia: "ارمنستان",
    azerbaijan: "آذربایجان",
    qatar: "قطر",
    oman: "عمان",
    georgia: "گرجستان",
  };
  const name = names[country] || country;
  return <div className="rtl p-8 text-right text-2xl">صفحه تورهای {name}</div>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal" element={<InternalTours />} />
        <Route path="/external" element={<ExternalTours />} />
        {internalTours.map((tour) => (
          <Route
            key={tour.path}
            path={`/internal/${tour.path}`}
            element={<TourPage title={tour.title} />}
          />
        ))}
        <Route path="/external/:country" element={<CountryPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
