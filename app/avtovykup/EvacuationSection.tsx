import Image from "next/image";
import { useModal } from "../context/ModalContext";

function EvacuationSection() {
  const { open } = useModal();
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center rounded-xl gap-10">
        {/* Блок картинки */}
        <div className="relative w-full md:w-1/2 aspect-4/3 md:aspect-5/4">
          <Image
            src="/evacuator2.png"
            alt="evacuator image"
            fill
            className="object-cover md:object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Блок текста и формы */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Собственный эвакуатор
          </h3>

          <p className="text-gray-700 font-medium">
            Если машина не на ходу, бесплатно заберем ее на собственном
            эвакуаторе
          </p>

          <form className="flex flex-col gap-3 mt-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Ваше имя"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Ваш телефон"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
            type="button"
              onClick={open}
              className="cursor-pointer bg-[#C38B56] text-white font-semibold py-2 rounded-md hover:bg-[#a77447] transition-colors"
            >
              Нужен Эвакуатор
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EvacuationSection;
