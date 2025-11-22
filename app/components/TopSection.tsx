"use client";

import Image from "next/image";
import { useModal } from "../context/ModalContext";


function TopSection() {
  const { open } = useModal();

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 px-4">

        {/* Левая колонка */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <div className="relative w-full aspect-450/294">
            <Image
              src="/topsectionicons/Hand.png"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/20 text-white">
              <p className="text-base md:text-lg font-semibold">
                Полный комплекс услуг по ремонту и обслуживанию автомобилей
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-450/294">
            <Image
              src="/topsectionicons/OilDrain.png"
              alt=""
              fill
              className="object-cover rounded"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/20 text-white">
              <p className="text-base md:text-lg font-semibold">
                Полный комплекс услуг по ремонту и обслуживанию автомобилей
              </p>
            </div>
          </div>
        </div>

        {/* Правая большая картинка */}
        <div className="relative w-full aspect-930/613 md:col-span-1 lg:col-span-2">
          <Image
            src="/topsectionicons/engineImage.png"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-black/20 text-white">
            <p className="text-xl md:text-2xl font-bold">
              Полный комплекс услуг по ремонту и обслуживанию автомобилей
            </p>

            <button
              onClick={open}
              className="mt-4 cursor-pointer bg-amber-600 px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg"
            >
              Консультация и запись
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TopSection;
