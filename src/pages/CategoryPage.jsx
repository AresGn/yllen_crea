import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { WhatsAppButton } from '../components/shared/WhatsAppButton';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { categories, categoryProducts } from '../data/products';

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
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
      background-color: var(--primary-color);
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const ProductsSection = styled.section`
  margin-bottom: 3rem;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 0.5rem;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.currentSlide * -100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 500px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  
  img, .lazy-load-image-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  &.prev {
    left: 15px;
  }
  
  &.next {
    right: 15px;
  }
  
  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
  }
  
  &.prev:before {
    transform: rotate(-135deg);
  }
  
  &.next:before {
    transform: rotate(45deg);
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--primary-color)' : '#ddd'};
  margin: 0 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 220px;
  overflow: hidden;
  
  img, .lazy-load-image-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProductCard}:hover & img, ${ProductCard}:hover & .lazy-load-image-background {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
`;

const ProductPrice = styled.div`
  margin: 1rem 0;
  
  .price {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  .original {
    font-size: 1rem;
    text-decoration: line-through;
    color: #999;
    margin-left: 10px;
  }
  
  .discount {
    background-color: #e8f7e8;
    color: #2e7d32;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProductDetailsSection = styled.section`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ProductGallery = styled.div`
  flex: 1;
`;

const ProductDetails = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
`;

const ProductOptions = styled.div`
  margin: 2rem 0;
`;

const OptionLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 0.95rem;
  
  .required {
    color: #d32f2f;
    margin-left: 3px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
  margin-bottom: 20px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
  margin-bottom: 20px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const HelpText = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-top: -15px;
  margin-bottom: 20px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 14px 25px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  
  &.secondary {
    background-color: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    &:hover {
      background-color: rgba(212, 175, 55, 0.1);
    }
  }
`;

const PromoBadge = styled.div`
  background-color: #fff2e6;
  color: #ff8c00;
  padding: 12px;
  border-radius: 8px;
  margin: 15px 0 25px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    flex-shrink: 0;
  }
`;

const ShippingInfo = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
  
  p {
    margin-bottom: 5px;
  }
`;

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [color, setColor] = useState('');
  const [personalization, setPersonalization] = useState('');
  
  // Trouver la catégorie correspondante
  const category = categories.find(cat => cat.id === categoryId);
  
  // Obtenir les produits de cette catégorie
  const products = categoryProducts[categoryId] || [];
  
  // Images pour le slider (toutes les images des produits)
  const sliderImages = products.reduce((acc, product) => {
    if (product.images && product.images.length) {
      return [...acc, ...product.images];
    }
    return acc;
  }, []);
  
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
  
  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };
  
  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <Page>
      <Header />
      <Main>
        <Container>
          <Breadcrumbs>
            <a href="/">Accueil</a>
            <span>›</span>
            <a href="/#creations">Créations</a>
            <span>›</span>
            {category.name}
          </Breadcrumbs>
          
          <CategoryHeader>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </CategoryHeader>
          
          {sliderImages.length > 0 && (
            <SliderContainer>
              <SliderWrapper>
                <SliderTrack currentSlide={currentSlide}>
                  {sliderImages.map((image, index) => (
                    <Slide key={index}>
                      <SliderImage>
                        <LazyLoadImage
                          src={image}
                          alt={`${category.name} - Image ${index + 1}`}
                          effect="blur"
                          threshold={300}
                        />
                      </SliderImage>
                    </Slide>
                  ))}
                </SliderTrack>
              </SliderWrapper>
              
              {sliderImages.length > 1 && (
                <>
                  <SliderButton className="prev" onClick={goToPrevSlide} />
                  <SliderButton className="next" onClick={goToNextSlide} />
                  
                  <SliderDots>
                    {sliderImages.map((_, index) => (
                      <Dot 
                        key={index} 
                        active={currentSlide === index}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </SliderDots>
                </>
              )}
            </SliderContainer>
          )}
          
          <ProductDetailsSection>
            <ProductDetails>
              <h2>{products[0]?.name || `${category.name} Personnalisé`}</h2>
              
              <ProductPrice>
                <span className="price">1 500 FCFA</span>
                <span className="original">2 500 FCFA</span>
                <span className="discount">-40%</span>
              </ProductPrice>
              
              <PromoBadge>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Promotion spéciale! Commandez dans les prochaines 24h et bénéficiez de -40%
              </PromoBadge>
              
              <ProductDescription>
                {products[0]?.description || category.description}
                <br /><br />
                Chaque {category.name.toLowerCase()} est fabriqué à la main avec le plus grand soin, pour créer un objet unique qui vous ressemble.
              </ProductDescription>
              
              <ul>
                <li>Matériau de haute qualité: résine époxy non toxique</li>
                <li>Couleurs personnalisables selon vos préférences</li>
                <li>Personnalisation avec texte, prénom ou date</li>
                <li>Possibilité d'inclure des éléments (photos, fleurs, etc.)</li>
                <li>Délai de fabrication: 72h à 2 semaines</li>
              </ul>
              
              <ProductOptions>
                <OptionLabel>
                  Couleur <span className="required">*</span>
                </OptionLabel>
                <Select 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)}
                  required
                >
                  <option value="">Sélectionner une option</option>
                  {colorOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                
                <OptionLabel>
                  Personnalisation <span className="required">*</span>
                </OptionLabel>
                <Input
                  type="text"
                  value={personalization}
                  onChange={(e) => setPersonalization(e.target.value)}
                  placeholder="Ex: Jasper (un seul mot)"
                  required
                />
                <HelpText>
                  Veuillez indiquer le texte, prénom ou date à inclure sur le produit.
                </HelpText>
              </ProductOptions>
              
              <ActionButtons>
                <WhatsAppButton 
                  text="Commander sur WhatsApp" 
                  fullWidth 
                />
                <Button className="secondary">
                  Contacter pour plus d'infos
                </Button>
              </ActionButtons>
              
              <ShippingInfo>
                <p>⏱️ Temps de confection: 72h à 2 semaines selon la complexité</p>
                <p>🚚 Livraison disponible (frais à la charge du client)</p>
              </ShippingInfo>
            </ProductDetails>
          </ProductDetailsSection>
          
          {products.length > 1 && (
            <ProductsSection>
              <h2>Autres {category.name}</h2>
              
              <ProductsGrid>
                {products.map((product, index) => (
                  <ProductCard key={product.id || index}>
                    <ProductImage>
                      <LazyLoadImage
                        src={product.images?.[0] || ''}
                        alt={product.name}
                        effect="blur"
                        threshold={300}
                      />
                    </ProductImage>
                    <ProductContent>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductPrice>
                        <span className="price">{product.price} FCFA</span>
                        {product.originalPrice && (
                          <>
                            <span className="original">{product.originalPrice} FCFA</span>
                            <span className="discount">-{product.discount}%</span>
                          </>
                        )}
                      </ProductPrice>
                      <ProductDescription>{product.description}</ProductDescription>
                    </ProductContent>
                  </ProductCard>
                ))}
              </ProductsGrid>
            </ProductsSection>
          )}
        </Container>
      </Main>
      <Footer />
    </Page>
  );
}; 