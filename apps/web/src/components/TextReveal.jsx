import React from 'react';
import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 24, skewY: 2 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const TextReveal = ({ text, className = '', as: Tag = 'span' }) => {
  const words = text.split(' ');
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;