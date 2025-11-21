import { timelineItems } from "./data/TimelineMassive.ts";

export default function TimelineSection() {
  const items = timelineItems;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Этапы процесса
      </h2>

      <div className="relative">

        {/* Контейнер этапов */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative sm:flex-1 flex sm:flex-col items-start sm:items-center"
            >
              {/* Кружок */}
              <div className="absolute sm:static top-0 -left-3 sm:left-auto">
                <div
                  className="w-5 h-5 rounded-full bg-[#C38B56] ring-4 ring-white shadow-md relative z-10"
                  aria-hidden="true"
                />
              </div>

              {/* Заголовок (мобилка) */}
              <h3 className="text-lg sm:hidden font-medium ml-6">
                {item.title}
              </h3>

              {/* Контент */}
              <div className="mt-4 sm:mt-4 sm:text-center sm:max-w-xs">
                <h3 className="hidden sm:block text-lg font-medium whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Мобильная вертикальная версия (линия остаётся, как и было) */}
        <div className="sm:hidden mt-10 pl-6 border-l border-gray-200">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative mb-8"
            >
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

      </div>
    </section>
  );
}
