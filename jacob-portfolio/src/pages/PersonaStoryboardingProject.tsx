import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PersonaStoryboardPage.css";
import McdonaldsLogo from "../assets/persona-storyboarding-assets/mcdonald_logo.png";
import LoginScreen from "../assets/persona-storyboarding-assets/mc_login_screen.png";
import MenuScreen from "../assets/persona-storyboarding-assets/mc_menu_screen.png";
import ParentEmpathyMap from "../assets/persona-storyboarding-assets/parent_empathy_map.jpg";
import OlderPersonEmpathyMap from "../assets/persona-storyboarding-assets/older_person_empathy_map.jpg";
import SquareStory1_3 from "..//assets/persona-storyboarding-assets/square-story-1-3.png";
import SquareStory4_6 from "../assets/persona-storyboarding-assets/square-story-4-6.png";
import SquareStory7_9 from "../assets/persona-storyboarding-assets/square-story-7-9.png";


const PersonaStoryboardingProject: React.FC = () => {
  return (
    <div className="persona-storyboard-container">
      {/* THE NAV BAR */}
      <div className="acc-nav-bar-persona">
        <div className="acc-nav-links">
          <a href="#01">introduction</a>
          <a href="#02">exploration</a>
          <a href="#03">personas</a>
          <a href="#04">storyboard</a>
          <a href="#05">conclusion</a>
        </div>
      </div>
      <div className="title-container">
        <div className="title-text">
          <h1>Understanding Users Through Personas and Storyboarding</h1>
          <h3>with the McDonald's Self-Service Kiosk</h3>
          <h5>CSCI1300: Interaction Design</h5>
        </div>
        <img src={McdonaldsLogo} alt="mcdonald's logo in yellow" />
      </div>
      <div id="01" className="intro-container">
        <h2>Introduction</h2>
        <p>
          For this study, I decided to focus on McDonald's self-ordering kiosks.
          My goal was to better understand the self-service kiosk customers
          through real-world observations and interviews, translate these
          insights into meaningful personas, and visually illustrate their
          experiences through storyboarding. Ultimately to better understand the
          user experience of an interface.
        </p>
      </div>
      <div id="02" className="preparation-container">
        <h2>Exploring the Interface</h2>
        <p>
          The McDonald's kiosk, a widely-used, self-service touchscreen
          interface lets customers independently order, customize, and pay for
          their food, emphasizing convenience and efficiency for the user. I
          visited a local McDonald's to explore the kiosk interface and observe
          customers interacting with it.
        </p>
        <div className="preparation-container-images">
          <img
            src={LoginScreen}
            alt="sketch of the McDonald's kiosk login screen"
          />
          <img
            src={MenuScreen}
            alt="sketch of the McDonald's kiosk menu screen"
          />
          <div className="component-list">
            <h4>Landing Screen:</h4>
            <ul>
              <li>Skip Login Button: Directly takes users to the menu.</li>
              <li>Login Button: Directs to McDonald’s account login screen.</li>
            </ul>
            <h4>Menu Screen:</h4>
            <ul>
              <li>Displays food categories (e.g., burgers, fries, drinks).</li>
              <li>
                When a category is selected, menu items appear as tappable
                cards.
              </li>
              <li>
                If an item offers customizations (sauces, meal upgrades), an
                additional screen appears for users to select these options.
              </li>
            </ul>
            <h4>Payment Process:</h4>
            <ul>
              <li>The "View My Order" button begins pipeline for payment.</li>
              <li>Users specify if they're dining in or taking out.</li>
              <li>
                Payment is completed via the card reader at the bottom of the
                kiosk.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="03" className="persona-container">
        <h2>Personas</h2>
        <h3>Observations and Questions</h3>
        <div className="observations-section">
          <p>
            After some time observing customers, I noticed a variety of
            behaviors.
          </p>
          <ul>
            <li>
              Users typically paused briefly before engaging, scanning the
              screen.
            </li>
            <li>
              Customizing meals was straightforward for some but complex for
              others.
            </li>
            <li>
              One user had to switch to cash payments at the register due to
              kiosk limitations
            </li>
            <li>
              Some users completed transactions smoothly and swiftly, while
              others lingered after finishing.
            </li>
          </ul>
          <p>
            Upon these observations, I crafted open-ended interview questions to
            understand on a deeper level all of these user interactions.{" "}
          </p>
          <ol>
            <li>
              Was anything about the interface surprising or different from what
              you expected?
            </li>
            <li>
              Can you describe how you navigated through the kiosk interface?
            </li>
            <li>
              Did you encounter any difficulties while using the kiosk? If so,
              what were they?
            </li>
            <li>
              What made you use the kiosk instead of ordering at the counter?
            </li>
            <li>Would you use the kiosk again? Why or why not?</li>
          </ol>
          <p>
            And with these questions, I conducted interviews to gain more
            insight about user interactions with the interface. I summarized
            their insights below.
          </p>
        </div>

        <h3>Interview Insights</h3>
        <div className="interview-insights">
          <h4>Younger Frequent Customer</h4>
          <p>
            This younger user found the extensive customization options
            surprisingly overwhelming. They navigated quickly but desired
            shortcuts to simplify browsing, like a shortcut to the top or bottom
            of the menu list. Delayed screen responses caused occasional
            frustration, but they still preferred the kiosk due to its speed
            compared to ordering at the counter.
          </p>
        </div>
        <div className="interview-insights">
          <h4>Parent Customer</h4>
          <p>
            This parent user was surprised by the upselling prompts, feeling
            they slowed down ordering. Although the navigation was mostly clear,
            uncertainty about the remaining steps persisted. They chose the
            kiosk for convenience in managing their children and would use it
            again if there were fewer interruptions and clearer process
            indicators, like a progress bar.
          </p>
        </div>
        <div className="interview-insights">
          <h4>Older Customer</h4>
          <p>
            This older user was surprised by the small text and extra navigation
            required for finding accessibility options. Their cautious
            navigation was slowed by some errors navigating the menu and some
            confusion around payment methods. They mentioned that clearer
            payment indicators and larger text would encourage them to try the
            kiosk again.
          </p>
        </div>
        <h3>Persona Development</h3>
        <p className="interview-insights">
          Based on these insights, I created two personas to represent the types
          of users I observed and interviewed. These persona maps were created
          to ultimately empathize with their needs and goals and how that
          relates to their interactions with the kiosk.
        </p>
        <div className="persona-image-container">
          <div className="parent-persona">
            <h4>Rushed Parent: Taylor</h4>
            <p>
              This persona, Taylor, represents a working parent with kids
              currently at daycare. They got off work late, are too tired to
              cook food at home, and already know they will be charged with a
              late pickup fee at the daycare.
            </p>
            <img
              src={ParentEmpathyMap}
              alt="a persona map for a parent user named Taylor"
            />
          </div>
          <div className="older-persona">
            <h4>Old Geezer: Rory</h4>
            <p>
              This persona, Rory, represents older users challenged by the
              interface’s small text and anxiety around payment options. They
              are retired and have a fixed income, so they rarely eat outside of
              home.
            </p>
            <img
              src={OlderPersonEmpathyMap}
              alt="a persona map for an older user named Rory"
            />
          </div>
        </div>
      </div>
      <div id="04" className="storyboard-container">
        <h2>Storyboarding</h2>
        <p>
          Lastly, to better visualize and empathize with the user’s experience,
          I used storyboarding to illustrate a user’s interaction with the
          interface. The storyboard below captures Rory’s journey, one of the
          personas I created, as they navigate through the McDonald’s
          self-service kiosk from the moment they approach until they
          successfully complete their order.
        </p>
        <div className="storyboard-images">
          <img src={SquareStory1_3} alt="storyboard image for frames 1-3" />
          <img src={SquareStory4_6} alt="storyboard image for frames 4-6" />
          <img src={SquareStory7_9} alt="storyboard image for frames 7-9" />
        </div>
      </div>
      <div id="05" className="conclusion-container">
        <h2>Conclusion</h2>
        <p>
          This exercise in personas and storyboarding emphasizes the importance
          of accessibility and intuitive design in common, widespread
          technology. Observing and interviewing real users highlighted key
          usability challenges, especially the need for clearer instructions and
          larger text to support those with visual necessities, as well as
          simpler, streamlined interactions to accommodate busy users.
          Ultimately, this project highlights the critical role user experience
          research plays in creating interfaces that are inclusive,
          user-centered, and intuitive for everyone.
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

export default PersonaStoryboardingProject;
