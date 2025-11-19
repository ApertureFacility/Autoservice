import { timelineItems } from "./data/TimeLine";

export default function TimelineSection() {
  const items = timelineItems;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Этапы процесса
      </h2>

      <div className="relative">
        <div
          className="hidden sm:block absolute left-6 right-6 top-8 h-0.5 bg-gray-200"
          aria-hidden="true"
        />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="sm:flex-1 relative flex sm:flex-col items-start sm:items-center"
            >
              <div className="flex items-center">
                <div className="sm:mb-4 mr-4 sm:mr-0">
                  <div
                    className="w-5 h-5 rounded-full bg-blue[#C38B56] ring-4 ring-white shadow-md"
                    aria-hidden="true"
                  />
                </div>

                <div className="sm:hidden">
                  <h3 className="text-lg font-medium whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 sm:mt-4 sm:text-center sm:max-w-sm">
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
      </div>

      <div className="sm:hidden mt-8">
        <div className="border-l border-gray-200 pl-6">
          {items.map((item, idx) => (
            <div key={idx} className="mb-6 relative">
              <div className="absolute -left-3 top-0">
                <div
                  className="w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white shadow-md"
                  aria-hidden="true"
                />
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
