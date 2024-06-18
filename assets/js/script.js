// NAVBAR/MENU ICON JS 
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// NAVLINK ACTIVE JS 
function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.navbar a');

  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

// Event listener for clicking on the navigation links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(event) {
    document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  });
});

// Event listener for scrolling
window.addEventListener('scroll', updateActiveLink);

// STICKY NAVBAR JS 
const header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

