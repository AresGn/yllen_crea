import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CTAButton } from '../shared/CTAButton';

const BannerContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/images/products/autres/banniere_accceuille.webp');
  background-size: cover;
  background-position: center;
  color: white;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const BannerContent = styled.div`
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Slogan = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  p {
    margin-bottom: 8px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  .arrow {
    width: 20px;
    height: 20px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

export const HeroBanner = () => {
  const scrollToCreations = () => {
    const creationsSection = document.getElementById('creations');
    if (creationsSection) {
      creationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <BannerContainer id="home">
      <BannerContent>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Yllen Créa
        </Title>
        
        <Slogan
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Bijoux et accessoires en résine époxy faits main au Bénin
        </Slogan>
        
        <ButtonsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CTAButton 
            text="Découvrir nos créations artisanales" 
            onClick={scrollToCreations}
            primary
          />
          <CTAButton 
            text="Commander des bijoux personnalisés" 
            href="#order-process"
          />
        </ButtonsContainer>
      </BannerContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={scrollToCreations}
      >
        <p>Découvrir l'artisanat en résine du Bénin</p>
        <div className="arrow"></div>
      </ScrollIndicator>
    </BannerContainer>
  );
}; 
