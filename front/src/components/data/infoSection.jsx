import BulletList from "../common/BulletList";

function InfoSection({ title, fromColor, toColor, textColor, sections }) {
  return (
    <div
      className={`mt-12 bg-gradient-to-r ${fromColor} ${toColor} rounded-2xl p-8`}
    >
      <h2 className={`text-3xl font-bold mb-6 ${textColor} text-center`}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map(({ heading, items }, i) => (
          <div key={i}>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>
              {heading}
            </h3>
            <BulletList items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;