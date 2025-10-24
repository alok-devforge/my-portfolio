'use client';

import { useEffect } from 'react';

export default function ScrollManager() {
  useEffect(() => {
    // Restore scroll position immediately on page load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Get saved scroll position
    const savedPosition = sessionStorage.getItem('scrollPosition');
    
    if (savedPosition) {
      // Restore scroll position immediately
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem('scrollPosition');
    }

    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
