// hooks/useImageLoader.js
import { useState, useEffect } from 'react';

const useImageLoader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      
      if (images.length === 0) {
        setImagesLoaded(true);
        setLoading(false);
        return;
      }

      let loadedCount = 0;
      const totalImages = images.length;

      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
          setLoading(false);
        }
      };

      const handleImageError = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
          setLoading(false);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageError);
        }
      });

      // Cleanup function
      return () => {
        images.forEach((img) => {
          img.removeEventListener('load', handleImageLoad);
          img.removeEventListener('error', handleImageError);
        });
      };
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(checkImagesLoaded, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { loading, imagesLoaded };
};

export default useImageLoader;