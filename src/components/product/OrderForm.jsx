import React, { useState } from 'react';
import styled from 'styled-components';
import { WhatsAppButton } from '../shared/WhatsAppButton';

const OrderFormContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 0;
  position: static;
  
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 2.5rem auto;
  }
  
  @media (min-width: 992px) {
    max-width: 700px;
    margin: 3rem auto;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  
  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 1.5rem;
  }
`;

const ProductOptions = styled.div`
  background-color: #f8f8f8;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09);
  }
  
  @media (min-width: 992px) {
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const OptionLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #222;
  font-size: 0.9rem;
  
  .required {
    color: #d32f2f;
    margin-left: 3px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 1rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: white;
  margin-bottom: 16px;
  font-size: 0.9rem;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
  }
  
  option {
    color: #333;
  }
  
  @media (min-width: 768px) {
    padding: 11px 14px;
    margin-bottom: 18px;
    font-size: 0.95rem;
  }
  
  @media (min-width: 992px) {
    padding: 12px 15px;
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: white;
  margin-bottom: 16px;
  font-size: 0.9rem;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
  }
  
  &::placeholder {
    color: #777;
  }
  
  @media (min-width: 768px) {
    padding: 11px 14px;
    margin-bottom: 18px;
    font-size: 0.95rem;
  }
  
  @media (min-width: 992px) {
    padding: 12px 15px;
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

const HelpText = styled.div`
  font-size: 0.8rem;
  color: #444;
  margin-top: -12px;
  margin-bottom: 16px;
  font-style: italic;
  
  @media (min-width: 768px) {
    font-size: 0.825rem;
    margin-top: -14px;
    margin-bottom: 18px;
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

const OrderForm = ({ colorOptions, product, category }) => {
  const [color, setColor] = useState('');
  const [personalization, setPersonalization] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliveryLocation, setDeliveryLocation] = useState('');
  
  // Vérifier si tous les champs sont remplis
  const formIsValid = color && personalization && quantity > 0 && deliveryLocation;
  
  // Construire le message WhatsApp
  const buildWhatsAppMessage = () => {
    const productName = product?.name || `${category.name} Personnalisé`;
    const colorName = colorOptions.find(c => c.id === color)?.name || color;
    
    return `Bonjour, je souhaite commander:\n\n` +
      `*Produit:* ${productName}\n` +
      `*Couleur:* ${colorName}\n` +
      `*Personnalisation:* ${personalization}\n` +
      `*Quantité:* ${quantity}\n` +
      `*Lieu de livraison:* ${deliveryLocation}\n\n` +
      `Merci!`;
  };
  
  return (
    <OrderFormContainer>
      <FormTitle>Personnalisez votre commande</FormTitle>
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
        
        <OptionLabel>
          Quantité <span className="required">*</span>
        </OptionLabel>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          required
        />
        
        <OptionLabel>
          Lieu de livraison <span className="required">*</span>
        </OptionLabel>
        <Input
          type="text"
          value={deliveryLocation}
          onChange={(e) => setDeliveryLocation(e.target.value)}
          placeholder="Quartier, ville"
          required
        />
        
        {formIsValid && (
          <ActionButtons>
            <WhatsAppButton 
              text="Commander sur WhatsApp" 
              fullWidth 
              customMessage={buildWhatsAppMessage()}
            />
          </ActionButtons>
        )}
      </ProductOptions>
    </OrderFormContainer>
  );
};

export default OrderForm; 