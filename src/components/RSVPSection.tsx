import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Send, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    message: "",
    attending: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.attending) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Confirmação enviada!",
      description: "Obrigado por confirmar sua presença. Estamos ansiosos para celebrar com você!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      guests: "1",
      message: "",
      attending: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="presenca" className="py-20 bg-gradient-to-b from-secondary to-accent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-wedding-rose mx-auto mb-6" />
          <h2 className="font-wedding-script text-5xl md:text-6xl text-primary mb-4">
            Confirme sua Presença
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sua presença é o nosso maior presente! Por favor, confirme até <strong>1º de outubro de 2026</strong>
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-xl border-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium text-foreground">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="text-lg py-3 border-2 border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-medium text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="text-lg py-3 border-2 border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-medium text-foreground">
                Você vai comparecer? *
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={formData.attending === "sim" ? "default" : "outline"}
                  onClick={() => setFormData({...formData, attending: "sim"})}
                  className="py-6 text-lg font-medium"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Sim, estarei lá!
                </Button>
                <Button
                  type="button"
                  variant={formData.attending === "nao" ? "default" : "outline"}
                  onClick={() => setFormData({...formData, attending: "nao"})}
                  className="py-6 text-lg font-medium"
                >
                  Não poderei comparecer
                </Button>
              </div>
            </div>

            {formData.attending === "sim" && (
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-lg font-medium text-foreground">
                  <Users className="w-5 h-5 inline mr-2" />
                  Número de convidados (incluindo você)
                </Label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full text-lg py-3 px-3 border-2 border-border rounded-md focus:border-primary focus:outline-none"
                >
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5">5+ pessoas</option>
                </select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg font-medium text-foreground">
                Mensagem especial para os noivos
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Deixe uma mensagem carinhosa para nós..."
                className="text-lg min-h-[120px] border-2 border-border focus:border-primary"
                rows={4}
              />
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit" 
                size="lg"
                className="text-lg px-12 py-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-5 h-5 mr-2" />
                Confirmar Presença
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RSVPSection;