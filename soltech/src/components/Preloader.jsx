import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Promenite vreme koliko želite da traje preloader

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center transition-opacity duration-200 bg-black"
      style={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}
    >
      <div className="w-48 h-48 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loader"></div> {/* Dodajemo div za animaciju */}
        </div>
        <img
          src="images/soltechLogo.png"
          alt="Loading"
          className="w-full h-full object-contain rounded-full"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
