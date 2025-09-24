import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Timer, Bot, TrendingUp } from "lucide-react";
import heroImage1 from "@assets/Gemini_Generated_Image_g7uj6lg7uj6lg7uj_1758668175798.png";
import heroVideo1 from "@assets/Generated File September 23, 2025 - 11_32PM_1758693725088.mp4";
import heroVideo2 from "@assets/MARIA GONZALEZ.mp4";

// Configuración de videos del hero optimizada para 16:9
const heroVideos = [
  {
    type: 'video',
    src: heroVideo1,
    poster: heroImage1,
    title: 'Monte Hermoso Beachfront Experience',
    description: 'Experiencia frente al mar en Monte Hermoso'
  },
  {
    type: 'video', 
    src: heroVideo2,
    poster: heroImage1,
    title: 'Testimonial - María González',
    description: 'Historia de éxito real de propietaria'
  },
  {
    type: 'image',
    src: heroImage1,
    title: 'Luxury Sunset Views',
    description: 'Atardeceres desde tu balcón privado'
  }
];

// Componente de video optimizado
const VideoBackground = ({ media, isActive }: { media: any, isActive: boolean }) => {
  if (media.type === 'video') {
    return (
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={media.poster}
          className="w-full h-full object-cover"
          preload="metadata"
          onLoadStart={() => console.log(`Loading ${media.title}`)}
          onCanPlay={() => console.log(`${media.title} ready to play`)}
        >
          <source src={media.src} type="video/mp4" />
          {/* Fallback para navegadores sin soporte de video */}
          <img 
            src={media.poster} 
            alt={media.title}
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
    );
  } else {
    return (
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={media.src}
          alt={media.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
    );
  }
};

export default function HeroSection() {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 42, hours: 15, minutes: 30 });

  // Preload videos para mejor performance
  useEffect(() => {
    heroVideos.forEach((media) => {
      if (media.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.src = media.src;
        videoElement.preload = 'metadata';
        videoElement.load();
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % heroVideos.length);
    }, 6000); // 6 segundos para videos más largos
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);
    return () => clearInterval(countdown);
  }, []);

  const nextMedia = () => setCurrentMedia((prev) => (prev + 1) % heroVideos.length);
  const prevMedia = () => setCurrentMedia((prev) => (prev - 1 + heroVideos.length) % heroVideos.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroVideos.map((media, index) => (
          <VideoBackground
            key={index}
            media={media}
            isActive={index === currentMedia}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevMedia}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover-elevate"
        data-testid="button-prev-hero"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextMedia}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover-elevate"
        data-testid="button-next-hero"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Timer */}
        <div className="inline-flex items-center gap-2 bg-destructive/90 backdrop-blur-sm text-destructive-foreground px-4 py-2 rounded-full mb-6 animate-pulse">
          <Timer className="w-4 h-4" />
          <span className="text-sm font-medium" data-testid="text-countdown">
            Temporada 2025 - {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m restantes
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
          ¿CANSADO DE PERDER
          <br />
          <span className="text-golden">LA TEMPORADA?</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto">
          La primera plataforma que <span className="font-bold text-golden">GARANTIZA</span> que tu departamento nunca quede vacío
        </p>

        {/* Key Statistic */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <p className="text-lg text-white/80 mb-2">
            95% de reservas se pierden por mala atención
          </p>
          <p className="text-2xl md:text-3xl font-bold text-golden">
            NOSOTROS CAPTURAMOS EL 100%
          </p>
        </div>

        {/* Split Preview Before/After */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-destructive/20 backdrop-blur-sm rounded-lg p-6 border border-destructive/30">
            <h3 className="text-xl font-bold text-white mb-4">ANTES</h3>
            <div className="space-y-2 text-white/80">
              <p className="flex items-center gap-2">📱 Llamadas perdidas después de las 18hs</p>
              <p className="flex items-center gap-2">⏰ Respuestas tardías (clientes se van)</p>
              <p className="flex items-center gap-2">💸 Temporada perdida = $50,000 USD menos</p>
            </div>
          </div>
          <div className="bg-success/20 backdrop-blur-sm rounded-lg p-6 border border-success/30">
            <h3 className="text-xl font-bold text-white mb-4">CON RENTALS AI</h3>
            <div className="space-y-2 text-white/80">
              <p className="flex items-center gap-2"><Bot className="w-4 h-4" /> IA atiende 24/7/365</p>
              <p className="flex items-center gap-2">⚡ Respuesta en menos de 30 segundos</p>
              <p className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 300% más reservas garantizadas</p>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <Button
          size="lg"
          className="bg-golden hover:bg-golden/90 text-golden-foreground font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          data-testid="button-main-cta"
        >
          GARANTIZAMOS 300% MÁS RESERVAS
        </Button>

        {/* Secondary CTA */}
        <p className="text-white/70 mt-4">
          <button
            className="underline hover:text-golden transition-colors"
            data-testid="button-demo"
            onClick={() => console.log('Demo clicked')}
          >
            Ver Demo en Vivo
          </button>
        </p>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMedia(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentMedia ? "bg-golden" : "bg-white/40"
            }`}
            data-testid={`dot-carousel-${index}`}
          />
        ))}
      </div>
    </section>
  );
}