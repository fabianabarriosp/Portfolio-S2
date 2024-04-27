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
    const popupContainers = document.querySelectorAll('.popup-container');

    // Function to open the specified popup container
    function openPopup(index) {
        // Close all popups before opening the desired one
        popupContainers.forEach(popupContainer => {
            popupContainer.style.display = 'none';
        });

        // Open the corresponding popup
        const popupContainer = document.getElementById(`popup-container-${index}`);
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

    // Add event listeners to each project button
    projectButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            openPopup(index + 1); // Index + 1 corresponds to popup-container ID
        });
    });
});



  
  //Figma link for Learning Outcome 1 popup re-branding project
  function openFigma() {
    window.open('https://www.figma.com/file/7tIkzUMv8cd3fhybrX4H2Z/nathalie?type=design&node-id=0-1&mode=design&t=6Wpw6TDyQJXyxE0j-0');
  }
  
  //image slideshow octocooked project Learning Outcome 1 popup


