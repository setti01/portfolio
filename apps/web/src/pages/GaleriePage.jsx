// Galerie page v2
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FilterButton from '@/components/FilterButton.jsx';

const GaleriePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Nature', 'Mer', 'Lieux', 'Ciel', 'Animaux'];

  const photos = [
    { category: 'Nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', title: 'Nature' },
    { category: 'Mer', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0', title: 'Mer' },
    { category: 'Lieux', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4', title: 'Lieux' },
    { category: 'Ciel', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', title: 'Ciel' },
    { category: 'Animaux', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba', title: 'Animaux' },
    { category: 'Nature', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'Forêt' },
    { category: 'Mer', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', title: 'Plage' },
    { category: 'Lieux', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64', title: 'Ville' },
    { category: 'Ciel', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda', title: 'Coucher de soleil' },
  ];

  const filtered = selectedCategory === 'Tous'
    ? photos
    : photos.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galerie - Bilal ESSATTE | Photographie</title>
        <meta name="description" content="Galerie photo personnelle de Bilal ESSATTE — Nature, Mer, Lieux, Ciel et Animaux." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 pt-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Ma <span className="text-primary">Galerie</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Photographie personnelle — un regard sur le monde à travers mon objectif.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-16"
            >
              {categories.map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat}
                  isActive={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
            </motion.div>

            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((photo, index) => (
                  <motion.div
                    key={photo.title + index}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="break-inside-avoid rounded-2xl overflow-hidden border border-border"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GaleriePage;