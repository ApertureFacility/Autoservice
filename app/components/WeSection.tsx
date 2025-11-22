"use client"

import Image from "next/image";
import { useModal } from "../context/ModalContext";

const cards = [
  {
    img: "/whyicons/calendar.png",
    title: "Опыт 20 лет",
    text: "Более 1000 реализованных работ по ремонтуи обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
  {
    img: "/whyicons/guard.png",
    title: "Выгодные цены",
    text: "Оптимальные цены по рынку. Сэкономленные деньги Вы сможете потратить на другие важные цели.",
  },
  {
    img: "/whyicons/percent.png",
    title: "Скидки и кэшбэк",
    text: "Система лояльности для постоянных клиентов. Приятные бонусы и акции на обслуживание и ремонт.",
  },
  {
    img: "/whyicons/player.png",
    title: "Прозрачность",
    text: "Все работы проводятся исключительно по необходимости и согласованию с Вами. После ремонтных работ, объясним причину поломки и  покажем замененные детали.",
  },
  {
    img: "/whyicons/pocket.png",
    title: "Видеотрансляция",
    text: "Мы абсолютно честны с клиентами.Поэтому ведем видеотрансляцию с ремонтной зоны.",},
  {
    img: "/whyicons/tools.png",
    title: "Гарантия",
    text: "Более 1000 реализованных работ по ремонту и обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
];

function WeSection() {
    const { open } = useModal();
  return (
    <div className="max-w-7xl mx-auto py-3 px-4">
      <h2 className="text-center mb-8 text-3xl">
        Чем мы лучше конкурентов?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4  bg-white   hover:shadow-md transition"
          >
            <Image
              src={card.img}
              alt={card.title}
              className="m-auto"
              width={50}
              height={50}
            />
            <h3 className=" m-auto text-lg font-semibold ">{card.title}</h3>
            <p className="m-auto text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center text-center mt-10">
        <h3 className="text-2xl">Не любите очереди?</h3>
        <p className="text-xl mt-1 mb-1">Записывайтесь и приезжайте в удобное для вас время</p>
        <button  onClick={open} className="mt-4 cursor-pointer bg-amber-600 px-6 py-3 rounded-lg text-lg text-white">
         Консультация и запись
        </button>
      </div>
    </div>
  );
}

export default WeSection;
