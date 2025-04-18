import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
  }
`;

const DesktopMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  a {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
    position: relative;
    cursor: pointer;
    
    &:hover {
      color: var(--primary-color);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.6rem;
  z-index: 1500;
  margin-right: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .bar {
    display: block;
    width: 30px;
    height: 3px;
    margin: 4px auto;
    background-color: var(--primary-color, #333);
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
  }
  
  &.open {
    background-color: rgba(255, 255, 255, 0.95);
    
    .bar:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    
    .bar:nth-child(2) {
      opacity: 0;
    }
    
    .bar:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 999;
  border-radius: 0 0 10px 10px;
  max-width: 96%;
  margin: 0 auto;
  left: 2%;
  right: 2%;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 1.2rem 0;
    text-align: center;
    
    a {
      text-decoration: none;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 1.2rem;
      transition: color 0.3s ease;
      display: block;
      padding: 0.5rem 0;
      cursor: pointer;
      
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navItems = [
    { name: 'Créations', to: 'creations' },
    { name: 'Comment Commander', to: 'order-process' },
    { name: 'À Propos', to: 'about' }
  ];
  
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    
    // Si nous ne sommes pas sur la page d'accueil, naviguer d'abord vers la page d'accueil
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la page d'accueil soit chargée pour défiler vers la section
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 300);
    } else {
      // Si nous sommes déjà sur la page d'accueil, défiler directement
      scrollToElement(sectionId);
    }
  };
  
  // Fonction auxiliaire pour défiler vers l'élément avec l'ID
  const scrollToElement = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Ajustez cette valeur en fonction de la hauteur de votre header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section avec ID "${sectionId}" non trouvée`);
    }
  };
  
  // Gérer les liens d'ancrage lors du chargement initial de la page
  useEffect(() => {
    if (location.hash) {
      // Si l'URL contient un hash, défiler vers cette section après le chargement
      const sectionId = location.hash.substring(1); // Enlever le # du hash
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 300);
    }
  }, [location]);
  
  return (
    <NavContainer>
      <div className="desktop-menu">
        <DesktopMenu>
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavItem>
                <a onClick={() => scrollToSection(item.to)}>
                  {item.name}
                </a>
              </NavItem>
            </motion.div>
          ))}
        </DesktopMenu>
      </div>
      
      <MobileMenuToggle 
        className={mobileMenuOpen ? 'open' : ''} 
        onClick={toggleMobileMenu}
        aria-label="Menu de navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </MobileMenuToggle>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a onClick={() => scrollToSection(item.to)}>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
}; 
