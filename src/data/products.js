export const products = []; 

// Données des catégories de produits
export const categories = [
  {
    id: 'keychains',
    name: 'Porte-clés Personnalisés',
    description: 'Des porte-clés uniques pour garder vos souvenirs près de vous à tout moment.',
    image: '/assets/images/products/accessoires/porte_clé.jpg',
    featured: true
  },
  {
    id: 'jewelry',
    name: 'Bijoux en Résine',
    description: 'Boucles d\'oreilles, colliers et bracelets avec inclusions personnalisées.',
    image: '/assets/images/products/bijoux/Bracelet.jpg',
    featured: true
  },
  {
    id: 'jewelryboxes',
    name: 'Boîtes à Bijoux',
    description: 'Des écrins uniques pour protéger vos bijoux les plus précieux.',
    image: '/assets/images/products/rangement/Boite_bijoux.jpg',
    featured: false
  },
  {
    id: 'bottle-openers',
    name: 'Décapsuleurs',
    description: 'Décapsuleurs ornés de motifs personnalisés, pratiques et décoratifs.',
    image: '/assets/images/products/accessoires/Décapsuleur.jpg',
    featured: false
  },
  {
    id: 'coasters',
    name: 'Porte-verres',
    description: 'Protégez vos meubles avec style grâce à nos dessous de verre en résine.',
    image: '/assets/images/products/decoration/Porte_verre.jpg',
    featured: true
  },
  {
    id: 'bookends',
    name: 'Serre-livres',
    description: 'Donnez du caractère à votre bibliothèque avec nos serre-livres personnalisés.',
    image: '/assets/images/products/decoration/pose_livre.jpg',
    featured: false
  },
  {
    id: 'bookmarks',
    name: 'Marque-pages',
    description: 'Des marque-pages élégants pour ne jamais perdre le fil de votre lecture.',
    image: '/assets/images/products/decoration/marque_page.jpg',
    featured: false
  },
  {
    id: 'phonecase',
    name: 'Coques de Téléphone',
    description: 'Protégez votre téléphone avec une coque unique et personnalisée.',
    image: '/assets/images/products/rangement/pochette_phone.jpg',
    featured: true
  }
];

// Produits spécifiques pour chaque catégorie
export const categoryProducts = {
  'keychains': [
    {
      id: 'keychain-rectangle',
      name: 'Porte-clés Rectangle Personnalisé',
      description: 'Porte-clés en résine rectangulaire avec votre prénom ou texte personnalisé.',
      price: 1500,
      originalPrice: 2500,
      discount: 40,
      images: [
        '/assets/images/products/accessoires/porte_clé.jpg',
        '/assets/images/products/accessoires/porte_clé_2.jpg',
        '/assets/images/products/accessoires/porte_clé_3.jpg',
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'green', name: 'Vert' },
        { id: 'purple', name: 'Violet' },
        { id: 'transparent', name: 'Transparent' }
      ]
    },
    {
      id: 'keychain-round',
      name: 'Porte-clés Rond Personnalisé',
      description: 'Porte-clés en résine rond avec inclusion de fleurs, paillettes ou photos.',
      price: 1800,
      originalPrice: 2800,
      discount: 35,
      images: [
        '/assets/images/products/accessoires/porte_clé_2.jpg',
        '/assets/images/products/accessoires/porte_clé.jpg',
        '/assets/images/products/accessoires/porte_clé_3.jpg',
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'gold', name: 'Doré' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ],
  'jewelry': [
    {
      id: 'bracelet-custom',
      name: 'Bracelet Personnalisé',
      description: 'Bracelet en résine avec inclusions personnalisées selon vos goûts.',
      price: 2500,
      originalPrice: 3500,
      discount: 28,
      images: [
        '/assets/images/products/bijoux/Bracelet.jpg',
        '/assets/images/products/bijoux/boucles_oreilles.jpg',
        '/assets/images/products/bijoux/collier.jpg',
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'purple', name: 'Violet' },
        { id: 'gold', name: 'Doré' },
        { id: 'silver', name: 'Argenté' }
      ]
    },
    {
      id: 'earrings-personalized',
      name: 'Boucles d\'Oreilles Personnalisées',
      description: 'Boucles d\'oreilles en résine époxy avec votre design unique.',
      price: 2000,
      originalPrice: 3200,
      discount: 37,
      images: [
        '/assets/images/products/bijoux/boucles_oreilles.jpg',
        '/assets/images/products/bijoux/Bracelet.jpg',
        '/assets/images/products/bijoux/collier.jpg',
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'green', name: 'Vert' },
        { id: 'purple', name: 'Violet' },
        { id: 'gold', name: 'Doré' }
      ]
    }
  ],
  'jewelryboxes': [
    {
      id: 'jewelry-box-small',
      name: 'Petite Boîte à Bijoux',
      description: 'Boîte à bijoux en résine pour ranger vos petits trésors.',
      price: 3500,
      originalPrice: 5000,
      discount: 30,
      images: [
        '/assets/images/products/rangement/Boite_bijoux.jpg',
        '/assets/images/products/rangement/Boite_bijoux_2.jpg',
        '/assets/images/products/rangement/Boite_bijoux_3.jpg',
      ],
      colors: [
        { id: 'white', name: 'Blanc' },
        { id: 'pink', name: 'Rose' },
        { id: 'blue', name: 'Bleu' },
        { id: 'purple', name: 'Violet' },
        { id: 'gold', name: 'Doré' }
      ]
    }
  ],
  'coasters': [
    {
      id: 'coaster-round',
      name: 'Dessous de Verre Rond',
      description: 'Dessous de verre en résine pour protéger vos meubles avec élégance.',
      price: 1200,
      originalPrice: 2000,
      discount: 40,
      images: [
        '/assets/images/products/decoration/Porte_verre.jpg',
        '/assets/images/products/decoration/Porte_verre_2.jpg',
        '/assets/images/products/decoration/Porte_verre_3.jpg',
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'green', name: 'Vert' },
        { id: 'gold', name: 'Doré' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ]
};

// Obtenez un produit aléatoire pour une catégorie donnée
export const getRandomProductForCategory = (categoryId) => {
  const products = categoryProducts[categoryId];
  if (!products || products.length === 0) {
    return null;
  }
  return products[Math.floor(Math.random() * products.length)];
}; 
