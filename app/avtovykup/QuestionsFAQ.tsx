import { useState } from "react";
import Image from "next/image";
import { FAQItemProps } from "./interfaces";
import { faqData } from "./data/FAQMassive";



const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index, isOpen, toggle }) => {
  return (
    <div className="">
      <button
        onClick={() => toggle(index)}
        className="w-full text-left py-4 px-2 flex justify-between items-center font-medium text-gray-800 border-b hover:text-[#C38B56]"
      >
        {question}
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <Image src={"/cross.png"} alt={"cross down"} height={30} width={30}/>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
 

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 space-y-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Ответы на самые частые вопросы</h2>
      {faqData.map((item, i) => (
        <FAQItem
          key={i}
          index={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          toggle={toggle}
        />
      ))}
    </div>
  );
};

export default FAQ;
