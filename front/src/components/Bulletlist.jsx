function BulletList({ items, color }) {
  return (
    <ul className="space-y-2 text-gray-700">
      {items.map((text, index) => (
        <li key={index} className="flex items-center">
          <span className={`w-2 h-2 ${color} rounded-full ml-2`}></span>
          {text}
        </li>
      ))}
    </ul>
  );
}

// BulletList component For Clean Code
export default BulletList;
