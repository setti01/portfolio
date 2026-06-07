
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AllinfesPage from './pages/AllinfesPage.jsx';
import LamaraPage from './pages/LamaraPage.jsx';
import OmegaSushiPage from './pages/OmegaSushiPage.jsx';
import WeProdPage from './pages/WeProdPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio/allinfes" element={<AllinfesPage />} />
        <Route path="/portfolio/lamara" element={<LamaraPage />} />
        <Route path="/portfolio/omega-sushi" element={<OmegaSushiPage />} />
        <Route path="/portfolio/weprod" element={<WeProdPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page non trouvée</p>
        <Button asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default App;
 
