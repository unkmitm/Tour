import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchBox from "./Search/SearchBox";
import RecentSearches from "./Search/RecentSearches";
import SpecialOffers from "./pages/SpecialOffers";
import LifeSection from "./components/sections/LifeSection";
import TourPage from "./pages/TourPage";
import CountryPage from "./pages/CountryPage";
import SearchResults from "./pages/SearchResults";
import DomesticTours from "./components/tours/DomesticTours";
import JungleTours from "./components/tours/JungleTours";
import SouthTours from "./components/tours/SouthTours";
import BeachTours from "./components/tours/BeachTours";
import MountainTours from "./components/tours/MountainTours";
import NorthTours from "./components/tours/NorthTours";
import CampingTours from "./components/tours/CampingTours";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <SearchBox />
      <RecentSearches />
      <SpecialOffers />
      <LifeSection />
      <Footer/>
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
