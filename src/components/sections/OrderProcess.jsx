import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CTAButton } from '../shared/CTAButton';
import { WhatsAppButton } from '../shared/WhatsAppButton';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f5f0;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: #b78846;
    }
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ProcessSteps = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '${props => props.number}';
    position: absolute;
    top: -30px;
    right: -15px;
    font-size: 8rem;
    font-weight: 800;
    color: rgba(183, 136, 70, 0.1);
    z-index: 0;
  }
`;

const StepIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(183, 136, 70, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  i {
    font-size: 1.5rem;
    color: #b78846;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  z-index: 1;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 4rem;
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: #666;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const orderSteps = [
  {
    number: '1',
    title: 'Choix de l\'article',
    description: 'Parcourez les créations et choisissez celle qui vous plaît ou demandez une personnalisation spécifique.',
    icon: 'fas fa-shopping-bag'
  },
  {
    number: '2',
    title: 'Personnalisation',
    description: 'Choisissez les couleurs, les inclusions et l\'inscription que vous souhaitez pour votre création.',
    icon: 'fas fa-palette'
  },
  {
    number: '3',
    title: 'Commande & Paiement',
    description: 'Confirmez votre commande et effectuez le paiement pour lancer la création de votre pièce unique.',
    icon: 'fas fa-credit-card'
  },
  {
    number: '4',
    title: 'Création artisanale',
    description: 'Votre pièce est fabriquée à la main avec soin sous 72h à 2 semaines selon la complexité.',
    icon: 'fas fa-paint-brush'
  },
  {
    number: '5',
    title: 'Livraison',
    description: 'Votre création est emballée avec soin et expédiée directement chez vous (frais à votre charge).',
    icon: 'fas fa-shipping-fast'
  }
];

export const OrderProcess = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <Section id="order-process" ref={ref}>
      <SectionHeader>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Comment Commander
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Obtenir votre création personnalisée en résine est simple et rapide. 
          Suivez ces quelques étapes pour recevoir votre pièce unique.
        </motion.p>
      </SectionHeader>
      
      <ProcessSteps>
        {orderSteps.map((step, index) => (
          <Step 
            key={index}
            number={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
          >
            <StepIcon>
              <i className={step.icon}></i>
            </StepIcon>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Step>
        ))}
      </ProcessSteps>
      
      <CallToAction>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Prêt à commander votre création personnalisée ? 
          Contactez-moi directement ou explorez les collections.
        </motion.p>
        
        <motion.div 
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <WhatsAppButton text="Commander via WhatsApp" />
          <CTAButton text="Voir les créations" href="#creations" />
        </motion.div>
      </CallToAction>
    </Section>
  );
}; 
