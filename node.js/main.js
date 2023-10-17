var elButton = document.querySelector(".btn");
var elButtonExit = document.querySelector(".btn__exit");
var elButtonMenu = document.querySelector(".btn__menu");
var elNav = document.querySelector(".nav");

elButton.addEventListener("click", () => {
    elButtonMenu.classList.toggle("btn__menu-exit")
    elButtonExit.classList.toggle("btn__exit-menu")
    elNav.classList.toggle("nav__blok")
} )