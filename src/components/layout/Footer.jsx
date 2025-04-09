import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../shared/WhatsAppButton';

const FooterContainer = styled.footer`
  background-color: #f8f5f0;
  padding: 3rem 2rem 1.5rem;
  color: #333;
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
      background-color: #b78846;
      
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
        color: #555;
        transition: color 0.2s ease;
        
        &:hover {
          color: #b78846;
        }
      }
    }
  }
  
  p {
    line-height: 1.6;
    color: #555;
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
    background-color: #e8e2d6;
    color: #555;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #b78846;
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #e8e2d6;
  font-size: 0.9rem;
  color: #777;
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Yllen Créa</h3>
            <p>Des créations en résine personnalisées, uniques comme vous. Objets pratiques et symboliques pour accompagner les moments de votre vie.</p>
            <SocialIcons>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </SocialIcons>
          </motion.div>
        </FooterSection>
        
        <FooterSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#creations">Mes Créations</a></li>
              <li><a href="#order-process">Comment Commander</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#calendar">Calendrier</a></li>
            </ul>
          </motion.div>
        </FooterSection>
        
        <FooterSection>
          <motion.div
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
          </motion.div>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} Yllen Créa. Tous droits réservés.</p>
        <p>Créations artisanales en résine | Made with ❤️ in Bénin</p>
      </Copyright>
    </FooterContainer>
  );
}; 
