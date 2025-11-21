"use client"

import { useState } from "react";

export default function StoForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Здесь можно сделать запрос на API Next.js
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 grid gap-4"
    >
      <h2 className="text-2xl font-bold text-center mb-2">Запись на СТО / Консультация</h2>

      <div className="grid gap-2">
        <label className="font-medium">Ваше имя</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded-xl"
          placeholder="Иван Иванов"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="font-medium">Телефон</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded-xl"
          placeholder="+7 (___) ___-__-__"
          required
        />
      </div>

     
      <div className="grid gap-2">
        <label className="font-medium">Марка и модель автомобиля</label>
        <input
          name="car"
          value={formData.car}
          onChange={handleChange}
          className="border p-2 rounded-xl"
          placeholder="Toyota Camry 2015"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="font-medium">Тип услуги</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="border p-2 rounded-xl"
          required
        >
          <option value="">Выберите услугу...</option>
          <option>Диагностика</option>
          <option>Замена масла</option>
          <option>Ремонт подвески</option>
          <option>Ремонт двигателя</option>
          <option>Шиномонтаж</option>
          <option>Компьютерная диагностика</option>
          <option>Другая услуга</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label className="font-medium">Предпочтительная дата визита</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded-xl"
        />
      </div>

      <div className="grid gap-2">
        <label className="font-medium">Комментарий</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="border p-2 rounded-xl min-h-[100px]"
          placeholder="Опишите проблему..."
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl"
      >
        Отправить заявку
      </button>
    </form>
  );
}
