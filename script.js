// Get the header element
const header = document.querySelector(".header");

// Get the initial offset position of the header
const sticky = header.offsetTop;

// Function to make header sticky on scroll
function makeHeaderSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add scroll event listener
window.addEventListener("scroll", makeHeaderSticky);

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".ri-menu-line");
  const navLinks = document.querySelector(".links__list");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");

    // Toggle between hamburger and close icons
    menuIcon.classList.toggle("ri-menu-line");
    menuIcon.classList.toggle("ri-close-large-line");
  });
});

// Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const gridImages = document.querySelectorAll(".grid-img");

  // Open lightbox when image is clicked
  gridImages.forEach((img) => {
    img.addEventListener("click", function () {
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent scrolling

      // Trigger reflow to ensure transition works
      void lightbox.offsetWidth;

      // Add active class after a small delay to ensure display:flex is applied first
      setTimeout(() => {
        lightbox.classList.add("active");
      }, 10);
    });
  });

  // Close lightbox when close button is clicked
  closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("active");

    // Wait for transition to complete before hiding
    setTimeout(() => {
      if (!lightbox.classList.contains("active")) {
        lightbox.style.display = "none";
        document.body.style.overflow = ""; // Restore scrolling
      }
    }, 300);
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");

      // Wait for transition to complete before hiding
      setTimeout(() => {
        if (!lightbox.classList.contains("active")) {
          lightbox.style.display = "none";
          document.body.style.overflow = ""; // Restore scrolling
        }
      }, 300);
    }
  });

  // Close lightbox with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");

      // Wait for transition to complete before hiding
      setTimeout(() => {
        if (!lightbox.classList.contains("active")) {
          lightbox.style.display = "none";
          document.body.style.overflow = ""; // Restore scrolling
        }
      }, 300);
    }
  });
});
