import Image from 'next/image';

const items = [
  { title: "ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ", img: "/serviceicons/brake.png" },
  { title: "АГРЕГАТНЫЙ РЕМОНТ", img: "/serviceicons/key.png" },
  { title: "АВТОЭЛЕКТРИКА И ДИАГНОСТИКА", img: "/serviceicons/polyroll.png" },
  { title: "ХОДОВАЯ", img: "/serviceicons/under.png" },
  { title: "КУЗОВНОЙ РЕМОНТ", img: "/topsectionicons/gen.jpg" }
];

function Cuve() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-3 px-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="relative h-56 sm:h-60 md:h-64 overflow-hidden rounded-xl"
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <h3 className="absolute top-4 left-4 text-white font-semibold text-base sm:text-lg drop-shadow-lg">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Cuve;
