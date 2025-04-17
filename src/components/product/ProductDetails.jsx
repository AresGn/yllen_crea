import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
  width: 100%;
  
  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.75rem;
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 0.85rem;
    }
    
    @media (min-width: 992px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

const Price = styled.div`
  margin: 0.75rem 0;
  
  .price {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-color);
    
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  
  .original {
    font-size: 0.9rem;
    text-decoration: line-through;
    color: #999;
    margin-left: 8px;
    
    @media (min-width: 768px) {
      font-size: 1rem;
      margin-left: 10px;
    }
  }
  
  .discount {
    background-color: #e8f7e8;
    color: #2e7d32;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-left: 8px;
    
    @media (min-width: 768px) {
      padding: 3px 8px;
      font-size: 0.8rem;
      margin-left: 10px;
    }
  }
  
  @media (min-width: 768px) {
    margin: 1rem 0;
  }
`;

const PromoBadge = styled.div`
  background-color: #fff2e6;
  color: #ff8c00;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 20px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    
    @media (min-width: 768px) {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
  
  @media (min-width: 768px) {
    padding: 12px;
    margin: 15px 0 25px;
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ProductFeatures = styled.ul`
  font-size: 0.85rem;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.4rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ShippingInfo = styled.div`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #666;
  
  p {
    margin-bottom: 3px;
  }
  
  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 0.9rem;
    
    p {
      margin-bottom: 5px;
    }
  }
`;

const OrderButtonContainer = styled.div`
  width: 100%;
  margin: 1.5rem auto;
  text-align: center;
  
  @media (min-width: 768px) {
    max-width: 400px;
    margin: 2rem auto;
  }
`;

const OrderButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  background-color: var(--primary-color);
  color: white;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(var(--primary-color-rgb), 0.3);
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(var(--primary-color-rgb), 0.4);
  }
  
  @media (min-width: 768px) {
    padding: 14px 25px;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(var(--primary-color-rgb), 0.3);
    
    &:hover {
      box-shadow: 0 6px 15px rgba(var(--primary-color-rgb), 0.4);
    }
  }
`;

const ProductDetails = ({ product, category, onOrderClick }) => {
  // Récupérer la plage de prix correspondant à la catégorie
  const getPriceRange = () => {
    const categoryPrices = {
      'porte-cle': '1500-3000',
      'porte-cle-entreprise': '1500-3000',
      'boucles': '1000-2500',
      'collier': '1000-3000',
      'bracelet': '1000',
      'boite-bijoux': '4000',
      'decapsuleur': '1500-3500',
      'porte-verre': '3000-16000',
      'porte-livre': '10000',
      'marque-page': '1000-1500',
      'pochette-portable': '1000-2500',
    };
    
    return categoryPrices[category.id] || '';
  };
  
  return (
    <Details>
      <h2>{product?.name || `${category.name} Personnalisé`}</h2>
      
      <Price>
        <span className="price">{getPriceRange()} FCFA</span>
      </Price>
      
      <Description>
        {product?.description || category.description}
        <br /><br />
        Chaque {category.name.toLowerCase()} est fabriqué à la main avec le plus grand soin, pour créer un objet unique qui vous ressemble.
      </Description>
      
      <ProductFeatures>
        <li>Matériau de haute qualité: résine époxy non toxique</li>
        <li>Couleurs personnalisables selon vos préférences</li>
        <li>Personnalisation avec texte, prénom ou date</li>
        <li>Possibilité d'inclure des éléments (photos, fleurs, etc.)</li>
        <li>Délai de fabrication: 72h à 2 semaines</li>
      </ProductFeatures>
      
      <ShippingInfo>
        <p>⏱️ Temps de confection: 72h à 2 semaines selon la complexité</p>
        <p>🚚 Livraison disponible (frais à la charge du client)</p>
      </ShippingInfo>
      
      <OrderButtonContainer>
        <OrderButton onClick={onOrderClick}>
          Passer une commande
        </OrderButton>
      </OrderButtonContainer>
    </Details>
  );
};

export default ProductDetails; 