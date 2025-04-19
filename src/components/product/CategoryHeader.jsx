import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 2.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 0.75rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  
  @media (min-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  @media (min-width: 992px) {
    font-size: 1.05rem;
  }
`;

const CategoryHeader = ({ title, description, seoDescription }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Description>{seoDescription || description}</Description>
    </Header>
  );
};

export default CategoryHeader; 