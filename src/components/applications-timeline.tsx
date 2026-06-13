import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Замер и смета",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Выезжаем на объект, делаем точные замеры и составляем подробную смету. Вы видите стоимость
            каждого этапа ещё до старта работ — никаких сюрпризов в процессе.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Бесплатный выезд специалиста
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Детализированная смета за 1 день
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фиксированная цена в договоре
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Выполнение работ",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Работаем строго по согласованному плану. Вы всегда знаете, на каком этапе находится объект —
            держим в курсе через фото-отчёты и оперативную связь с прорабом.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Соблюдение сроков по договору
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ежедневные фото-отчёты с объекта
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контроль качества на каждом этапе
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сдача и гарантия",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Принимаем объект вместе с вами по чек-листу. После подписания акта выдаём письменную гарантию
            на все выполненные работы — ваш результат защищён.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Приёмка по детальному чек-листу
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Письменная гарантия на работы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Устранение замечаний за наш счёт
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Прозрачный процесс от первого звонка до подписания акта — без стресса и неожиданностей для заказчика.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
