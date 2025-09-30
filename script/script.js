// Selecteer het audio-element en de knop die geluid afspeelt
const homeSound = document.querySelector("#homeSound");
const winBtn = document.querySelector(".menu-button");

// Voeg een klik-event toe aan de knop
winBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Voorkomt dat de knop standaard iets doet (zoals pagina herladen)
  homeSound.currentTime = 0; // Zet de audio terug naar het begin
  homeSound.play(); // Speel de audio af
});

// Selecteer de menu toggle knop, navigatie-links en de sluit-knop
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuClose = document.getElementById("menu-close");

// Open het menu door de links naar 0 te schuiven
menuToggle.addEventListener("click", () => {
  navLinks.style.left = "0";
});

// Sluit het menu door de links buiten beeld te schuiven
menuClose.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});

// Accordion functionaliteit (eerste set)
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const panel = header.nextElementSibling; // Vind het bijbehorende paneel
    const isOpen = header.getAttribute("aria-expanded") === "true";

    // Sluit alle panelen
    document.querySelectorAll(".accordion-panel").forEach((p) => {
      p.setAttribute("hidden", true);
    });
    // Zet alle headers op 'dicht'
    document.querySelectorAll(".accordion-header").forEach((h) => {
      h.setAttribute("aria-expanded", "false");
    });

    // Open het paneel als het nog niet open was
    if (!isOpen) {
      panel.removeAttribute("hidden");
      header.setAttribute("aria-expanded", "true");
    }
  });
});

// Accordion functionaliteit (tweede set, zelfde idee)
document.querySelectorAll(".accordion-header-2").forEach((header) => {
  header.addEventListener("click", () => {
    const panel = header.nextElementSibling;
    const isOpen = header.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion-panel-2").forEach((p) => {
      p.setAttribute("hidden", true);
    });
    document.querySelectorAll(".accordion-header-2").forEach((h) => {
      h.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      panel.removeAttribute("hidden");
      header.setAttribute("aria-expanded", "true");
    }
  });
});

// Dark mode toggle functionaliteit
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#darkModeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      if (document.body.getAttribute("data-theme") === "dark") {
        document.body.removeAttribute("data-theme"); // Schakel dark mode uit
      } else {
        document.body.setAttribute("data-theme", "dark"); // Schakel dark mode in
      }
    });
  }
});

// IntersectionObserver voor secties (voegt klasse toe als ze zichtbaar zijn)
const sections = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Voeg zichtbare klasse toe
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach((section) => sectionObserver.observe(section));

// Draai animatie van fles tijdens scrollen
const flesWrapper = document.querySelector("#ons-verhaal-pagina .fles-wrapper");

window.addEventListener("scroll", () => {
  const rect = flesWrapper.parentElement.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // Bereken rotatie gebaseerd op scrollpositie
        // Had moeite met deze waardes kloppend maken, is uiteindelijk gelukt door hulp online

    flesWrapper.style.transform = `rotateZ(${
      Math.sin((1 - rect.top / window.innerHeight) * Math.PI) * 15
    }deg)`;
  }
});

// Video thumbnail en play knop functionaliteit
const thumbnail = document.querySelector(".video-thumbnail");
const playBtn = document.querySelector(".play-btn");
const iframe = document.querySelector(".video-iframe");
const videoURL = "https://www.youtube.com/embed/2FnnjXcO_qw?autoplay=1";

playBtn.addEventListener("click", () => {
  thumbnail.style.display = "none"; // Verberg thumbnail
  playBtn.style.display = "none"; // Verberg play knop
  iframe.src = videoURL; // Laad YouTube video
  iframe.style.display = "block"; // Toon iframe
});

// Toggle functionaliteit voor andere content
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.parentElement.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block"; // Wissel tussen tonen en verbergen
  });
});
