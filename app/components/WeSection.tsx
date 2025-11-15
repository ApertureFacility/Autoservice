import Image from "next/image";

const cards = [
  {
    img: "/whyicons/calendar.png",
    title: "Опыт 20 лет",
    text: "Более 1000 реализованных работ по ремонтуи обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
  {
    img: "/whyicons/guard.png",
    title: "Выгодные цены",
    text: "Более 1000 реализованных работ по ремонтуи обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
  {
    img: "/whyicons/percent.png",
    title: "Скидки и кэшбэк",
    text: "Более 1000 реализованных работ по ремонти обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.3",
  },
  {
    img: "/whyicons/player.png",
    title: "Прозрачность",
    text: "Более 1000 реализованных работ по ремонтуи обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
  {
    img: "/whyicons/pocket.png",
    title: "Видеотрансляция",
    text: "Более 1000 реализованных работ по ремонтуи обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
  {
    img: "/whyicons/tools.png",
    title: "Гарантия",
    text: "Более 1000 реализованных работ по ремонту и обслуживанию. Точно знаем, что и как отремонтировать максимально эффективно и выгодно для Вас.",
  },
];

function WeSection() {
  return (
    <div className="max-w-7xl mx-auto py-3 px-4">
      <h2 className="text-center mb-8 text-3xl">
        Почему стоит обратиться именно к нам?
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
        <button className="mt-4 bg-amber-600 px-6 py-3 rounded-lg text-lg text-white">
         Консультация и запись
        </button>
      </div>
    </div>
  );
}

export default WeSection;
