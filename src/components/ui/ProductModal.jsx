import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { WhatsAppButton } from '../shared/WhatsAppButton';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 85vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background: #333;
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
`;

const ModalContent = styled.div`
  display: flex;
  padding: 0;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ProductGallery = styled.div`
  flex: 1;
  padding: 20px;
  
  @media (max-width: 992px) {
    padding-bottom: 0;
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
  
  img, .lazy-load-image-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #b78846;
    border-radius: 10px;
  }
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid ${props => props.active ? '#b78846' : 'transparent'};
  
  img, .lazy-load-image-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const CategoryTag = styled.div`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 5px;
`;

const Price = styled.div`
  margin: 15px 0;
  
  .promo {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  .original {
    font-size: 1.1rem;
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

const PromoBadge = styled.div`
  background-color: #fff2e6;
  color: #ff8c00;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
`;

const Description = styled.div`
  margin: 20px 0;
  
  p {
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
  }
  
  ul {
    padding-left: 20px;
    margin-bottom: 20px;
    
    li {
      margin-bottom: 8px;
      color: #555;
    }
  }
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
  margin-top: 20px;
  
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
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    
    &:hover {
      background-color: var(--primary-light);
    }
  }
  
  &.secondary {
    background-color: white;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    &:hover {
      background-color: rgba(212, 175, 55, 0.1);
    }
  }
`;

export const ProductModal = ({ 
  isOpen, 
  onClose, 
  category,
  product 
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [color, setColor] = useState('');
  const [personalization, setPersonalization] = useState('');
  
  // Données fictives pour l'exemple - à remplacer par des données réelles
  const productImages = product?.images || [
    `/assets/images/products/${category.id}/produit1.webp`,
    `/assets/images/products/${category.id}/produit2.webp`,
    `/assets/images/products/${category.id}/produit3.webp`,
    `/assets/images/products/${category.id}/produit4.webp`,
  ];
  
  const colorOptions = product?.colors || [
    { id: 'beige', name: 'Beige' },
    { id: 'blue', name: 'Bleu' },
    { id: 'pink', name: 'Rose' },
    { id: 'purple', name: 'Violet' },
    { id: 'green', name: 'Vert' },
  ];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} />
            
            <ModalContent>
              <ProductGallery>
                <MainImage>
                  <LazyLoadImage
                    src={productImages[selectedImage]}
                    alt={`${category.name} - Image ${selectedImage + 1}`}
                    effect="blur"
                    threshold={300}
                  />
                </MainImage>
                
                <ThumbnailsContainer>
                  {productImages.map((image, index) => (
                    <Thumbnail 
                      key={index} 
                      active={selectedImage === index}
                      onClick={() => setSelectedImage(index)}
                    >
                      <LazyLoadImage
                        src={image}
                        alt={`Miniature ${index + 1}`}
                        effect="blur"
                      />
                    </Thumbnail>
                  ))}
                </ThumbnailsContainer>
              </ProductGallery>
              
              <ProductDetails>
                <CategoryTag>{category.name}</CategoryTag>
                <ProductTitle>{product?.name || `${category.name} personnalisé`}</ProductTitle>
                
                <Price>
                  <span className="promo">1 500 FCFA</span>
                  <span className="original">2 500 FCFA</span>
                  <span className="discount">-40%</span>
                </Price>
                
                <PromoBadge>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Promotion spéciale! Commandez dans les prochaines 24h et bénéficiez de -40%
                </PromoBadge>
                
                <Description>
                  <p>
                    {category.description} Chaque {category.name.toLowerCase()} est fabriqué à la main avec le plus grand soin, pour créer un objet unique qui vous ressemble.
                  </p>
                  <ul>
                    <li>Matériau de haute qualité: résine époxy non toxique</li>
                    <li>Couleurs personnalisables selon vos préférences</li>
                    <li>Personnalisation avec texte, prénom ou date</li>
                    <li>Possibilité d'inclure des éléments (photos, fleurs, etc.)</li>
                    <li>Délai de fabrication: 72h à 2 semaines</li>
                  </ul>
                </Description>
                
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
                
                <ActionButtons>
                  <WhatsAppButton 
                    text="Commander sur WhatsApp" 
                    fullWidth 
                  />
                  <Button className="secondary">
                    Contacter pour plus d'infos
                  </Button>
                </ActionButtons>
              </ProductDetails>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
}; 