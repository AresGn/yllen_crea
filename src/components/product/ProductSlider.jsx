import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import local styles
import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const SliderContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 992px) {
    margin-bottom: 3rem;
  }
  
  .swiper {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    
    @media (min-width: 480px) {
      max-width: 350px;
    }
    
    @media (min-width: 768px) {
      max-width: 400px;
    }
    
    @media (min-width: 992px) {
      max-width: 500px;
    }
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 3/4;
    
    @media (min-width: 768px) {
      border-radius: 10px;
    }
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .swiper-pagination {
    margin-top: 10px;
    
    @media (min-width: 768px) {
      margin-top: 15px;
    }
  }
  
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    opacity: 0.5;
    background: #ddd;
    
    @media (min-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--primary-color);
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background: rgba(255, 255, 255, 0.9);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    opacity: 0.9;
    transition: all 0.3s ease;
    
    @media (min-width: 768px) {
      width: 36px;
      height: 36px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    }
    
    @media (min-width: 992px) {
      width: 40px;
      height: 40px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px;
    color: #333;
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
    
    @media (min-width: 992px) {
      font-size: 18px;
    }
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const NoImageContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const ProductSlider = ({ images, altPrefix }) => {
  if (!images || images.length === 0) {
    return (
      <NoImageContainer>
        <p>Aucune image disponible pour ce produit.</p>
      </NoImageContainer>
    );
  }
  
  return (
    <SliderContainer>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage
              src={image}
              alt={`${altPrefix} en résine époxy artisanal - Vue ${index + 1} - Création unique personnalisable par Yllen Créa`}
              effect="blur"
              threshold={300}
              onError={(e) => {
                console.error("Erreur de chargement d'image:", image);
                e.target.src = '/assets/images/placeholder.jpg';
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ProductSlider; 