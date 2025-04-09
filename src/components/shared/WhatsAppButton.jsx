import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366;
  color: white;
  padding: ${props => props.fullWidth ? '0.8rem 1.5rem' : '0.8rem 1.2rem'};
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(37, 211, 102, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  i {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.fullWidth ? '0.8rem 1rem' : '0.7rem 1rem'};
    font-size: 0.9rem;
  }
`;

export const WhatsAppButton = ({ text = "Contacter sur WhatsApp", fullWidth = false }) => {
  // Numéro WhatsApp avec code pays sans espace ni caractères spéciaux
  const whatsappNumber = "22963918285";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  return (
    <StyledButton 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      fullWidth={fullWidth}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp"></i>
      {text}
    </StyledButton>
  );
}; 
