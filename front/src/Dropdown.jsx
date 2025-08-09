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
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-4 z-20 text-right"
    >
      {items.map((d, i) => (
        <button
          key={i}
          className="flex items-center gap-2 px-6 py-2 hover:bg-gray-50 cursor-pointer w-full text-right"
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
