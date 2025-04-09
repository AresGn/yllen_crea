import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true
} = {}) => {
  const [entry, setEntry] = useState();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
  
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => {
    setEntry(entry);
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return { ref: elementRef, inView: isIntersecting, entry };
}; 
