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
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1
            className="font-wedding-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-full md:max-w-5xl mx-auto mb-2 md:mb-4 drop-shadow-lg leading-tight break-words px-2"
            style={{ wordBreak: 'break-word', hyphens: 'auto', lineHeight: 1.1 }}
          >
            Erico Samuel & Catarina
          </h1>
          <p className="font-wedding-elegant text-lg md:text-2xl opacity-90 mb-2 md:mb-4">
            Vamos casar!
          </p>
        </div>

        <div className="space-y-6 mb-10 md:mb-14 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 md:gap-3 text-base md:text-xl">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-wedding-rose" />
              <span className="font-wedding-elegant font-semibold tracking-wide md:tracking-widest uppercase text-white/90">Faltam</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-4 bg-black/30 rounded-2xl px-4 md:px-8 py-3 md:py-5 mt-1 md:mt-3 shadow-lg">
              {/* Dias */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-6xl lg:text-7xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{timeLeft.dias}</span>
                <span className="text-[10px] md:text-xs lg:text-sm text-white/80 mt-1 tracking-widest uppercase">dias</span>
              </div>
              <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white/70 mx-1 md:mx-2">:</span>
              {/* Horas */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-6xl lg:text-7xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{String(timeLeft.horas).padStart(2, '0')}</span>
                <span className="text-[10px] md:text-xs lg:text-sm text-white/80 mt-1 tracking-widest uppercase">horas</span>
              </div>
              <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white/70 mx-1 md:mx-2">:</span>
              {/* Minutos */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-6xl lg:text-7xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{String(timeLeft.minutos).padStart(2, '0')}</span>
                <span className="text-[10px] md:text-xs lg:text-sm text-white/80 mt-1 tracking-widest uppercase">min</span>
              </div>
              <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white/70 mx-1 md:mx-2">:</span>
              {/* Segundos */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-6xl lg:text-7xl font-wedding-elegant font-bold text-white drop-shadow-lg leading-none">{String(timeLeft.segundos).padStart(2, '0')}</span>
                <span className="text-[10px] md:text-xs lg:text-sm text-white/80 mt-1 tracking-widest uppercase">seg</span>
              </div>
            </div>
            <span className="text-xs md:text-base font-normal opacity-80 mt-2 md:mt-3 tracking-wide">para a cerimônia!</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 text-base md:text-xl mt-2 md:mt-4">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-wedding-rose" />
            <span className="font-wedding-elegant">Salvador, Bahia</span>
          </div>
        </div>

        <div className="text-center mt-2 md:mt-4">
          <p className="font-wedding-script text-2xl md:text-4xl text-wedding-rose-light mb-2 md:mb-4">
            Vamos casar!
          </p>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Sim, é verdade! A gente vai se casar!!! Estamos muito felizes! Estamos nas nuvens e queremos compartilhar com você todo o nosso amor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;