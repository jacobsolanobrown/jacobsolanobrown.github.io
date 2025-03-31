import React from "react";
import "../styles/TonysBigCheesePizzaHomepage.css";
import catImage from "../assets/cat_duotone.png";

const TonysBigCheesePizzaHomepage: React.FC = () => {
  return (
    <div className="tonys-big-cheese-pizza-homepage">
      <div id="home" className="landing-section">
        <div className="tonys-nav-bar">
          <a href="#home">home</a>
          <a href="#menu">menu</a>
          <a href="#about us">about us</a>
          <a href="#contact">contact</a>
        </div>
        <div className="tonys-pic-and-text">
          <img src={catImage} alt="Picture of tonys pizza." />
          <div className="tonys-pizza-text">
            <div className="landing-pizza-title">
              <h3>Welcome to</h3>
              <h1>TONY'S BIG CHEESE PIZZA</h1>
            </div>
            <div className="tonys-call-to-action">
              <button>ORDER NOW</button>
              <p>or call us at: (509) 575-7977</p>
            </div>
            <p>
              Every morning, our crew is very busy making sure to use the
              freshest and finest ingredients for each delicious pizza we
              provide to our valued customers!
              <br />
              <br />
              * Our dough is made fresh fromscratch daily.
              <br />
              * We grind our cheese every day using only 100% real cheese that
              is fresh and never frozen.
              <br />
              * Our tomato sauce is fresh-packed and made with our secret blend
              of spices.
              <br />* Our vegetables are sliced fresh in our store.
            </p>
          </div>
        </div>
      </div>
      <div id="menu" className="menu-section">
        <div className="menu-text">
          <h2>VIEW OUR MENU</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac auctor lectus magnis
            tincidunt lectus. Sit donec vitae risus adipiscing neque blandit.
            Lacinia cursus urna posuere molestie placerat duis. Arcu eu velit
            quam nibh egestas placerat aenean velit euismod. Ullamcorper at
            fames faucibus enim adipiscing vitae interdum.
          </p>
          <button>VIEW MENU</button>
        </div>
        <div className="menu-photos">
          <img src={catImage} alt="something" />
          <img src={catImage} alt="something" />
          <img src={catImage} alt="something" />
          <img src={catImage} alt="something" />
          <img src={catImage} alt="something" />
          <img src={catImage} alt="something" />
        </div>
      </div>
      <div className="location-and-hours">
        <div className="location-content">
          <h2>LOCATION</h2>
          <div className="location-img">
            <img src={catImage} alt="location image" />
            <p>
              2204 W NOB HILL BLVD
              <br />
              STE C
              <br />
              YAKIMA, WA 98902
            </p>
          </div>
        </div>
        <div className="hours-content">
          <h2>STORE HOURS</h2>
          <div className="structured-hours">
            <div className="days">
              <p>MONDAY</p>
              <p>TUESDAY</p>
              <p>WEDNESDAY</p>
              <p>THURSDAY</p>
              <p>FRIDAY</p>
              <p>SATURDAY</p>
              <p>SUNDAY</p>
            </div>
            <div className="hours">
              <p>10:30 AM - 10:00 PM</p>
              <p>10:30 AM - 10:00 PM</p>
              <p>10:30 AM - 10:00 PM</p>
              <p>10:30 AM - 10:00 PM</p>
              <p>10:30 AM - 10:00 PM</p>
              <p>10:30 AM - 10:00 PM</p>
              <p>CLOSED</p>
            </div>
          </div>
        </div>
      </div>
      <div id="about us" className="about-section">
        <h2>OUR STORY</h2>
        <p>
          Our story takes us way back to ‘71, when our friends “Maggie May” and
          “Uncle Albert” were sitting pretty atop the Billboard charts. Those
          were the good ‘ole days... back in Detroit where it all began for us,
          and where streets were lined with the muscle car-laden beauty it had
          birthed itself. Tony was “dragging the line” then, working long hours,
          delivering pizzas in a bright orange Plymouth Duster with a handy FM
          converter in the glove box! Even though we may not have known it at
          the time, that’s when our story began: our love story with pizza!
          <br />
          <br />
          Tony and Karen embarked on this journey with their family by their
          side, as they trekked across the country- from Michigan to the
          gorgeous Pacific Northwest. This was technically a trip home for
          Karen, as she was born a Yakimaniac right at our very own Memorial
          Hospital! And it was here, in Yakima in 1992, when our family planted
          its roots in the valley, and opened the doors of our pizzeria!
          <br />
          <br />
          Our family has grown significantly since then, not only with our own
          children and their families, but with our hardworking and caring crew,
          who is also family to us! We have called Yakima our home for over 25
          years, and it is our mission to be your “go-to” hometown pizzeria! We
          ❤️ you, Yakima!
        </p>
      </div>
      <div id="contact" className="tonys-contact-section">
        <h2>CONTACT OUR STORE</h2>
        <h3>Call Us!</h3>
        <p>(509) 575-7977</p>
        <h3>Or Send Us A Message!</h3>
        {/* <div className="contact-tonys-form"> */}
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Name" />
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder="E-mail" />
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" placeholder="Phone Number" />
            <label htmlFor="message">Message:</label>
            <textarea placeholder="Message"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        {/* </div> */}
        <h4>Interested In Working At Our Establishment?</h4>
        <button>APPLY NOW</button>
      </div>
    </div>
  );
};

export default TonysBigCheesePizzaHomepage;
