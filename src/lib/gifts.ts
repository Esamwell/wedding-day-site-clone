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

export const gifts: Gift[] = [
  // Cozinha
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
    nome: "Kit Utensílios de Silicone",
    descricao: "10 peças resistentes ao calor, ideal para cozinhar sem riscar as panelas.",
    preco: 89.90,
    categoria: "Cozinha",
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
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
    imagemUrl: "/api/placeholder/300/300",
    comprado: false
  },
  {
    id: "102",
    nome: "Cota Lua de Mel - R$200",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 200.00,
    categoria: "Lua de Mel",
    imagemUrl: "/api/placeholder/300/300",
    comprado: false
  },
  {
    id: "103",
    nome: "Cota Lua de Mel - R$500",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 500.00,
    categoria: "Lua de Mel",
    imagemUrl: "/api/placeholder/300/300",
    comprado: false
  },
  {
    id: "999",
    nome: "Presente de Teste",
    descricao: "Presente para testar o fluxo de pagamento.",
    preco: 5.00,
    categoria: "Teste",
    imagemUrl: "/placeholder.svg",
    comprado: false
  },
  {
    id: "1000",
    nome: "Presente de Teste 10 centavos",
    descricao: "Presente para testar pagamentos de valor mínimo.",
    preco: 0.10,
    categoria: "Teste",
    imagemUrl: "/placeholder.svg",
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
  }
]; 