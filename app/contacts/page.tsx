import React from "react";

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 md:px-12 lg:px-24 py-16">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Контакты
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          Свяжитесь с нами удобным для вас способом. Мы будем рады ответить на любые вопросы и помочь вам.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">

            <div>
              <h2 className="text-xl font-semibold text-orange-600">
                Телефон
              </h2>
              <a
                href="tel:+79999999999"
                className="text-gray-800 hover:text-orange-600 transition-colors block"
              >
                +7 (999) 999-99-99
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-orange-600">
                Email
              </h2>
              <a
                href="mailto:info@example.com"
                className="text-gray-800 hover:text-orange-600 transition-colors block break-all"
              >
                info@example.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-orange-600">
                Адрес
              </h2>
              <p className="text-gray-800">
                Россия, Москва, Примерная улица 10
              </p>
            </div>
          </div>

          <form className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-2xl font-semibold mb-2 text-orange-600">
              Обратная связь
            </h2>

            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-orange-600"
            />

            <input
              type="email"
              placeholder="Ваш email"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-orange-600"
            />

            <textarea
              placeholder="Ваше сообщение"
              className="w-full border border-gray-300 rounded-xl p-3 h-32 resize-none focus:outline-none focus:border-orange-600"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-medium transition-colors bg-orange-600 hover:bg-orange-700"
            >
              Отправить
            </button>
          </form>
        </div>

        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.410037933916!2d37.62039331593188!3d55.75396098055332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a6e3e5c43%3A0x6f8e1b5f3e6aea0e!2z0JzQvtGB0LrQstCw0YAg0JzQvtGB0LrQstCw0YAg0YLQtdGA0LzQsNGC0YPRgiDQutC-0YLQvtC70L7QuQ!5e0!3m2!1sru!2sru!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
