import { useState, useEffect, useRef } from "react";
import {
  ChevronDownIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./pages/Dropdown";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "تورهای داخلی",
    id: "internal",
    path: "/internal",
    dropdown: [
      { label: "تورهای جنگلی", icon: "🌴", path: "/internal/jungle" },
      { label: "جنوب گردی", icon: "🌞", path: "/internal/south" },
      { label: "ساحلی", icon: "🏖️", path: "/internal/beach" },
      { label: "کوه‌نوردی", icon: "🏔️", path: "/internal/mountain" },
      { label: "شمال", icon: "🧭", path: "/internal/north" },
      { label: "کمپینگ", icon: "⛺", path: "/internal/camping" },
    ],
  },
  {
    label: "تورهای خارجی",
    id: "external",
    path: "/external",
    dropdown: [
      { label: "ترکیه", icon: "🇹🇷", path: "/external/turkey" },
      { label: "امارات", icon: "🇦🇪", path: "/external/uae" },
      { label: "ارمنستان", icon: "🇦🇲", path: "/external/armenia" },
      { label: "آذربایجان", icon: "🇦🇿", path: "/external/azerbaijan" },
      { label: "قطر", icon: "🇶🇦", path: "/external/qatar" },
      { label: "عمان", icon: "🇴🇲", path: "/external/oman" },
      { label: "گرجستان", icon: "🇬🇪", path: "/external/georgia" },
    ],
  },
];

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // Close dropdown when clicking outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleNavClick = (item) => {
    if (item.dropdown.length > 0) {
      handleDropdown(item.id);
    } else {
      setOpenDropdown(null);
      navigate(item.path);
    }
  };

  const handleDropdownItemClick = (path) => {
    setOpenDropdown(null);
    navigate(path);
  };

  return (
    <div
      ref={headerRef}
      className="w-full bg-white shadow flex flex-col rtl font-persian"
    >
      <header className="flex items-center justify-between px-6 py-3 border-b">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-yellow-400">📍</span>
          <Link to="/" className="text-2xl font-bold text-blue-700">
            تریپ چت
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  openDropdown === item.id
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleNavClick(item)}
                type="button"
              >
                <span>{item.label}</span>
                {item.dropdown.length > 0 && (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
              {item.dropdown.length > 0 && (
                <Dropdown
                  open={openDropdown === item.id}
                  items={item.dropdown}
                  onItemClick={handleDropdownItemClick}
                  onClose={() => setOpenDropdown(null)}
                />
              )}
            </div>
          ))}
          <a href="#" className="flex justify-around gap-10">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-700">
              <UserIcon className="w-5 h-5" /> ورود / ثبت نام
              </span>
            <span className="flex items-center gap-1 px-3 py-2 bg-blue-50 rounded-lg text-blue-700">
              <PhoneIcon className="w-5 h-5" /> 09392187181
            </span>
          </a>
        </nav>
      </header>
      {/* Hero image placeholder */}
      <div
        className="w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)",
        }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          با تریپ چت، سفر با شماست!
        </h1>
      </div>
    </div>
  );
}

export default Header;
