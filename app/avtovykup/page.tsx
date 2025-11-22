"use client";

import Image from "next/image";
import TimelineSection from "./TimelineSection";
import EvacuationSection from "./EvacuationSection";

import BottomSection from "../components/BottomSection";
import CarPhotoSlider from "./CarPhotoSlider";
import RequirementDocumnets from "./RequireDocuments";
import FAQ from "./QuestionsFAQ";
import ConsultationBlock from "./ConsultationBlock";
import { useModal } from "../context/ModalContext";

export default function AutoBuyPage() {
  const { open } = useModal();
  const items = [
    { label: "С арестом", img: "/vikup/arest.png" },
    { label: "Битые", img: "/vikup/bitaya.png" },
    { label: "В наследстве", img: "/vikup/key.png" },
    { label: "С запретом на регистрацию", img: "/vikup/sud.png" },
    { label: "Утопленные", img: "/vikup/voda.png" },
    { label: "В залоге", img: "/vikup/zalog.png" },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white p-6 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Выкупаем любые авто за 2 часа
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
  {items.map((item, i) => (
    <div key={i} className="flex flex-col items-center  p-4 ">
      <Image
        src={item.img}
        alt={item.label}
        className="w-full h-40 object-cover rounded mb-3"
        width={300}
        height={500}
      />
      <p className="text-lg font-medium text-center">{item.label}</p>
    </div>
  ))}
</div>

        <div className="flex justify-center">
          <button onClick={open} className="cursor-pointer border mt-4 h-[50] w-[450] text-white bg-[#B86A22] rounded border-none">
            Продать за 2 часа
          </button>
        </div>
      </div>

      <TimelineSection />
      <EvacuationSection />
      <CarPhotoSlider />
      <ConsultationBlock/>
      <RequirementDocumnets />
      <FAQ />
      <BottomSection />
    </>
  );
}
