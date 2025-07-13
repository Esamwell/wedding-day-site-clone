import { Card } from "@/components/ui/card";
import botanicalDecoration from "@/assets/botanical-decoration.png";

const WelcomeSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-accent to-secondary relative overflow-hidden">
      {/* Botanical Decorations */}
      <div 
        className="absolute top-10 left-10 w-48 h-48 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${botanicalDecoration})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-25deg)',
        }}
      ></div>
      
      <div 
        className="absolute bottom-10 right-10 w-48 h-48 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${botanicalDecoration})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(155deg) scaleX(-1)',
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="font-wedding-script text-5xl md:text-6xl text-primary mb-8">
          Bem vindos ao nosso casamento!
        </h2>
        
        <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm shadow-lg border-0">
          <div className="space-y-6 text-foreground">
            <p className="text-lg md:text-xl leading-relaxed">
              <strong>Sim, é verdade! A gente vai se casar!!!</strong>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Estamos muito felizes! Estamos nas nuvens e queremos compartilhar com você 
              todo o nosso amor. Por isso estamos preparando um casamento que será história e 
              queremos que você se divirta muito.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Enquanto não chega o grande dia criamos um site com um montão de sessões 
              para que todos estejam no dia de tudo e para compartilhar a nossa história de amor.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Uma coisa importante: na sessão presença, poderás confirmar se você ou não vão 
              <strong>comparecer</strong>. Confirme o mais rápido possível que assim, organizar tudo 
              será muito mais fácil.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-medium text-primary">
              Aproveitem o site e a gente se encontra em breve, muitos beijos.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WelcomeSection;