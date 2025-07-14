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
    imagemUrl: "https://m.media-amazon.com/images/I/61idC1uINlL.jpg",
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
    imagemUrl: "https://3a36cfaa62ac8ba9.cdn.gocache.net/images/produtos/mix_grafite_jogo_2021_1_20210331__g.jpg",
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
    imagemUrl: "https://electrolux.vtexassets.com/arquivos/ids/214556/Coffee_Machine_ECM30_FrontView_Electrolux_1000x1000_principal.jpg?v=638848332276830000",
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
    imagemUrl: "https://a-static.mlcdn.com.br/1500x1500/liquidificador-32-litros-15-velocidades-pulsar-1400w-preto-220v-tampa-dosadora-oster-oliq610-220v/starcomercio/34183p/7dc7327a49d8f969cd514c05209f12ff.jpeg",
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
    imagemUrl: "https://a-static.mlcdn.com.br/1500x1500/kit-completo-bambu-pp-pratos-bowl-copo-colorido-stripes-lyor/luggari/kitcstripes/d4be91c67a57742498528fd2a3439f48.jpeg",
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
    imagemUrl: "https://images.tcdn.com.br/img/img_prod/776935/jogo_de_tacas_para_vinho_branco_em_cristal_ecologico_bohemia_gastro_350ml_6_pecas_2195_1_462c090218a13580899f02e4087adbc6.jpeg",
    comprado: false,
    loja: "Americanas",
    link: "#"
  },
  // Lua de Mel (Cotas)
  {
    id: "101",
    nome: "Cota Lua de Mel - R$150",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 150.00,
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
    nome: "Cota Lua de Mel - R$250",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 250.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "104",
    nome: "Cota Lua de Mel - R$300",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 300.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "105",
    nome: "Cota Lua de Mel - R$350",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 350.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "106",
    nome: "Cota Lua de Mel - R$400",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 400.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "107",
    nome: "Cota Lua de Mel - R$500",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 500.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "108",
    nome: "Cota Lua de Mel - R$600",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 600.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "109",
    nome: "Cota Lua de Mel - R$800",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 800.00,
    categoria: "Lua de Mel",
    imagemUrl: "https://virtualjoias.com/media/wysiwyg/virtualjoias-0902-Lugares-para-passar-lua-de-mel-imagem1-blog.jpg",
    comprado: false
  },
  {
    id: "110",
    nome: "Cota Lua de Mel - R$1000",
    descricao: "Ajude na nossa viagem dos sonhos!",
    preco: 1000.00,
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
    imagemUrl: "https://www.floresonline.com.br/media/catalog/product/k/i/kit_spa_relaxante_p_s-alta.jpg",
    comprado: false
  },
  {
    id: "3002",
    nome: "Difusor de Aromas",
    descricao: "Aromatizador elétrico para ambientes.",
    preco: 80.00,
    categoria: "Bem-estar",
    imagemUrl: "https://a-static.mlcdn.com.br/1500x1500/difusor-eletrico-de-ambiente-aroma-terapia-air-essencial-oleo-umidificador-aromatizador-de-ambiente-vedo/vitoriamultivendas/hum5t-2/b5ff8f5dde989e1b738e0c95615afb96.jpeg",
    comprado: false
  },
  {
    id: "3101",
    nome: "Jantar Romântico",
    descricao: "Vale-experiência em restaurante especial.",
    preco: 250.00,
    categoria: "Experiências",
    imagemUrl: "https://s2-casaejardim.glbimg.com/D5zjLo5iYGbM2FXW5tYL46lHm8I=/0x0:620x455/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/p/m/oqoCq5QFOCvPBimI16zQ/2018-10-26-jantar-romantico.jpeg",
    comprado: false
  },
  {
    id: "3102",
    nome: "Passeio de Balão",
    descricao: "Experiência inesquecível para o casal.",
    preco: 600.00,
    categoria: "Experiências",
    imagemUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/07/passeio-de-balao.jpg",
    comprado: false
  },
  {
    id: "3201",
    nome: "Faqueiro Inox 24 peças",
    descricao: "Talheres de aço inox para 6 pessoas.",
    preco: 110.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://images.tcdn.com.br/img/img_prod/481109/jogo_talheres_faqueiro_tramontina_aco_inox_24_pecas_buzios_123464492_1_e76b6632eafa36c445debe96b36a253d.jpg",
    comprado: false
  },
  {
    id: "3202",
    nome: "Panela de Pressão 4,5L",
    descricao: "Segura, prática e eficiente.",
    preco: 140.00,
    categoria: "Cozinha",
    imagemUrl: "https://m.media-amazon.com/images/I/81P4NbJcaVS.jpg",
    comprado: false
  },
  {
    id: "3203",
    nome: "Micro-ondas 20L",
    descricao: "Compacto, branco, com timer digital.",
    preco: 399.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://m.media-amazon.com/images/I/41kh2TI9f0L._UF894,1000_QL80_.jpg",
    comprado: false
  },
  {
    id: "3204",
    nome: "Aspirador de Pó Vertical",
    descricao: "Portátil, fácil de guardar.",
    preco: 180.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://lojawap.vtexassets.com/arquivos/ids/175110/aspirador-de-po-wap-high-speed-plus-3-em-1_03.jpg?v=638792981810300000",
    comprado: false
  },
  {
    id: "3205",
    nome: "Cafeteira Italiana",
    descricao: "Para café expresso no fogão.",
    preco: 70.00,
    categoria: "Cozinha",
    imagemUrl: "https://images.tcdn.com.br/img/img_prod/865814/cafeteira_italiana_moka_9_xicaras_aluminio_cafe_expresso_450ml_bule_economica_prata_valvula_de_segur_7987_1_f046a1cf15c8abf0ccf9cf9637016eb7.jpg",
    comprado: false
  },
  {
    id: "3206",
    nome: "Jogo de Panelas Inox",
    descricao: "5 peças, fundo triplo.",
    preco: 350.00,
    categoria: "Cozinha",
    imagemUrl: "https://images.tcdn.com.br/img/img_prod/329397/conjunto_de_panelas_6pc_inox_tramontina_solar_fundo_triplo_58_1_b5fdd5133edc9ceb760cff9d2d83de7e.jpg",
    comprado: false
  },
  {
    id: "3207",
    nome: "Kit Churrasco",
    descricao: "Facas, garfos e tábua de corte.",
    preco: 120.00,
    categoria: "Lazer",
    imagemUrl: "https://images.tcdn.com.br/img/img_prod/1337522/kit_churrasco_faca_7_e_acessorios_para_presente_cod_635_373_1_ac21bebac7ba9272a47ddf1089654816.jpg",
    comprado: false
  },
  {
    id: "3208",
    nome: "Kit Fondue",
    descricao: "Panela, garfos e suporte.",
    preco: 130.00,
    categoria: "Mesa e Jantar",
    imagemUrl: "https://cdn.leroymerlin.com.br/products/kit_para_fondue_16_pecas_giratorio_aparelho_para_fondue_preto_1566719373_27d8_600x600.jpg",
    comprado: false
  },
  {
    id: "3301",
    nome: "Alexa Echo Dot (4ª geração)",
    descricao: "Assistente virtual inteligente com controle por voz.",
    preco: 350.00,
    categoria: "Eletrodomésticos",
    imagemUrl: "https://a-static.mlcdn.com.br/800x560/echo-dot-4a-geracao-smart-speaker-com-alexa-amazon/magazineluiza/227363100/147768481bb365a0639aadc257c11b5e.jpg",
    comprado: false
  },
  {
    id: "3302",
    nome: "Filtro de Água Purificador",
    descricao: "Purificador de água de mesa, com refil.",
    preco: 220.00,
    categoria: "Cozinha",
    imagemUrl: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/399763",
    comprado: false
  },
  {
    id: "3303",
    nome: "Fechadura Eletrônica Digital",
    descricao: "Fechadura inteligente com senha e biometria.",
    preco: 600.00,
    categoria: "Bem-estar",
    imagemUrl: "https://backend.intelbras.com/sites/default/files/2019-03/AF-Fechadura-FR-101-700x478pxB.jpg",
    comprado: false
  }
]; 