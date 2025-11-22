"use client";

import { useState } from "react";
import Image from "next/image";

export default function CarExamples() {
  const examples = {
    camry: {
      label: "Toyota Camry",
      title: "Пример работы — восстановление боковой части Camry",
      before: "/camryDamaged.webp",
      after: "/camryGood.png",
    },
    bmw: {
      label: "BMW",
      title: "Пример работы — BMW",
      before: "/BrakedBmw.png",
      after: "/bmwGood.jpg",
    },
    Subary: {
      label: "Subary",
      title: "Пример работы — Subary",
      before: "/subarubad1.jpeg",
      after: "/subaruok1.jpeg",
    },
    mercedes: {
      label: "Mercedes",
      title:
        "Пример работы — Mercedes W220 восстановление пневмоподвески",
      before: "/mersUpal.jpg",
      after: "/mersok.png",
    },
  } as const;

  const [selected, setSelected] =
    useState<keyof typeof examples>("bmw");
  const [showAfter, setShowAfter] = useState(false);

  const current = examples[selected];

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6 md:gap-8 px-4">
      
      {/* Левая часть — картинка */}
      <div className="w-full md:max-w-4xl space-y-6 select-none">
        <h2 className="text-xl md:text-2xl font-bold">{current.title}</h2>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
          <Image
            src={showAfter ? current.after : current.before}
            alt={showAfter ? "after" : "before"}
            fill
            className="object-cover object-center"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={() => setShowAfter(false)}
              className={`cursor-pointer px-4 py-2 rounded-xl shadow-md text-sm font-semibold backdrop-blur-md border ${
                !showAfter ? "bg-white/80" : "bg-white/40"
              }`}
            >
              До
            </button>

            <button
              onClick={() => setShowAfter(true)}
              className={`px-4 cursor-pointer py-2 rounded-xl shadow-md text-sm font-semibold backdrop-blur-md border ${
                showAfter ? "bg-white/80" : "bg-white/40"
              }`}
            >
              После
            </button>
          </div>
        </div>
      </div>

      {/* Правая часть — список кнопок */}
      <div className="flex flex-col gap-3 w-full md:w-64">
        {Object.entries(examples).map(([key, ex]) => {
          const active = selected === key;
          return (
            <button
              key={key}
              onClick={() => setSelected(key as keyof typeof examples)}
              className={` cursor-pointer text-left px-4 py-3 rounded-xl border shadow-md transition ${
                active
                  ? "bg-amber-600 text-white border-amber-600"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {ex.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
