"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// НОВАЯ ИДЕЯ: вместо слайдера — КАРТОЧКИ «До / После»,
// которые красиво перелистываются при клике.
// Можно добавить анимацию исчезновения / появления.

export default function CarExamples() {
    const examples = {
        camry: {
          label: "Toyota Camry",
          title: "Восстановление боковой части Camry",
          before: "/camryGood.png",
          after: "/camryDamaged.webp",
        },
        bmw: {
          label: "BMW (боковое восстановление)",
          title: "BMW — восстановление двери и крыла",
          before: "/BrakedBmw.png",
          after: "/bmwGood.jpg",
        },
      } as const;
      
      const [selected, setSelected] = useState<keyof typeof examples>("bmw");

  const [showAfter, setShowAfter] = useState(false);

  const current = examples[selected];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 select-none">
      {/* SELECT */}
      <div>
        <label className="text-gray-600 text-sm">Выберите пример авто:</label>
        <div className="relative">
        <select
  className="w-full mt-1 px-4 py-2 rounded-xl border bg-white shadow-md focus:outline-none"
  value={selected}
  onChange={(e) =>
    setSelected(e.target.value as keyof typeof examples)
  }
>

            {Object.entries(examples).map(([key, ex]) => (
              <option key={key} value={key}>
                {ex.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold">{current.title}</h2>

      {/* CARD — До / После */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
        <motion.div
          key={showAfter ? current.after : current.before}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={showAfter ? current.after : current.before}
            alt={showAfter ? "after" : "before"}
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Кнопки переключения */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-4 py-2 rounded-xl shadow-md text-sm font-semibold backdrop-blur-md border
              ${!showAfter ? "bg-white/80" : "bg-white/40"}`}
          >
            До
          </button>

          <button
            onClick={() => setShowAfter(true)}
            className={`px-4 py-2 rounded-xl shadow-md text-sm font-semibold backdrop-blur-md border
              ${showAfter ? "bg-white/80" : "bg-white/40"}`}
          >
            После
          </button>
        </div>
      </div>
    </div>
  );
}
