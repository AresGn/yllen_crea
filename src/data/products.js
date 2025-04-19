export const products = []; 

// Données des catégories de produits
export const categories = [
  {
    id: 'porte-cle',
    name: 'Porte-clés Personnalisés',
    description: 'Porte-clés en résine époxy personnalisables avec votre nom ou photo. Créations artisanales uniques pour vos souvenirs.',
    seoDescription: 'Des porte-clés artisanaux en résine époxy, entièrement personnalisables avec votre nom, message ou photo. Créations uniques et durables, parfaites pour un cadeau original ou un souvenir précieux à emporter partout avec vous.',
    image: '/assets/images/products/accessoires/porte_clé1.webp',
    featured: true
  },
  {
    id: 'boucles',
    name: 'Boucles d\'Oreilles',
    description: 'Boucles d\'oreilles artisanales en résine aux couleurs vibrantes. Bijoux légers et uniques faits main.',
    seoDescription: 'Boucles d\'oreilles artisanales en résine époxy aux couleurs vibrantes et motifs uniques. Chaque paire est façonnée à la main avec des matériaux de qualité pour sublimer votre style avec élégance et originalité.',
    image: '/assets/images/products/bijoux/boucle.webp',
    featured: true
  },
  {
    id: 'collier',
    name: 'Colliers Personnalisés',
    description: 'Colliers en résine personnalisables avec votre nom ou message. Bijoux légers et originaux faits main.',
    seoDescription: 'Colliers en résine époxy entièrement personnalisables avec votre nom, message ou inclusion spéciale. Bijoux légers et résistants, conçus pour ajouter une touche d\'originalité à vos tenues tout en gardant vos souvenirs précieux près de votre cœur.',
    image: '/assets/images/products/bijoux/colier2.webp',
    featured: true
  },
  {
    id: 'bracelet',
    name: 'Bracelets',
    description: 'Bracelets artisanaux en résine époxy aux finitions soignées. Créations uniques et colorées.',
    seoDescription: 'Bracelets artisanaux en résine époxy aux finitions soignées, disponibles dans une large palette de couleurs et de styles. Créations légères et confortables pour sublimer votre poignet avec une pièce unique faite à la main en France.',
    image: '/assets/images/products/bijoux/Bracelet4.webp',
    featured: false
  },
  {
    id: 'boite-bijoux',
    name: 'Boîtes à Bijoux',
    description: 'Écrins de rangement en résine pour protéger vos bijoux avec style. Créations personnalisables.',
    seoDescription: 'Écrins de rangement en résine époxy pour protéger vos bijoux avec style. Chaque boîte est une œuvre d\'art unique, fabriquée à la main avec des matériaux de qualité, personnalisable selon vos goûts pour sublimer votre coiffeuse.',
    image: '/assets/images/products/rangement/Boite_bijoux.webp',
    featured: false
  },
  {
    id: 'decapsuleur',
    name: 'Décapsuleurs',
    description: 'Décapsuleurs en résine personnalisables avec votre design. Accessoires pratiques et décoratifs.',
    seoDescription: 'Décapsuleurs en résine époxy alliant fonctionnalité et esthétique. Objets pratiques du quotidien transformés en accessoires décoratifs uniques, personnalisables avec logos, couleurs ou inclusions pour un cadeau original et utile.',
    image: '/assets/images/products/accessoires/Décapsuleur.webp',
    featured: false
  },
  {
    id: 'porte-verre',
    name: 'Porte-verres',
    description: 'Dessous de verre en résine époxy aux motifs variés. Protégez vos surfaces avec élégance.',
    seoDescription: 'Dessous de verre en résine époxy aux motifs et couleurs variés pour protéger vos surfaces avec élégance. Objets décoratifs artisanaux, hautement personnalisables, qui apportent une touche d\'originalité à votre intérieur tout en étant résistants et faciles d\'entretien.',
    image: '/assets/images/products/decoration/Porte_verre.webp',
    featured: true
  },
  {
    id: 'porte-livre',
    name: 'Porte-livres',
    description: 'Serre-livres en résine pour organiser votre bibliothèque avec style. Pièces décoratives uniques.',
    seoDescription: 'Serre-livres artisanaux en résine époxy pour organiser votre bibliothèque avec style. Pièces uniques et fonctionnelles, conçues pour maintenir vos livres tout en ajoutant une touche artistique et personnelle à votre espace de lecture ou bureau.',
    image: '/assets/images/products/decoration/pose_livre.webp',
    featured: false
  },
  {
    id: 'marque-page',
    name: 'Marque-pages',
    description: 'Marque-pages en résine aux designs exclusifs. Accessoires de lecture pratiques et personnalisables.',
    seoDescription: 'Marque-pages en résine époxy aux designs exclusifs pour ne jamais perdre le fil de votre lecture. Accessoires pratiques et durables, fabriqués à la main avec soin, personnalisables avec votre texte, photo ou inclusion spéciale pour un cadeau littéraire unique.',
    image: '/assets/images/products/decoration/marque_page.webp',
    featured: false
  },
  {
    id: 'pochette-portable',
    name: 'Pochettes de Portable',
    description: 'Revêtements de protection pour téléphone en résine. Personnalisez votre smartphone avec style.',
    seoDescription: 'Revêtements de protection pour téléphone en résine époxy, alliant style et durabilité. Créations sur-mesure pour personnaliser votre smartphone avec un design unique qui le protège des rayures tout en reflétant votre personnalité.',
    image: '/assets/images/products/rangement/pochette_phone.webp',
    featured: true
  },
  {
    id: 'porte-cle-entreprise',
    name: 'Porte-clés Entreprise',
    description: 'Porte-clés en résine personnalisables avec votre logo d\'entreprise. Disponibles en grande quantité.',
    seoDescription: 'Porte-clés corporatifs en résine époxy, personnalisables avec votre logo d\'entreprise et disponibles en grande quantité. Solution idéale pour les goodies professionnels, cadeaux d\'affaires ou événements d\'entreprise, alliant qualité artisanale et personnalisation sur-mesure.',
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
      description: 'Porte-clés en résine époxy de forme rectangulaire avec finition brillante, personnalisable avec votre prénom, texte spécial ou inclusion décorative. Accessoire durable et léger pour vos clés, fabriqué artisanalement en France avec des matériaux non toxiques et résistants. Idéal comme cadeau personnalisé pour toutes occasions.',
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
      description: 'Porte-clés professionnels en résine époxy personnalisables avec votre logo d\'entreprise, disponibles en grande quantité et diverses couleurs. Produits promotionnels de qualité, fabriqués à la main pour vos événements corporatifs, salons professionnels ou cadeaux clients. Prix dégressifs selon quantité commandée.',
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
      description: 'Boucles d\'oreilles légères en résine époxy, fabriquées à la main avec des crochets hypoallergéniques en acier inoxydable. Disponibles dans une multitude de couleurs et motifs, chaque paire est unique avec ses inclusions personnalisées. Bijoux originaux pour compléter votre style avec une touche d\'exclusivité.',
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
      description: 'Collier artisanal en résine époxy avec pendentif personnalisable selon vos souhaits : nom, message, date spéciale ou inclusion décorative. Chaîne ajustable en acier inoxydable, adaptée aux peaux sensibles. Bijou unique qui sublimera votre cou avec originalité tout en conservant un souvenir précieux.',
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
      description: 'Bracelet élégant en résine époxy avec inclusions personnalisées : fleurs séchées, paillettes, colorants ou éléments décoratifs de votre choix. Création artisanale française, confortable à porter et résistante à l\'eau. Fermoir sécurisé en acier inoxydable pour un bijou durable qui s\'adapte à votre poignet.',
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
      description: 'Écrin à bijoux en résine époxy avec intérieur capitonné pour protéger vos trésors. Couvercle personnalisable avec couleurs, motifs ou inclusions décoratives selon vos préférences. Objet à la fois fonctionnel et décoratif, idéal pour ranger vos bijoux tout en embellissant votre espace personnel.',
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
      description: 'Dessous de verre artisanal en résine époxy, créé avec minutie pour protéger vos surfaces des marques et auréoles. Personnalisable avec vos couleurs, motifs, photos ou inclusions décoratives pour s\'harmoniser avec votre intérieur. Surface lisse et brillante, facile à nettoyer. Disponible à l\'unité ou en lot assorti.',
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
      description: 'Décapsuleur fonctionnel orné d\'une plaque en résine époxy personnalisable avec votre design, logo ou message. Mélange parfait d\'utilité et d\'esthétique pour la cuisine ou le bar. Mécanisme robuste en acier inoxydable garanti pour une utilisation durable. Cadeau original pour amateurs de bière ou collectionneurs.',
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
      description: 'Serre-livres décoratif et fonctionnel avec partie en résine époxy entièrement personnalisable selon vos goûts : couleurs, motifs ou thématiques spécifiques. Base solide en métal pour maintenir fermement vos livres en place. Accessoire élégant qui sublime votre bibliothèque tout en organisant votre collection d\'ouvrages.',
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
      description: 'Marque-page artistique en résine époxy pour identifier votre page avec élégance. Personnalisable avec vos initiales, citation préférée ou motif décoratif. Fine épaisseur pour ne pas abîmer les livres et finition brillante qui met en valeur les détails. Accessoire indispensable pour les lecteurs qui apprécient les objets uniques.',
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
      description: 'Personnalisation unique pour coque de téléphone en résine époxy transparente et brillante. Protection décorative qui transforme votre smartphone en accessoire de mode personnel. Compatible avec la plupart des modèles standards de coques. Motifs sur-mesure, inclusions de paillettes, fleurs séchées ou éléments décoratifs au choix.',
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
