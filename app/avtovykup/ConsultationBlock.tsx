import Image from "next/image";

function ConsultationBlock() {
  return (
    <div className="flex items-center gap-6 max-w-7xl mx-auto py-3 px-4 justify-around">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">
          Оценка и консультация через мессенджеры в реальном времени
        </h3>
        <p className="text-start w-[300px]">
          Даем точную и фиксированную цену по фото. Если фото плохого качества
          или не видны все повреждения, даем диапазон из которого не выходим.
        </p>
        <div className="flex gap-2">
          <Image src="headericons/telegramlogo.svg" alt="telegram icon" width={40} height={40} />
          <Image src="headericons/viberLogo.svg" alt="viber icon" width={40} height={40} />
        </div>
      </div>
      <Image className="rounded-b-xl" src="/headericons/phoneE.png" alt="smartphone image" width={300} height={500} />
    </div>
  );
}

export default ConsultationBlock;
