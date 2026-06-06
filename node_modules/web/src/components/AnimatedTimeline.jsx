
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTimeline = ({ items }) => {
  return (
    <div className="relative border-l border-border ml-4 md:ml-6 space-y-12 py-4">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
            <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
              {item.date || item.step}
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTimeline;
