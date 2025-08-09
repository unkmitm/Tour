import { Routes, Route } from "react-router-dom";
import Header from "./Header";

function Home() {
  return <div className="p-8 text-center text-2xl">صفحه اصلی</div>;
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
      </Routes>
    </>
  );
}

export default App;
