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


//LEARNING OUTCOMES POPUPS
document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.project-button');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-btn');

    projectButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            popups[index].style.display = 'block';
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            button.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight) {
                card.classList.add('reveal');
            }
        });
    });

    window.addEventListener('resize', () => {
        const navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth > 768) {
            navMenu.style.display = 'none';
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});

//LO 1 IMAGE SLIDESHOW
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Initial display
showSlide(slideIndex);

//RE-BRANDING FIGMA POPUP BUTTON
  function openFigma() {
    var figmaUrl = 'https://www.figma.com/file/7tIkzUMv8cd3fhybrX4H2Z/nathalie?type=design&node-id=0-1&mode=design&t=6Wpw6TDyQJXyxE0j-0';
  
    // Open the Figma URL in a new tab
    window.open(figmaUrl, "_blank");
  }

//PORTFOLIO FIGMA POPUP BUTTON
function openFigma2() {
    var figmaUrl = 'https://www.figma.com/design/EM8N5AAlutdnZpN8nnbxMD/portfolio?node-id=561-82&t=4IFrpEG1W5ukebz9-0';
  
    // Open the Figma URL in a new tab
    window.open(figmaUrl, "_blank");
  }
  
//FLOWER ON SCROLL
// Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... ~577px in this case
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});

//LEARNING OUTCOMES CARDS ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    const revealCardsInOrder = () => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < cards.length) {
          cards[index].classList.add('show');
          index++;
        } else {
          clearInterval(interval);
        }
      }, 300); // Delay between each card reveal
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealCardsInOrder();
        } else {
          cards.forEach(card => card.classList.remove('show')); // Remove class to allow re-animation
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the container is visible
    });
  
    observer.observe(document.querySelector('.cards-container'));
  });