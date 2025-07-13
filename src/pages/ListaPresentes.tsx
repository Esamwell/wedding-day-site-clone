import { useState } from "react";
import { Heart, ShoppingCart, Gift, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface PresenteItem {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagemUrl: string;
  comprado: boolean;
  loja?: string;
  link?: string;
}

const ListaPresentes = () => {
  const { toast } = useToast();
  const [presentes] = useState<PresenteItem[]>([
    {
      id: "1",
      nome: "Jogo de Panelas Antiaderente",
      descricao: "Conjunto completo com 5 peças em alumínio antiaderente",
      preco: 299.90,
      categoria: "Cozinha",
      imagemUrl: "/api/placeholder/300/300",
      comprado: false,
      loja: "Magazine Luiza",
      link: "#"
    },
    {
      id: "2",
      nome: "Jogo de Cama Casal King",
      descricao: "100% algodão percal, 4 peças com fronhas extras",
      preco: 189.90,
      categoria: "Quarto",
      imagemUrl: "/api/placeholder/300/300",
      comprado: true,
      loja: "Americanas",
      link: "#"
    },
    {
      id: "3",
      nome: "Cafeteira Elétrica Programável",
      descricao: "Para 12 xícaras com timer e aquecimento automático",
      preco: 159.90,
      categoria: "Eletrodomésticos",
      imagemUrl: "/api/placeholder/300/300",
      comprado: false,
      loja: "Submarino",
      link: "#"
    },
    {
      id: "4",
      nome: "Kit Toalhas de Banho",
      descricao: "Conjunto com 4 toalhas 100% algodão felpudo",
      preco: 89.90,
      categoria: "Banheiro",
      imagemUrl: "/api/placeholder/300/300",
      comprado: false,
      loja: "Zara Home",
      link: "#"
    },
    {
      id: "5",
      nome: "Liquidificador 3.2L",
      descricao: "12 velocidades, copo de vidro, 1200W de potência",
      preco: 249.90,
      categoria: "Eletrodomésticos",
      imagemUrl: "/api/placeholder/300/300",
      comprado: false,
      loja: "Extra",
      link: "#"
    },
    {
      id: "6",
      nome: "Conjunto de Pratos e Bowls",
      descricao: "Porcelana branca, serviço para 6 pessoas (18 peças)",
      preco: 199.90,
      categoria: "Mesa e Jantar",
      imagemUrl: "/api/placeholder/300/300",
      comprado: false,
      loja: "Tok&Stok",
      link: "#"
    }
  ]);

  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todos");
  const [mostrarComprados, setMostrarComprados] = useState<boolean>(false);

  const categorias = ["Todos", ...Array.from(new Set(presentes.map(p => p.categoria)))];

  const presentesFiltrados = presentes.filter(presente => {
    const matchCategoria = filtroCategoria === "Todos" || presente.categoria === filtroCategoria;
    const matchComprado = mostrarComprados || !presente.comprado;
    return matchCategoria && matchComprado;
  });

  const handleComprarPresente = (presente: PresenteItem) => {
    if (presente.link && presente.link !== "#") {
      window.open(presente.link, '_blank');
    } else {
      toast({
        title: "Presente selecionado!",
        description: `Obrigado por escolher: ${presente.nome}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-secondary">
      {/* Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Gift className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-wedding-elegant text-primary">Lista de Presentes</h1>
              <Heart className="w-6 h-6 text-wedding-rose" />
            </div>
            <p className="text-muted-foreground text-lg">
              Escolha um presente especial para Emily & Carlos
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
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                presente.comprado ? 'opacity-60' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={presente.imagemUrl}
                  alt={presente.nome}
                  className="w-full h-48 object-cover"
                />
                {presente.comprado && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Comprado</span>
                    </div>
                  </div>
                )}
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
                  disabled={presente.comprado}
                  className="w-full gap-2"
                  variant={presente.comprado ? "outline" : "default"}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {presente.comprado ? "Já foi comprado" : "Comprar presente"}
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
          <div className="grid md:grid-cols-3 gap-6 text-center">
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
                Clique no botão para ser redirecionado à loja online
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
  );
};

export default ListaPresentes;