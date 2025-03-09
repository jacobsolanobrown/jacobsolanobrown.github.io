import React from "react";
import { Link } from "react-router-dom";
import "../styles/AccessibleComponentsPage.css";

const AccessibleComponentsProject: React.FC = () => {
  return (
    <div>
      <main>
        {/* THE NAV BAR */}
        <div className="acc-nav-bar">
          <div className="acc-nav-links">
            <a href="#01">background</a>
            <a href="#02">design</a>
            <a href="#03">redesign</a>
            <a href="#04">conclusions</a>
          </div>
        </div>
        {/* TITLE SECTION */}
        <section id="00" className="title-section">
          <h1>Accessible Components </h1>
          <p>User Interaction Case Study</p>
        </section>
        {/* INTRO SECTION */}
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
              Each of these applications implement the component differently,
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
              usability/accessibility for certain users. Through state models
              and annotated designs, we’ll propose intentional trade-offs that
              balance functionality and accessibility.
            </p>
          </div>
        </section>
        {/* IO SECTION */}
        <section id="02" className="io-section">
          <div className="io-section-title">
            <h1>02. Understanding Input/Output Design</h1>
            <p>How do we use an accordion?</p>
          </div>
          <div className="io-text">
            <h3>Component Design</h3>
            <br />
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
            <br />
            <h3>Input/Output Examples</h3>
            <p>
              <br />
              To explore how different input and output methods affect the user
              experience, I examined three applications that incorporate
              accordions: The Sims 4 Simology Panel, Ticketmaster's Account
              Details, and Brown University's QuestBridge FAQ Page. The
              following input/output table details the various ways users can
              interact with accordions across these applications.
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
                  <th>
                    Mouse/Touchpad <br />
                    (input)
                  </th>
                  <td>
                    Click on the simology icon (a head) in the user interface to
                    open accordion. Click on a category header to open category
                    details. <br />
                    (e.g., romantic interests)
                  </td>
                  <td>
                    Click on 'My Account' in the nav bar and select a category
                    to enter account details page with accordion. <br /> (e.g.,
                    upcoming events)
                  </td>
                  <td>
                    Click on a question header area to reveal the answer.
                    <br /> (e.g., 'How can I get my application fees waived?')
                  </td>
                </tr>
                <tr>
                  <th>
                    Mouse/Touchpad <br />
                    (output)
                  </th>
                  <td>
                    Expanded section animates open, showing the sim's traits and
                    personal information. Hovering over certain information will
                    open a text popup with more information.
                  </td>
                  <td>
                    Expanded section quickly animates open and reveals other
                    setting categories related to the category accordion header
                    effect. The carrot points up (instead of down), indicating
                    an open section.
                  </td>
                  <td>
                    Expanded section animates openn and the answer appears below
                    the question. The plus sign transforms into a minus sign,
                    indicating an open section.
                  </td>
                </tr>
                <tr>
                  <th>
                    Keyboard <br /> (input)
                  </th>
                  <td>
                    Pressing 'Y' will open the simology panel/accordion. There
                    is no keyboard support for navigating the open panel.
                  </td>
                  <td>
                    Press 'Tab' to navigate sections, 'Enter' to expand, 'Enter'
                    again to collapse.
                  </td>
                  <td>
                    Press 'Tab' to navigate questions, 'Enter' to expand a
                    question and reveal the answer, 'Enter' again to collapse.
                  </td>
                </tr>
                <tr>
                  <th>
                    Keyboard <br /> (output)
                  </th>
                  <td>
                    Aside from the simology panel animating open, since there
                    isn't keyboard support for navigating the open panel, there
                    are no other outputs.
                  </td>
                  <td>
                    Focus stays on the header section, but can tab into the
                    expanded section; the screen reader will read the header
                    section and announce that the header section is expanded.
                  </td>
                  <td>
                    Focus stays on the header question, but can tab into the
                    answer; the screen reader will read the header question and
                    announce that the header question is expanded.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <h3>Effects to the User Experience</h3>
            <p>
              <br />
              After analyzing the input and output designs of our three
              applications, we can now better understand how different
              interactions impact the overall user experience. By examining how
              users engage with these applicaitons, we learn how certain design
              choices either support or hinder the user’s ability to learn how
              to navigate the interface (learnability), perform tasks
              efficiently (efficiency), and retain that knowledge over time
              (memorability).
            </p>
            <br />
            <h4>The Sims 4 Simology Panel </h4>
            <br />
            <div className="sims-io-section">
              <img
                className="sims-img"
                src="./src/assets/accessible-components-assets/sims_ui.png"
                alt="The Sims 4 Simology panel displaying an accordion."
              />
              <div className="sims-io-section-text">
                <p>
                  <span style={{ fontWeight: "normal" }}>Learnability:</span>{" "}
                  The accordion is easy to use, utilizing common conventions
                  like clicking to open and close sections so that it is easy
                  for new users to navigate. The content in the sections are
                  also easy to digest as they are formatted well and usually
                  have a hover state to explain relevant information.
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "normal" }}>Memorability:</span>{" "}
                  After learning the layout of the Simology Panel, players can
                  easily remember how to utilize it because the accordion format
                  does not change. Additionally, the panel has a keyboard
                  shortcut (increasing efficiency) adding another way to
                  remember the panel for users. Nevertheless, the large number
                  of sections may complicate remembering specific parts of
                  navigation after a while.
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "normal" }}>Efficiency:</span> The
                  accordion format allows fast navigation by allowing players to
                  open and close sections when necessary. Yet, since the panel
                  is short and there are many sections, if all the sections are
                  open, it will cause lag for the user since they will need to
                  scroll to find a certain section. The Sims addresses this by
                  being able to resize the panel by the small handlebar on top
                  of the panel.
                </p>
              </div>
            </div>
            <br />
            <h4>Ticketmaster Account Details</h4>
            <br />
            <div className="ticket-io-section">
              <div className="sims-io-section-text">
                <p>
                  <span style={{ fontWeight: "normal" }}>Learnability:</span>{" "}
                  Again, the accordion layout is easy to learn, utilizing common
                  conventions like clicking to open and close sections. In
                  Ticketmaster's case, each content under a section is a button
                  to load a new subpage right to the accordion, making it easy
                  to learn how to navigate multiple pages. However, keep in mind
                  that some buttons load into entirely new pages, without the
                  accordion.
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "normal" }}>Memorability:</span>{" "}
                  The accordion structure repeated throughout helps users easily
                  memorize where to search for account details like 'upcoming
                  events' or 'billing information'. Additionally, the sections
                  remain open until they are manually closed, allowing for users
                  to remember section contents more easily once opened.
                  <br />
                  <span style={{ fontSize: "20px" }}>
                    <br />
                    *Aside: Focusing more on the button components, since some
                    buttons load an entirely new page, which can distrupt the
                    user's navigation flow, it may be difficult for users to
                    remember which buttons load new pages and which don't as to
                    avoid distrupting their flow.{" "}
                  </span>
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "normal" }}>Efficiency:</span> The
                  accordion avoids overwhelming the interface with too many
                  sections and section content, remedying unnecessary scrolling.
                </p>
              </div>
              <img
                src="./src/assets/accessible-components-assets/ticketmaster_ui.png"
                alt="Ticketmaster Account Details displaying an accordion on the future events section."
              />
            </div>
            <br />
            <h4>Brown University Questbridge FAQ</h4>
            <br />
            <div className="brown-io-section">
              <img
                src="./src/assets/accessible-components-assets/brown_faq_ui.png"
                alt="Brown University's Questbridge FAQ displaying an accoridon."
              />
              <div className="sims-io-section-text">
                <p>
                  <span style={{ fontWeight: "normal" }}>Learnability:</span>{" "}
                  Once more, the accordion is easy to learn, with a natural
                  expand/collapse structure that enables users to find the
                  question quickly. However, the FAQ structure may be
                  overwhelming at first (given more questions), so grouping
                  similar questions can simplify learning.
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "normal" }}>Memorability:</span>{" "}
                  The accordion will be easy to remember given its common,
                  simple structure. Here the questions remain open once they are
                  expanded as well. Since FAQs are accessed infrequently, users
                  won't necessarily remember where specific answers are. But the
                  minimalist design is easy enough to come back to find the
                  answer.
                </p>
                <br />
                <p>
                  <span style={{ fontWeight: "normal" }}>Efficiency:</span> The
                  accordion reduces clutter by enabling users to focus on
                  relevant information without unnecessary scrolling. However,
                  constant searching within sections can be time-consuming, and
                  a search option would be a beneficial (especially given more
                  questions).
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* REDESIGN SECTION */}
        <section id="03" className="redesign-section">
          <h1>03. Component Redesign</h1>
          <p>It's already good, but can we make it better?</p>
          <div className="redesign-text">
            <h3>Accordion State Models</h3>
            <br />
            <p>
              Accordions are an already well-optimized UI component, balancing
              space usage and usability. However, looking again at how users
              interact with it (through mouse, keyboard, or assistive
              technology), we can find small but critical improvements that make
              it more usable, efficient, or accessible. The question isn't so
              much whether it works, but whether it might work better.
            </p>
            <br />
            <p>
              We can use various state models to better understand user
              interactions, creating opportunities for refinement. By analyzing
              both mouse and keyboard interactions, we can identify points of
              friction and potential improvements in accessibility and
              efficiency. In this section, we will focus on redesigning
              Ticketmaster’s accordion component to enhance usability while
              considering intentional trade-offs, given Ticketmaster's initial
              state models.
            </p>
            <br />
            <div className="state-model">
              <img
                src="./src/assets/accessible-components-assets/stmdl_mouse_init.png"
                alt="State model for mouse users at the initial state of Ticketmaster's accordion design."
              />
              <img
                src="./src/assets/accessible-components-assets/stmdl_key_init.png"
                alt="State model for keyboard users at the initial state of Ticketmaster's accordion design."
              />
            </div>
            <br />
            <div className="state-model">
              <img
                src="./src/assets/accessible-components-assets/stmdl_mouse_redesign.png"
                alt="State model for mouse users at the redesigned state of Ticketmaster's accordion design."
              />
              <img
                src="./src/assets/accessible-components-assets/stmdl_key_redesign.png"
                alt="State model for keyboard users at the redesigned state of Ticketmaster's accordion design."
              />
            </div>
            <br />
            <p>
              Building from these insights, we can now discuss a redesign that
              purposefully makes compromises to achieve a better user experience
              without compromising core functionality.
            </p>
          </div>
        </section>
        {/* SUMMARY SECTION */}
        <section id="04" className="summary-section">
          <h1>04. Conclusions</h1>
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
