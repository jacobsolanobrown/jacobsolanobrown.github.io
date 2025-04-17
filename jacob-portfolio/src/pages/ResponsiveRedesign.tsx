import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pages/ResponsiveRedesign.css";
import tonysLogo from "../assets/responsive-redesign-assets/TonysLogo.png";
import websiteScreenshot from "../assets/responsive-redesign-assets/tonysWebsiteScreenshot.png";
import figmaStyle from "../assets/responsive-redesign-assets/figmaStyleGuide.png";
import figamMockup from "../assets/responsive-redesign-assets/figmaMockup.png";
import newWebsiteScreenshot from "../assets/responsive-redesign-assets/newTonysWebsiteScreenshot.png";

const ResponsiveRedesign: React.FC = () => {
  return (
    <div className="persona-storyboard-container">
      {/* THE NAV BAR */}
      <div className="acc-nav-bar-persona">
        <div className="acc-nav-links">
          <a href="#01">introduction</a>
          <a href="#02">indentify issues</a>
          <a href="#03">visual redesign</a>
          <a href="#04">conclusion</a>
        </div>
      </div>
      <div className="title-container">
        <div className="title-text">
          <h1>Tony's Big Cheese Pizza: Responsive Redesign Case Study</h1>
          <h3>CSCI1300: Interaction Design</h3>
        </div>
        <img src={tonysLogo} alt="mcdonald's logo in yellow" />
      </div>
      <div id="01" className="intro-container">
        <h2>Introduction</h2>
        <p>
          Tony's Big Cheese Pizza is a popular pizzeria in my hometown (Yakima,
          Washington) that gets significant traffic. Despite their good, cheap
          pizza, their current website lacks usability and accessibility, often
          leading customers (myself included) to prefer ordering by phone. This
          case study details how I identified key usability and accessibility
          issues and redesigned the site for a smoother, more intuitive, and
          responsive experience.
        </p>
      </div>
      <div id="02" className="preparation-container">
        <h2>Identifying Usability Problems</h2>
        <h3>Original Website:</h3>
        <a href="https://tonysbigcheesepizza.com/">Tony's Big Cheese Pizza</a>
        <img
          src={websiteScreenshot}
          alt="Screenshot of the original Tony's Big Cheese Pizza Website"
        />
        <h3>Why This Website?</h3>
        <p>
          Tony's Pizza is a popular local pizzeria with significant web traffic,
          but usability issues on their website frequently drive customers to
          order by phone instead.
        </p>
        <h3>Usability Analysis</h3>
        <p>
          I evaluated the website using criteria from interaction design
          principles: efficiency, learnability, and memorability.
        </p>
        <div className="preparation-container-images">
          <div className="component-list">
            <h4>Efficiency:</h4>
            <ul>
              <li>Navigation is cluttered (too many navbar options)</li>
              <li>Duplicate "Order Now" and "Menu" functions confuse users</li>
            </ul>
            <h4>Learnability :</h4>
            <ul>
              <li>
                Poor visual hierarchy makes key info hard to find (e.g., company
                story at bottom)
              </li>
              <li>Weak branding makes content harder to remember</li>
            </ul>
            <h4>Memorability :</h4>
            <ul>
              <li>Excessive calls-to-action dilute clarity</li>
              <li>Center-aligned dense text reduces readability</li>
            </ul>
          </div>
        </div>
        <h3>Accessibility Analysis (WebAIM WAVE)</h3>
        <p>
          Images lacked helpful alt text, and the black-on-red color combination
          failed contrast checks, making the text difficult for visually
          impaired users. WebAIM's WAVE accurately identified these critical
          accessibility issues, confirming the need for improved color contrast
          and clear alt text.
        </p>
      </div>
      <div id="03" className="persona-container">
        <h2>Visual Redesign</h2>
        <h3>Style Guide</h3>
        <div className="observations-section">
          <p>I built a clear, reusable style guide in Figma, featuring:</p>
          <ul>
            <li>
              Typography
              <ul>
                <li>
                  Headers: "Righteous," bold, clearly scaled by device size.
                </li>
                <li>
                  Body: "Montserrat," regular weight, optimized for readability.
                </li>
              </ul>
            </li>
            <li>
              Colors
              <ul>
                <li>
                  Primary Red: #C60A0A (high contrast, visually inviting).
                </li>
                <li>
                  Background: White, with clear contrast and accessibility
                  checks.
                </li>
              </ul>
            </li>
            <li>
              Reusable Components
              <ul>
                <li>Buttons with clear hover and active states.</li>
              </ul>
            </li>
          </ul>
          <img src={figmaStyle} alt="photo of the figma style guide designs " />
        </div>

        <h4>Responsive Mockups (Mobile, Tablet, Desktop)</h4>

        <div className="observations-section">
          <p>
            Created mockups clearly showing responsiveness and usability
            improvements:
          </p>
          <ul>
            <li>
              Desktop (3840px × 2160px):
              <ul>
                <li>Streamlined horizontal navigation bar using Flexbox.</li>
                <li>
                  Clear hero section highlighting their signature Large
                  Pepporoni Cheese pizza.
                </li>
                <li>Easy-to-scan menu with images organized by CSS Flexbox.</li>
              </ul>
            </li>
            <li>
              Tablet (768px × 1024px):
              <ul>
                <li>
                  Collapsed navbar into a minimal hamburger menu (Shared with
                  Mobile).
                </li>
                <li>Adjusted typography and spacing for easy tablet use.</li>
              </ul>
            </li>
            <li>
              Mobile (375px × 667px):
              <ul>
                <li> Single-column scrolling layout for clarity.</li>
                <li> Large, touch-friendly buttons with ample spacing.</li>
              </ul>
            </li>
          </ul>
          <img src={figamMockup} alt="photo of the figma mockup designs " />
          <h4>Annotations for Development</h4>
          <p>
            Each mockup was thoroughly annotated to make the development of the
            website straightforward (Thank you auto layout in Figma)! Here are
            some examples of the annotations:
          </p>

          <ul>
            <li>
              Layout Techniques: Clearly noted the use of Flexbox, and the
              direct amount of alignment, padding, and margins with auto layouts
              in Figma.
            </li>
            <li>
              Responsiveness: Explained clearly how layout and font sizes adjust
              at each breakpoint.
            </li>
            <li>
              Interactions: Defined default and hover states for buttons. Also
              configured a hamburger icon for when the nav bar was too large.
              (Although in the final deployed redesign, it is soley for visual
              purposes and not functional)
            </li>
          </ul>
        </div>
      </div>
      <div className="storyboard-container">
        <h2>Implemented Redesign</h2>
        <h3>New Website:</h3>
        <a
          href="/TonysBigCheesePizzaHomepage.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redesigned Tony's Big Cheese Pizza
        </a>
        <img
          src={newWebsiteScreenshot}
          alt="Screenshot of the new, redesigned Tony's Big Cheese Pizza Website"
        />
      </div>
      <div id="04" className="conclusion-container">
        <h2>Conclusion</h2>

        <p>
          My redesign specifically addresses usability and accessibility issues
          by simplifying navigation, creating clear calls-to-action, enhancing
          visual hierarchy to make key information instantly accessible,
          improving accessibility through descriptive alt-text and better color
          contrast, and ensuring a responsive, enjoyable ordering experience
          across all devices.
          <br />
          <br />
          This project taught me the power of empathetic design; by thoughtfully
          addressing usability and accessibility, I transformed Tony's Pizza's
          online presence into an inviting, inclusive, and delightful
          experience! Something that is as enjoyable as their pizza itself!
          (seriously)
        </p>
        <NavLink to="/">{"<"} Back to the Home Page</NavLink>
      </div>
      <div>
        <footer>
          <NavLink to="/"> Made with love by &copy; 2025 Jacob Solano</NavLink>
        </footer>
      </div>
    </div>
  );
};

export default ResponsiveRedesign;
