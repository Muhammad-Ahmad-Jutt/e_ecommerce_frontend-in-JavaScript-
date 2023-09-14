import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTopOnNavigate;
