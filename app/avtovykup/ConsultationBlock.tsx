import Image from "next/image";

function ConsultationBlock() {
  return (
    <div className="
      max-w-7xl mx-auto py-6 px-4
      flex flex-col md:flex-row
      items-center md:items-start
      justify-between gap-8
    ">
      
      {/* Текст */}
      <div className="flex flex-col gap-4 max-w-md text-center md:text-start">
        <h3 className="text-lg md:text-xl font-semibold">
          Оценка и консультация через мессенджеры в реальном времени
        </h3>

        <p className="text-sm md:text-base text-gray-700">
          Даем точную и фиксированную цену по фото. Если фото плохого качества
          или не видны все повреждения, даем диапазон из которого не выходим.
        </p>

        <div className="flex gap-3 justify-center md:justify-start">
          <Image src="headericons/telegramlogo.svg" alt="telegram icon" width={40} height={40} />
          <Image src="headericons/viberLogo.svg" alt="viber icon" width={40} height={40} />
        </div>
      </div>

      {/* Картинка */}
      <Image
        className="rounded-b-xl w-48 sm:w-60 md:w-72 lg:w-80 h-auto"
        src="/headericons/phoneE.png"
        alt="smartphone image"
        width={300}
        height={500}
      />
    </div>
  );
}

export default ConsultationBlock;
