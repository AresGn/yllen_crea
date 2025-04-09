import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ProductCard } from '../ui/ProductCard';

// Données statiques pour l'exemple, idéalement à déplacer dans un fichier data
const categories = [
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

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: #b78846;
    }
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

const TabButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.active ? '#b78846' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.active ? '#b78846' : '#e0e0e0'};
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const ProductCategories = () => {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  
  const filteredCategories = filter === 'all' 
    ? categories 
    : filter === 'featured' 
      ? categories.filter(cat => cat.featured) 
      : categories;
  
  return (
    <Section id="creations" ref={ref}>
      <SectionHeader>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mes Créations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez mes créations en résine personnalisées. Chaque pièce est unique, 
          fabriquée à la main avec soin et passion pour capturer vos souvenirs précieux.
        </motion.p>
      </SectionHeader>
      
      <CategoryTabs>
        <TabButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          Toutes les catégories
        </TabButton>
        <TabButton 
          active={filter === 'featured'} 
          onClick={() => setFilter('featured')}
        >
          Populaires
        </TabButton>
      </CategoryTabs>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <CategoriesGrid>
          {filteredCategories.map(category => (
            <motion.div key={category.id} variants={item}>
              <ProductCard 
                image={category.image}
                title={category.name}
                description={category.description}
                link={`#${category.id}`}
                featured={category.featured}
              />
            </motion.div>
          ))}
        </CategoriesGrid>
      </motion.div>
    </Section>
  );
}; 
