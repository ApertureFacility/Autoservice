"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function CarExamples() {
  // -----------------------------------------
  // Список всех авто (добавляй сколько хочешь)
  // -----------------------------------------
  const examples = {
    camry: {
      label: "Toyota Camry",
      title: "Пример работы — восстановление боковой части Camry",
      before: "/camryGood.png",
      after: "/camryDamaged.webp",
      scaleBefore: 1.05,
      scaleAfter: 1.0,
      offsetBefore: { x: 0, y: -8 },
      offsetAfter: { x: 0, y: 0 },
    },
    bmw: {
      label: "BMW (боковое восстановление)",
      title: "Пример работы — BMW восстановление двери и крыла",
      before: "/BrakedBmw.png",
      after: "/bmwGood.jpg",
      scaleBefore: 1.0,
      scaleAfter: 1.0,
      offsetBefore: { x: 0, y: 0 },
      offsetAfter: { x: 0, y: 0 },
    },
  };

  const [selected, setSelected] = useState<keyof typeof examples>("bmw"); // авто по умолчанию
  const [position, setPosition] = useState(50);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const current = examples[selected];

  // ---------------- Drag logic ----------------
  const setFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  const startDrag = (clientX: number) => {
    isDragging.current = true;
    setFromClientX(clientX);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDrag);

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    isDragging.current = false;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopDrag);

    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", stopDrag);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    setFromClientX(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    setFromClientX(e.touches[0].clientX);
  };
  // --------------------------------------------

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 select-none">

      {/* --------------------- SELECTOR --------------------- */}
      <div className="relative w-full">
        <label className="text-gray-600 text-sm">Выберите пример авто:</label>
        <div className="relative">
          <select
            className="w-full mt-1 px-4 py-2 rounded-xl border bg-white shadow-md focus:outline-none"
            value={selected}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
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

      {/* --------------------- TITLE --------------------- */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{current.title}</h2>
      </div>

      {/* --------------------- BEFORE/AFTER SLIDER --------------------- */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl shadow-lg cursor-col-resize aspect-video"
        onMouseDown={(e) => startDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      >
        {/* BEFORE */}
        <Image
          src={current.before}
          alt="Before"
          fill
          className="absolute inset-0 object-cover object-center"
          style={{
            transform: `scale(${current.scaleBefore}) translate(${current.offsetBefore.x}px, ${current.offsetBefore.y}px)`,
          }}
        />

        {/* AFTER (clipped) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={current.after}
            alt="After"
            fill
            className="absolute inset-0 object-cover object-center"
            style={{
              transform: `scale(${current.scaleAfter}) translate(${current.offsetAfter.x}px, ${current.offsetAfter.y}px)`,
            }}
          />
        </div>

        {/* SLIDER LINE */}
        <div
          className="absolute top-0 h-full w-1 bg-white shadow-xl"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-white rounded-full shadow-lg border" />
        </div>
      </div>
    </div>
  );
}
