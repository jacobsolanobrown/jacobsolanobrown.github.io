import React from "react";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import "../styles/pages/Homepage.css";
import catImage from "../assets/cat_duotone.png";
import githubLogo from "../assets/githublogo.svg";
import linkedinLogo from "../assets/linkedinlogo.svg";
import mountainImage from "../assets/mountain.jpeg";
import ProjectCard from "../components/ProjectCard";
import { FadeInSection } from "../components/FadeInSection";
import accessImage from "../assets/accessible-components-assets/accessible-mockup.png";
import mcDonaldsImage from "../assets/persona-storyboarding-assets/persona-mockup.png";
import tonysImage from "../assets/responsive-redesign-assets/mockup-tonys.png";

const Homepage: React.FC = () => {
  // Add state for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): boolean {
    // Prevent default form submission
    e.preventDefault();

    // Use a type-safe query to select the form element
    const form = document.querySelector<HTMLFormElement>(".my-form");
    if (!form) return false;

    const formData = new FormData(form);
    const url = "https://formsubmit.co/gjsolano04@gmail.com";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response: Response) => {
        if (response.ok) {
          alert("Success! Thank you for your message :-)");
          form.reset(); // Optionally reset the form
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch((error: Error) => {
        console.error(error);
        alert("Oops! Something went wrong.");
      });

    // Return false to prevent the default form submission behavior
    return false;
  }

  return (
    <div className="entire-homepage">
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
                {/* <div className="g2"></div> */}
                <div className="g3"></div>
                {/* <div className="g4"></div> */}
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
                    jacob solano
                    <img
                      className="name-card-star"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2aX4hMcRTHz+7Kn0JCSWg9rL3n3Jnf75bV8uYRKZGWB4p4UKSERzVqw5wzu7Tl3+OuN/ukPPCEQnmgbEj5E0V5ovyPZVdnxpI0ZufO7P3due6nTk1zZ87vfM89v9+c+/sNQEpKSkpKSkpKhHS098w1xAMW+XXRSPr1Pfgf8P3cZEN8z5KM/mk8pNcg6Rjk3X+LL5leg2Qz2mSJH5ZPgDwCyDVDUjFUWFNO/C/zZTUkFUNyuVICDPIlSCIWe9otyfeKFUA8ksnkCZKGQT5dWfwvOwVJIghOzLIo78ebAIPy0fd7Z0NSsCQHq7j7JfP4ACSBLhhssSRPq02AQX6u34VGJ0DZUPXd/2lZ4vXQ6FiSa2ETYIivQuORa+7A4/MN8lKD+W1hxf+eCvlt6kt9Ou8SEY/OsVjIardmPNluiA9Z4pMW+YJBvmWIXxqU4VpF/+PXYbg0Bt/SMXVsjUFj0Zg0No2x7sIDkq1hFjJnhvwk6/OWuoi3xJu1O3MuqmrjkYAKm+qRgCH3YkInYajmBBjiT+6FhDPtKGuvAJS7roWENpS7tVeAL12NugZYTzbWnABFt6oM8Tf3osZnGmvdt9esl19lSd7FXjzyB+PzOpgIsu1iLcoL1yLLGvKrrMfLYCIJlvQuiOPCaJAfBN6xxRAFnsczdO8uNuJJruimC0R+wIFyzrl45POtrbmp4IbRJkN82NXPpEHu0xjANUafDJG/RidchgNfdkHD7/tRaDsIccMSn4gwAcchbhjiGxFOgesQJ7pgsEU7sAgT8HHlytwkiAtZ7RCjK/9SEry8gbhgqbAz6gRY4h0QFwzy2cgrAOUMxAVLcsdBBdyGONDW1jfFonyJPAEoX3TsOMz/5dHf/ZIFfr7TtX4wKHtCzWHit9aXvWrF1+HWgT1xaIAGqhcvFzOZnkVjPkpHaaGeLPvjUAH3qxD+LMDC2nK+9Jp+pooKuA+uMeM4Nyie6SH3+X5ueiV/Kxb2Tis+Yo9jYdXuE1xjK54Z8m2DPR3V+tVOz5Lc/KdvlMfgGouyv0xwb0rP7LUcaeea1Yf6KlNZ+8A9o00WpduSfP5Zlrox0p/NHplXrxHUl/ocO3ovTjuU7ljsBo3R2dY3M5M5Fkzkv7vUt46hm7ITNUZKSkpKSkpKCvwv/AAzUADzEN1SjgAAAABJRU5ErkJggg=="
                      alt="star"
                      style={{ width: 32 }}
                    ></img>
                  </a>
                </h1>
                <p>
                  and I'm a full-stack SWE who builds reliable systems with
                  precision, purpose, and a touch of childlike wonder{" "}
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
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-box">
            <a href="#landing-page">home</a>
            <a href="#about-me">about</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button
            className="hamburger-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`accordion-menu ${mobileMenuOpen ? "open" : ""}`}>
            <a href="#landing-page" onClick={toggleMobileMenu}>
              home
            </a>
            <a href="#about-me" onClick={toggleMobileMenu}>
              about
            </a>
            <a href="#projects" onClick={toggleMobileMenu}>
              projects
            </a>
            <a href="#contact" onClick={toggleMobileMenu}>
              contact
            </a>
          </div>
        </div>

        <FadeInSection>
          <section id="about-me" className="about-me-section">
            <h1>about me</h1>
            <div className="about-pink-blur"></div>
            <div className="about-me-card">
              <div className="about-me-text">
                <p>
                  <br />
                  Hello! My name is Jacob Solano and I am a student at Brown
                  University pursuing a degree in Computer Science. I'm driven
                  by curiosity and creativity, and I aspire to be in a career
                  where I can solve real-world problems through clean,
                  thoughtful engineering.
                  <br />
                  <br />
                  I've worked with Java, Python, C, JavaScript/TypeScript,
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
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="project-section-outer">
            <div className="project-list">
              <h1>projects</h1>
              <FadeInSection delay={100}>
                <ProjectCard
                  title="Buy At Brown - A Marketplace for Brown Students (broken link)"
                  text="A marketplace for Brown students to buy and sell items to each other. A marketplace for Brown students to buy and sell items to each other."
                  image={accessImage}
                  tags={["Full Stack", "React", "Firebase", "Hi"]}
                  pageLink="/buyatbrown"
                  imageOnRight={false}
                />
              </FadeInSection>
              <FadeInSection delay={200}>
                <ProjectCard
                  title="Accessible Accordion Component Case Study"
                  text="Analyzed and redesigned accordion components from real apps to improve accessibility, usability, and user interaction across mouse, keyboard, and screen reader inputs."
                  image={accessImage}
                  tags={["UX", "Accessibility", "Case Study"]}
                  pageLink="/accessiblecomponentsproject"
                  imageOnRight={true}
                />
              </FadeInSection>
              <FadeInSection delay={350}>
                <ProjectCard
                  title="Understanding Users Through Personas and Storyboarding"
                  text="Analyzed and redesigned accordion components from real apps to improve accessibility, usability, and user interaction across mouse, keyboard, and screen reader inputs."
                  image={mcDonaldsImage}
                  tags={["UX", "Accessibility", "Case Study"]}
                  pageLink="/personastoryboardingproject"
                  imageOnRight={false}
                />
              </FadeInSection>
              <FadeInSection delay={400}>
                <ProjectCard
                  title="Tony's Big Cheese Pizza: Responsive Redesign Case Study"
                  text="Analyzed and redesigned accordion components from real apps to improve accessibility, usability, and user interaction across mouse, keyboard, and screen reader inputs."
                  image={tonysImage}
                  tags={["UX", "Accessibility", "Case Study"]}
                  pageLink="/responsiveredesign"
                  imageOnRight={true}
                />
              </FadeInSection>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={300}>
          <section id="contact" className="contact-section">
            <div className="contact-frame">
              <div className="contact-pink-blur"></div>
              <h1>let's connect ^_^</h1>
              <div className="contact-text-card">
                <p>You can connect with me on LinkedIn!</p>
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
                <form className="my-form" onSubmit={handleFormSubmit}>
                  {/* Honeypot - used for spammers only reading the code */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />

                  {/* Disable Captcha */}
                  <input type="hidden" name="_captcha" value="false" />

                  {/* This value is used for the email's subject, so that you can quickly reply to submissions without having to edit the subject line each time. */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Portfolio Form Submission!"
                  ></input>

                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    placeholder="Name"
                    required
                  />

                  <label htmlFor="email">E-mail Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="E-mail"
                    required
                  />

                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="Message"
                    placeholder="Message"
                  ></textarea>

                  <button type="submit">submit</button>
                </form>
              </div>
              <div className="contact-blue-blur"></div>
              <div className="contact-text-card">
                <p>Grab a copy of my resume below!</p>
              </div>

              <iframe
                src="https://docs.google.com/document/d/14h41qVO-wVSSqU4YHiKrvYf7izHn399zosXK9f0O5j8/preview"
                width="100%"
                height="600px"
                style={{ border: 0, borderRadius: "25px", objectFit: "contain" }}
              ></iframe>
            </div>
          </section>
        </FadeInSection>
      </main>
      <footer>
        <p>Designed and developed by yours truly &copy; jacob solano</p>
      </footer>
    </div>
  );
};

export default Homepage;
