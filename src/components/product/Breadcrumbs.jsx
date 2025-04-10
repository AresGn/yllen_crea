import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbsContainer = styled.div`
  margin-bottom: 1.25rem;
  font-size: 0.8rem;
  color: #666;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 0.3rem;
    
    @media (min-width: 768px) {
      margin: 0 0.4rem;
    }
    
    @media (min-width: 992px) {
      margin: 0 0.5rem;
    }
  }
`;

const Breadcrumbs = ({ categoryName }) => {
  return (
    <BreadcrumbsContainer>
      <Link to="/">Accueil</Link>
      <span>›</span>
      <Link to="/#creations">Créations</Link>
      <span>›</span>
      {categoryName}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs; 