import { Calendar, Clock, MapPin, Heart, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import coupleBeachImage from "@/assets/couple-beach.jpg";

const DetailsSection = () => {
  return (
    <section id="detalhes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-wedding-script text-5xl md:text-6xl text-primary mb-4">
            Detalhes do Nosso Grande Dia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todas as informações importantes para você não perder nada da nossa celebração
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <Card className="p-6 border-2 border-wedding-eucalyptus-light bg-wedding-eucalyptus-light/20">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-wedding-elegant text-2xl font-semibold text-primary">Data</h3>
                  <p className="text-xl text-foreground">7 de Novembro de 2026</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-wedding-rose-light bg-wedding-rose-light/20">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-wedding-elegant text-2xl font-semibold text-primary">Horário</h3>
                  <p className="text-xl text-foreground">Cerimônia às 17h</p>
                  <p className="text-lg text-muted-foreground">Festa às 19h30</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-wedding-elegant text-2xl font-semibold text-primary">Local</h3>
                  <p className="text-xl text-foreground">Salvador, Bahia</p>
                  <p className="text-lg text-muted-foreground">Endereço completo será enviado em breve</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={coupleBeachImage} 
                alt="Erico e Catarina na praia" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-wedding-script text-3xl mb-2">
                  Erico Samuel Monteiro & Catarina Borja
                </p>
                <p className="text-lg opacity-90">6 Novembro 2026</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-wedding-rose-light/30 to-wedding-eucalyptus-light/30 border-0 max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-wedding-rose mx-auto mb-6" />
            <h3 className="font-wedding-script text-4xl text-primary mb-4">
              Dress Code
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Venha com sua roupa mais elegante! Sugerimos trajes sociais e cores claras. 
              Evitem branco e cores muito próximas ao vestido da noiva.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;