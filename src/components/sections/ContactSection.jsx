import React from 'react';
import styled from 'styled-components';
import { motion as Motion } from 'framer-motion';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ContactSectionStyled = styled.section`
  padding: 4rem 1.5rem;
  background-color: #f9f9f9;
  
  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(Motion.h2)`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const ContactInfo = styled(Motion.div)`
  flex: 1;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    color: #333;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }
`;

const ContactImage = styled(Motion.div)`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionStyled id="contact">
      <Container>
        <SectionTitle 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </SectionTitle>
        
        <ContactContent>
          <ContactInfo 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Besoin d'information ou envie de passer commande?</h3>
            <p>
              N'hésitez pas à me contacter directement via WhatsApp pour discuter 
              de vos projets personnalisés, poser des questions ou passer commande.
            </p>
            <p>
              Je suis disponible pour vous accompagner dans la création d'un objet 
              unique qui correspond parfaitement à vos attentes.
            </p>
            
            <ButtonContainer>
              <WhatsAppButton phoneNumber="+22963918285" message="Bonjour, je suis intéressé(e) par vos créations en résine." />
            </ButtonContainer>
          </ContactInfo>
          
          <ContactImage 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/assets/images/products/autres/contact-image.svg"
              alt="Contactez Yllen Créa"
              loading="lazy"
            />
          </ContactImage>
        </ContactContent>
      </Container>
    </ContactSectionStyled>
  );
};

export { ContactSection }; 
