"use client";

import { useState } from "react";
import Image from "next/image";

function Specs() {
  const brands = [
    { name: "BMW", img: "/brands/bmw.png" },
    { name: "Audi", img: "/brands/audi.png" },
    { name: "Toyota", img: "/brands/toyota.png" },
    { name: "Honda", img: "/brands/honda.png" },
    { name: "Lexus", img: "/brands/lexus.png" },
    { name: "Volkswagen", img: "/brands/vw.png" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 4 >= brands.length ? 0 : prev + 4));
  };

  const prev = () => {
    setIndex((prev) => (prev - 4 < 0 ? brands.length - 4 : prev - 4));
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold">
        Специализируемся на постгарантийном обслуживании
      </h2>

      {/* slider */}
      <div className="relative w-full overflow-hidden py-6">
        {/* Стрелки */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
        >
          ▶
        </button>

        {/* Слайдер */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${(brands.length / 4) * 100}%`,
          }}
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="w-1/4 flex flex-col items-center justify-center p-4"
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

      {/*text+img block */}
      <div className="flex flex-col md:flex-row gap-6 items-start w-full">
        {/* Картинка */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <Image
            src="/Spec.png"
            width={420}
            height={300}
            alt="Specification"
            className="w-full max-w-[420px] h-auto object-cover rounded"
          />
        </div>

        {/* Текст */}
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
