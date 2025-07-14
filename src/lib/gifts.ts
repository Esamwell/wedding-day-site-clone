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
  }
]; 