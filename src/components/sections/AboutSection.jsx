import React from 'react';
import { motion as Motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <Motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Artisanat en Résine Époxy au Bénin
        </Motion.h2>

        <div className="about-content">
          <Motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LazyLoadImage
              src="/assets/images/products/autres/about-image.jpeg"
              alt="Artisan de bijoux résine au Bénin - Yllen Créa Cotonou"
              effect="blur"
              threshold={300}
            />
          </Motion.div>

          <Motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Notre Atelier Artisanal à Cotonou</h3>
            <p>
              L'aventure Yllen Créa est née au cœur du Bénin, devenant rapidement une référence dans 
              la création de bijoux en résine époxy et d'accessoires personnalisés en Afrique de l'Ouest.
            </p>
            <p>
              Ce qui a commencé comme un simple hobby s'est progressivement transformé en une 
              marque artisanale béninoise dédiée à la création d'objets en résine personnalisés, alliant 
              savoir-faire africain et techniques modernes.
            </p>
            <h3>Notre Savoir-Faire Unique</h3>
            <p>
              À Cotonou, nos créations en résine époxy sont pensées pour être à la fois esthétiques et 
              pratiques : des porte-clés personnalisés, des boucles d'oreilles artisanales et des bracelets 
              colorés typiquement africains.
            </p>
            <p>
              Notre boutique artisanale au Bénin propose des bijoux faits main qui reflètent la richesse 
              culturelle de l'Afrique de l'Ouest, tout en offrant des objets décoratifs contemporains et 
              des cadeaux personnalisés avec livraison dans tout le Bénin.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
