let navItemsVisible;

const menu = document.querySelector('nav.navbar .menu');
menu.addEventListener('click', toggleNavItemsVisibility);


const mediaQueryList = window.matchMedia("(max-width: 600px)");
mediaQueryList.addEventListener('change', setNavItemsVisibility)

function setNavItemsVisibility(e) {
    e.matches ? hideNavItems() : showNavItems();
}

function toggleNavItemsVisibility() {
    navItemsVisible ? hideNavItems() : showNavItems();
}

function hideNavItems() {
    const navItems = document.querySelectorAll('nav.navbar > .navitem');
    navItems.forEach((item) => {
        item.style.display = 'none';
    });
    navItemsVisible = false;
}
  
function showNavItems() {
    const navItems = document.querySelectorAll('nav.navbar > .navitem');
    navItems.forEach((item) => {
        item.style.display = 'unset';
    });
    navItemsVisible = true;
}