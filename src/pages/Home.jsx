import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroBanner } from '../components/sections/HeroBanner';
import { ProductCategories } from '../components/sections/ProductCategories';
import { OrderProcess } from '../components/sections/OrderProcess';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Calendar } from '../components/sections/Calendar';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import OrganizationSchema from '../components/schema/OrganizationSchema';

const Main = styled.main`
  padding-top: 0;
`;

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yllen Créa | Bijoux et Accessoires en Résine Époxy Artisanaux au Bénin</title>
        <meta name="description" content="Yllen Créa - Créations artisanales en résine époxy personnalisées au Bénin. Bijoux, porte-clés et objets décoratifs uniques faits main pour des cadeaux originaux en Afrique de l'Ouest." />
        <meta name="keywords" content="bijoux résine, porte-clés résine, résine époxy bijoux, objets décoratifs résine, accessoires en résine, marque-page résine, bijoux artisanaux, porte-clés personnalisé résine époxy Bénin, bijoux résine époxy fait main Afrique, boucles d'oreilles résine artisanale Cotonou, bracelets en résine colorés africains, objets décoratifs résine époxy Afrique de l'Ouest, dessous de verre résine personnalisés Bénin, cadeaux artisanaux résine livraison Bénin, collier résine nom personnalisé Afrique, artisan résine Bénin, créations artisanales Afrique, bijoux fait main Cotonou, boutique résine époxy Bénin, artisanat résine Afrique de l'Ouest" />
        <meta property="og:title" content="Yllen Créa | Bijoux et Accessoires en Résine Époxy Artisanaux au Bénin" />
        <meta property="og:description" content="Découvrez nos créations artisanales en résine époxy personnalisées. Bijoux, porte-clés et objets décoratifs uniques faits main au Bénin, parfaits pour des cadeaux originaux en Afrique de l'Ouest." />
        <meta property="og:image" content="/assets/images/og-image.webp" />
        <meta property="og:url" content="https://yllencrea.com" />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Helmet>
      
      <OrganizationSchema />
      <Header />
      
      <Main>
        <HeroBanner />
        <ProductCategories />
        <OrderProcess />
        <AboutSection />
        <ContactSection />
        <Calendar />
      </Main>
      
      <Footer />
    </>
  );
}; 
