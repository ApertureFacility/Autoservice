import Image from "next/image";

function EvacuationSection() {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-xl gap-6">
      <div className="relative w-full md:w-1/2 h-64 md:h-96">
        <Image
          src="/evacuator2.png"
          alt="evacuator image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <h3 className="text-2xl font-semibold text-gray-800">
          Собственный эвакуатор
        </h3>

        <strong className="text-gray-700">
          Если машина не на ходу, бесплатно заберем ее на собственном эвакуаторе
        </strong>

        <form className="flex flex-col gap-3 mt-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Ваш телефон"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-[#C38B56] text-white font-semibold py-2 rounded-md hover:bg-[#a77447] transition-colors"
          >
            Нужен Эвакуатор
          </button>
        </form>
      </div>
    </div>
  );
}

export default EvacuationSection;
