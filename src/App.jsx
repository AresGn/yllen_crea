import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import './styles/global.css';

// Structure SEO-friendly des routes
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes principales avec URLs descriptives */}
          <Route path="/catalogue/:categoryId" element={<CategoryPage />} />
          <Route path="/creations/:categoryId/:productId" element={<CategoryPage showProduct={true} />} />
          <Route path="/a-propos" element={<Home showAbout={true} />} />
          <Route path="/contact" element={<Home showContact={true} />} />
          <Route path="/" element={<Home />} />
          
          {/* Redirection des anciennes URLs vers les nouvelles */}
          <Route path="/category/:categoryId" element={<CategoryPage redirectToNew={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
