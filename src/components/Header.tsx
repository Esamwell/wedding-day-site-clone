import { Heart, Calendar, MapPin, Users, Gift } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/?section=${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => navigate('/')}
          aria-label="Ir para o início"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <Heart className="w-6 h-6 text-wedding-rose" />
          <span className="font-wedding-script text-2xl text-primary">E & C</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <Button 
            variant="ghost" 
            onClick={() => handleMenuClick('inicio')}
            className="text-foreground hover:text-primary"
          >
            Início
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleMenuClick('sobre')}
            className="text-foreground hover:text-primary"
          >
            Nossa História
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleMenuClick('detalhes')}
            className="text-foreground hover:text-primary"
          >
            Detalhes
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleMenuClick('presenca')}
            className="text-foreground hover:text-primary"
          >
            Confirmar Presença
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/lista-presentes')}
            className="text-foreground hover:text-primary"
          >
            Lista de Presentes
          </Button>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/lista-presentes')}
            className="border-primary text-primary hover:bg-primary-light"
          >
            <Gift className="w-4 h-4 mr-2" />
            Presentes
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection('presenca')}
            className="border-wedding-rose text-wedding-rose hover:bg-wedding-rose-light"
          >
            <Users className="w-4 h-4 mr-2" />
            Confirmar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;