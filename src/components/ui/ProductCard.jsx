import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  ${props => props.featured && `
    &::before {
      content: 'Populaire';
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #b78846;
      color: white;
      padding: 3px 10px;
      font-size: 0.7rem;
      font-weight: 600;
      border-radius: 20px;
      z-index: 1;
    }
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.5;
  flex-grow: 1;
`;

const CardLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #b78846;
  font-weight: 600;
  font-size: 0.9rem;
  align-self: flex-start;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #b78846;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const ProductCard = ({ 
  image, 
  title, 
  description, 
  link = '#', 
  featured = false
}) => {
  return (
    <Card featured={featured}>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink href={link}>Voir les produits</CardLink>
      </CardContent>
    </Card>
  );
}; 
