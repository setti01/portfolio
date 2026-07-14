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
import GaleriePage from './pages/GaleriePage.jsx';
import SmartSparesHubPage from './pages/SmartSparesHubPage.jsx';
import HotelFarahPage from './pages/HotelFarahPage.jsx';

const WhatsAppButton = () => (
  
    <a
    href="https://wa.me/212620983108?text=Bonjour%20Bilal%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20discuter%20d%27un%20projet."
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      width: '56px',
      height: '56px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      textDecoration: 'none',
    }}
    aria-label="Contact sur WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" />
      <WhatsAppButton />
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
        <Route path="/portfolio/smart-spares-hub" element={<SmartSparesHubPage />} />
        <Route path="/portfolio/hotel-farah" element={<HotelFarahPage />} />
        <Route path="/galerie" element={<GaleriePage />} />
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