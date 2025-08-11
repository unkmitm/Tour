import { useEffect, useRef } from "react";

function Dropdown({ open, items, onClose, onItemClick }) {
  const ref = useRef();

  useEffect(() => {
    if (!open) return;

    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-4 z-20 text-right border border-gray-200"
    >
      {items.map((d, i) => (
        <button
          key={i}
          className="flex items-center gap-2 px-6 py-2 hover:bg-gray-50 cursor-pointer w-full text-right transition-colors"
          onClick={() => onItemClick && onItemClick(d.path)}
          type="button"
        >
          <span className="text-xl">{d.icon}</span>
          <span className="flex-1">{d.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Dropdown;
