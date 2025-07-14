import { Heart, Calendar, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="font-wedding-script text-4xl mb-4">
            Erico Samuel Monteiro & Catarina Borja
          </h3>
          <div className="flex items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>6 de Novembro, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Salvador, Bahia</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm opacity-90">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-wedding-rose" />
            <span>Feito com amor para celebrar nossa união</span>
            <Heart className="w-4 h-4 text-wedding-rose" />
          </div>
          <div className="space-y-2">
            <p>Obrigado por fazer parte da nossa história!</p>
            <p className="flex items-center justify-center gap-1">
              <span>Com carinho,</span>
              <span role="img" aria-label="igreja">💒</span>
              <strong>Erico & Catarina</strong>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm opacity-75">
            © 2026 Erico & Catarina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;