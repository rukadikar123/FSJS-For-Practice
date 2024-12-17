const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('h-14'); // 
    navbar.classList.remove('h-20');
    logo.classList.add('h-14', 'w-14'); 
    logo.classList.remove('h-20', 'w-28'); 
  } else {
    navbar.classList.remove('h-14'); 
    navbar.classList.add('h-20');
    logo.classList.remove('h-14', 'w-14'); 
    logo.classList.add('h-20', 'w-28');
  }
});

const images = document.querySelectorAll('.img');

images.forEach((image) => {
  image.onload = function() {
    image.classList.add('opacity-100');
  };
});

const ulElement = document.querySelector('.uls');

let scrollIntervalId = setInterval(() => {
  ulElement.scrollTop += 1;
  if (ulElement.scrollTop >= ulElement.scrollHeight - ulElement.offsetHeight) {
    clearInterval(scrollIntervalId);
  }
}, 20);

ulElement.addEventListener('mouseover', () => {
  clearInterval(scrollIntervalId);
});

ulElement.addEventListener('mouseout', () => {
  scrollIntervalId = setInterval(() => {
    ulElement.scrollTop += 1;
    if (ulElement.scrollTop >= ulElement.scrollHeight - ulElement.offsetHeight) {
      clearInterval(scrollIntervalId);
    }
  }, 20);
});
const hover=document.querySelector(".button")
const div = document.getElementById('div-button');
let p;

hover.addEventListener("mouseenter", function(){
  hover.classList.remove('border-2')
  hover.classList.remove('border-[#12876f]')
  hover.classList.add('bg-[#c1c1c1]')


  const p=document.createElement('p')
  p.innerText='>'
  div.appendChild(p)
})


hover.addEventListener('mouseleave', function(){
  hover.classList.add('border-2')
  hover.classList.add('border-[#12876f]')
  hover.classList.remove('bg-[#c1c1c1]')
  const div=document.getElementById('div-button')
  div.removeChild(div.lastChild);
})

const scaleUpElement = document.querySelector('.scale-up-center');

window.addEventListener('scroll', () => {
  const rect = scaleUpElement.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    scaleUpElement.classList.add('active');
    window.removeEventListener('scroll', this);
  }
});

function toggleMenu() {
  var menuList = document.getElementById("menu-list");
  menuList.classList.toggle("mobile-menu");
  menuList.classList.toggle("hidden");
  navbar.classList.remove('fixed')
}