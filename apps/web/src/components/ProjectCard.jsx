import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      <Link
        to={project.link}
        className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/10"
      >
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
          </div>
          <p className="text-sm text-muted-foreground">{project.category}</p>
          {project.description && (
            <p className="text-sm text-muted-foreground/70 mt-2 line-clamp-2">{project.description}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;