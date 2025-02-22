import React from "react";
import { useEffect } from "react";
import "../styles/Homepage.css";

const Homepage: React.FC = () => {
  useEffect(() => {
    const mouseBubble = document.querySelector<HTMLDivElement>(".interaction")!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // logic for making the gradient move with the mouse 
    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      mouseBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    // handler for getting the mouse's positions 
    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    // Randomize gradient positions, excluding the .interaction element
    const gradients = document.querySelectorAll<HTMLDivElement>(
      ".gradient-container > div:not(.interaction)"
    );

    gradients.forEach((gradient) => {
        // This randomizes their postions 
      const randomTop = Math.random() * 50; 
      const randomLeft = Math.random() * 60; // Keep it between 20% and 80%

      gradient.style.top = `${randomTop}%`;
      gradient.style.left = `${randomLeft}%`;
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <svg>
        <filter id="grainy">
          {/* <feTurbulence type="turbulence" baseFrequency="0.6" /> */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0"
          />
        </filter>
      </svg>
      {/* <header>
        <h1>Jacob Solano</h1>
      </header> */}
      <main>
        <section className="about-section">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Jacob Solano, a fullstack developer currently studying at
              Brown University.
            </p>
          </div>
          <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradient-container">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div className="g6"></div>
              <div className="g7"></div>
              <div className="interaction"></div>
            </div>
          </div>
        </section>
        <section className="project-section">
          <h2>Projects</h2>
          <h3>Nothing here yet...</h3>
        </section>
        <section className="contact-section">
          <h2>Contact</h2>
          <p>
            You can reach me at{" "}
            <a href="mailto:gilbert_solano@brown.edu">
              gilbert_solano@brown.edu
            </a>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Jacob Solano</p>
      </footer>
    </div>
  );
};

export default Homepage;
