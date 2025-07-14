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
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/06/19/15/pots-1957680_1280.jpg",
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
    imagemUrl: "https://m.media-amazon.com/images/I/61qNU3ToCWL._UF894,1000_QL80_.jpg",
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
    imagemUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/32/bed-1868377_1280.jpg",
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
    imagemUrl: "https://www.colchaocostarica.com.br/produtos/imagens/739-det-Travesseiro-Duoflex-Nasa-Alto-Luxo-Viscoelastico-NS1116.jpg",
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
    imagemUrl: "https://cdn.pixabay.com/photo/2014/12/21/23/28/coffee-machine-579551_1280.png",
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
    imagemUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/blender-1239426_1280.jpg",
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
    imagemUrl: "https://centraltoalhas.cdn.magazord.com.br/img/2022/06/produto/4373/banho-hotel-prata.jpg?ims=800x800",
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
    imagemUrl: "https://images.yampi.me/assets/stores/lindacasa/uploads/images/jogo-de-tapete-para-cozinha-passadeira-3-pecas-base-emborrachada-antiderrapante-belo-cotton-cinza-63860945efad5-large.jpg",
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
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/06/19/15/dishes-1957681_1280.jpg",
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
    imagemUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/32/wine-glass-1868376_1280.jpg",
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
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "102",
    nome: "Cota Lua de Mel - R$200",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 200.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "103",
    nome: "Cota Lua de Mel - R$500",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 500.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  // Exemplos de outros presentes com imagens fornecidas
  {
    id: "2111",
    nome: "Avental personalizado",
    descricao: "Para o chef da casa.",
    preco: 80.00,
    categoria: "Cozinha",
    imagemUrl: "https://cdn.awsli.com.br/2500x2500/393/393232/produto/157884693/whatsapp-image-2023-04-25-at-15-41-32-2m5kifm12e.jpeg",
    comprado: false
  },
  {
    id: "2117",
    nome: "Jogo de Pratos de Sobremesa",
    descricao: "Conjunto com 6 peças.",
    preco: 80.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://d9a2b0af1mfg9.cloudfront.net/Custom/Content/Products/16/92/16929_prato-sobremesa-pr-12196-820074_m3_637807087823040744.webp",
    comprado: false
  },
  {
    id: "2401",
    nome: "Kit Tapetes para Banheiro",
    descricao: "3 peças antiderrapantes.",
    preco: 80.00,
    categoria: "Banheiro",
    imagemUrl: "https://m.media-amazon.com/images/I/71N5jV+wZmL._UF1000,1000_QL80_.jpg",
    comprado: false
  },
  {
    id: "2112",
    nome: "Jogo de Copos",
    descricao: "Conjunto com 12 peças.",
    preco: 90.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://d9a2b0af1mfg9.cloudfront.net/Custom/Content/Products/12/55/12552_7988-conj-c-6-copos-altos-c-fio-de-ouro-diamond-079884_m1_637962582822742654.webp",
    comprado: false
  },
  {
    id: "2502",
    nome: "Jogo Americano",
    descricao: "6 peças, tecido lavável.",
    preco: 90.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://m.media-amazon.com/images/I/61i-Rf35H1L._UF894,1000_QL80_.jpg",
    comprado: false
  },
  {
    id: "2701",
    nome: "Kit Caipirinha",
    descricao: "Socador, copos e tábua.",
    preco: 90.00,
    categoria: "Lazer",
    imagemUrl: "https://m.media-amazon.com/images/I/61wiJCEq0iL.__AC_SX300_SY300_QL70_ML2_.jpg",
    comprado: false
  },
  {
    id: "2113",
    nome: "Kit para vinho",
    descricao: "Abridor, termômetro e acessórios.",
    preco: 100.00,
    categoria: "Lazer",
    imagemUrl: "https://cdn.awsli.com.br/800x800/116/116963/produto/232521354ca83e55c3e.jpg",
    comprado: false
  },
  {
    id: "2120",
    nome: "Kit de almofadas decorativas",
    descricao: "Conjunto com 4 peças.",
    preco: 100.00,
    categoria: "Decoração",
    imagemUrl: "https://m.media-amazon.com/images/I/71TdLT7vp5L._UF894,1000_QL80_.jpg",
    comprado: false
  },
  {
    id: "2601",
    nome: "Sanduicheira Elétrica",
    descricao: "Antiaderente, fácil de limpar.",
    preco: 100.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://electrolux.vtexassets.com/arquivos/ids/230374/6c_6c_SandwichMaker_ESG20_FrontView_Electrolux_1000x1000-1000x1000.raw.jpg?v=638874901199970000",
    comprado: false
  },
  {
    id: "2801",
    nome: "Vaso Decorativo",
    descricao: "Cerâmica, 30cm.",
    preco: 100.00,
    categoria: "Decoração",
    imagemUrl: "https://lojaemporiocasa.cdn.magazord.com.br/img/2024/07/produto/1997/whatsapp-image-2024-07-10-at-17-44-17-1.jpeg?ims=fit-in/600x600/filters:fill(white)",
    comprado: false
  },
  {
    id: "3001",
    nome: "Kit Spa Relaxante",
    descricao: "Sabonetes, sais de banho e óleos essenciais.",
    preco: 120.00,
    categoria: "Bem-estar",
    imagemUrl: "https://cdn.pixabay.com/photo/2016/11/29/04/00/spa-1868945_1280.jpg",
    comprado: false
  },
  {
    id: "3002",
    nome: "Difusor de Aromas",
    descricao: "Aromatizador elétrico para ambientes.",
    preco: 80.00,
    categoria: "Bem-estar",
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/20/15/06/aroma-1993647_1280.jpg",
    comprado: false
  },
  {
    id: "3101",
    nome: "Jantar Romântico",
    descricao: "Vale-experiência em restaurante especial.",
    preco: 250.00,
    categoria: "Experiências",
    imagemUrl: "https://cdn.pixabay.com/photo/2016/11/29/09/16/adult-1867889_1280.jpg",
    comprado: false
  },
  {
    id: "3102",
    nome: "Passeio de Balão",
    descricao: "Experiência inesquecível para o casal.",
    preco: 600.00,
    categoria: "Experiências",
    imagemUrl: "https://cdn.pixabay.com/photo/2014/09/07/21/52/hot-air-balloon-438480_1280.jpg",
    comprado: false
  },
  {
    id: "3201",
    nome: "Faqueiro Inox 24 peças",
    descricao: "Talheres de aço inox para 6 pessoas.",
    preco: 110.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/cutlery-1239424_1280.jpg",
    comprado: false
  },
  {
    id: "3202",
    nome: "Panela de Pressão 4,5L",
    descricao: "Segura, prática e eficiente.",
    preco: 140.00,
    categoria: "Cozinha",
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/06/19/15/pots-1957680_1280.jpg",
    comprado: false
  },
  {
    id: "3203",
    nome: "Micro-ondas 20L",
    descricao: "Compacto, branco, com timer digital.",
    preco: 399.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://cdn.pixabay.com/photo/2014/12/21/23/28/microwave-579552_1280.png",
    comprado: false
  },
  {
    id: "3204",
    nome: "Aspirador de Pó Vertical",
    descricao: "Portátil, fácil de guardar.",
    preco: 180.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/vacuum-cleaner-1239427_1280.jpg",
    comprado: false
  },
  {
    id: "3205",
    nome: "Cafeteira Italiana",
    descricao: "Para café expresso no fogão.",
    preco: 70.00,
    categoria: "Cozinha",
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/06/19/15/coffee-1957682_1280.jpg",
    comprado: false
  },
  {
    id: "3206",
    nome: "Jogo de Panelas Inox",
    descricao: "5 peças, fundo triplo.",
    preco: 350.00,
    categoria: "Cozinha",
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/06/19/15/pots-1957680_1280.jpg",
    comprado: false
  },
  {
    id: "3207",
    nome: "Kit Churrasco",
    descricao: "Facas, garfos e tábua de corte.",
    preco: 120.00,
    categoria: "Lazer",
    imagemUrl: "https://cdn.pixabay.com/photo/2017/06/02/18/24/barbecue-2367980_1280.jpg",
    comprado: false
  },
  {
    id: "3208",
    nome: "Kit Fondue",
    descricao: "Panela, garfos e suporte.",
    preco: 130.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://cdn.pixabay.com/photo/2017/01/06/19/15/fondue-1957683_1280.jpg",
    comprado: false
  }
]; 