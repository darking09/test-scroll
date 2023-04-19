import { useEffect, useState, RefObject } from 'react';

interface UseScrollPercentageProps {
  ref: RefObject<HTMLElement>;
}

export function useScrollPercentage(props: UseScrollPercentageProps) {
  const { ref } = props;
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    function handleScroll() {
        if (ref.current) {
            const { scrollTop, scrollHeight, clientHeight } = ref.current;
        
            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercentage(parseFloat(scrollPercent.toFixed(2)));
        }
    }

  function handleImageLoad() {
    handleScroll();
  }

  useEffect(() => {
    if (ref.current) {
        ref.current.addEventListener('scroll', handleScroll);
        const images = ref.current.querySelectorAll('img');

        images.forEach((img) => {
            img.addEventListener('load', handleImageLoad);
        });

    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);

  return {
    scrollPercentage,
  }
}