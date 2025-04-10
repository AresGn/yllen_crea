import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  
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
  z-index: 1000;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .bar {
    display: block;
    width: 30px;
    height: 3px;
    margin: 4px auto;
    background-color: var(--text-dark, #333);
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
  }
  
  &.open {
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
      
      &:hover {
        color: var(--primary-color);
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
    { name: 'Créations', to: '/#creations' },
    { name: 'Comment Commander', to: '/#order-process' },
    { name: 'À Propos', to: '/#about' }
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
                <Link to={item.to}>{item.name}</Link>
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
                  <Link
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
}; 
