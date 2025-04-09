import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ProductCard } from '../ui/ProductCard';
import { categories } from '../../data/products';

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
        <h2>Mes Créations</h2>
        <p>
          Découvrez mes créations en résine personnalisées. Chaque pièce est unique, 
          fabriquée à la main avec soin et passion pour capturer vos souvenirs précieux.
        </p>
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
      
      <div>
        <CategoriesGrid>
          {filteredCategories.map(category => (
            <div key={category.id}>
              <ProductCard 
                image={category.image}
                title={category.name}
                description={category.description}
                link={`#${category.id}`}
                featured={category.featured}
                categoryId={category.id}
              />
            </div>
          ))}
        </CategoriesGrid>
      </div>
    </Section>
  );
}; 
