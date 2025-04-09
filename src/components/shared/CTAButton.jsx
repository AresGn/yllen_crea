import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  border: 2px solid var(--primary-color);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, ${props => props.primary ? '0.4' : '0.2'});
    background-color: ${props => props.primary ? 'var(--primary-light)' : 'rgba(212, 175, 55, 0.1)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const CTAButton = ({ 
  text, 
  href = '#', 
  primary = false, 
  onClick = null,
  className = ''
}) => {
  // Si onClick est fourni, on utilise un bouton
  if (onClick) {
    return (
      <Button 
        as="button"
        primary={primary} 
        onClick={onClick}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </Button>
    );
  }
  
  // Sinon, on utilise un lien
  return (
    <Button 
      href={href}
      primary={primary}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </Button>
  );
}; 
