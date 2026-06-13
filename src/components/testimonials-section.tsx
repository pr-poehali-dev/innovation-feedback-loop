import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Андрей Соколов",
    role: "Владелец частного дома, Москва",
    initials: "АС",
    content:
      "Заказывали отделку всего дома под ключ. Сделали точно в срок, смета не изменилась ни на рубль. Качество отличное — рекомендую!",
  },
  {
    name: "Ирина Петрова",
    role: "Управляющая ТЦ «Меридиан»",
    initials: "ИП",
    content:
      "Стройгрей выполнили благоустройство прилегающей территории: брусчатка, озеленение, малые формы. Всё аккуратно, профессионально и без срывов.",
  },
  {
    name: "Дмитрий Лазарев",
    role: "Директор завода «МеталлПром»",
    initials: "ДЛ",
    content:
      "Сварочные работы по изготовлению металлоконструкций для цеха. Ребята грамотные, швы качественные, документация в порядке. Работаем уже второй год.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют заказчики</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы клиентов о нашей работе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
