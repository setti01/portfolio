import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-24">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-8xl md:text-[160px] font-extrabold text-primary/10 leading-none mb-4">
                404
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Page not found
              </h1>
              <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Button asChild className="rounded-full gap-2 px-8">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Back to home
                </Link>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;