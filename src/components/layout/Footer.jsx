import React from 'react';
import styled from 'styled-components';
import { motion as Motion } from 'framer-motion';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { useLocation, useNavigate } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--background-light);
  padding: 3rem 2rem 1.5rem;
  color: var(--text-dark);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background-color: var(--primary-color);
      
      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        text-decoration: none;
        color: var(--text-medium);
        transition: color 0.2s ease;
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  
  p {
    line-height: 1.6;
    color: var(--text-medium);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--background-white);
    color: var(--text-medium);
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--background-white);
  font-size: 0.9rem;
  color: var(--text-light);
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Fonction pour gérer la navigation vers les sections
  const scrollToSection = (sectionId) => {
    // Si nous ne sommes pas sur la page d'accueil, naviguer d'abord vers la page d'accueil
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la page d'accueil soit chargée pour défiler vers la section
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 300);
    } else {
      // Si nous sommes déjà sur la page d'accueil, défiler directement
      scrollToElement(sectionId);
    }
  };
  
  // Fonction auxiliaire pour défiler vers l'élément avec l'ID
  const scrollToElement = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Ajustez cette valeur en fonction de la hauteur de votre header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section avec ID "${sectionId}" non trouvée`);
    }
  };
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Yllen Créa</h3>
            <p>Des créations en résine personnalisées, uniques comme vous. Objets pratiques et symboliques pour accompagner les moments de votre vie.</p>
            <SocialIcons>
              <a href="https://web.facebook.com/profile.php?id=61565851836325" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://pin.it/2eMwuIlvD" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </SocialIcons>
          </Motion.div>
        </FooterSection>
        
        <FooterSection>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Navigation</h3>
            <ul>
              <li><a onClick={() => scrollToSection('creations')} style={{ cursor: 'pointer' }}>Mes Créations</a></li>
              <li><a onClick={() => scrollToSection('order-process')} style={{ cursor: 'pointer' }}>Comment Commander</a></li>
              <li><a onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>À Propos</a></li>
            </ul>
          </Motion.div>
        </FooterSection>
        
        <FooterSection>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Contact</h3>
            <p>Besoin d'information ou envie de passer commande ? Contactez-moi directement.</p>
            <div style={{ marginTop: '1rem' }}>
              <WhatsAppButton text="Discuter sur WhatsApp" fullWidth />
            </div>
          </Motion.div>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} Yllen Créa. Tous droits réservés.</p>
        <p>Créations artisanales en résine | Made with ❤️ in Bénin</p>
      </Copyright>
    </FooterContainer>
  );
}; 
