import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CTAButton } from '../shared/CTAButton';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { ShoppingBag, Palette, CreditCard, Hammer, Truck } from 'lucide-react';

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

const TimelineContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;

const TimelineLine = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 4px;
  background: linear-gradient(to bottom, #3B82F6, #FBBF24, #A855F7);
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StepWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: ${props => props.isEven ? 'row' : 'row-reverse'};
  }
`;

const StepIconContainer = styled(motion.div)`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.color || '#3B82F6'};
  color: white;
  transition: transform 0.3s ease;
  
  ${props => props.isActive && `
    transform: scale(1.1);
  `}
`;

const StepContent = styled(motion.div)`
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  transition: transform 0.3s ease;
  
  @media (min-width: 768px) {
    width: 41.666%;
    margin-top: 0;
    ${props => props.isActive && `
      transform: translateY(-8px);
    `}
  }
`;

const StepNumberBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.color || '#3B82F6'};
  color: white;
  font-weight: bold;
  margin-right: 0.75rem;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1F2937;
`;

const StepDescription = styled.p`
  color: #4B5563;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 4rem;
  
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

export const OrderProcess = () => {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: 1,
      title: "Choix de l'article",
      description: "Parcourez les créations et choisissez celle qui vous plaît ou demandez une personnalisation spécifique.",
      icon: <ShoppingBag size={24} />,
      color: "#3B82F6" // blue-500
    },
    {
      number: 2,
      title: "Personnalisation",
      description: "Choisissez les couleurs, les inclusions et l'inscription que vous souhaitez pour votre création.",
      icon: <Palette size={24} />,
      color: "#14B8A6" // teal-500
    },
    {
      number: 3,
      title: "Commande & Paiement",
      description: "Confirmez votre commande et effectuez le paiement pour lancer la création de votre pièce unique.",
      icon: <CreditCard size={24} />,
      color: "#F59E0B" // amber-500
    },
    {
      number: 4,
      title: "Création artisanale",
      description: "Votre pièce est fabriquée à la main avec soin sous 72h à 2 semaines selon la complexité.",
      icon: <Hammer size={24} />,
      color: "#F43F5E" // rose-500
    },
    {
      number: 5,
      title: "Livraison",
      description: "Votre création est emballée avec soin et expédiée directement chez vous (frais à votre charge).",
      icon: <Truck size={24} />,
      color: "#A855F7" // purple-500
    }
  ];

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
      
      <TimelineContainer>
        <TimelineLine />
        <StepsContainer>
          {steps.map((step, index) => (
            <StepWrapper 
              key={index}
              isEven={index % 2 === 0}
              onMouseEnter={() => setActiveStep(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <StepIconContainer 
                color={step.color}
                isActive={activeStep === index}
              >
                {step.icon}
              </StepIconContainer>
              
              <StepContent isActive={activeStep === index}>
                <StepHeader>
                  <StepNumberBadge color={step.color}>
                    {step.number}
                  </StepNumberBadge>
                  <StepTitle>{step.title}</StepTitle>
                </StepHeader>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepWrapper>
          ))}
        </StepsContainer>
      </TimelineContainer>
      
      <CallToAction>
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
