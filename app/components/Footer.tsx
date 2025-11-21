import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-[#E5D5C5] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ЛОГО + ОПИСАНИЕ */}
        <div>
          <h3 className="text-xl font-semibold text-[#C38B56] mb-3">
            Автовыкуп
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Быстрый выкуп автомобилей в любом состоянии.
            Работаем честно, официально, круглосуточно.
          </p>
        </div>

        {/* МЕНЮ */}
        <div>
          <h4 className="text-lg font-semibold text-[#C38B56] mb-3">
            Навигация
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/vikup" className="hover:text-[#A67443] transition">Выкуп авто</a></li>
            <li><a href="/evacuator" className="hover:text-[#A67443] transition">Эвакуатор</a></li>
            <li><a href="/contacts" className="hover:text-[#A67443] transition">Контакты</a></li>
          </ul>
        </div>

        {/* КОНТАКТЫ */}
        <div>
          <h4 className="text-lg font-semibold text-[#C38B56] mb-3">
            Контакты
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>📞 +7 (900) 000-00-00</li>
            <li>📍 Москва и область</li>
            <li>🕒 Работаем 24/7</li>
          </ul>
        </div>

        {/* МЕССЕНДЖЕРЫ */}
        <div>
          <h4 className="text-lg font-semibold text-[#C38B56] mb-3">
            Мессенджеры
          </h4>
          <div className="flex items-center gap-4 mt-2">
            <Image
              src="/headericons/telegramlogo.svg"
              alt="telegram"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/headericons/viberLogo.svg"
              alt="viber"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ПОЛОСА */}
      <div className="border-t border-[#E5D5C5] py-5">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Автовыкуп — все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
