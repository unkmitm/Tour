import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchBox from "./SearchBox";
import RecentSearches from "./RecentSearches";
import SpecialOffers from "./SpecialOffers";
import LifeSection from "./LifeSection";
import TourPage from "./pages/TourPage";
import CountryPage from "./pages/CountryPage";
import SearchResults from "./pages/SearchResults";

function Home() {
  return (
    <>
      <SearchBox />
      <RecentSearches />
      <SpecialOffers />
      <LifeSection />
    </>
  );
}

const internalTours = [
  { path: "jungle", title: "تورهای جنگلی" },
  { path: "south", title: "جنوب گردی" },
  { path: "beach", title: "تورهای ساحلی" },
  { path: "mountain", title: "کوه‌نوردی" },
  { path: "north", title: "شمال" },
  { path: "camping", title: "کمپینگ" },
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal" element={<TourPage title="تورهای داخلی" />} />
        <Route path="/external" element={<TourPage title="تورهای خارجی" />} />
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
