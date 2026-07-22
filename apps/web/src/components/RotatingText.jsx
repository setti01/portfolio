
import React, { useState, useEffect, useCallback } from 'react';

const RotatingText = ({ phrases, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % phrases.length);
  }, [phrases.length]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  // Pure CSS crossfade — no framer-motion overhead
  return (
    <span className={`inline overflow-hidden ${className}`}>
      <span
        key={currentIndex}
        className="inline animate-textFadeIn"
      >
        {phrases[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingText;
