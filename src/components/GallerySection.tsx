import Icon from '@/components/ui/icon';

const HERO_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/dd0ce98a-3bf9-4f41-abf3-ae306b942360.jpg";
const BOAT_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/0cbc03f7-7bb0-4637-8196-595bcb5355b4.jpg";
const FAMILY_IMG = "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/files/d65a604a-bec5-4f2a-a034-892c9237a2c3.jpg";

const gallery = [
  { src: HERO_IMG, alt: "Вид с высоты на Юмагузинское водохранилище", wide: true },
  { src: BOAT_IMG, alt: "Катер на водохранилище", wide: false },
  { src: FAMILY_IMG, alt: "Семья на прогулке", wide: false },
  { src: "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/bucket/b21265c3-37d1-445e-b128-850d33b6b7df.JPEG", alt: "Катер Silver Hawk на водохранилище", wide: false },
  { src: "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/bucket/2d62cde1-e14c-4103-a3e0-5f9ee249c5e5.JPEG", alt: "Катер мчится по воде", wide: true },
  { src: "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/bucket/55abd801-d964-4434-b439-14208cbfd644.JPEG", alt: "Скала Вождей — природный памятник", wide: false },
  { src: "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/bucket/ab34016c-6c61-4afa-9f7b-393d7fb379f4.JPG", alt: "Вид на плотину Юмагузинского водохранилища", wide: false },
  { src: "https://cdn.poehali.dev/projects/4a4e2e2e-613e-4daf-996c-f637d18b1837/bucket/20cac24c-424e-4e32-8b37-838fbc06e6b8.JPG", alt: "Панорама Юмагузинского водохранилища", wide: true },
];

export default function GallerySection() {
  return (
    <>
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
              Свяжитесь с нами, чтобы узнать подробности о прогулках
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-water text-white font-body font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Icon name="Phone" size={16} fallback="PhoneCall" />
              Связаться с нами
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
                <p className="font-body text-xs text-muted-foreground mb-1">Капитан: Олег Степанов</p>
                <p className="font-body text-xs text-muted-foreground">Реквизиты ИП — уточняйте при бронировании</p>
              </div>
            </div>

            <div className="bg-terra rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-3xl font-semibold mb-4">Забронировать прогулку</h3>
                <p className="font-body text-white/80 text-sm leading-relaxed mb-8">
                  Позвоните нам — ответим в течение 15 минут. Согласуем маршрут, время и количество гостей.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Подберём удобное время",
                    "Посоветуем оптимальный маршрут",
                    "Расскажем о подготовке к прогулке",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm text-white/85">
                      <Icon name="Check" size={16} className="text-white/60 shrink-0" fallback="CheckCircle" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+79279696036"
                  className="w-full bg-white text-terra font-body font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity text-center"
                >
                  📞 Позвонить +7 (927) 969-60-36
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="MapPin" size={18} className="text-terra" fallback="Navigation" />
              <span className="font-display text-lg font-semibold text-foreground">Место отправления</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=76085659578"
                width="100%"
                height="400"
                frameBorder="0"
                title="Место отправления"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS WIDGET */}
      <section className="py-12 px-5 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center mb-8">Отзывы</h2>
          <div id="widget-reviews"></div>
          <script
            defer
            data-reviews-widget="otzyvypro"
            data-widget-id="1da1c404-3be8-40bd-96b1-00fb9df8667a"
            data-container-id="widget-reviews"
            src="https://cdn.mediacdn.space/reviews_widget/widget-loader.js"
          ></script>
        </div>
      </section>
    </>
  );
}