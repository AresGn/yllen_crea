import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 992px) {
    max-width: 1200px;
    padding: 2rem;
  }
`;

const ProductDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  
  @media (min-width: 768px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
    margin-bottom: 3rem;
  }
`;

const ProductGallery = styled.div`
  width: 100%;
  
  @media (min-width: 992px) {
    flex: 1;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  
  @media (min-width: 992px) {
    flex: 1;
  }
`;

const ProductLayout = ({ children, gallery, details }) => {
  return (
    <Container>
      {children}
      <ProductDetailsSection>
        <ProductGallery>
          {gallery}
        </ProductGallery>
        <ProductInfo>
          {details}
        </ProductInfo>
      </ProductDetailsSection>
    </Container>
  );
};

export default ProductLayout; 