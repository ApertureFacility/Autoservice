import { timelineItems } from "./data/TimelineMassive.ts";

export default function TimelineSection() {
  const items = timelineItems;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Этапы процесса
      </h2>

      {/* === ДЕСКТОПНАЯ ВЕРСИЯ (только sm и выше) === */}
      <div className="hidden sm:flex flex-row justify-between gap-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative flex-1 flex flex-col items-center text-center"
          >
            {/* Точка */}
            <div className="w-5 h-5 rounded-full bg-[#C38B56] ring-4 ring-white shadow-md mb-4" />

            <h3 className="text-lg font-medium whitespace-pre-line">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* === МОБИЛЬНАЯ ВЕРСИЯ (только до sm) === */}
      <div className="sm:hidden mt-10 pl-6 border-l border-gray-200">
        {items.map((item, idx) => (
          <div key={idx} className="relative mb-8">
            <div className="absolute -left-3 top-1">
              <div className="w-5 h-5 rounded-full bg-[#C38B56] ring-4 ring-white shadow-md" />
            </div>

            <h4 className="text-md font-medium whitespace-pre-line">
              {item.title}
            </h4>
            <p className="mt-2 text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
