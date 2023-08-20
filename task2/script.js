document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const overlayMenu = document.querySelector('.overlay-menu');
  
    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
      overlayMenu.classList.toggle('active');
    });
  
    // Get all the navigation links inside the overlay menu
    const navLinks = overlayMenu.querySelectorAll('a');
  
    // Add click event listeners to each navigation link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Remove the 'active' class from the overlay menu
        overlayMenu.classList.remove('active');
      });
    });
  });
  
const textContainer = document.querySelector('.text');
const words = ['Full Stack Developer', 'MERN Developer'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function changeText() {
    if (isTyping) {
        textContainer.textContent = words[currentWordIndex].slice(0, currentCharIndex);
        currentCharIndex++;
        if (currentCharIndex > words[currentWordIndex].length) {
            isTyping = false;
            setTimeout(() => {
                isTyping = true;
                currentCharIndex = 0;
                currentWordIndex = (currentWordIndex + 1) % words.length;
            }, 1000);
        }
    }
    setTimeout(changeText, 100);
}

changeText();
