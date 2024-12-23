import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="fixed bottom-5 md:bottom-10 right-3 md:right-6 bg-white rounded-full text-lg md:text-2xl text-black py-2 px-4 md:py-2 md:px-4">
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
