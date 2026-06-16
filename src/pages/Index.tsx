import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <NavBar />
      <HeroSection />
      <GallerySection />

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
