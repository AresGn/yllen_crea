import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  
  ${props => props.scrolled ? `
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  ` : `
    background-color: transparent;
  `}
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    
    @media (max-width: 768px) {
      height: 30px;
    }
  }
  
  h1 {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/images/products/autres/logo.png" alt="Yllen Créa Logo" />
        <h1>Yllen Créa</h1>
      </Logo>
      
      <Navigation />
    </HeaderContainer>
  );
}; 
