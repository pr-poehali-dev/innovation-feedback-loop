import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Отделочные работы",
    description: "Штукатурка, шпаклёвка, покраска, укладка плитки и напольных покрытий. Работаем с любыми поверхностями — от эконом до премиум-класса.",
    icon: "PaintBucket",
    badge: "Отделка",
  },
  {
    title: "Благоустройство территорий",
    description: "Озеленение, укладка брусчатки, устройство дорожек, заборов и малых архитектурных форм. Преображаем участки под ключ.",
    icon: "Trees",
    badge: "Благоустройство",
  },
  {
    title: "Сварочные работы",
    description: "Изготовление металлоконструкций, ворот, заборов, лестниц и перил. Аргонодуговая и электродуговая сварка любой сложности.",
    icon: "Flame",
    badge: "Сварка",
  },
  {
    title: "Работы под ключ",
    description: "Берём объект на полное сопровождение — от замера и сметы до сдачи. Один договор, один ответственный.",
    icon: "KeyRound",
    badge: "Комплекс",
  },
  {
    title: "Точные сметы",
    description: "Фиксируем стоимость до начала работ. Никаких скрытых доплат и неожиданных расходов в процессе.",
    icon: "ClipboardList",
    badge: "Честно",
  },
  {
    title: "Гарантия на работы",
    description: "Даём письменную гарантию на все выполненные работы. Если что-то пошло не так — устраним за свой счёт.",
    icon: "ShieldCheck",
    badge: "Гарантия",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Выполняем строительные и отделочные работы любой сложности — в срок и по договору
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500">
                    <Icon name={feature.icon} size={32} fallback="Wrench" />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
