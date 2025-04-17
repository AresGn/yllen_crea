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
          À Propos
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
              alt="Fondatrice Yllen Créa"
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
            <h3>Notre Histoire</h3>
            <p>
              L'aventure Yllen Créa est née pendant un stage en imagerie médicale, où la passion 
              pour la création artisanale a rencontré un savoir-faire technique unique.
            </p>
            <p>
              Ce qui a commencé comme un simple hobby s'est progressivement transformé en une 
              marque artisanale dédiée à la création d'objets en résine personnalisés, chacun 
              racontant une histoire unique.
            </p>
            <h3>Notre Vision</h3>
            <p>
              Chez Yllen Créa, chaque création est pensée pour être utile au quotidien : des objets 
              personnalisés, pratiques et symboliques, conçus pour accompagner les petits moments de ta vie.
            </p>
            <p>
              Nous croyons que les objets qui nous entourent devraient avoir une signification 
              personnelle, reflétant notre individualité et préservant nos souvenirs les plus précieux.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
