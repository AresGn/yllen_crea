import React from 'react';
import { motion as Motion } from 'framer-motion';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Contact
        </Motion.h2>
        
        <div className="contact-content">
          <Motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Besoin d'information ou envie de passer commande?</h3>
            <p>
              N'hésitez pas à me contacter directement via WhatsApp pour discuter 
              de vos projets personnalisés, poser des questions ou passer commande.
            </p>
            <p>
              Je suis disponible pour vous accompagner dans la création d'un objet 
              unique qui correspond parfaitement à vos attentes.
            </p>
            
            <div className="contact-button-container">
              <WhatsAppButton phoneNumber="+22963918285" message="Bonjour, je suis intéressé(e) par vos créations en résine." />
            </div>
          </Motion.div>
          
          <Motion.div 
            className="contact-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <LazyLoadImage
              src="/assets/images/products/autres/contact-image.webp"
              alt="Contactez Yllen Créa"
              effect="blur"
              threshold={300}
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection }; 
