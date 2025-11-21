import Image from "next/image";
import { requirementsMassive } from "./data/RequireDocuments";

const RequirementDocumnets: React.FC = () => {
  const requirements = requirementsMassive;

  return (
    <div className="max-w-7xl mx-auto py-3 px-4 mt-10 mb-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Что потребуется для оформления сделки
      </h2>

      <div className="
        flex flex-col md:flex-row 
        gap-10 items-start
      ">
        {/* Левая часть — текст */}
        <div className="flex-1 space-y-6">
          {requirements.map((req, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {req.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {req.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Правая часть — изображение */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            width={500}
            height={700}
            src="/docs2.png"
            alt="Документы"
            className="
              w-full max-w-xs sm:max-w-sm md:max-w-md 
              h-auto object-cover rounded 
              md:ml-10
            "
          />
        </div>
      </div>
    </div>
  );
};

export default RequirementDocumnets;
