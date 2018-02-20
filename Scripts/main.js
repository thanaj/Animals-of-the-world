let HAMBURGER_SELECTOR = '[data-target="hamburger"]';
let MAIN_SELECTOR = '[data-target="main"]';
let HEADER_SELECTOR = '[data-target="header"]';
let NAV_SELECTOR = '[data-target="nav"]'
let OPEN_SUBMENU_LINKS_SELECTOR = '[data-target="open-sub-menu"]';
let CLOSE_SUBMENU_LINKS_SELECTOR = '[data-target="close-sub-menu"]'
let isPc = window.matchMedia("(min-width: 1024px)");


let hamburgerIcon = document.querySelector(HAMBURGER_SELECTOR);
let main = document.querySelector(MAIN_SELECTOR);
let header = document.querySelector(HEADER_SELECTOR);
let nav = document.querySelector(NAV_SELECTOR);
let openSubmenuLinks = Array.from(document.querySelectorAll(OPEN_SUBMENU_LINKS_SELECTOR));
let closeSubmenuLinks = Array.from(document.querySelectorAll(CLOSE_SUBMENU_LINKS_SELECTOR));



hamburgerIcon.addEventListener('click', function() {
  if (main.classList.contains('moveMainAndHeader')) {
    nav.classList.remove('visibleNav');
    main.classList.remove('moveMainAndHeader');
    header.classList.remove('moveMainAndHeader');
    document.body.classList.remove('noScroll')
  } else {
    nav.classList.add('visibleNav');
    main.classList.add('moveMainAndHeader');
    header.classList.add('moveMainAndHeader');
    document.body.classList.add('noScroll')
  }
})
/* add action to open*/
openSubmenuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    console.log(isPc.matches)
    if(!isPc.matches) {
      let submenu = this.nextSibling.nextSibling;
      submenu.classList.add('open-sub-menu');
    }
  })
})
//add action to close
closeSubmenuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    let submenu = this.parentElement;
    console.log(submenu)
    submenu.classList.remove('open-sub-menu');
  })
})
