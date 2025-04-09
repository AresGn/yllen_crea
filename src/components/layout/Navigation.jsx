import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  
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
    color: #333;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
    position: relative;
    
    &:hover {
      color: #b78846; // Couleur dorée pour représenter la résine
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #b78846;
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
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: #333;
    transition: all 0.3s ease-in-out;
  }
  
  &.open {
    .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    .bar:nth-child(2) {
      opacity: 0;
    }
    
    .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
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
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 1rem 0;
    text-align: center;
    
    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 1.2rem;
      transition: color 0.3s ease;
      
      &:hover {
        color: #b78846;
      }
    }
  }
`;

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Créations', href: '#creations' },
    { name: 'Comment Commander', href: '#order-process' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Calendrier', href: '#calendar' }
  ];
  
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
                <a href={item.href}>{item.name}</a>
              </NavItem>
            </motion.div>
          ))}
        </DesktopMenu>
      </div>
      
      <MobileMenuToggle 
        className={mobileMenuOpen ? 'open' : ''} 
        onClick={toggleMobileMenu}
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
                  <a 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
