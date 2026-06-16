export default function NavBar() {
  return (
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
  );
}
