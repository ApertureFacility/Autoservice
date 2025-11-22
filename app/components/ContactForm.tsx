"use client";

import { useState, useEffect } from "react";

export default function StoForm({ onClose }: { onClose?: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    service: "",
    date: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  // === Закрытие по ESC ===
  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, [onClose]);

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-5 
        flex flex-col gap-3 
        max-h-[75vh] overflow-y-auto
      "
    >
      <h2 className="text-xl font-bold text-center">Запись на СТО</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded-xl"
        placeholder="Ваше имя"
        required
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 rounded-xl"
        placeholder="Телефон"
        required
      />

      <input
        name="car"
        value={formData.car}
        onChange={handleChange}
        className="border p-2 rounded-xl"
        placeholder="Марка и модель авто"
        required
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="border p-2 rounded-xl"
        required
      >
        <option value="">Тип услуги...</option>
        <option>Диагностика</option>
        <option>Замена масла</option>
        <option>Ремонт подвески</option>
        <option>Ремонт двигателя</option>
        <option>Шиномонтаж</option>
        <option>Компьютерная диагностика</option>
        <option>Другая услуга</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 rounded-xl"
      />

      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="border p-2 rounded-xl min-h-20"
        placeholder="Комментарий"
      />

      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl"
      >
        Отправить
      </button>
    </form>
  );
}
