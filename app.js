const openNav = document.querySelector('.hamburger')
const closeNav = document.querySelector('.close')
const navbar = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link')
const dropdownLink = document.querySelector('.dropdown-link')
const dropdownLinks = document.querySelector('.dropdown-links')
const navHeight = document.querySelector('nav').offsetHeight

// scroll padding
document.documentElement.style.setProperty(
  '--scroll-padding',
  navHeight + 25 + 'px'
)

// navbar responsive

const showNav = () => navbar.classList.add('show-nav')
const hideNav = () => navbar.classList.remove('show-nav')

openNav.addEventListener('click', showNav)
closeNav.addEventListener('click', hideNav)
navLinks.forEach(link => link.addEventListener('click', hideNav))

// show dropdown

dropdownLink.addEventListener('click', () => {
  dropdownLinks.classList.toggle('show-dropdown')
})
