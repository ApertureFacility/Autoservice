"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* LOGO */}
        <Link href={"/"} >
        <Image
          src="/headericons/HeaderLogo.png"
          alt="Logo"
          width={196}
          height={13}
          priority
        />
</Link>
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
            <Link href={"/"}>
              <li className="hover:text-amber-600">ГЛАВНАЯ</li>
              </Link>
              <Link href={"/avtovykup"}>
              <li className="hover:text-amber-600">ВЫКУП АВТО</li></Link>
              <Link href={"/contacts"}>
              <li className="hover:text-amber-600">КОНТАКТЫ</li></Link>
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

            <Link href={"/"}>
              <li className="hover:text-amber-600">ГЛАВНАЯ</li>
              </Link>
              <Link href={"/avtovykup"}>
              <li className="hover:text-amber-600">ВЫКУП АВТО</li></Link>
              <Link href={"/contacts"}>
              <li className="hover:text-amber-600">КОНТАКТЫ</li></Link>
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
