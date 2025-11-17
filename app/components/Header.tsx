"use client";
import { useState } from "react";
import Image from "next/image";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* LOGO */}
        <Image
          src="/headericons/HeaderLogo.png"
          alt="Logo"
          width={196}
          height={13}
          priority
        />

        {/* BURGER (mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* DESKTOP BLOCK */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex items-center space-x-8 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-600">ГЛАВНАЯ</a></li>
              <li><a href="service" className="hover:text-amber-600">УСЛУГИ</a></li>
              <li><a href="#" className="hover:text-amber-600">АВТОЗАПЧАСТИ</a></li>
              <li>
                <a
                  href="#"
                  className="text-amber-600 border-b-2 border-amber-600 pb-1"
                >
                  АВТОМОБИЛИ С ПРОБЕГОМ
                </a>
              </li>
              <li><a href="#" className="hover:text-amber-600">КОНТАКТЫ</a></li>
            </ul>
          </nav>

          {/* CONTACT ICONS */}
          <div className="flex items-center space-x-2 text-xl">
            <a href="#">
              <Image src="/headericons/viberLogo.svg" alt="viber" width={30} height={30} />
            </a>
            <a href="#">
              <Image src="/headericons/telegramlogo.svg" alt="telegram" width={30} height={30} />
            </a>
          </div>

          {/* PHONE */}
          <div className="flex flex-col leading-tight whitespace-nowrap">
            <a href="tel:+78432628403" className="font-semibold text-lg">
              8 843 262-84-03
            </a>
            <a href="#" className="text-amber-600 underline text-sm">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4">
            <ul className="flex flex-col space-y-4 text-base font-medium">
              <li><a href="#" className="hover:text-amber-600">ГЛАВНАЯ</a></li>
              <li><a href="service" className="hover:text-amber-600">УСЛУГИ</a></li>
              <li><a href="#" className="hover:text-amber-600">АВТОЗАПЧАСТИ</a></li>
              <li>
                <a href="#" className="text-amber-600 border-b-2 border-amber-600 pb-1">
                  АВТОМОБИЛИ С ПРОБЕГОМ
                </a>
              </li>
              <li><a href="#" className="hover:text-amber-600">КОНТАКТЫ</a></li>
            </ul>

            <div className="flex items-center space-x-4 mt-6">
              <Image src="/headericons/viberLogo.svg" alt="viber" width={32} height={32} />
              <Image src="/headericons/telegramlogo.svg" alt="telegram" width={32} height={32} />
            </div>

            <div className="mt-4">
              <a href="tel:+78432628403" className="font-semibold text-lg block">
                8 843 262-84-03
              </a>
              <a href="#" className="text-amber-600 underline text-sm">
                Заказать звонок
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
