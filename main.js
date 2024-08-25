import './style.css';
import './responsive.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const menuButton = document.querySelector('#menu-button');
const navbar = document.querySelector('.navbar');

// Function to toggle menu and change icon
const toggleMenu = () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    menuButton.classList.add('fa-times');
    menuButton.classList.remove('fa-bars');
    menuButton.classList.add('rotate');
  } else {
    menuButton.classList.add('fa-bars');
    menuButton.classList.remove('fa-times');
    menuButton.classList.remove('rotate');
  }
};

// Function to close menu
const closeMenu = () => {
  if (navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuButton.classList.add('fa-bars');
    menuButton.classList.remove('fa-times');
    menuButton.classList.remove('rotate');
  }
};

// Event listener for hamburger button click
menuButton.addEventListener('click', toggleMenu);

// Event listener for clicks outside of menu and hamburger button
document.addEventListener('click', event => {
  if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  closeMenu();
}
