import Image from "next/image";
import { InfoBlock } from "./InfoBlock";

export default function BottomSection() {
  return (
    <div className="max-w-7xl mx-auto py-3 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Левая колонка */}
      <div className="flex flex-col gap-4">

        <Image
          src="/headericons/HeaderLogo.png"
          alt="Логотип компании"
          width={219}
          height={29}
          priority
          className="w-40 md:w-[219px] h-auto"
        />

        <InfoBlock
          src="/caricon.png"
          alt="Локация кузовного ремонта"
          title="Кузовной ремонт"
          text="г. Казань, п. Мебокса, ул. Заводская д.1а"
        />

        <InfoBlock
          src="/locationlogo.png"
          alt="Локация агрегатного ремонта"
          title="Агрегатный ремонт"
          text="г. Казань, п. Бокса, ул. Замостская д.13а"
        />

        <InfoBlock
          src="/phonelogo.png"
          alt="Телефон сервиса"
          title="8 843 262-84-03"
          text="Info@info.ru"
        />

      </div>

      {/* Правая колонка — адаптивная карта */}
      <div className="w-full">
        <div className="relative w-full aspect-900/400 rounded-lg overflow-hidden">
          <Image
            src="/BottomSectionMap.png"
            alt="Карта расположения сервисов"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  );
}
