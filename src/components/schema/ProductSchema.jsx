import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Composant pour ajouter des données structurées Schema.org pour les produits
 * Améliore le référencement et l'affichage dans les résultats de recherche
 */
const ProductSchema = ({ product, category, url }) => {
  // Prix formaté pour Schema.org
  const getPriceValue = () => {
    if (!product?.price) return '1000';
    
    const priceStr = product.price.toString();
    // Si le prix est une plage (ex: "1000-2500"), prendre la valeur la plus basse
    if (priceStr.includes('-')) {
      return priceStr.split('-')[0];
    }
    return priceStr;
  };
  
  // Données structurées au format JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product?.name || `${category.name} Personnalisé`,
    "description": product?.description || category.description,
    "image": product?.images && product.images.length > 0 ? product.images[0] : category.image,
    "url": url,
    "sku": product?.id || category.id,
    "brand": {
      "@type": "Brand",
      "name": "Yllen Créa"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "XOF",
      "price": getPriceValue(),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Yllen Créa"
      }
    },
    "material": "Résine époxy",
    "isFamilyFriendly": true,
    "isHandmade": true
  };

  // Ajouter les options de couleur si disponibles
  if (product?.colors && product.colors.length > 0) {
    productSchema.color = product.colors.map(color => color.name).join(", ");
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
};

export default ProductSchema; 