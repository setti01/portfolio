
import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (once = true, margin = "-100px") => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, margin });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return { ref, controls, variants, isInView };
};
