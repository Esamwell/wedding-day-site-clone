import { Calendar, MapPin, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-couple.jpg";
import botanicalDecoration from "@/assets/botanical-decoration.png";

const HeroSection = () => {
  // Data alvo: 7 de novembro de 2026, 00:00:00
  const targetDate = new Date("2026-11-07T00:00:00-03:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ dias, horas, minutos, segundos });
      } else {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Botanical Decorations */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(${botanicalDecoration})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-15deg)',
        }}
      ></div>
      
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(${botanicalDecoration})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(165deg) scaleX(-1)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-2 max-w-3xl mx-auto pt-10 md:pt-16">
        <div className="mb-6 flex flex-col items-center justify-center gap-1 md:gap-2">
          <h1
            className="font-wedding-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full md:max-w-3xl mx-auto mb-1 md:mb-2 drop-shadow-lg leading-tight break-words px-1"
            style={{ wordBreak: 'break-word', hyphens: 'auto', lineHeight: 1.1 }}
          >
            Erico Samuel & Catarina
          </h1>
          <p className="font-wedding-elegant text-base md:text-lg opacity-90 mb-1 md:mb-2">
            Vamos casar!
          </p>
        </div>

        <div className="space-y-4 mb-8 md:mb-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-wedding-rose" />
              <span className="font-wedding-elegant font-semibold tracking-wide md:tracking-widest uppercase text-white/90">Faltam</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 bg-black/30 rounded-2xl px-3 md:px-5 py-2 md:py-3 mt-1 shadow-lg">
              {/* Dias */}
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{timeLeft.dias}</span>
                <span className="text-[9px] md:text-xs text-white/80 mt-0.5 tracking-widest uppercase">dias</span>
              </div>
              <span className="text-lg md:text-2xl font-bold text-white/70 mx-0.5 md:mx-1">:</span>
              {/* Horas */}
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{String(timeLeft.horas).padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xs text-white/80 mt-0.5 tracking-widest uppercase">horas</span>
              </div>
              <span className="text-lg md:text-2xl font-bold text-white/70 mx-0.5 md:mx-1">:</span>
              {/* Minutos */}
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{String(timeLeft.minutos).padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xs text-white/80 mt-0.5 tracking-widest uppercase">min</span>
              </div>
              <span className="text-lg md:text-2xl font-bold text-white/70 mx-0.5 md:mx-1">:</span>
              {/* Segundos */}
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{String(timeLeft.segundos).padStart(2, '0')}</span>
                <span className="text-[9px] md:text-xs text-white/80 mt-0.5 tracking-widest uppercase">seg</span>
              </div>
            </div>
            <span className="text-xs md:text-sm font-normal opacity-80 mt-1 tracking-wide">para a cerimônia!</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base mt-1 md:mt-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-wedding-rose" />
            <span className="font-wedding-elegant">Salvador, Bahia</span>
          </div>
        </div>

        <div className="text-center mt-1 md:mt-2">
          <p className="font-wedding-script text-lg md:text-2xl text-wedding-rose-light mb-1 md:mb-2">
            Vamos casar!
          </p>
          <p className="text-sm md:text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
            Sim, é verdade! A gente vai se casar!!! Estamos muito felizes! Estamos nas nuvens e queremos compartilhar com você todo o nosso amor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;