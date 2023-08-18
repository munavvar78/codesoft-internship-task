
document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    const content = document.querySelector('.content');
    
    // Clone the content to make it circular
    content.innerHTML += content.innerHTML;

    // Calculate the total width for circular scrolling
    const totalWidth = content.clientWidth;

    // Set the width of the content to match the circular length
    content.style.width = totalWidth + 'px';

    // Create the circular scrolling effect
    function loop() {
        const scrollPos = (Date.now() / 1000) * -100; // Adjust the scrolling speed here
        content.style.transform = `translateX(${scrollPos}px)`;
        requestAnimationFrame(loop);
    }

    loop();
});

const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuIcon.classList.toggle("active");
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
// Pause marquee on hover
$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        speed: 1000, // Adjust the speed as needed
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});
