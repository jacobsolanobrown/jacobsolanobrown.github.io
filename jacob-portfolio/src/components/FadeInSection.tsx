import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number; // Optional delay in milliseconds
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // If the element is visible
      if (entries[0].isIntersecting) {
        // Set a timeout based on the delay prop
        setTimeout(() => {
          setVisible(true);
          // Once we've shown the element, we don't need to observe it anymore
          if (domRef.current) observer.unobserve(domRef.current);
        }, delay);
      }
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
