# Yllen Créa - Landing Page

## Description du projet
Création d'une landing page moderne et attrayante pour "Yllen Créa", une marque artisanale de créations en résine personnalisées. Le site doit présenter les produits, raconter l'histoire de la marque, et faciliter le processus de commande.

## Slogan de la marque
"Yllen Créa — Ta mémoire en résine, unique comme toi."

## Objectifs du site
- Présenter les créations en résine de manière attrayante
- Expliquer le processus de commande
- Raconter l'histoire de la marque
- Faciliter le contact via WhatsApp
- Inciter à l'achat via des CTA efficaces

## Stack technique
- React.js pour le frontend
- Animations subtiles avec des bibliothèques spécialisées
- Design responsive pour tous les appareils
- SEO optimisé pour la visibilité

## Structure du site

### 1. Header
- Logo Yllen Créa
- Menu de navigation

### 2. Bannière d'accueil
- Image de fond représentative du travail de la marque
- Slogan "Yllen Créa — Ta mémoire en résine, unique comme toi"
- CTA principal

### 3. Section "Mes Créations"
Présentation des catégories de produits:
- Porte-clés (personnalisés et en gros pour événements)
- Bijoux (boucles d'oreilles, colliers, bracelets)
- Boîtes à bijoux
- Décapsuleurs
- Porte-verres
- Porte-livres
- Marque-pages personnalisés
- Revêtements de pochettes de portables

### 4. Section "Comment Commander"
Étapes du processus:
1. Choix de l'article
2. Choix de l'inscription (optionnel)
3. Paiement (confirmation de la commande)
4. Temps de confection (72h à 2 semaines)
5. Livraison (frais à la charge du client)

### 5. Section "À Propos"
Histoire de la marque:
- Origines pendant un stage en imagerie médicale
- Évolution vers une marque artisanale
- Valeurs et vision

### 6. Section Contact
- Bouton WhatsApp (+22963918285)
- Formulaire de contact (optionnel)

### 7. Calendrier
- Fonctionnalité pour suivre les commandes ou planifier des rendez-vous

### 8. Footer
- Informations légales
- Liens de navigation secondaires
- Copyright

## Structure des dossiers et fichiers

```
yllen-crea/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
│           ├── logo.png
│           ├── banner.jpg
│           └── products/
│               ├── keychains/
│               ├── jewelry/
│               └── accessories/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── sections/
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── ProductCategories.jsx
│   │   │   ├── OrderProcess.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Calendar.jsx
│   │   ├── ui/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── AnimatedSection.jsx
│   │   │   └── Modal.jsx
│   │   └── shared/
│   │       ├── WhatsAppButton.jsx
│   │       └── CTAButton.jsx
│   ├── hooks/
│   │   ├── useAnimation.js
│   │   └── useIntersectionObserver.js
│   ├── context/
│   │   └── UIContext.js
│   ├── data/
│   │   ├── products.js
│   │   └── testimonials.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── utils/
│   │   ├── animations.js
│   │   └── helpers.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## Packages recommandés

### Core
- `react` & `react-dom`: Bibliothèques React de base
- `react-router-dom`: Pour la navigation si le site évolue vers plusieurs pages

### Animations et UI
- `framer-motion`: Animations fluides et complexes
- `react-spring`: Animations physiques naturelles
- `react-intersection-observer`: Déclenchement d'animations au scroll
- `gsap`: Pour des animations plus avancées si nécessaire

### Styles
- `styled-components` ou `emotion`: Pour le CSS-in-JS
- `tailwindcss`: Alternative pour un styling rapide et cohérent

### Fonctionnalités
- `react-calendar`: Pour implémenter la fonctionnalité de calendrier
- `react-responsive-carousel`: Pour les galeries de produits
- `react-image-lightbox`: Pour l'affichage des images en plein écran

### Optimisation
- `react-lazy-load-image-component`: Chargement optimisé des images
- `react-helmet`: Gestion des métadonnées SEO

## Conseils d'implémentation

### Animations
- Utiliser des transitions douces pour les survols de produits
- Implémenter des animations de défilement pour révéler les sections
- Animer subtilement les éléments interactifs (boutons, cartes)
- Garder les animations légères pour ne pas surcharger l'expérience

### Responsive
- Mobile-first: Concevoir d'abord pour mobile, puis adapter pour les écrans plus grands
- Points de rupture pour: mobile (<768px), tablette (768px-1024px), desktop (>1024px)
- Images adaptatives avec différentes résolutions

### Performance
- Optimiser toutes les images (WebP, compression)
- Lazy loading pour les images et composants lourds
- Code splitting pour minimiser la taille du bundle initial

## Exemple de composant pour la section "Mes Créations"

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ProductCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  
  return (
    <section className="products-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Mes Créations
      </motion.h2>
      
      {categories.map(category => (
        <div key={category} className="category-container">
          <h3 className="category-title">{category}</h3>
          
          <motion.div 
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products
              .filter(product => product.category === category)
              .map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                />
              ))
            }
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategories;
```

## Calendrier des livrables

1. **Phase 1: Conception (1-2 semaines)**
   - Maquettes UI/UX
   - Validation de la structure du site
   - Choix définitif des technologies

2. **Phase 2: Développement frontend (2-3 semaines)**
   - Mise en place de l'architecture React
   - Intégration des composants statiques
   - Implémentation des fonctionnalités de base

3. **Phase 3: Animations et optimisations (1-2 semaines)**
   - Intégration des animations
   - Optimisation des performances
   - Tests cross-browser

4. **Phase 4: Finalisation (1 semaine)**
   - Tests utilisateurs
   - Corrections et ajustements
   - Déploiement

## Notes additionnelles

- Les images fournies dans le cahier des charges devront être optimisées pour le web
- L'argument principal à mettre en avant: "Chez Yllen Créa, chaque création est pensée pour être utile au quotidien : des objets personnalisés, pratiques et symboliques, conçus pour accompagner les petits moments de ta vie."
- Prix de départ des porte-clés personnalisés: à partir de 1500 (devise à préciser)
- Sites de référence mentionnés: culture-diy.fr et etsy.com
- Le nom de domaine prévu est YllenCréa.com
