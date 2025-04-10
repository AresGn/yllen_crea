import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 3rem;
  }
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    color: #333;
    position: relative;
    display: inline-block;
    
    @media (min-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 0.85rem;
    }
    
    @media (min-width: 992px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background-color: var(--primary-color);
      
      @media (min-width: 768px) {
        bottom: -9px;
        width: 50px;
        height: 2.5px;
      }
      
      @media (min-width: 992px) {
        bottom: -10px;
        width: 60px;
        height: 3px;
      }
    }
  }
  
  p {
    max-width: 100%;
    margin: 0 auto;
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
    padding: 0 1rem;
    
    @media (min-width: 768px) {
      max-width: 600px;
      font-size: 1rem;
      line-height: 1.55;
      padding: 0;
    }
    
    @media (min-width: 992px) {
      max-width: 700px;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`;

const CategoryHeader = ({ title, description }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </HeaderContainer>
  );
};

export default CategoryHeader; 