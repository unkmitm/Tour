function SectionCard({ title, gradient, textColor, items, cols = 3 }) { // DRY
  return (
    <div className={`mt-12 bg-gradient-to-br ${gradient} rounded-3xl p-10 shadow-lg`}>
      <p className={`text-4xl font-extrabold mb-10 ${textColor} text-center drop-shadow-sm`}>
        {title}
      </p>

      <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-8`}>
        {items.map((item, index) => (
          <div key={index} className="text-center">
            {/* Optional */}
            {item.icon && (
              <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}> 
                <span className="text-2xl">{item.icon}</span>
              </div>
            )}
            <h3 className={`text-xl font-semibold mb-2 ${item.titleColor}`}>
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionCard;
