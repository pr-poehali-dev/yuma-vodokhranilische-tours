import Icon from '@/components/ui/icon';

const HERO_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/dd0ce98a-3bf9-4f41-abf3-ae306b942360.jpg";

const routes = [
  {
    icon: "Anchor",
    title: "Обзорная прогулка",
    duration: "1 час",
    description: "Классический маршрут вдоль живописных берегов водохранилища. Проплывём мимо скал и лесных мысов, сделаем остановку у водопада Климентий — одного из живописнейших мест Юмагузинского.",
    distance: "~12 км",
    capacity: "до 6 человек",
    color: "bg-water-light",
    accent: "text-water",
    highlights: ["Водопад Климентий"],
  },
  {
    icon: "Mountain",
    title: "Горный маршрут",
    duration: "2 часа",
    description: "Насыщенный маршрут по самым живописным местам Юмагузинского водохранилища. Водопад Климентий, таинственная пещера Азанташ, величественная гора Семь Братьев и водопад Акаваз — четыре жемчужины в одной прогулке.",
    distance: "~20 км",
    capacity: "до 6 человек",
    color: "bg-terra-light",
    accent: "text-terra",
    highlights: ["Водопад Климентий", "Пещера Азанташ", "Гора Семь Братьев", "Водопад Акаваз"],
  },
  {
    icon: "Sunset",
    title: "Закатная прогулка",
    duration: "1,5 часа",
    description: "Вечерний тур специально рассчитан на лучший свет. Отправляемся за 2 часа до заката — наблюдаем, как горы и вода окрашиваются в золото. Тихая вода, отражения, полный покой.",
    distance: "~15 км",
    capacity: "до 6 человек",
    color: "bg-sand-light",
    accent: "text-[hsl(38,55%,38%)]",
    highlights: [],
  },
  {
    icon: "Trees",
    title: "Средняя экскурсия",
    duration: "3 часа",
    description: "Расширенный маршрут для тех, кто хочет увидеть больше. Водопад Климентий, пещера Азанташ, гора Семь Братьев, водопад Акаваз и таинственный остров Сказка — пять жемчужин Юмагузинского в одной прогулке.",
    distance: "~30 км",
    capacity: "до 6 человек",
    color: "bg-[hsl(150,25%,90%)]",
    accent: "text-forest",
    highlights: ["Водопад Климентий", "Пещера Азанташ", "Гора Семь Братьев", "Водопад Акаваз", "Остров Сказка"],
  },
  {
    icon: "Landmark",
    title: "Большая экспедиция",
    duration: "4 часа",
    description: "Полное погружение в природу Юмагузинского водохранилища — самый насыщенный маршрут. Десять легендарных мест: от водопадов и пещер до скал с захватывающими видами на уральские просторы.",
    distance: "~50 км",
    capacity: "до 6 человек",
    color: "bg-[hsl(270,20%,93%)]",
    accent: "text-[hsl(270,30%,40%)]",
    highlights: ["Водопад Климентий", "Пещера Азанташ", "Гора Семь Братьев", "Водопад Акаваз", "Остров Сказка", "Гора Крейсер", "Пещера Театральная", "Чёртов Палец", "Скала Вождей", "Пещера Акбута"],
  },
];

const prices = [
  { name: "Обзорная прогулка", duration: "1 час", price: "7 000 ₽", group: "до 6 чел.", note: "Водопад Климентий" },
  { name: "Горный маршрут", duration: "2 часа", price: "14 000 ₽", group: "до 6 чел.", note: "4 природных объекта" },
  { name: "Закатная прогулка", duration: "1,5 часа", price: "10 500 ₽", group: "до 6 чел.", note: "" },
  { name: "Средняя экскурсия", duration: "3 часа", price: "21 000 ₽", group: "до 6 чел.", note: "5 объектов" },
  { name: "Большая экспедиция", duration: "4 часа", price: "28 000 ₽", group: "до 6 чел.", note: "10 легендарных мест" },
];

const features = [
  { icon: "Shield", text: "Безопасность", desc: "Спасательные жилеты и инструктаж" },
  { icon: "MapPin", text: "Знание мест", desc: "Капитан с 10-летним опытом" },
  { icon: "Clock", text: "Гибкое время", desc: "Отправление по договорённости" },
  { icon: "Users", text: "Любые компании", desc: "От пары до группы 6 человек" },
];

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/65" />
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p className="animate-fade-in text-white/80 font-body text-sm uppercase tracking-widest mb-4">
            Башкортостан · Юмагузинское водохранилище
          </p>
          <h1 className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-tight mb-6">
            Прогулки<br/>
            <em className="italic font-normal" style={{ color: 'hsl(38,80%,75%)' }}>на катере</em>
          </h1>
          <p className="animate-fade-up-delay-1 font-body text-white/85 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Откройте красоту уральских гор с воды. Живописные маршруты, чистый воздух и незабываемые виды.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#routes"
              className="bg-terra text-white font-body font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-all hover-lift inline-block text-center"
            >
              Смотреть маршруты
            </a>
            <a
              href="#contacts"
              className="bg-white/15 backdrop-blur-sm text-white border border-white/30 font-body font-medium px-8 py-4 rounded-xl hover:bg-white/25 transition-all inline-block text-center"
            >
              Связаться с нами
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/60" />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-terra py-10 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.text} className="flex flex-col items-center text-center gap-2">
              <Icon name={f.icon} size={24} className="text-white/80" fallback="Star" />
              <p className="font-body font-semibold text-white text-sm">{f.text}</p>
              <p className="font-body text-white/65 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-20 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">Маршруты</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Выберите прогулку
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <div
                key={route.title}
                className={`${route.color} rounded-2xl p-6 flex flex-col hover-lift transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-white/60 rounded-xl flex items-center justify-center">
                    <Icon name={route.icon} size={20} className={route.accent} fallback="Anchor" />
                  </div>
                  <span className={`font-body text-sm font-semibold ${route.accent}`}>{route.duration}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{route.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{route.description}</p>
                {route.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {route.highlights.map((h) => (
                      <span key={h} className="bg-white/50 font-body text-xs text-foreground/70 px-2 py-0.5 rounded-full">{h}</span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between pt-3 border-t border-black/8">
                  <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Navigation" size={12} fallback="MapPin" /> {route.distance}
                  </span>
                  <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Users" size={12} fallback="User" /> {route.capacity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-20 px-5 bg-sand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">Стоимость</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Цены на прогулки
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto_auto] bg-muted/50 px-3 py-3 text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
              <span>Маршрут</span>
              <span className="px-3 hidden sm:block">Длительность</span>
              <span className="px-3 text-center">Цена за катер</span>
              <span className="px-3 hidden sm:block text-center">Группа</span>
            </div>
            {prices.map((row, i) => (
              <div
                key={row.name}
                className={`grid grid-cols-[1fr_auto_auto_auto] items-center border-t border-border hover:bg-muted/30 transition-colors ${i === 1 ? 'bg-terra-light/40' : ''}`}
              >
                <div className="px-3 py-4">
                  <p className="font-body font-semibold text-foreground text-sm">{row.name}</p>
                  {row.note && <p className="font-body text-xs text-muted-foreground mt-0.5">{row.note}</p>}
                </div>
                <div className="px-3 py-4 hidden sm:block">
                  <p className="font-body text-sm text-muted-foreground">{row.duration}</p>
                </div>
                <div className="px-3 py-4 text-center">
                  <p className="font-body font-bold text-terra text-base">{row.price}</p>
                </div>
                <div className="px-3 py-4 text-center hidden sm:block">
                  <p className="font-body text-xs text-muted-foreground">{row.group}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm font-body text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={14} fallback="MessageCircle" />
              Индивидуальный тур — по запросу
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
