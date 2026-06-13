export function AboutSection() {
  const photos = [
    {
      src: "https://cdn.poehali.dev/projects/8f178685-8de5-4b30-ab19-a026cbfe129f/files/0d2f3572-6696-4aba-bded-85d4328f14ca.jpg",
      label: "Отделочные работы",
    },
    {
      src: "https://cdn.poehali.dev/projects/8f178685-8de5-4b30-ab19-a026cbfe129f/files/ca07f701-f4a3-47d8-b3e1-68e634af0bef.jpg",
      label: "Благоустройство",
    },
    {
      src: "https://cdn.poehali.dev/projects/8f178685-8de5-4b30-ab19-a026cbfe129f/files/589e9c52-8f7d-4280-b186-5f7d012965d5.jpg",
      label: "Сварочные работы",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">Наши работы</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Качество говорит само за себя. Посмотрите примеры выполненных объектов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border border-red-500/20">
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-orbitron text-white font-semibold text-sm">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Объектов сдано" },
            { value: "8 лет", label: "На рынке" },
            { value: "100%", label: "Договор и гарантия" },
            { value: "1 день", label: "Смета бесплатно" },
          ].map((stat, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="font-orbitron text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</p>
              <p className="font-space-mono text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
