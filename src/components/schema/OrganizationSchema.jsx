import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Composant pour ajouter des données structurées Schema.org pour l'organisation
 * Améliore la présence dans les résultats de recherche
 */
const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yllen Créa",
    "url": "https://yllen-crea.vercel.app/",
    "logo": "https://yllen-crea.vercel.app/assets/images/products/autres/logo.webp",
    "description": "Artisan créateur de bijoux et objets décoratifs en résine époxy. Créations personnalisées, fabriquées à la main en France avec passion et originalité.",
    "email": "yllencrea@example.com",
    "telephone": "+123456789",
    "sameAs": [
      "https://www.instagram.com/yllencrea/",
      "https://www.facebook.com/yllencrea/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "Bénin"
    },
    "knowsLanguage": ["fr"],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Création d'objets personnalisés en résine époxy"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema; 