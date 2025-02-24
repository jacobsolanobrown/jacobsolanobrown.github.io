import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import catImage from "../assets/cat_duotone.png";
import githubLogo from "../assets/githublogo.svg";
import linkedinLogo from "../assets/linkedinlogo.svg";
import linkicon from "../assets/linkicon.svg";

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
      mouseBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
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
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </header> */}
      <main>
        <section className="landing-section">
          <div className="landing-container">
            <div className="landing-text">
              <p>hi i am</p>
              <h1>
                <a href="https://www.linkedin.com/in/jacob-solano-92587226b/">
                  jacob solano
                </a>
                ,
              </h1>
              <p>
                a fullstack developer currently at brown
                {/* <br />
                and i like cats, among other things */}
              </p>
            </div>
            <img
              src={catImage}
              alt="A photo of my cat with a duotone black and white filter overlayed"
              style={{ width: "300px", height: "auto" }}
            />
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
        <div className="nav-box">
          <div className="nav-links">
            <a href="#about-me">about</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </div>
        </div>
        <section id="about-me" className="about-me-section">
          <div className="about-me-photo">
            <img
              src={catImage}
              alt="A photo of my cat with a duotone black and white filter overlayed"
              style={{ width: "350px", height: "auto" }}
            />
          </div>
          <div className="about-me-text">
            <h1>about me</h1>
            <p>
              <br />
              My name is Jacob Solano and I am a student at Brown University
              studying Computer Science!
              <br />
              <br />
              In the past, I have worked with Java, Python, C,
              Javascript/Typescript, Node.js, and more.
              <br />
              <br />
              Some of my other interests lie in making music, playing animal
              crossing, coloring, and thinking about my cat.
            </p>
          </div>
        </section>
        <section id="projects" className="project-section">
          <div className="projects-header">
            <h1>my projects</h1>
          </div>
          <div className="projects-content">
              <Link to="/accessiblecomponentsproject">
                <a>accessible components</a>
                <img src={linkicon} alt="Blue icon for a link icon" />
              </Link>
          </div>
          {/* <h3>Applications</h3> */}
          {/* <h3>Design</h3> */}
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-text">
            <h1>contact me</h1>
            <p>
              <br />
              Lets connect on LinkedIn or through email at{" "}
              <a href="mailto:gilbert_solano@brown.edu">
                gilbert_solano@brown.edu
              </a>
              !
            </p>
          </div>
          <div className="contact-photo-links">
            <a href="https://www.linkedin.com/in/jacob-solano-92587226b/">
              <img
                src={linkedinLogo}
                alt="LinkedIn's Logo"
                className="white-social-logo"
                style={{ width: "100px", height: "auto" }}
              />
            </a>

            <a href="https://github.com/jacobsolanobrown">
              <img
                src={githubLogo}
                alt="Github's Logo"
                className="white-social-logo"
                style={{ width: "100px", height: "auto" }}
              />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 jacob solano</p>
      </footer>
    </div>
  );
};

export default Homepage;
