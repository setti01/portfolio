import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MaterialsGallery = ({ images }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(activeIndex + 1, images.length - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, clientWidth } = container;
    const index = Math.round(scrollLeft / (clientWidth * 0.75));
    setActiveIndex(Math.min(index, images.length - 1));
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[75%] md:w-[45%] lg:w-[32%] rounded-2xl overflow-hidden border border-border bg-card"
          >
            <img
              src={src}
              alt={`Materials catalogue page ${i + 1}`}
              className="w-full h-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === images.length - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <span className="text-sm text-muted-foreground font-medium">
          {activeIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default MaterialsGallery;