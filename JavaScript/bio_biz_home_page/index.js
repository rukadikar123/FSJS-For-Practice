const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('h-10'); // Decrease navbar height
    navbar.classList.remove('h-20'); // Remove initial height
    logo.classList.add('h-14', 'w-14'); // Decrease logo size
    logo.classList.remove('h-20', 'w-20'); // Remove initial size
  } else {
    navbar.classList.remove('h-10'); // Restore initial navbar height
    navbar.classList.add('h-20');
    logo.classList.remove('h-14', 'w-14'); // Restore initial logo size
    logo.classList.add('h-20', 'w-20');
  }
});

