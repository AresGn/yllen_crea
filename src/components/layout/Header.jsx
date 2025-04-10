import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Navigation } from './Navigation';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
  
  @media (min-width: 992px) {
    padding: 1rem 3rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  
  img {
    height: 40px;
    margin-right: 0.5rem;
    
    @media (min-width: 768px) {
      height: 45px;
      margin-right: 0.75rem;
    }
    
    @media (min-width: 992px) {
      height: 50px;
      margin-right: 1rem;
    }
  }
  
  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    margin: 0;
    
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
    
    @media (min-width: 992px) {
      font-size: 1.8rem;
    }
  }
`;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
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
      <HeaderContent>
        <Logo to="/">
          <LazyLoadImage
            src="/assets/images/products/autres/logo.webp"
            alt="Yllen Créa Logo"
            effect="blur"
            height={40}
          />
          <h1>Yllen Créa</h1>
        </Logo>
        
        <Navigation />
      </HeaderContent>
    </HeaderContainer>
  );
}; 
