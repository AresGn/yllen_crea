import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { categories, categoryProducts } from '../data/products';

// Importer les composants modulaires
import ProductSlider from '../components/product/ProductSlider';
import ProductDetails from '../components/product/ProductDetails';
import OrderForm from '../components/product/OrderForm';
import Breadcrumbs from '../components/product/Breadcrumbs';
import CategoryHeader from '../components/product/CategoryHeader';
import ProductLayout from '../components/product/ProductLayout';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 80px;
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 992px) {
    max-width: 1200px;
    padding: 2rem;
  }
`;

const ProductsSection = styled.section`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 3rem;
  }
`;

const ProductDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  
  @media (min-width: 768px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
    margin-bottom: 3rem;
  }
`;

const ProductGallery = styled.div`
  flex: 1;
`;

const ProductDetailsStyled = styled.div`
  flex: 1;
  
  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.75rem;
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 0.9rem;
    }
    
    @media (min-width: 992px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

const OrderButtonContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 1.5rem auto;
  text-align: center;
  
  @media (min-width: 768px) {
    max-width: 350px;
    margin: 1.75rem auto;
  }
  
  @media (min-width: 992px) {
    max-width: 400px;
    margin: 2rem auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -70px;
    z-index: 10;
  }
`;

const OrderFormContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 0;
  position: static;
  
  @media (min-width: 768px) {
    margin: 2.5rem auto;
    max-width: 600px;
  }
  
  @media (min-width: 992px) {
    margin: 3rem auto;
    max-width: 700px;
  }
`;

const ProductOptions = styled.div`
  background-color: #f8f8f8;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 992px) {
    padding: 25px;
  }
`;

const OptionLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (min-width: 992px) {
    font-size: 1rem;
  }
  
  .required {
    color: #d32f2f;
    margin-left: 3px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: white;
  margin-bottom: 18px;
  font-size: 0.9rem;
  color: #333;
  
  @media (min-width: 768px) {
    padding: 11px 14px;
    font-size: 0.95rem;
    margin-bottom: 19px;
  }
  
  @media (min-width: 992px) {
    padding: 12px 15px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
  }
  
  option {
    color: #333;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: white;
  margin-bottom: 18px;
  font-size: 0.9rem;
  color: #333;
  
  @media (min-width: 768px) {
    padding: 11px 14px;
    font-size: 0.95rem;
    margin-bottom: 19px;
  }
  
  @media (min-width: 992px) {
    padding: 12px 15px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
  }
  
  &::placeholder {
    color: #777;
  }
`;

const HelpText = styled.div`
  font-size: 0.8rem;
  color: #444;
  margin-top: -13px;
  margin-bottom: 18px;
  font-style: italic;
  
  @media (min-width: 768px) {
    font-size: 0.825rem;
    margin-top: -14px;
    margin-bottom: 19px;
  }
  
  @media (min-width: 992px) {
    font-size: 0.85rem;
    margin-top: -15px;
    margin-bottom: 20px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    margin-top: 1.75rem;
  }
  
  @media (min-width: 992px) {
    margin-top: 2rem;
  }
`;

const OrderButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: var(--primary-color);
  color: white;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(var(--primary-color-rgb), 0.3);
  
  @media (min-width: 768px) {
    padding: 13px 22px;
    font-size: 0.95rem;
    box-shadow: 0 4px 9px rgba(var(--primary-color-rgb), 0.3);
  }
  
  @media (min-width: 992px) {
    padding: 14px 25px;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(var(--primary-color-rgb), 0.3);
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(var(--primary-color-rgb), 0.4);
  }
`;

const PromoBadge = styled.div`
  background-color: #fff2e6;
  color: #ff8c00;
  padding: 10px;
  border-radius: 8px;
  margin: 12px 0 20px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 11px;
    margin: 13px 0 22px;
    font-size: 0.875rem;
  }
  
  @media (min-width: 992px) {
    padding: 12px;
    margin: 15px 0 25px;
    font-size: 0.9rem;
  }
  
  svg {
    margin-right: 8px;
    flex-shrink: 0;
    
    @media (min-width: 768px) {
      margin-right: 9px;
    }
    
    @media (min-width: 992px) {
      margin-right: 10px;
    }
  }
`;

const ShippingInfo = styled.div`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #666;
  
  @media (min-width: 768px) {
    margin-top: 1.75rem;
    font-size: 0.875rem;
  }
  
  @media (min-width: 992px) {
    margin-top: 2rem;
    font-size: 0.9rem;
  }
  
  p {
    margin-bottom: 4px;
    
    @media (min-width: 768px) {
      margin-bottom: 4.5px;
    }
    
    @media (min-width: 992px) {
      margin-bottom: 5px;
    }
  }
`;

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [showOrderForm, setShowOrderForm] = useState(false);
  
  // Trouver la catégorie correspondante
  const category = categories.find(cat => cat.id === categoryId);
  
  // Obtenir les produits de cette catégorie
  const products = useMemo(() => categoryProducts[categoryId] || [], [categoryId]);
  
  // Images pour le slider (toutes les images des produits)
  const sliderImages = useMemo(() => products.reduce((acc, product) => {
    if (product.images && product.images.length) {
      return [...acc, ...product.images];
    }
    return acc;
  }, []), [products]);
  
  // Utiliser toutes les images sans déduplication
  const uniqueSliderImages = sliderImages;
  
  // Debug: Afficher les informations sur les images dans la console
  useEffect(() => {
    console.log("Catégorie:", categoryId);
    console.log("Produits trouvés:", products);
    console.log("Images pour le slider:", uniqueSliderImages);
    console.log("Nombre d'images:", uniqueSliderImages.length);
  }, [categoryId, products, uniqueSliderImages]);
  
  // Couleurs disponibles (combinaison de toutes les couleurs des produits)
  const colorOptions = products.reduce((acc, product) => {
    if (product.colors && product.colors.length) {
      const newColors = product.colors.filter(color => 
        !acc.some(c => c.id === color.id)
      );
      return [...acc, ...newColors];
    }
    return acc;
  }, []);
  
  // Si la catégorie n'existe pas, rediriger vers la page d'accueil
  useEffect(() => {
    if (!category) {
      navigate('/');
    }
  }, [category, navigate]);
  
  if (!category) {
    return null;
  }
  
  const handleOrderClick = () => {
    setShowOrderForm(true);
  };
  
  return (
    <Page>
      <Header />
      <Main>
        <ProductLayout
          gallery={<ProductSlider images={uniqueSliderImages} altPrefix={category.name} />}
          details={<ProductDetails 
                      product={products[0]} 
                      category={category} 
                      onOrderClick={handleOrderClick}
                    />}
        >
          <Breadcrumbs categoryName={category.name} />
          <CategoryHeader title={category.name} description={category.description} />
        </ProductLayout>
        
        {/* Formulaire de commande en tant que section indépendante */}
        {showOrderForm && (
          <OrderForm 
            colorOptions={colorOptions} 
            product={products[0]} 
            category={category} 
          />
        )}
      </Main>
      <Footer />
    </Page>
  );
}; 