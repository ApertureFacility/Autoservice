import Image from "next/image";

function TopSection() {
  return (
    <div className="w-full">
    <div className="max-w-7xl mx-auto flex gap-4 py-3 px-4">
      <div className="flex flex-col gap-4">
        <div className="relative w-[450px] h-[294px]">
          <Image
            src="/topsectionicons/Hand.png"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/20 text-white">
            <p className="text-lg font-semibold">
              Полный комплекс услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>
        </div>
        <div className="relative w-[450px] h-[294px]">
          <Image
            src="/topsectionicons/OilDrain.png"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/20 text-white">
            <p className="text-lg font-semibold">
              Полный комплекс услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-[930px] h-[613px]">
        <Image
          src="/topsectionicons/engineImage.png"
          alt=""
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/20 text-white">
          <p className="text-2xl font-bold">
            Полный комплекс услуг по ремонту и обслуживанию автомобилей
          </p>
          <button className="mt-4 bg-amber-600 px-6 py-3 rounded-lg text-lg">
            Консультация и запись
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TopSection;
