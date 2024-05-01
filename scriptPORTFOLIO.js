// Selecting DOM elements
const menuBtn = document.getElementById("menu-btn"); // Menu button
const navLinks = document.getElementById("nav-links"); // Navigation links container
const menuBtnIcon = menuBtn.querySelector("i"); // Icon within the menu button

// Adding event listener to the menu button
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation links container
  navLinks.classList.toggle("open");

  // Check if the navigation links container is open
  const isOpen = navLinks.classList.contains("open");
  
  // Update the menu button icon based on whether the navigation is open or closed
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Adding event listener to close the navigation links when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open"); // Remove the 'open' class
  menuBtnIcon.setAttribute("class", "ri-menu-line"); // Set menu button icon to default
});

// Adding event listener to download CV button
const downloadCv = document.getElementById("download-cv");
downloadCv.addEventListener("click", (e) => {
  // Create a temporary link element to trigger download
  const aElement = document.createElement("a");
  aElement.setAttribute("download", "CV.pdf");
  aElement.setAttribute("href", "/assets/CV.pdf");
  aElement.click(); // Trigger the download link
});

// Configuration for ScrollReveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Applying ScrollReveal animations to elements in the header section
ScrollReveal().reveal(".header__container h4", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container .section__description", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__container .header__btns", { ...scrollRevealOption, delay: 1500 });

// Applying ScrollReveal animations to progress bars in the 'about' section
const progressBar = document.querySelectorAll(".about__progressbar");
Array.from(progressBar).forEach((bar) => {
  const progress = bar.dataset.progress;
  bar.querySelector("span").style.width = progress + "%";
});

// Applying ScrollReveal animations to elements in the 'about' section
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content h4", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .about__progress", { ...scrollRevealOption, delay: 1500 });

// Applying ScrollReveal animations to service cards
ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 500 });

// Adding event listener to the tab list for resume section
const tabList = document.querySelector(".resume__tablist");
tabList.addEventListener("click", (e) => {
  const tabIndex = e.target.dataset.tab;
  if (!tabIndex) return;

  // Toggle 'active' class on resume tabs based on clicked tab
  const tabs = document.querySelectorAll("[data-tab]");
  Array.from(tabs).forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabIndex);
  });

  // Transition between active panels in the resume section
  const activePanel = document.querySelector(".panel__grid.active");
  const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
  if (activePanel.dataset.panel === tabIndex) return;
  activePanel.classList.add("close");
  activePanel.addEventListener("animationend", () => {
    activePanel.classList.remove("active");
    activePanel.classList.remove("close");
    toActivePanel.classList.add("active");
  }, { once: true });
});

// Initializing Swiper for the blog section
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
});

// Applying ScrollReveal animations to blog cards
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });
