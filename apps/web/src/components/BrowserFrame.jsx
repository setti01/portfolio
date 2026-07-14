import React from 'react';

const BrowserFrame = ({ url, image, alt, height = "500px" }) => (
  <div className="rounded-2xl overflow-hidden border border-border bg-card">
    <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <div className="w-3 h-3 rounded-full bg-green-400/60" />
      </div>
      <div className="flex-1 text-center text-xs text-muted-foreground font-mono">{url}</div>
    </div>
    <div className="overflow-y-auto" style={{ height }}>
      <img src={image} alt={alt} className="w-full h-auto" />
    </div>
  </div>
);

export default BrowserFrame;