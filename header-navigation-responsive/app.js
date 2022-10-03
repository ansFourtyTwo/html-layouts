const menu = document.querySelector('nav.navbar .menu');
menu.addEventListener('click', () => { alert('Show responsive menu')});


const mediaQueryList = window.matchMedia("(max-width: 600px)");
mediaQueryList.addEventListener('change', setNavItemsVisibility)

function setNavItemsVisibility(e) {
    e.matches ? hideNavItems() : showNavItems();
}

function hideNavItems() {
    const navItems = document.querySelectorAll('nav.navbar > .navitem');
    navItems.forEach((item) => {
        item.style.display = 'none';
    });
}
  
function showNavItems() {
    const navItems = document.querySelectorAll('nav.navbar > .navitem');
    navItems.forEach((item) => {
        item.style.display = 'unset';
    });
}