// Mock data pour l'Hôtel du Centre
export const hotelInfo = {
  name: "Hôtel du Centre",
  subtitle: "Jérôme et Amandine Moins",
  description: "Au cœur de Champeix, l'Hôtel du Centre vous accueille dans un cadre chaleureux et authentique. Jérôme et Amandine vous proposent une cuisine traditionnelle française avec des produits locaux de qualité, dans une ambiance conviviale qui fait le charme de notre établissement depuis des générations.",
  address: "17 Rue de la Halle, 63320 Champeix, France",
  phone: "+33 4 73 96 35 08",
  email: "contact@hotel-du-centre-champeix.fr",
  rating: 4.7,
  reviewCount: 365,
  hours: {
    monday: "Fermé",
    tuesday: "08:00 - 22:00",
    wednesday: "08:00 - 22:00", 
    thursday: "08:00 - 22:00",
    friday: "08:00 - 22:00",
    saturday: "08:00 - 22:00",
    sunday: "08:00 - 22:00"
  }
};

export const galleryImages = {
  restaurant: [
    {
      id: 1,
      url: "https://lh3.googleusercontent.com/p/AF1QipP1Iig4bRvFXNjhXk-KtRdt33iD2HYqTtYiTYro=w324-h312-n-k-no",
      title: "Salle principale du restaurant",
      description: "Notre salle de restaurant avec une décoration traditionnelle et chaleureuse"
    },
    {
      id: 2, 
      url: "https://lh3.googleusercontent.com/p/AF1QipOVWl3RwkTTPfQt9Le3A3zTr83KDnUiW76FmSLT=w255-h156-n-k-no",
      title: "Terrasse extérieure",
      description: "Profitez de notre terrasse pour déguster nos spécialités"
    },
    {
      id: 3,
      url: "https://lh3.googleusercontent.com/p/AF1QipNsqDIq44qTqg8HswgXRSwd1RbjNBTemWdOgeZv=w255-h156-n-k-no", 
      title: "Ambiance chaleureuse",
      description: "Un cadre authentique pour vos repas en famille ou entre amis"
    }
  ],
  dishes: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      title: "Plat du terroir",
      description: "Nos spécialités locales préparées avec passion"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center",
      title: "Cuisine traditionnelle",
      description: "Des recettes authentiques transmises de génération en génération"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center",
      title: "Desserts maison",
      description: "Nos desserts préparés sur place avec des ingrédients locaux"
    }
  ]
};

export const menuData = {
  entrees: [
    { name: "Terrine de campagne maison", price: "8€", description: "Accompagnée de cornichons et pain grillé" },
    { name: "Salade de chèvre chaud", price: "12€", description: "Sur lit de salade, noix et miel" },
    { name: "Escargots de Bourgogne", price: "14€", description: "Les 6 pièces, beurre persillé" }
  ],
  plats: [
    { name: "Truffade traditionnelle", price: "16€", description: "Pommes de terre, tome fraîche et lardons" },
    { name: "Côte de bœuf grillée", price: "22€", description: "Sauce au poivre, frites maison" },
    { name: "Saumon grillé", price: "19€", description: "Beurre blanc, légumes de saison" },
    { name: "Confit de canard", price: "18€", description: "Pommes sarladaises et haricots verts" }
  ],
  desserts: [
    { name: "Tarte aux myrtilles", price: "7€", description: "Pâte sablée maison, myrtilles locales" },
    { name: "Tiramisu maison", price: "6€", description: "Recette traditionnelle italienne" },
    { name: "Plateau de fromages régionaux", price: "9€", description: "Sélection de fromages d'Auvergne" }
  ]
};

export const reviewsData = [
  {
    id: 1,
    name: "Marie L.",
    rating: 5,
    date: "Il y a 2 semaines",
    comment: "Excellent accueil de Jérôme et Amandine. La cuisine est délicieuse et authentique. La truffade était parfaite ! Nous reviendrons certainement."
  },
  {
    id: 2,
    name: "Pierre D.",
    rating: 5,
    date: "Il y a 1 mois", 
    comment: "Restaurant familial chaleureux. Les produits sont frais et locaux. Service impeccable. Une adresse à retenir à Champeix."
  },
  {
    id: 3,
    name: "Sophie M.",
    rating: 4,
    date: "Il y a 3 semaines",
    comment: "Très bon restaurant traditionnel. Les portions sont généreuses et les prix raisonnables. Cadre agréable et service souriant."
  },
  {
    id: 4,
    name: "Jean-Claude R.",
    rating: 5,
    date: "Il y a 1 semaine",
    comment: "Une cuisine du terroir comme on les aime. L'ambiance est conviviale et les propriétaires sont aux petits soins. Bravo !"
  }
];