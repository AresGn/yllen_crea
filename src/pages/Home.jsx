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

const Main = styled.main`
  padding-top: 0;
`;

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yllen Créa | Créations en résine personnalisées</title>
        <meta name="description" content="Yllen Créa - Des créations en résine personnalisées, uniques comme vous. Objets pratiques et symboliques pour accompagner les moments de votre vie." />
        <meta name="keywords" content="résine, bijoux, porte-clés, personnalisé, artisanat, accessoires, cadeaux personnalisés, créations" />
        <meta property="og:title" content="Yllen Créa | Créations en résine personnalisées" />
        <meta property="og:description" content="Des créations en résine personnalisées, uniques comme vous. Chez Yllen Créa, chaque pièce raconte une histoire — la vôtre." />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <meta property="og:url" content="https://yllencrea.com" />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Helmet>
      
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
