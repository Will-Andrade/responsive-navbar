const togglebtn = document.querySelector('[data-js="toggle-btn"]');
const navbarLinks = document.querySelector('[data-js="navbar-links"]');

togglebtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})
