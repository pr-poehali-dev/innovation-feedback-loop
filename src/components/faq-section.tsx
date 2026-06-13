import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как получить расчёт стоимости работ?",
      answer:
        "Оставьте заявку на сайте или позвоните нам. Выедем на объект, сделаем замеры и подготовим подробную смету бесплатно — в течение одного рабочего дня.",
    },
    {
      question: "Работаете ли вы с юридическими лицами?",
      answer:
        "Да, работаем как с физическими, так и с юридическими лицами. Заключаем официальный договор, закрываем акты выполненных работ, предоставляем все необходимые документы для бухгалтерии.",
    },
    {
      question: "Какие гарантии вы даёте на работы?",
      answer:
        "Выдаём письменную гарантию на все виды выполненных работ. Если в гарантийный период обнаружатся дефекты по нашей вине — устраняем за свой счёт без лишних вопросов.",
    },
    {
      question: "Как контролировать ход работ?",
      answer:
        "Назначаем персонального прораба на каждый объект. Вы получаете ежедневные фото-отчёты и можете приехать на объект в любое время. Также всегда на связи по телефону.",
    },
    {
      question: "Может ли итоговая цена отличаться от сметы?",
      answer:
        "Нет. Мы фиксируем стоимость в договоре до начала работ. Цена не меняется, если не меняется объём работ. Все дополнительные работы согласовываем заранее и отдельно.",
    },
    {
      question: "Какие виды работ вы выполняете?",
      answer:
        "Выполняем внутреннюю и внешнюю отделку помещений, благоустройство территорий (брусчатка, озеленение, заборы, дорожки), а также сварочные работы любой сложности — металлоконструкции, ворота, лестницы, перила.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы о наших услугах, ценах и процессе работы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
