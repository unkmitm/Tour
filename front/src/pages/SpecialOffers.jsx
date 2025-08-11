import {
  HeartIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const specialOffers = [
  {
    id: "turkey",
    title: "تور ترکیه",
    duration: "۹ شب و ۱۰ روز",
    date: "۱۴۰۳/۰۸/۱۸",
    originalPrice: "85,000,000",
    discountedPrice: "75,000,000",
    discount: "12%",
    remainingPeople: "5 نفر باقیمانده",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "uae",
    title: "تور امارات",
    duration: "۹ شب و ۱۰ روز",
    date: "۱۴۰۳/۰۸/۱۸",
    originalPrice: "85,000,000",
    discountedPrice: "75,000,000",
    discount: "12%",
    remainingPeople: "5 نفر باقیمانده",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "armenia",
    title: "تور ارمنستان",
    duration: "۹ شب و ۱۰ روز",
    date: "۱۴۰۳/۰۸/۱۸",
    originalPrice: "85,000,000",
    discountedPrice: "75,000,000",
    discount: "12%",
    remainingPeople: "5 نفر باقیمانده",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "georgia",
    title: "تور گرجستان",
    duration: "۹ شب و ۱۰ روز",
    date: "۱۴۰۳/۰۸/۱۸",
    originalPrice: "85,000,000",
    discountedPrice: "75,000,000",
    discount: "12%",
    remainingPeople: "5 نفر باقیمانده",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "azerbaijan",
    title: "تور آذربایجان",
    duration: "۹ شب و ۱۰ روز",
    date: "۱۴۰۳/۰۸/۱۸",
    originalPrice: "85,000,000",
    discountedPrice: "75,000,000",
    discount: "12%",
    remainingPeople: "5 نفر باقیمانده",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "qatar",
    title: "تور قطر",
    duration: "۹ شب و ۱۰ روز",
    date: "۱۴۰۳/۰۸/۱۸",
    originalPrice: "85,000,000",
    discountedPrice: "75,000,000",
    discount: "12%",
    remainingPeople: "5 نفر باقیمانده",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
];

function SpecialOffers() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

      // Calculate scroll progress
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Touch/swipe functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setDragScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = dragScrollLeft - walk;
  };

  // Touch event handlers for mobile devices
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setDragScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = dragScrollLeft - walk;
  };

  return (
    <div className="w-full bg-white py-8 font-persian rtl">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6 rtl">
          {/* Title with Icon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 text-right">
              پیشنهادات ویژه
            </h2>{" "}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 active:scale-95"
                  : "bg-gray-50 text-gray-300 cursor-not-allowed"
              }`}
              type="button"
              aria-label="Scroll left"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <Link
              to="/external"
              className="text-blue-600 font-medium cursor-pointer hover:text-blue-700 transition-colors"
            >
              مشاهده همه
            </Link>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 active:scale-95"
                  : "bg-gray-50 text-gray-300 cursor-not-allowed"
              }`}
              type="button"
              aria-label="Scroll right"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mb-4 overflow-hidden">
          <div
            className="bg-blue-600 h-1 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Tour Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide special-offers-scroll pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {specialOffers.map((offer, index) => (
            <Link
              key={offer.id}
              to={`/external/${offer.id}`}
              className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform block"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80";
                  }}
                />

                {/* Favorite Icon */}
                <button
                  className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors hover:scale-110"
                  type="button"
                  aria-label="Add to favorites"
                  onClick={(e) => e.preventDefault()}
                >
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                </button>

                {/* Badges */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    <ExclamationTriangleIcon className="w-3 h-3" />
                    {offer.remainingPeople}
                  </div>
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    {offer.discount} تخفیف
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 text-right">
                {" "}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2 justify-end">
                    <ClockIcon className="w-4 h-4" />
                    <span>{offer.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{offer.date}</span>
                  </div>
                </div>
                {/* Price Section */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-right">
                  <p className="text-sm text-gray-500 mb-1">شروع قیمت از</p>
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-lg font-bold text-blue-600">
                      {offer.discountedPrice} تومان
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {offer.originalPrice} تومان
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
