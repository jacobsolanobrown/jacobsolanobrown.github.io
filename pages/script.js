document.addEventListener("DOMContentLoaded", function () {
  const mouseBubble = document.querySelector(".interaction");
  let curX = 0,
    curY = 0;
  let tgX = 0,
    tgY = 0;

  // Animate the bubble toward the target (mouse) position
  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    mouseBubble.style.transform =
      "translate(" + Math.round(curX) + "px, " + Math.round(curY) + "px)";
    requestAnimationFrame(move);
  }

  // Update target whenever the mouse moves
  function handleMouseMove(evt) {
    tgX = evt.clientX;
    tgY = evt.clientY;
  }

  // start listening for mouse moves, kick off animation
  window.addEventListener("mousemove", handleMouseMove);
  move();

  // Randomize other gradient containers once on load
  const gradients = document.querySelectorAll(
    ".gradient-container > div:not(.interaction)"
  );
  gradients.forEach(function (gradient) {
    const randomTop = Math.random() * 50; // 0–50%
    const randomLeft = Math.random() * 60; // 0–60%
    gradient.style.top = randomTop + "%";
    gradient.style.left = randomLeft + "%";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the form
  const form = document.querySelector(".my-form");
  if (!form) return;

  // Handle form submission
  form.addEventListener("submit", function (event) {
    // Prevent the browser from performing a normal page reload
    event.preventDefault();

    // Gather the form data
    const formData = new FormData(form);
    const url = "https://formsubmit.co/gjsolano04@gmail.com";

    // Send the data
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          alert("Success! Thank you for your message :-)");
          form.reset(); // clear the form
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("Oops! Something went wrong.");
      });
  });
});

// Function to get user back t0 the top of the page
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-toggle');
  const hamburgerIcon = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.accordion-menu');
  
  if (hamburgerButton) {
    hamburgerButton.addEventListener('click', function() {
      hamburgerIcon.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    
    // Close menu when clicking on links
    const mobileLinks = document.querySelectorAll('.accordion-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerIcon.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
  
  // Back to top button functionality
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// Check for reduced motion preference
function checkReducedMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
      window.innerWidth <= 900) {
    document.documentElement.classList.add('reduced-motion');
  } else {
    document.documentElement.classList.remove('reduced-motion');
  }
}

// Run on page load
checkReducedMotion();

// Run on window resize
window.addEventListener('resize', checkReducedMotion);

// Listen for preference changes
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion);