import Image from "next/image";

function Header() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Image
          src="/headericons/HeaderLogo.png"
          alt="Logo"
          width={196}
          height={13}
          priority
          className=""
        />
        <div className="flex items-center space-x-4">
          <nav className="w-full bg-white">
            <ul className="max-w-4xl mx-auto flex justify-center space-x-10 py-3 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-amber-600">
                  ГЛАВНАЯ
                </a>
              </li>
              <li>
                <a href="service" className="hover:text-amber-600">
                  УСЛУГИ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  АВТОЗАПЧАСТИ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-600 border-b-2 border-amber-600 pb-1"
                >
                  АВТОМОБИЛИ С ПРОБЕГОМ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2 text-xl">
            <a href="#" className="text-purple-600">
              <Image src="/headericons/viberLogo.svg" alt={"viber icon contact"} width={30} height={30}/>
            </a>
            <a href="#" className="text-blue-600" >
              <Image src="/headericons/telegramlogo.svg" alt={"telegram icon contact"} width={30} height={30}/>
            </a>
          </div>
          <div className="flex flex-col leading-tight">
            <a
              href="tel:+78432628403"
              className="font-semibold text-lg whitespace-nowrap text-right"
            >
              8 843 262-84-03
            </a>
            <a href="#" className="text-amber-600 underline text-sm text-right">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
