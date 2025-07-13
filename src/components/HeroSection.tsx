import { Calendar, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";
import botanicalDecoration from "@/assets/botanical-decoration.png";

const HeroSection = () => {
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
        <div className="mb-8">
          <h1 className="font-wedding-script text-6xl md:text-8xl mb-4 drop-shadow-lg">
            Erico Samuel & Catarina
          </h1>
          <p className="font-wedding-elegant text-xl md:text-2xl opacity-90 mb-8">
            Vamos casar!
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
            <Calendar className="w-6 h-6 text-wedding-rose" />
            <span className="font-wedding-elegant font-semibold">6 de Novembro, 2026</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
            <MapPin className="w-6 h-6 text-wedding-rose" />
            <span className="font-wedding-elegant">Salvador, Bahia</span>
          </div>
        </div>

        <div className="text-center">
          <p className="font-wedding-script text-3xl md:text-4xl text-wedding-rose-light mb-4">
            Vamos casar!
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Sim, é verdade! A gente vai se casar!!! Estamos muito felizes! Estamos nas nuvens e queremos compartilhar com você todo o nosso amor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;