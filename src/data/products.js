export const products = []; 

// Données des catégories de produits
export const categories = [
  {
    id: 'porte-cle',
    name: 'Porte-clés Personnalisés',
    description: 'Des porte-clés uniques pour garder vos souvenirs près de vous à tout moment.',
    image: '/assets/images/products/accessoires/porte_clé1.webp',
    featured: true
  },
  {
    id: 'boucles',
    name: 'Boucles d\'Oreilles',
    description: 'Boucles d\'oreilles avec choix de couleur et décoration.',
    image: '/assets/images/products/bijoux/boucle.webp',
    featured: true
  },
  {
    id: 'collier',
    name: 'Colliers Personnalisés',
    description: 'Colliers personnalisés avec un nom ou un message.',
    image: '/assets/images/products/bijoux/colier2.webp',
    featured: true
  },
  {
    id: 'bracelet',
    name: 'Bracelets',
    description: 'Bracelets personnalisés en résine.',
    image: '/assets/images/products/bijoux/Bracelet4.webp',
    featured: false
  },
  {
    id: 'boite-bijoux',
    name: 'Boîtes à Bijoux',
    description: 'Des écrins uniques pour protéger vos bijoux les plus précieux.',
    image: '/assets/images/products/rangement/Boite_bijoux.webp',
    featured: false
  },
  {
    id: 'decapsuleur',
    name: 'Décapsuleurs',
    description: 'Décapsuleurs ornés de motifs personnalisés, pratiques et décoratifs.',
    image: '/assets/images/products/accessoires/Décapsuleur.webp',
    featured: false
  },
  {
    id: 'porte-verre',
    name: 'Porte-verres',
    description: 'Protégez vos meubles avec style grâce à nos porte-verres en résine.',
    image: '/assets/images/products/decoration/Porte_verre.webp',
    featured: true
  },
  {
    id: 'porte-livre',
    name: 'Porte-livres',
    description: 'Donnez du caractère à votre bibliothèque avec nos porte-livres personnalisés.',
    image: '/assets/images/products/decoration/pose_livre.webp',
    featured: false
  },
  {
    id: 'marque-page',
    name: 'Marque-pages',
    description: 'Des marque-pages élégants pour ne jamais perdre le fil de votre lecture.',
    image: '/assets/images/products/decoration/marque_page.webp',
    featured: false
  },
  {
    id: 'pochette-portable',
    name: 'Pochettes de Portable',
    description: 'Protégez votre téléphone avec un revêtement de pochette unique et personnalisé.',
    image: '/assets/images/products/rangement/pochette_phone.webp',
    featured: true
  },
  {
    id: 'porte-cle-entreprise',
    name: 'Porte-clés Entreprise',
    description: 'Porte-clés personnalisés en gros pour vos événements et entreprises.',
    image: '/assets/images/products/accessoires/porte_clé4.webp',
    featured: false
  }
];

// Produits spécifiques pour chaque catégorie
export const categoryProducts = {
  'porte-cle': [
    {
      id: 'keychain-rectangle',
      name: 'Porte-clés Rectangle Personnalisé',
      description: 'Porte-clés en résine rectangulaire avec votre prénom ou texte personnalisé.',
      price: '1500-3000',
      images: [
        '/assets/images/products/accessoires/porte_clé.webp',
        '/assets/images/products/accessoires/porte_clé1.webp', 
        '/assets/images/products/accessoires/porte_clé2.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'green', name: 'Vert' },
        { id: 'purple', name: 'Violet' },
        { id: 'transparent', name: 'Transparent' }
      ]
    }
  ],
  'porte-cle-entreprise': [
    {
      id: 'keychain-corporate',
      name: 'Porte-clés en Gros pour Entreprise',
      description: 'Porte-clés en résine personnalisés pour vos événements d\'entreprise.',
      price: '1500-3000',
      images: [
        '/assets/images/products/accessoires/porte_clé3.webp',
        '/assets/images/products/accessoires/porte_clé4.webp',
        '/assets/images/products/accessoires/porte_clé5.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'gold', name: 'Doré' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ],
  'boucles': [
    {
      id: 'earrings-personalized',
      name: 'Boucles d\'Oreilles Personnalisées',
      description: 'Boucles d\'oreilles en résine époxy avec votre design unique.',
      price: '1000-2500',
      images: [
        '/assets/images/products/bijoux/boucle.webp',
        '/assets/images/products/bijoux/boucle1.webp',
        '/assets/images/products/bijoux/boucle2.webp'
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
  'collier': [
    {
      id: 'necklace-custom',
      name: 'Collier Personnalisé',
      description: 'Collier en résine personnalisé avec votre nom ou message.',
      price: '1000-3000',
      images: [
        '/assets/images/products/bijoux/colier2.webp',
        '/assets/images/products/bijoux/colier3.webp',
        '/assets/images/products/bijoux/colier4.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'purple', name: 'Violet' },
        { id: 'gold', name: 'Doré' },
        { id: 'silver', name: 'Argenté' }
      ]
    }
  ],
  'bracelet': [
    {
      id: 'bracelet-custom',
      name: 'Bracelet Personnalisé',
      description: 'Bracelet en résine avec inclusions personnalisées selon vos goûts.',
      price: '1000',
      images: [
        '/assets/images/products/bijoux/Bracelet4.webp',
        '/assets/images/products/bijoux/Bracelet.webp',
        '/assets/images/products/bijoux/Bracelet2.webp',
        '/assets/images/products/bijoux/Bracelet3.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'purple', name: 'Violet' },
        { id: 'gold', name: 'Doré' },
        { id: 'silver', name: 'Argenté' }
      ]
    }
  ],
  'boite-bijoux': [
    {
      id: 'jewelry-box-small',
      name: 'Boîte à Bijoux Personnalisée',
      description: 'Boîte à bijoux en résine pour ranger vos petits trésors.',
      price: '4000',
      images: [
        '/assets/images/products/rangement/Boite_bijoux.webp',
        '/assets/images/products/rangement/Boite_bijoux2.webp',
        '/assets/images/products/rangement/Boite_bijoux3.webp'
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
  'porte-verre': [
    {
      id: 'coaster-round',
      name: 'Porte Verre Personnalisé',
      description: 'Porte verre en résine pour protéger vos meubles avec élégance.',
      price: '3000-16000',
      images: [
        '/assets/images/products/decoration/Porte_verre.webp',
        '/assets/images/products/decoration/Porte_verre2.webp',
        '/assets/images/products/decoration/Porte_verre.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'green', name: 'Vert' },
        { id: 'gold', name: 'Doré' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ],
  'decapsuleur': [
    {
      id: 'bottle-opener-custom',
      name: 'Décapsuleur Personnalisé',
      description: 'Décapsuleur en résine personnalisé avec votre design préféré.',
      price: '1500-3500',
      images: [
        '/assets/images/products/accessoires/Décapsuleur.webp',
        '/assets/images/products/accessoires/Décapsuleur1.webp',
        '/assets/images/products/accessoires/Décapsuleur2.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'black', name: 'Noir' },
        { id: 'green', name: 'Vert' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ],
  'porte-livre': [
    {
      id: 'bookend-custom',
      name: 'Porte Livre Personnalisé',
      description: 'Porte livre en résine pour maintenir vos livres avec style.',
      price: '10000',
      images: [
        '/assets/images/products/decoration/pose_livre.webp',
        '/assets/images/products/decoration/pose_livre1.webp',
        '/assets/images/products/decoration/pose_livre2.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'gold', name: 'Doré' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ],
  'marque-page': [
    {
      id: 'bookmark-custom',
      name: 'Marque-page Personnalisé',
      description: 'Marque-page en résine pour ne jamais perdre votre page.',
      price: '1000-1500',
      images: [
        '/assets/images/products/decoration/marque_page.webp',
        '/assets/images/products/decoration/marque_page1.webp',
        '/assets/images/products/decoration/marque_page.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'purple', name: 'Violet' },
        { id: 'multicolor', name: 'Multicolore' }
      ]
    }
  ],
  'pochette-portable': [
    {
      id: 'phonecase-custom',
      name: 'Revêtement Pochette de Portable',
      description: 'Revêtement de pochette de téléphone en résine avec votre design personnalisé.',
      price: '1000-2500',
      images: [
        '/assets/images/products/rangement/pochette_phone.webp',
        '/assets/images/products/rangement/pochette_phone1.webp',
        '/assets/images/products/rangement/pochette_phone.webp'
      ],
      colors: [
        { id: 'blue', name: 'Bleu' },
        { id: 'pink', name: 'Rose' },
        { id: 'green', name: 'Vert' },
        { id: 'purple', name: 'Violet' },
        { id: 'transparent', name: 'Transparent' }
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
