"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DamagedCars } from "./data/CarsPhotoDamaged";

export default function CarPhotoSlider() {
  const brands = DamagedCars;
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // === Адаптация под экран ===
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);        // мобилки
      else if (window.innerWidth < 1024) setItemsPerSlide(2);  // планшеты
      else setItemsPerSlide(3);                                // десктоп
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setIndex((prev) =>
      prev + itemsPerSlide >= brands.length ? 0 : prev + itemsPerSlide
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - itemsPerSlide < 0
        ? Math.max(0, brands.length - itemsPerSlide)
        : prev - itemsPerSlide
    );
  };

  return (
    <div className="relative w-full mt-12">
      <h2 className="text-xl font-semibold text-center mb-4">
        Пример выкупленных авто
      </h2>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${(brands.length / itemsPerSlide) * 100}%`,
            transform: `translateX(-${(index / brands.length) * 100}%)`,
          }}
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4"
              style={{ width: `${100 / (brands.length * (1 / itemsPerSlide))}%` }}
            >
              <div className="w-full h-64 sm:h-72 md:h-80 mb-3 rounded overflow-hidden flex justify-center items-center">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={430}
                  height={320}
                  className="object-cover w-full h-full rounded"
                />
              </div>

              <p className="font-semibold text-center">{brand.name}</p>
              <p className="text-sm text-gray-700 text-center">
                {brand.year} • {brand.mileage}
              </p>
              <p className="text-green-600 font-semibold text-center">
                {brand.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
