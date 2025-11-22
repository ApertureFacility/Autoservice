"use client";

import { useModal } from "../context/ModalContext";
import StoForm from "./ContactForm";


export default function StoFormModal() {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl p-4 w-full max-w-xl">
        
        <button
          onClick={close}
          className="absolute right-3 top-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <StoForm />
      </div>
    </div>
  );
}
