
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation.js';

const AnimatedProgressBar = ({ label, percentage }) => {
  const { ref, controls, isInView } = useScrollAnimation(true, "-50px");

  return (
    <div ref={ref} className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
