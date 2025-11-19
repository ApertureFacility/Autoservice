"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Specs() {
  const brands = [
    { name: "BMW", img: "/brands/bmw.png" },
    { name: "Audi", img: "/brands/audi.png" },
    { name: "Toyota", img: "/brands/toyota.png" },
    { name: "Honda", img: "/brands/honda.png" },
    { name: "Lexus", img: "/brands/lexus.png" },
    { name: "Volkswagen", img: "/brands/vw.png" },
  ];

  // Дублируем, чтобы бесконечно крутить
  const looped = [...brands, ...brands, ...brands];

  const [index, setIndex] = useState(brands.length); 
  // начинаем с середины, чтобы влево/вправо всегда было чем листать

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  // Чтобы не уходить в гигантские числа
  const safeIndex = index % looped.length;
  const translate = safeIndex * 25; // 25% = ширина одного элемента

  return (
    <div className="space-y-10 max-w-7xl mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold">
        Специализируемся на постгарантийном обслуживании
      </h2>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden py-6">

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Слайдер */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${translate}%)`,
            }}
          >
            {looped.map((brand, i) => (
              <div
                key={i}
                className="w-1/4 shrink-0 flex flex-col items-center justify-center p-4"
              >
                <Image
                  width={120}
                  height={120}
                  src={brand.img}
                  alt={brand.name}
                  className="h-20 object-contain mb-2"
                />
                <p className="text-center text-sm">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEXT + IMAGE */}
      <div className="flex flex-col md:flex-row gap-6 items-start w-full">
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <Image
            src="/Spec.png"
            width={420}
            height={300}
            alt="Specification"
            className="w-full max-w-[420px] h-auto object-cover rounded"
          />
        </div>

        <div className="w-full md:w-3/5 flex flex-col space-y-3 text-sm md:text-base leading-relaxed">
          <p>Мы сохраняем уровень и качество сервисов официальных дилеров...</p>

          <p>Все детали проходят контроль качества:</p>

          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <Image src="/gear.png" width={18} height={18} alt="gear" />
              <span>Во время приемки у поставщиков</span>
            </li>
            <li className="flex items-start gap-2">
              <Image src="/gear.png" width={18} height={18} alt="gear" />
              <span>Перед продажей в собственном магазине</span>
            </li>
            <li className="flex items-start gap-2">
              <Image src="/gear.png" width={18} height={18} alt="gear" />
              <span>До ремонта и установки на автомобиль</span>
            </li>
          </ul>

          <p>В комфортной зоне ожидания Вы сможете приятно провести время...</p>
        </div>
      </div>
    </div>
  );
}

export default Specs;
