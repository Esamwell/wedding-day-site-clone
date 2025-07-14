import { useState } from "react";
import { Heart, ShoppingCart, Gift, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { gifts, Gift as GiftType } from "@/lib/gifts";

const ListaPresentes = () => {
  const { toast } = useToast();
  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todos");
  const [mostrarComprados, setMostrarComprados] = useState<boolean>(false);

  const categorias = ["Todos", ...Array.from(new Set(gifts.map(p => p.categoria)))];

  const presentesFiltrados = gifts.filter(presente => {
    const matchCategoria = filtroCategoria === "Todos" || presente.categoria === filtroCategoria;
    const matchComprado = mostrarComprados || !presente.comprado;
    return matchCategoria && matchComprado;
  });

  const handleComprarPresente = async (presente: GiftType) => {
    try {
      const response = await fetch('/api/create_preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: presente.nome, preco: presente.preco, id: presente.id }),
      });
      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        toast({
          title: "Erro ao iniciar pagamento",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao conectar com o servidor",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-accent to-secondary">
        {/* Title Section */}
        <div className="bg-background/95 backdrop-blur-sm border-b border-border pt-20">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Gift className="w-8 h-8 text-primary" />
                <h1 className="text-4xl font-wedding-elegant text-primary">Lista de Presentes</h1>
                <Heart className="w-6 h-6 text-wedding-rose" />
              </div>
              <p className="text-muted-foreground text-lg">
                Escolha um presente especial para Catarina & Erico Samuel
              </p>
            </div>
          </div>
        </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filtros */}
        <div className="mb-8 bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-foreground">Categoria:</span>
              {categorias.map(categoria => (
                <Badge
                  key={categoria}
                  variant={filtroCategoria === categoria ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary/80"
                  onClick={() => setFiltroCategoria(categoria)}
                >
                  {categoria}
                </Badge>
              ))}
            </div>
            <Button
              variant={mostrarComprados ? "default" : "outline"}
              size="sm"
              onClick={() => setMostrarComprados(!mostrarComprados)}
              className="gap-2"
            >
              <Check className="w-4 h-4" />
              {mostrarComprados ? "Ocultar comprados" : "Mostrar comprados"}
            </Button>
          </div>
        </div>

        {/* Grid de Presentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentesFiltrados.map(presente => (
            <Card 
              key={presente.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={presente.imagemUrl}
                  alt={presente.nome}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {presente.categoria}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{presente.nome}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {presente.descricao}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    R$ {presente.preco.toFixed(2).replace('.', ',')}
                  </span>
                  {presente.loja && (
                    <span className="text-sm text-muted-foreground">
                      {presente.loja}
                    </span>
                  )}
                </div>
                
                <Button
                  onClick={() => handleComprarPresente(presente)}
                  className="w-full gap-2"
                  variant="default"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Comprar presente
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {presentesFiltrados.length === 0 && (
          <div className="text-center py-12">
            <Gift className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum presente encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para ver mais opções.
            </p>
          </div>
        )}

        {/* Informações adicionais */}
        <div className="mt-12 bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-wedding-elegant text-primary mb-4 text-center">
            Como funciona nossa lista de presentes?
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Escolha o presente</h4>
              <p className="text-sm text-muted-foreground">
                Navegue pela nossa lista e escolha o presente que deseja nos dar
              </p>
            </div>
            <div>
              <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Compre online</h4>
              <p className="text-sm text-muted-foreground">
                Clique no botão para ser redirecionado ao pagamento
              </p>
            </div>
            <div>
              <Heart className="w-8 h-8 text-wedding-rose mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Finalize e confirme</h4>
              <p className="text-sm text-muted-foreground">
                Após o pagamento, clique em "Voltar para o site". O comprovante será enviado para o seu e-mail cadastrado no Mercado Pago.
              </p>
            </div>
            <div>
              <Heart className="w-8 h-8 text-wedding-rose mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Recebemos com amor</h4>
              <p className="text-sm text-muted-foreground">
                O presente será entregue diretamente em nossa casa
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ListaPresentes;