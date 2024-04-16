//NAV MENU
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-items a');
    const checkbox = document.querySelector('.checkbox');
  
    // Add event listeners to each link
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        // Toggle the checkbox status to close the menu
        checkbox.checked = false;
      });
    });
  });
  
  
  //POPUPS - LEARNING OUTCOMES SECTION
  document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-button');
  
    // Add event listeners to each project button
    projectButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Find the closest card element
        const card = button.closest('.card');
        if (card) {
          // Find the corresponding popup container within the card
          const popupContainer = card.querySelector('.popup-container');
          if (popupContainer) {
            popupContainer.style.display = 'block';
  
            // Add event listener to close button in the popup
            const closeButton = popupContainer.querySelector('.close-btn');
            if (closeButton) {
              closeButton.addEventListener('click', function() {
                popupContainer.style.display = 'none';
              });
            }
          }
        }
      });
    });
  });
  
  //Figma link for Learning Outcome 1 popup re-branding project
  function openFigma() {
    window.open('https://www.figma.com/file/7tIkzUMv8cd3fhybrX4H2Z/nathalie?type=design&node-id=0-1&mode=design&t=6Wpw6TDyQJXyxE0j-0');
  }
  
  //image slideshow octocooked project Learning Outcome 1 popup
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slider img');
  
  function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }
  
  function prevSlide() {
    showSlide(slideIndex - 1);
  }
  
  function nextSlide() {
    showSlide(slideIndex + 1);
  }
  
  showSlide(slideIndex);