import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://cdn.poehali.dev/projects/8f178685-8de5-4b30-ab19-a026cbfe129f/bucket/cb0c8776-cc40-4ed8-acf6-bbe4c1f3b848.jpg"
              alt="СтройГрей"
              className="h-12 w-auto mb-4"
            />
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              ООО «Стройгрей» — отделка, благоустройство и сварочные работы под ключ.
            </p>
            <p className="font-space-mono text-gray-400 text-sm mb-6">
              Работаем официально, по договору, с гарантией.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Отделочные работы
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Благоустройство
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Сварочные работы
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Работы под ключ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#works" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Как мы работаем
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О компании
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы и ответы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 ООО «Стройгрей». Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Реквизиты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}