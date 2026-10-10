import React, { useEffect, useState } from 'react';

export const SpotlightTracker: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointerDevice(hasPointer);

    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 overflow-hidden"
      style={{
        background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.035), rgba(255, 255, 255, 0.02) 45%, transparent 80%)`,
      }}
    />
  );
};
