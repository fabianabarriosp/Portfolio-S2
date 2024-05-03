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


  function openFigma() {
    // Specify the Figma URL you want to open
    var figmaUrl = 'https://www.figma.com/file/7tIkzUMv8cd3fhybrX4H2Z/nathalie?type=design&node-id=0-1&mode=design&t=6Wpw6TDyQJXyxE0j-0';
  
    // Open the Figma URL in a new tab
    window.open(figmaUrl, "_blank");
  }
  