export type Gift = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagemUrl: string;
  comprado: boolean;
  loja?: string;
  link?: string;
};

function getImageUrlByCategory(category: string): string {
  switch (category) {
    case "Cozinha":
      return "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80";
    case "Quarto":
      return "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
    case "Banheiro":
      return "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80";
    case "Mesa e Jantar":
      return "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80";
    case "Eletrodomésticos":
      return "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80";
    case "Lazer":
      return "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80";
    case "Decoração":
      return "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80";
    case "Bem-estar":
      return "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80";
    case "Experiências":
      return "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80";
    case "Lua de Mel":
      return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80";
    default:
      return "https://placehold.co/400x300?text=Presente";
  }
}

export const gifts: Gift[] = [
  // Cozinha
  {
    id: "1",
    nome: "Jogo de Panelas Antiaderente",
    descricao: "Conjunto completo com 5 peças em alumínio antiaderente",
    preco: 299.90,
    categoria: "Cozinha",
    imagemUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Magazine Luiza",
    link: "#"
  },
  {
    id: "2",
    nome: "Kit Utensílios de Silicone",
    descricao: "10 peças resistentes ao calor, ideal para cozinhar sem riscar as panelas.",
    preco: 89.90,
    categoria: "Cozinha",
    imagemUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Americanas",
    link: "#"
  },
  // Quarto
  {
    id: "3",
    nome: "Jogo de Cama Casal King",
    descricao: "100% algodão percal, 4 peças com fronhas extras",
    preco: 189.90,
    categoria: "Quarto",
    imagemUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    comprado: true,
    loja: "Americanas",
    link: "#"
  },
  {
    id: "4",
    nome: "Travesseiros NASA (par)",
    descricao: "Espuma viscoelástica, super confortável.",
    preco: 120.00,
    categoria: "Quarto",
    imagemUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Submarino",
    link: "#"
  },
  // Eletrodomésticos
  {
    id: "5",
    nome: "Cafeteira Elétrica Programável",
    descricao: "Para 12 xícaras com timer e aquecimento automático",
    preco: 159.90,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Submarino",
    link: "#"
  },
  {
    id: "6",
    nome: "Liquidificador 3.2L",
    descricao: "12 velocidades, copo de vidro, 1200W de potência",
    preco: 249.90,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Extra",
    link: "#"
  },
  // Banheiro
  {
    id: "7",
    nome: "Kit Toalhas de Banho",
    descricao: "Conjunto com 4 toalhas 100% algodão felpudo",
    preco: 89.90,
    categoria: "Banheiro",
    imagemUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Zara Home",
    link: "#"
  },
  {
    id: "8",
    nome: "Jogo de Tapetes",
    descricao: "3 peças antiderrapantes para banheiro.",
    preco: 59.90,
    categoria: "Banheiro",
    imagemUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Tok&Stok",
    link: "#"
  },
  // Mesa e Jantar
  {
    id: "9",
    nome: "Conjunto de Pratos e Bowls",
    descricao: "Porcelana branca, serviço para 6 pessoas (18 peças)",
    preco: 199.90,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Tok&Stok",
    link: "#"
  },
  {
    id: "10",
    nome: "Jogo de Taças para Vinho (6 peças)",
    descricao: "Cristal, ideal para ocasiões especiais.",
    preco: 129.90,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    comprado: false,
    loja: "Americanas",
    link: "#"
  },
  // Lua de Mel (Cotas)
  {
    id: "101",
    nome: "Cota Lua de Mel - R$100",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 100.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    comprado: false
  },
  {
    id: "102",
    nome: "Cota Lua de Mel - R$200",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 200.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    comprado: false
  },
  {
    id: "103",
    nome: "Cota Lua de Mel - R$500",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 500.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    comprado: false
  },
  {
    id: "2001",
    nome: "Cota Lua de Mel - R$ 80",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 80.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2002",
    nome: "Cota Lua de Mel - R$ 100",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 100.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2003",
    nome: "Cota Lua de Mel - R$ 150",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 150.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2004",
    nome: "Cota Lua de Mel - R$ 200",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 200.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2005",
    nome: "Cota Lua de Mel - R$ 300",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 300.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2101",
    nome: "Jogo de Toalhas de Banho",
    descricao: "Conjunto com 5 peças, 100% algodão.",
    preco: 120.00,
    categoria: "Banheiro",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2102",
    nome: "Aparelho de Jantar 20 peças",
    descricao: "Porcelana branca, para 6 pessoas.",
    preco: 250.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2103",
    nome: "Liquidificador",
    descricao: "Alta potência, copo de vidro.",
    preco: 180.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2104",
    nome: "Jantar Romântico",
    descricao: "Um jantar especial para o casal.",
    preco: 300.00,
    categoria: "Experiências",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2105",
    nome: "Passeio de barco",
    descricao: "Passeio para dois durante a lua de mel.",
    preco: 400.00,
    categoria: "Experiências",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2106",
    nome: "Kit de Panelas",
    descricao: "Conjunto antiaderente, 5 peças.",
    preco: 200.00,
    categoria: "Cozinha",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2107",
    nome: "Fritadeira sem óleo",
    descricao: "Air fryer, 4L.",
    preco: 350.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2108",
    nome: "Jogo de Lençol Queen",
    descricao: "100% algodão, 4 peças.",
    preco: 150.00,
    categoria: "Quarto",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2109",
    nome: "Cesta de Café da Manhã",
    descricao: "Cesta especial para o casal.",
    preco: 100.00,
    categoria: "Experiências",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2110",
    nome: "Kit churrasco",
    descricao: "Conjunto de facas e tábuas.",
    preco: 120.00,
    categoria: "Lazer",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2111",
    nome: "Avental personalizado",
    descricao: "Para o chef da casa.",
    preco: 80.00,
    categoria: "Cozinha",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2112",
    nome: "Jogo de Copos",
    descricao: "Conjunto com 12 peças.",
    preco: 90.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2113",
    nome: "Kit para vinho",
    descricao: "Abridor, termômetro e acessórios.",
    preco: 100.00,
    categoria: "Lazer",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2114",
    nome: "Cafeteira elétrica",
    descricao: "Para cafés especiais.",
    preco: 200.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2115",
    nome: "Jogo de Frigideiras",
    descricao: "Antiaderente, 3 peças.",
    preco: 120.00,
    categoria: "Cozinha",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2116",
    nome: "Kit Spa em Casa",
    descricao: "Toalhas, sais e velas aromáticas.",
    preco: 150.00,
    categoria: "Bem-estar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2117",
    nome: "Jogo de Pratos de Sobremesa",
    descricao: "Conjunto com 6 peças.",
    preco: 80.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2118",
    nome: "Kit para churrasco premium",
    descricao: "Facas, garfos e tábua de corte.",
    preco: 250.00,
    categoria: "Lazer",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2119",
    nome: "Aparelho de Fondue",
    descricao: "Para noites especiais.",
    preco: 150.00,
    categoria: "Lazer",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2120",
    nome: "Kit de almofadas decorativas",
    descricao: "Conjunto com 4 peças.",
    preco: 100.00,
    categoria: "Decoração",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2201",
    nome: "Jogo de Facas Profissional",
    descricao: "Conjunto com 6 facas inox e suporte.",
    preco: 120.00,
    categoria: "Cozinha",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2202",
    nome: "Panela de Pressão",
    descricao: "5 litros, antiaderente.",
    preco: 150.00,
    categoria: "Cozinha",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2203",
    nome: "Kit Utensílios de Silicone",
    descricao: "10 peças resistentes ao calor.",
    preco: 90.00,
    categoria: "Cozinha",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2301",
    nome: "Jogo de Cama Queen",
    descricao: "100% algodão, 4 peças.",
    preco: 180.00,
    categoria: "Quarto",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2302",
    nome: "Edredom Dupla Face",
    descricao: "Super macio, tamanho casal.",
    preco: 200.00,
    categoria: "Quarto",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2303",
    nome: "Travesseiro NASA",
    descricao: "Espuma viscoelástica, super confortável.",
    preco: 100.00,
    categoria: "Quarto",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2401",
    nome: "Kit Tapetes para Banheiro",
    descricao: "3 peças antiderrapantes.",
    preco: 80.00,
    categoria: "Banheiro",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2402",
    nome: "Jogo de Toalhas Luxo",
    descricao: "6 peças, 100% algodão.",
    preco: 160.00,
    categoria: "Banheiro",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2501",
    nome: "Jogo de Taças para Vinho",
    descricao: "6 peças de cristal.",
    preco: 120.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2502",
    nome: "Jogo Americano",
    descricao: "6 peças, tecido lavável.",
    preco: 90.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2601",
    nome: "Sanduicheira Elétrica",
    descricao: "Antiaderente, fácil de limpar.",
    preco: 100.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2602",
    nome: "Batedeira Planetária",
    descricao: "Potente, 3 velocidades.",
    preco: 250.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2701",
    nome: "Kit Caipirinha",
    descricao: "Socador, copos e tábua.",
    preco: 90.00,
    categoria: "Lazer",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2702",
    nome: "Rede de Descanso",
    descricao: "Algodão, tamanho casal.",
    preco: 120.00,
    categoria: "Lazer",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2801",
    nome: "Vaso Decorativo",
    descricao: "Cerâmica, 30cm.",
    preco: 100.00,
    categoria: "Decoração",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2802",
    nome: "Quadro Decorativo",
    descricao: "Arte moderna, 40x60cm.",
    preco: 150.00,
    categoria: "Decoração",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2901",
    nome: "Difusor de Aromas",
    descricao: "Elétrico, com essências.",
    preco: 120.00,
    categoria: "Bem-estar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2902",
    nome: "Kit Spa Relax",
    descricao: "Sais, óleos e velas.",
    preco: 150.00,
    categoria: "Bem-estar",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2951",
    nome: "Café da manhã especial",
    descricao: "Cesta gourmet entregue em casa.",
    preco: 120.00,
    categoria: "Experiências",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2952",
    nome: "Passeio Gastronômico",
    descricao: "Tour em restaurante local.",
    preco: 200.00,
    categoria: "Experiências",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2991",
    nome: "Cota Lua de Mel - R$ 400",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 400.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "2992",
    nome: "Cota Lua de Mel - R$ 500",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 500.00,
    categoria: "Lua de Mel",
    imagemUrl: "/placeholder.svg",
    comprado: false
  }
]; 