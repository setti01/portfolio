import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MaterialsGallery = ({ images }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

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

  // Mouse drag support (desktop, no trackpad/touch)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  return (
    <div className="relative">
      {/* Edge fade cues */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[80%] md:w-[50%] lg:w-[36%] rounded-2xl overflow-hidden border border-border bg-card select-none"
          >
            <img
              src={src}
              alt={`Materials catalogue page ${i + 1}`}
              className="w-full h-auto object-contain pointer-events-none"
              loading="lazy"
              draggable="false"
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