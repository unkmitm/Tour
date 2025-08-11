import { Routes, Route } from "react-router-dom";
import {
  Header,
  SearchBox,
  RecentSearches,
  SpecialOffers,
  LifeSection,
  CountryPage,
  SearchResults,
  DomesticTours,
  InternationalToursPage,
  JungleTours,
  SouthTours,
  BeachTours,
  MountainTours,
  NorthTours,
  CampingTours,
  Footer,
  Login,
  SignUp,
} from "./Imports";
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
        <Route path="/external" element={<InternationalToursPage />} />
        <Route path="/external/:country" element={<CountryPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
