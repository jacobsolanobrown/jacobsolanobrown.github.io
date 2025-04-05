import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Homepage.css";
import catImage from "../assets/cat_duotone.png";
import githubLogo from "../assets/githublogo.svg";
import linkedinLogo from "../assets/linkedinlogo.svg";
import linkicon from "../assets/linkicon.svg";
import mountainImage from "../assets/mountain.jpeg";
import pinkblur from "../assets/pink_blur.svg";
import navyBlur from "../assets/navy_blur.svg";
import ProjectCard from "../components/ProjectCard";
import accessImage from "../assets/accessible-components-assets/ticketmaster_ui.png";
import mcDonaldsImage from "../assets/persona-storyboarding-assets/mcdonald_logo.png";
import tonysImage from "../assets/responsive-redesign-assets/TonysLogo.png";

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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="radialBlur">
            {/* Generate a turbulence pattern */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="2"
              result="noise"
            />
            {/* Apply a Gaussian blur to the noise */}
            <feGaussianBlur
              in="noise"
              stdDeviation="150"
              result="blurredNoise"
            />
            {/* Displace the original graphic using the blurred noise */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="250"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <main>
        <section id="landing-page" className="landing-section-outer">
          <div className="landing-section-inner">
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
            <div className="landing-container">
              <div className="landing-text">
                <p>hi, i am</p>
                <h1>
                  <a href="https://www.linkedin.com/in/jacob-solano-92587226b/">
                    jacob
                    <br />
                    solano
                  </a>
                  ,
                </h1>
                <p>
                  and I’m a full-stack SWE who builds reliable systems with
                  precision, purpose, and a touch of childlike wonder.{" "}
                </p>
              </div>
              <img
                src={catImage}
                alt="A photo of my cat with a duotone black and white filter overlayed"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          </div>
        </section>
        <div className="nav-box">
          <a href="#about-me">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
        <section id="about-me" className="about-me-section">
          <h1>about me</h1>
          <div className="about-pink-blur"></div>
          <div className="about-me-card">
            <div className="about-me-text">
              <p>
                <br />
                Hello! My name is Jacob Solano and I am a student at Brown
                University pursuing a degree in Computer Science. I’m driven by
                curiosity and creativity, and I aspire to be in a career where I
                can solve real-world problems through clean, thoughtful
                engineering.
                <br />
                <br />
                I’ve worked with Java, Python, C, JavaScript/TypeScript,
                Node.js, and more, gaining experience across the stack in both
                academic and personal projects.
                <br />
                <br />
                Outside of code, I make music, play my Nintendo 3DS, color to
                unwind, and spend too much time thinking about my cat.
              </p>
            </div>
            <img
              src={mountainImage}
              alt="A photo of Mount Rainer covered in clouds."
            />
          </div>
          <div className="about-blue-blur"></div>
        </section>
        <section id="projects" className="project-section-outer">
          <div className="project-section-inner">
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
                <div className="g7"></div>\{" "}
              </div>
            </div>
            <div className="project-list">
              <h1>projects</h1>
              <ProjectCard
                title="Accessible Accordion Component Case Study"
                text="Analyzed and redesigned accordion components from real apps to improve accessibility, usability, and user interaction across mouse, keyboard, and screen reader inputs."
                image={accessImage}
                tags={["UX", "Accessibility", "Case Study"]}
              />
              <ProjectCard
                title="Understanding Users Through Personas and Storyboarding"
                text="Analyzed and redesigned accordion components from real apps to improve accessibility, usability, and user interaction across mouse, keyboard, and screen reader inputs."
                image={mcDonaldsImage}
                tags={["UX", "Accessibility", "Case Study"]}
              />
              <ProjectCard
                title="Tony’s Big Cheese Pizza: Responsive Redesign Case Study"
                text="Analyzed and redesigned accordion components from real apps to improve accessibility, usability, and user interaction across mouse, keyboard, and screen reader inputs."
                image={tonysImage}
                tags={["UX", "Accessibility", "Case Study"]}
              />
              {/* <div className="projects-content">
              <NavLink to="/accessiblecomponentsproject">
                <a>accessible components</a>
                <img src={linkicon} alt="Blue icon for a link icon" />
              </NavLink>
            </div>
            <div className="projects-content">
              <NavLink to="/personastoryboardingproject">
                <a>persona storyboarding</a>
                <img src={linkicon} alt="Blue icon for a link icon" />
              </NavLink>
            </div> */}
              {/* <div className="projects-content">
              <NavLink to="/responsiveredesign">
                <a>responsive redesign</a>
                <img src={linkicon} alt="Blue icon for a link icon" />
              </NavLink>
            </div> */}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-frame">
            <div className="contact-pink-blur"></div>
            <h1>let's connect ^_^</h1>
            <div className="contact-text-card">
              <p>
                Also connect with me on LinkedIn or through email at{" "}
                <a href="mailto:gilbert_solano@brown.edu">
                  gilbert_solano@brown.edu
                </a>
                !
              </p>
              <div className="contact-photo-links">
                <a href="https://www.linkedin.com/in/jacob-solano-92587226b/">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn's Logo"
                    className="white-social-logo"
                  />
                </a>
                <a href="https://github.com/jacobsolanobrown">
                  <img
                    src={githubLogo}
                    alt="Github's Logo"
                    className="white-social-logo"
                  />
                </a>
              </div>
              <p>Or send me a message with the form below.</p>
            </div>
            <hr className="contact-form-line" />
            <div className="contact-me-form">
              <form>
                <label htmlFor="name">Full Name*</label>
                <input type="text" id="name" name="name" placeholder="Name" />
                <label htmlFor="email">E-mail Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                ></textarea>
                <button type="submit">submit</button>
              </form>
            </div>
            <div className="contact-blue-blur"></div>
          </div>
        </section>
      </main>
      <footer>
        <p>Designed and developed by yours truly &copy; jacob solano</p>
      </footer>
    </div>
  );
};

export default Homepage;
