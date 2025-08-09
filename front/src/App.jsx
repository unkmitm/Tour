import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import SearchBox from "./SearchBox";

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
function JungleTour() {
  return <div className="p-8 text-center text-2xl">تورهای جنگلی</div>;
}
function SouthTour() {
  return <div className="p-8 text-center text-2xl">جنوب گردی</div>;
}
function BeachTour() {
  return <div className="p-8 text-center text-2xl">تورهای ساحلی</div>;
}
function MountainTour() {
  return <div className="p-8 text-center text-2xl">کوه‌نوردی</div>;
}
function NorthTour() {
  return <div className="p-8 text-center text-2xl">شمال</div>;
}
function CampingTour() {
  return <div className="p-8 text-center text-2xl">کمپینگ</div>;
}

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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal" element={<InternalTours />} />
        <Route path="/external" element={<ExternalTours />} />
        <Route path="/internal/jungle" element={<JungleTour />} />
        <Route path="/internal/south" element={<SouthTour />} />
        <Route path="/internal/beach" element={<BeachTour />} />
        <Route path="/internal/mountain" element={<MountainTour />} />
        <Route path="/internal/north" element={<NorthTour />} />
        <Route path="/internal/camping" element={<CampingTour />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
