import React from "react";
import { Link } from "react-router-dom";
import "../styles/AccessibleComponentsPage.css";

const AccessibleComponentsProject: React.FC = () => {
  return (
    <div>
      <main>
        <div className="acc-nav-bar">
          <div className="acc-nav-links">
            <a href="#01">background</a>
            <a href="#02">design</a>
            <a href="#03">redesign</a>
            <a href="#04">summary</a>
          </div>
        </div>
        <section id="00" className="title-section">
          <h1>Accessible Components </h1>
          <p>User Interaction Case Study</p>
        </section>
        <section id="01" className="intro-section">
          <h1>01. Background</h1>
          <p>Evaluating Common User Interface Components for Accessibility</p>
          <div className="intro-text">
            <p>
              Components are the building blocks to an interface, as they ensure
              consistency and usability within apps. However, as much as the
              design of these common components like buttons, checkboxes, and
              dropdowns are crucial to an application, so is the accessibility
              of the component. This is because accessible components allow a
              diverse user pool to interact with them in many different ways
              (inputs) and receive feedback from a variety of channels
              (outputs).
            </p>
            <p>
              <br />
              This case study examines how an{" "}
              <span style={{ textDecoration: "underline" }}>
                accordion
              </span>{" "}
              component functions across three different applications:
              <br />
              <ul>
                <li>The Sims 4 Simology Panel (Game) </li>
                <li>Ticketmaster Account Details (Website) </li>
                <li>Brown University QuestBridge FAQ (Website) </li>
              </ul>
              <br />
            </p>
            <p>
              Each of these applications implements the component differently,
              influencing how users interact with it via mouse and keyboard
              inputs. The goal is to understand:
              <br />
              <ul>
                <li>How each application handles user input? </li>
                <li>
                  What visual and behavioral feedback is provided in response to
                  interactions?
                </li>
                <li>How accessible the component is for different users?</li>
              </ul>
              <br />
              Beyond analysis, this project also explores potential improvements
              to the component by designing a revised version that enhances
              usability, particularly for keyboard users. Through state models
              and annotated designs, we’ll propose intentional trade-offs that
              balance functionality and accessibility.
            </p>
          </div>
        </section>
        <section id="02" className="io-section">
          <h1>02. Understanding Input/Output Design</h1>
          <p>How do we use an accordion?</p>
          <div className="io-text">
            <p>
              Accordions are interactive UI components that organize content
              into expandable and collapsible sections, usually with mutliple
              sections, improving readability and navigation.
              <br />
              <br />
              Their effectiveness can depend on these key factors:{" "}
              <span style={{ fontWeight: "normal" }}>
                learnability, efficiency, and memorability
              </span>
              . A well-designed accordion with great{" "}
              <span style={{ fontWeight: "normal" }}>learnability</span> should
              be easy to understand through clear visual cues, intuitive
              placement, and familiar interaction patterns.{" "}
              <span style={{ fontWeight: "normal" }}>Efficiency</span> is
              enhanced when users can quickly expand or collapse sections with
              minimal effort, such as through keyboard shortcuts or click-based
              interactions.{" "}
              <span style={{ fontWeight: "normal" }}>Memorability</span> is
              influenced by consistent design allowing users to easily recall
              how to interact with the accordion after their first use, reducing
              cognitive load. However, different input and output methods such
              as mouse clicks, keyboard navigation, and screen reader
              compatibility impact accessibility and the overall user
              experience.
            </p>
            {/* <p>
              <br />
              In general, accordions enhance readability by reducing clutter,  helping users focus on relevant information. However, as other components, their usability depends on how well they accommodate different input methods (mouse clicks and
              keyboard navigation) and provide clear output
              cues (visual indicators, animations, and screen reader support).
            </p> */}

            <p>
              <br />
              To explore how different input and output methods affect the user
              experience, I examined three applications that incorporate
              accordions: Sims 4 Simology Panel, Ticketmaster Account Details,
              and Brown University QuestBridge FAQ. Each application has unique
              implementations that impact usability, accessibility, and
              interaction patterns. The following input/output table details the
              various ways users can interact with accordions across these
              applications and how these interactions influence the overall user
              experience.
              <br />
              <br />
            </p>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Sims 4 Simology Panel</th>
                  <th>Ticketmaster Account Details</th>
                  <th>Brown University QuestBridge FAQ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Mouse/Touchpad <br />(input)</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Mouse/Touchpad <br />(output)</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Keyboard <br /> (input)</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Keyboard <br /> (output)</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="03" className="redesign-section">
          <h1>03. Component Redesign</h1>
          <p>It's already good, but can we make it better?</p>
        </section>
        <section id="04" className="summary-section">
          <h1>04. Summary</h1>
        </section>
      </main>
      <footer>
        <p>
          <Link to="/#landing-page">&copy; 2025 jacob solano</Link>
        </p>
      </footer>
    </div>
  );
};

export default AccessibleComponentsProject;
