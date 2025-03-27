// Definindo os tipos dos dados que serão usados
type SocialMedia = {
  instagram: string;
  facebook: string;
};

type MenuItem = {
  name: string;
  image: string;
  description: string;
  quantity: string;
  ingredients: string[];
  price: number;
};

type Store = {
  name: string;
  logo: string;
  description: string;
  phone: string;
  whatsapp: string;
  social_media: SocialMedia;
  email: string;
  delivery_link: string;
  menu_link: string;
  menu: MenuItem[];
};

type Event = {
  day: string;
  event: string;
  video: string;
};

type AppData = {
  food_hall: {
    name: string;
    address: string;
    map_location: string;
    phone: string;
    whatsapp: string;
    social_media: SocialMedia;
    website: string;
    email: string;
  };
  events: Event[];
  stores: Store[];
};

// Declarando a constante com o tipo definido
const appData: AppData = {
  food_hall: {
    name: "Saborar Food Hall",
    address: "Rua das Delícias, 123, Centro, São Paulo - SP",
    map_location: "https://maps.google.com/?q=-23.55052,-46.633308",
    phone: "(11) 98765-4321",
    whatsapp: "https://wa.me/5511987654321",
    social_media: {
      instagram: "https://instagram.com/saborarfoodhall",
      facebook: "https://facebook.com/saborarfoodhall"
    },
    website: "https://saborarfoodhall.com.br",
    email: "contato@saborarfoodhall.com.br"
  },
  events: [
    { day: "Segunda-feira", event: "Happy Hour com Jazz ao Vivo", video: "https://youtu.be/sample1" },
    { day: "Terça-feira", event: "Noite de Stand-up Comedy", video: "https://youtu.be/sample2" },
    { day: "Quarta-feira", event: "Workshop de Culinária Internacional", video: "https://youtu.be/sample3" },
    { day: "Quinta-feira", event: "Sarau de Poesia e Música Acústica", video: "https://youtu.be/sample4" },
    { day: "Sexta-feira", event: "Show de Rock com Banda Local", video: "https://youtu.be/sample5" },
    { day: "Sábado", event: "Feira Gastronômica e DJs", video: "https://youtu.be/sample6" },
    { day: "Domingo", event: "Almoço Especial com MPB", video: "https://youtu.be/sample7" }
  ],
  stores: [
    {
      name: "Italian Pizza",
      logo: "https://img.freepik.com/vetores-premium/logotipo-da-pizza-italiana-com-uma-pizza-e-um-chef-segurando-uma-pizza_850580-18.jpg",
      description: "A melhor pizza artesanal da cidade.",
      phone: "(11) 91234-5678",
      whatsapp: "https://wa.me/5511912345678",
      social_media: {
        instagram: "https://instagram.com/pizzasuprema",
        facebook: "https://facebook.com/pizzasuprema"
      },
      email: "contato@pizzasuprema.com",
      delivery_link: "https://ifood.com/pizzasuprema",
      menu_link: "https://pizzasuprema.com/cardapio",
      menu: [
        {
          name: "Pizza Margherita",
          image: "",
          description: "Massa artesanal, molho de tomate, muçarela, manjericão e azeite.",
          quantity: "35cm",
          ingredients: ["Massa artesanal", "Molho de tomate", "Muçarela", "Manjericão", "Azeite"],
          price: 39.90
        },
        {
          name: "Pizza Pepperoni",
          image: "",
          description: "Massa fina com molho de tomate, muçarela e pepperoni especial.",
          quantity: "35cm",
          ingredients: ["Massa fina", "Molho de tomate", "Muçarela", "Pepperoni"],
          price: 44.90
        }
      ]
    },
    {
      name: "Burguer Smash",
      logo: "https://i.pinimg.com/736x/0d/3f/b7/0d3fb7ddf028fe22b05d56945708537a.jpg",
      description: "Hambúrgueres suculentos e saborosos, preparados na hora.",
      phone: "(11) 97654-3210",
      whatsapp: "https://wa.me/5511976543210",
      social_media: {
        instagram: "https://instagram.com/hamburgueriasmash",
        facebook: "https://facebook.com/hamburgueriasmash"
      },
      email: "contato@hamburgueriasmash.com",
      delivery_link: "https://ifood.com/hamburgueriasmash",
      menu_link: "https://hamburgueriasmash.com/cardapio",
      menu: [
        {
          name: "Smash Burger Clássico",
          image: "",
          description: "Pão brioche, hambúrguer smash, queijo cheddar e molho especial.",
          quantity: "180g",
          ingredients: ["Pão brioche", "Hambúrguer smash", "Queijo cheddar", "Molho especial"],
          price: 24.90
        },
        {
          name: "Smash Duplo",
          image: "",
          description: "Pão brioche, dois smash burgers, queijo cheddar e bacon crocante.",
          quantity: "250g",
          ingredients: ["Pão brioche", "Dois smash burgers", "Queijo cheddar", "Bacon crocante"],
          price: 32.90
        }
      ]
    }
  ]
};

export default appData;
