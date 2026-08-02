import { useEffect, useRef, useState } from "react";

/**
 * Tracks when an element scrolls into view.
 * @param threshold 0 to 1, how much of the element must be visible
 * @param rootMargin CSS margin around the root
 */
export function useInView(threshold = 0.2, rootMargin = "0px 0px -50px 0px") {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return; // Only trigger once

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return { ref, inView };
}
