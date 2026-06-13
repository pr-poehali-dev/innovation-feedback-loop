import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/8f178685-8de5-4b30-ab19-a026cbfe129f/bucket/cb0c8776-cc40-4ed8-acf6-bbe4c1f3b848.jpg"
              alt="СтройГрей"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Услуги
              </a>
              <a href="#works" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Наши работы
              </a>
              <a href="#faq" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end gap-0.5">
              <a href="tel:+79607970002" className="font-geist text-white hover:text-red-500 transition-colors duration-200 text-sm font-semibold leading-tight">+7 (960) 797-00-02</a>
              <span className="text-gray-400 text-xs">Прораб</span>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <a href="tel:+79665060002" className="font-geist text-white hover:text-red-500 transition-colors duration-200 text-sm font-semibold leading-tight">+7 (966) 506-00-02</a>
              <span className="text-gray-400 text-xs">Руководитель</span>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">Получить расчёт</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#works"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Наши работы
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2 space-y-1 border-t border-red-500/20 mt-2 pt-3">
                <a href="tel:+79607970002" className="flex justify-between items-center font-geist text-white hover:text-red-500 transition-colors duration-200 py-1">
                  <span className="text-gray-400 text-sm">Прораб</span>
                  <span className="font-semibold">+7 (960) 797-00-02</span>
                </a>
                <a href="tel:+79665060002" className="flex justify-between items-center font-geist text-white hover:text-red-500 transition-colors duration-200 py-1">
                  <span className="text-gray-400 text-sm">Руководитель</span>
                  <span className="font-semibold">+7 (966) 506-00-02</span>
                </a>
              </div>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                  Получить расчёт
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}