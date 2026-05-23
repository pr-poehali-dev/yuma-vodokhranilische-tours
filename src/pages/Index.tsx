import Icon from '@/components/ui/icon';

const HERO_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/dd0ce98a-3bf9-4f41-abf3-ae306b942360.jpg";
const BOAT_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/0cbc03f7-7bb0-4637-8196-595bcb5355b4.jpg";
const FAMILY_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/d65a604a-bec5-4f2a-a034-892c9237a2c3.jpg";

const routes = [
  {
    icon: "Anchor",
    title: "Обзорная прогулка",
    duration: "1 час",
    description: "Классический маршрут вдоль живописных берегов водохранилища. Проплывём мимо скал, лесных мысов и смотровых точек. Идеально для первого знакомства с Юмагузинским водохранилищем.",
    distance: "~12 км",
    capacity: "до 8 человек",
    color: "bg-water-light",
    accent: "text-water",
  },
  {
    icon: "Mountain",
    title: "Горный маршрут",
    duration: "2,5 часа",
    description: "Углублённый маршрут к живописным скальным выходам и ущельям. Проходим мимо урочища Кутук, останавливаемся у водопадов и каменных гротов. Незабываемые виды Уральских гор.",
    distance: "~25 км",
    capacity: "до 8 человек",
    color: "bg-terra-light",
    accent: "text-terra",
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
  },
  {
    icon: "Fish",
    title: "Рыбалка и прогулка",
    duration: "4 часа",
    description: "Совмещаем прогулку с рыбалкой на лучших местах. Капитан знает все уловистые точки. Снасти и наживка в аренду. Улов можно приготовить на берегу на мангале.",
    distance: "~20 км",
    capacity: "до 5 человек",
    color: "bg-[hsl(150,25%,90%)]",
    accent: "text-forest",
  },
];

const prices = [
  { name: "Обзорная прогулка", duration: "1 час", weekday: "3 500 ₽", weekend: "4 000 ₽", group: "до 8 чел.", note: "" },
  { name: "Горный маршрут", duration: "2,5 часа", weekday: "7 000 ₽", weekend: "8 000 ₽", group: "до 8 чел.", note: "" },
  { name: "Закатная прогулка", duration: "1,5 часа", weekday: "5 000 ₽", weekend: "5 500 ₽", group: "до 6 чел.", note: "" },
  { name: "Рыбалка и прогулка", duration: "4 часа", weekday: "10 000 ₽", weekend: "12 000 ₽", group: "до 5 чел.", note: "Снасти: +500 ₽" },
  { name: "Аренда катера", duration: "1 час", weekday: "2 500 ₽", weekend: "3 000 ₽", group: "до 8 чел.", note: "Без капитана" },
];

const gallery = [
  { src: HERO_IMG, alt: "Вид с высоты на Юмагузинское водохранилище", wide: true },
  { src: BOAT_IMG, alt: "Катер на водохранилище", wide: false },
  { src: FAMILY_IMG, alt: "Семья на прогулке", wide: false },
];

const features = [
  { icon: "Shield", text: "Безопасность", desc: "Спасательные жилеты и инструктаж" },
  { icon: "MapPin", text: "Знание мест", desc: "Капитан с 10-летним опытом" },
  { icon: "Clock", text: "Гибкое время", desc: "Отправление по договорённости" },
  { icon: "Users", text: "Любые компании", desc: "От пары до группы 8 человек" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-body">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚓</span>
            <span className="font-display text-xl font-semibold text-terra">Юмагузинский катер</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-body text-muted-foreground">
            <a href="#routes" className="hover:text-terra transition-colors">Маршруты</a>
            <a href="#prices" className="hover:text-terra transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-terra transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-terra transition-colors">Контакты</a>
          </div>
          <a
            href="#contacts"
            className="bg-terra text-white text-sm font-body font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Забронировать
          </a>
        </div>
      </nav>

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
              <p className="font-body text-white/70 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-5 bg-sand-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">О нас</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Ваши проводники<br/>по уральским водам
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-5">
              Юмагузинское водохранилище — одно из красивейших мест Башкортостана. Окружённое хребтами Южного Урала, оно таит в себе скалы, гроты, водопады и нетронутые леса. Лучший способ увидеть всё это — с борта катера.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Наш капитан знает каждый залив и скалу. Мы возим гостей с 2015 года и гордимся тем, что каждый возвращается домой с переполненным впечатлениями сердцем.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-4xl font-bold text-terra">10+</p>
                <p className="font-body text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-terra">500+</p>
                <p className="font-body text-sm text-muted-foreground">довольных гостей</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-terra">4</p>
                <p className="font-body text-sm text-muted-foreground">маршрута</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={FAMILY_IMG}
              alt="Семья на прогулке по водохранилищу"
              className="rounded-2xl w-full object-cover shadow-xl"
              style={{ height: '420px' }}
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Отличные отзывы</p>
                  <p className="font-body text-xs text-muted-foreground">4.9 / 5 на Яндексе</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-20 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">Маршруты</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Выберите свой маршрут
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((route) => (
              <div
                key={route.title}
                className={`${route.color} rounded-2xl p-7 hover-lift cursor-pointer border border-border`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                    <Icon name={route.icon} size={22} className={route.accent} fallback="Compass" />
                  </div>
                  <span className={`font-body text-sm font-semibold ${route.accent} bg-white/60 px-3 py-1 rounded-full`}>
                    {route.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {route.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm">
                  {route.description}
                </p>
                <div className="flex gap-5">
                  <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Icon name="Route" size={14} fallback="MapPin" />
                    {route.distance}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                    <Icon name="Users" size={14} fallback="User" />
                    {route.capacity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-20 px-5 bg-sand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">Прозрачные цены</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-3">
              Стоимость прогулок
            </h2>
            <p className="font-body text-muted-foreground">Цены указаны за всю лодку, а не за человека</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="grid grid-cols-5 gap-0 bg-terra text-white text-sm font-body font-semibold">
              <div className="col-span-2 px-5 py-4">Маршрут</div>
              <div className="px-3 py-4 text-center">Пн–Пт</div>
              <div className="px-3 py-4 text-center">Сб–Вс</div>
              <div className="px-3 py-4 text-center hidden sm:block">Группа</div>
            </div>

            {prices.map((row, i) => (
              <div
                key={row.name}
                className={`grid grid-cols-5 gap-0 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[hsl(38,35%,96%)]'}`}
              >
                <div className="col-span-2 px-5 py-4">
                  <p className="font-body font-medium text-foreground text-sm">{row.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{row.duration}{row.note ? ` · ${row.note}` : ''}</p>
                </div>
                <div className="px-3 py-4 text-center">
                  <p className="font-body font-semibold text-foreground text-sm">{row.weekday}</p>
                </div>
                <div className="px-3 py-4 text-center">
                  <p className="font-display font-semibold text-terra text-base">{row.weekend}</p>
                </div>
                <div className="px-3 py-4 text-center hidden sm:block">
                  <p className="font-body text-xs text-muted-foreground">{row.group}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm font-body text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Icon name="Info" size={14} fallback="AlertCircle" />
              Предоплата 50% при бронировании
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Baby" size={14} fallback="User" />
              Дети до 5 лет — бесплатно
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={14} fallback="MessageCircle" />
              Индивидуальный тур — по запросу
            </span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">Галерея</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Красота Юмагузинского
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl hover-lift ${img.wide ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 bg-water-light rounded-2xl p-8 text-center">
            <p className="font-display text-2xl font-semibold text-foreground mb-2">
              Хотите увидеть больше?
            </p>
            <p className="font-body text-muted-foreground text-sm mb-5">
              Смотрите видео с прогулок и отзывы гостей в нашем ВКонтакте
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-water text-white font-body font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Icon name="ExternalLink" size={16} fallback="Link" />
              Перейти во ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH BOAT BANNER */}
      <section className="overflow-hidden">
        <div className="relative h-72 md:h-96">
          <img
            src={BOAT_IMG}
            alt="Катер на Юмагузинском водохранилище"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-center px-10 md:px-20">
            <div className="max-w-md">
              <h2 className="font-display text-3xl md:text-5xl text-white font-semibold mb-3">
                Почувствуйте<br/><em className="italic font-normal">свободу воды</em>
              </h2>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                Ни шума города, ни суеты — только ветер, горы и сияющая вода Юмагузинского.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-5 bg-sand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terra font-body text-sm uppercase tracking-widest mb-3">Контакты</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-3">
              Свяжитесь с нами
            </h2>
            <p className="font-body text-muted-foreground">
              Забронируйте прогулку или задайте любой вопрос
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">Реквизиты и контакты</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-terra-light rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={18} className="text-terra" fallback="PhoneCall" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-0.5">Телефон</p>
                  <a href="tel:+79279696036" className="font-body font-semibold text-foreground hover:text-terra transition-colors">+7 (927) 969-60-36</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-terra-light rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg">💬</span>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1.5">Мессенджеры</p>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href="https://wa.me/79279696036"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-body font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <span>📱</span> WhatsApp
                    </a>
                    <a
                      href="https://t.me/+79279696036"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#2AABEE] text-white text-xs font-body font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <span>✈️</span> Telegram
                    </a>
                    <a
                      href="https://vk.com/id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#4C75A3] text-white text-xs font-body font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <span>🔵</span> ВКонтакте
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-terra-light rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={18} className="text-terra" fallback="Navigation" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-0.5">Место отправления</p>
                  <p className="font-body font-semibold text-foreground">Пристань у с. Юмагузино</p>
                  <p className="font-body text-xs text-muted-foreground">Республика Башкортостан</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-terra-light rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Clock" size={18} className="text-terra" fallback="Timer" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-0.5">Время работы</p>
                  <p className="font-body font-semibold text-foreground">Ежедневно 8:00 — 20:00</p>
                  <p className="font-body text-xs text-muted-foreground">Май — сентябрь</p>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="font-body text-xs text-muted-foreground mb-1">Капитан: Макс</p>
                <p className="font-body text-xs text-muted-foreground">Реквизиты ИП — уточняйте при бронировании</p>
              </div>
            </div>

            <div className="bg-terra rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-3xl font-semibold mb-4">Забронировать прогулку</h3>
                <p className="font-body text-white/80 text-sm leading-relaxed mb-8">
                  Напишите нам в мессенджер или позвоните — ответим в течение 15 минут. Согласуем маршрут, время и количество гостей.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Подберём удобное время",
                    "Подготовим катер и снаряжение",
                    "Встретим на пристани",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm text-white/90">
                      <Icon name="Check" size={16} className="text-white/70 shrink-0" fallback="CheckCircle" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+79279696036"
                  className="w-full bg-white text-terra font-body font-semibold py-4 rounded-xl hover:bg-white/90 transition-colors text-center"
                >
                  📞 Позвонить · +7 (927) 969-60-36
                </a>
                <a
                  href="https://wa.me/79279696036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/15 text-white border border-white/30 font-body font-medium py-4 rounded-xl hover:bg-white/25 transition-colors text-center"
                >
                  📱 Написать в WhatsApp
                </a>
                <a
                  href="https://t.me/+79279696036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/15 text-white border border-white/30 font-body font-medium py-4 rounded-xl hover:bg-white/25 transition-colors text-center"
                >
                  ✈️ Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white/70 py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            <span className="font-display text-lg text-white">Юмагузинский катер</span>
          </div>
          <p className="font-body text-sm text-center">
            Прогулки на катере · Юмагузинское водохранилище · Башкортостан
          </p>
          <p className="font-body text-xs">© 2024 Все права защищены</p>
        </div>
      </footer>

    </div>
  );
}