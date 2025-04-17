import React, { useState, useEffect, useMemo } from 'react';
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
  margin-bottom: 1rem;
  
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
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const OrderForm = ({ colorOptions, product, category, customizationComponent, selectedCustomizations }) => {
  const [color, setColor] = useState('');
  const [personalization, setPersonalization] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliveryLocation, setDeliveryLocation] = useState('');
  
  // Vérifier si on est dans la catégorie porte-cle-entreprise
  const isEnterpriseKeychain = category?.id === 'porte-cle-entreprise';
  
  // Si l'utilisateur a déjà spécifié une quantité dans les options de personnalisation
  const hasQuantityInCustomization = selectedCustomizations && 'quantite' in selectedCustomizations;
  
  // Utiliser la quantité des personnalisations si elle existe
  useEffect(() => {
    if (hasQuantityInCustomization && selectedCustomizations.quantite) {
      setQuantity(parseInt(selectedCustomizations.quantite) || 1);
    }
  }, [selectedCustomizations, hasQuantityInCustomization]);
  
  // Déterminer si le formulaire est valide en fonction des champs requis
  const formIsValid = useMemo(() => {
    // Si nous utilisons le composant de personnalisation
    if (customizationComponent) {
      // Vérifier si les options de personnalisation existent et contiennent des valeurs
      const hasCustomizations = selectedCustomizations && 
                        Object.keys(selectedCustomizations).length > 0;
      
      // Vérifier si chaque option a une valeur non vide
      const customizationsValid = hasCustomizations && 
                        Object.values(selectedCustomizations)
                          .some(value => value && String(value).trim() !== '');
      
      // Vérifier si le lieu de livraison est rempli
      const locationValid = deliveryLocation && deliveryLocation.trim() !== '';
      
      const isValid = customizationsValid && locationValid;
      
      console.log('Form validation:', {
        hasCustomizations,
        customizationsValid, 
        locationValid,
        deliveryLocation,
        selectedCustomizations,
        isValid
      });
      
      return isValid;
    } else {
      // Sinon, vérifier les champs standards
      return color && personalization && quantity > 0 && deliveryLocation && deliveryLocation.trim() !== '';
    }
  }, [color, personalization, quantity, deliveryLocation, selectedCustomizations, customizationComponent]);
  
  // Construire le message WhatsApp
  const buildWhatsAppMessage = () => {
    const productName = product?.name || `${category.name} Personnalisé`;
    const colorName = colorOptions.find(c => c.id === color)?.name || color;
    
    // Ajouter les personnalisations sélectionnées au message si elles existent
    let customizationsText = '';
    if (selectedCustomizations && Object.keys(selectedCustomizations).length > 0) {
      customizationsText = '\n*Personnalisations:*\n';
      for (const [key, value] of Object.entries(selectedCustomizations)) {
        // Ne pas ajouter la quantité en double
        if (key !== 'quantite' || !isEnterpriseKeychain) {
          customizationsText += `- ${key}: ${value}\n`;
        }
      }
    }
    
    return `Bonjour, je souhaite commander:\n\n` +
      `*Produit:* ${productName}\n` +
      `*Couleur:* ${colorName}\n` +
      `*Personnalisation:* ${personalization}` +
      customizationsText +
      `*Quantité:* ${quantity}\n` +
      `*Lieu de livraison:* ${deliveryLocation}\n\n` +
      `Merci!`;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter le traitement du formulaire
    console.log("Commande soumise");
  };
  
  return (
    <OrderFormContainer>
      <FormTitle>Personnalisez votre commande</FormTitle>
      <form onSubmit={handleSubmit}>
        <ProductOptions>
          {/* Utiliser le composant de personnalisation s'il est fourni */}
          {customizationComponent || (
            <>
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
            </>
          )}
          
          {/* N'afficher le champ de quantité que si ce n'est pas déjà spécifié dans les options de personnalisation */}
          {!isEnterpriseKeychain && (
            <>
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
            </>
          )}
          
          <OptionLabel>
            Lieu de livraison <span className="required">*</span>
          </OptionLabel>
          <Input
            type="text"
            value={deliveryLocation}
            onChange={(e) => {
              const newValue = e.target.value;
              setDeliveryLocation(newValue);
              console.log("Location updated:", newValue);
            }}
            placeholder="Quartier, ville"
            required
            onBlur={() => {
              console.log("Location field blurred, value:", deliveryLocation);
            }}
          />
          <HelpText>
            Indiquez votre quartier et ville pour la livraison
          </HelpText>
          
          <ActionButtons>
            {formIsValid && (
              <WhatsAppButton 
                text="Commander sur WhatsApp" 
                fullWidth 
                customMessage={buildWhatsAppMessage()}
              />
            )}
          </ActionButtons>
        </ProductOptions>
      </form>
    </OrderFormContainer>
  );
};

export default OrderForm; 