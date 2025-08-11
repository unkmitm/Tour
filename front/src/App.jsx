import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchBox from "./SearchBox";
import RecentSearches from "./RecentSearches";
import SpecialOffers from "./SpecialOffers";
import LifeSection from "./LifeSection";
import TourPage from "./pages/TourPage";
import CountryPage from "./pages/CountryPage";
import SearchResults from "./pages/SearchResults";
import DomesticTours from "./components/DomesticTours";
import JungleTours from "./components/JungleTours";
import SouthTours from "./components/SouthTours";
import BeachTours from "./components/BeachTours";
import MountainTours from "./components/MountainTours";
import NorthTours from "./components/NorthTours";
import CampingTours from "./components/CampingTours";

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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal" element={<DomesticTours />} />
        <Route path="/internal/jungle" element={<JungleTours />} />
        <Route path="/internal/south" element={<SouthTours />} />
        <Route path="/internal/beach" element={<BeachTours />} />
        <Route path="/internal/mountain" element={<MountainTours />} />
        <Route path="/internal/north" element={<NorthTours />} />
        <Route path="/internal/camping" element={<CampingTours />} />
        <Route path="/external" element={<TourPage title="تورهای خارجی" />} />
        <Route path="/external/:country" element={<CountryPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
