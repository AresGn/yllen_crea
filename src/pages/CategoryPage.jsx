import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

const PriceRange = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0.5rem 0 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin: 0.6rem 0 1.2rem;
  }
  
  @media (min-width: 992px) {
    font-size: 1.4rem;
    margin: 0.7rem 0 1.4rem;
  }
`;

const CustomizationOption = styled.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const OptionTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (min-width: 992px) {
    font-size: 1.1rem;
  }
`;

// Composant CustomizationOptions déplacé en dehors du composant principal
const CustomizationOptions = ({ customizationOptions, colorOptions, formValues, handleCustomizationChange }) => {
  // Fonction pour vérifier que les champs requis sont bien remplis
  const handleInputChange = (optionId, value) => {
    // Appliquer immédiatement le changement
    handleCustomizationChange(optionId, value);
  };

  return (
    <ProductOptions>
      <OptionLabel>Options de personnalisation <span className="required">*</span></OptionLabel>
      {customizationOptions.map(option => (
        <CustomizationOption key={option.id}>
          <OptionTitle>{option.label}</OptionTitle>
          {option.id === 'quantite' ? (
            <>
              <Input 
                type="number" 
                placeholder="Quantité souhaitée"
                value={formValues[option.id] || ''}
                onChange={(e) => handleInputChange(option.id, e.target.value)}
                min="100"
                max="50000"
                required
              />
              <HelpText>Entre 100 et 50000 pièces</HelpText>
            </>
          ) : option.id === 'couleur' ? (
            <Select
              value={formValues[option.id] || ''}
              onChange={(e) => handleInputChange(option.id, e.target.value)}
              required
            >
              <option value="">Sélectionnez une couleur</option>
              {colorOptions.map(color => (
                <option key={color.id} value={color.id}>{color.name}</option>
              ))}
            </Select>
          ) : option.id === 'decoration' ? (
            <Input 
              type="text" 
              placeholder="Décrivez la décoration souhaitée"
              value={formValues[option.id] || ''}
              onChange={(e) => handleInputChange(option.id, e.target.value)}
              required
            />
          ) : (
            <>
              <Input 
                type="text" 
                placeholder={`Saisissez votre ${option.id === 'nom' ? 'nom' : option.id === 'message' ? 'message' : 'personnalisation'}`}
                value={formValues[option.id] || ''}
                onChange={(e) => handleInputChange(option.id, e.target.value)}
                required
              />
              {option.id === 'photo' && (
                <Input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => handleInputChange('photo_file', e.target.files[0])}
                />
              )}
            </>
          )}
        </CustomizationOption>
      ))}
    </ProductOptions>
  );
};

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [showOrderForm, setShowOrderForm] = useState(false);
  // Fusionner les deux états en un seul
  const [formValues, setFormValues] = useState({});
  
  // Faire défiler la page vers le haut lors du chargement
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("CategoryPage chargée avec ID:", categoryId);
    // Réinitialiser les valeurs du formulaire lors du changement de catégorie
    setFormValues({});
  }, [categoryId]);
  
  // Trouver la catégorie correspondante
  const category = useMemo(() => {
    const cat = categories.find(cat => cat.id === categoryId);
    console.log("Catégorie trouvée:", cat);
    return cat;
  }, [categoryId]);
  
  // Si la catégorie n'existe pas, rediriger vers la page d'accueil
  useEffect(() => {
    if (!category) {
      console.log("Catégorie non trouvée, redirection vers l'accueil");
      navigate('/');
    }
  }, [category, navigate]);
  
  // Données de personnalisation pour chaque catégorie
  const categoryCustomizations = useMemo(() => ({
    'porte-cle': [
      { id: 'nom', label: 'Personnalisation avec un nom' },
      { id: 'message', label: 'Personnalisation avec un message' },
      { id: 'resine', label: 'Personnalisation avec des décorations en résine comme complément' }
    ],
    'porte-cle-entreprise': [
      { id: 'logo', label: 'Personnalisation avec un logo d\'entreprise' },
      { id: 'quantite', label: 'Quantité (100 à 50000)' }
    ],
    'boucles': [
      { id: 'couleur', label: 'Choix de couleur' },
      { id: 'decoration', label: 'Choix de décoration' }
    ],
    'collier': [
      { id: 'nom', label: 'Personnalisation avec un nom' },
      { id: 'message', label: 'Personnalisation avec un message' }
    ],
    'bracelet': [
      { id: 'couleur', label: 'Choix de couleur' }
    ],
    'porte-verre': [
      { id: 'message', label: 'Personnalisation avec un message' },
      { id: 'logo', label: 'Personnalisation avec un logo' },
      { id: 'nom', label: 'Personnalisation avec un nom' },
      { id: 'photo', label: 'Personnalisation avec une photo' }
    ],
    'marque-page': [
      { id: 'message', label: 'Personnalisation avec un message' },
      { id: 'logo', label: 'Personnalisation avec un logo' },
      { id: 'nom', label: 'Personnalisation avec un nom' },
      { id: 'photo', label: 'Personnalisation avec une photo' }
    ],
    'pochette-portable': [
      { id: 'message', label: 'Personnalisation avec un message' },
      { id: 'logo', label: 'Personnalisation avec un logo' },
      { id: 'nom', label: 'Personnalisation avec un nom' },
      { id: 'photo', label: 'Personnalisation avec une photo' }
    ],
    'decapsuleur': [
      { id: 'message', label: 'Personnalisation avec un message' },
      { id: 'logo', label: 'Personnalisation avec un logo' },
      { id: 'nom', label: 'Personnalisation avec un nom' }
    ]
  }), []);
  
  // Valeurs par défaut pour les autres catégories
  const defaultCustomizations = useMemo(() => [
    { id: 'message', label: 'Personnalisation avec un message' },
    { id: 'nom', label: 'Personnalisation avec un nom' }
  ], []);
  
  // Obtenir les produits de cette catégorie
  const products = useMemo(() => {
    // Vérifier si les produits existent pour cette catégorie
    const categoryProds = categoryProducts[categoryId] || [];
    console.log("Produits trouvés pour la catégorie", categoryId, ":", categoryProds);
    return categoryProds;
  }, [categoryId]);
  
  // Images pour le slider (toutes les images des produits)
  const sliderImages = useMemo(() => {
    const images = products.reduce((acc, product) => {
      if (product?.images && product.images.length) {
        console.log("Images trouvées pour le produit", product.id, ":", product.images);
        return [...acc, ...product.images];
      }
      return acc;
    }, []);
    console.log("Images pour le slider:", images);
    return images;
  }, [products]);
  
  // Obtenir les options de personnalisation pour cette catégorie
  const customizationOptions = useMemo(() => {
    return categoryCustomizations[categoryId] || defaultCustomizations;
  }, [categoryId, categoryCustomizations, defaultCustomizations]);
  
  // Utiliser toutes les images sans déduplication
  const uniqueSliderImages = sliderImages;
  
  // Couleurs disponibles (combinaison de toutes les couleurs des produits)
  const colorOptions = useMemo(() => {
    return products.reduce((acc, product) => {
      if (product.colors && product.colors.length) {
        const newColors = product.colors.filter(color => 
          !acc.some(c => c.id === color.id)
        );
        return [...acc, ...newColors];
      }
      return acc;
    }, []);
  }, [products]);
  
  const handleCustomizationChange = useCallback((optionId, value) => {
    setFormValues(prev => ({
      ...prev,
      [optionId]: value
    }));
    console.log(`Changement de personnalisation: ${optionId} = ${value}`);
  }, []);
  
  // Utilisation du composant CustomizationOptions memoizé
  const customizationComponent = useMemo(() => (
    <CustomizationOptions 
      customizationOptions={customizationOptions}
      colorOptions={colorOptions}
      formValues={formValues}
      handleCustomizationChange={handleCustomizationChange}
    />
  ), [customizationOptions, colorOptions, formValues, handleCustomizationChange]);
  
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
          details={
            <>
              <ProductDetails 
                product={products[0]} 
                category={category} 
                onOrderClick={handleOrderClick}
              />
            </>
          }
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
            customizationComponent={customizationComponent}
            selectedCustomizations={formValues}
          />
        )}
      </Main>
      <Footer />
    </Page>
  );
}; 