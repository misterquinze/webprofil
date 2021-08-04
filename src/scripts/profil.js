const navBarToggle = document.querySelector("#navbar-toggle-menu");
const drawerElement = document.querySelector("#topnav");
const mainElement = document.querySelector("main");
 
navBarToggle.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});
 
mainElement.addEventListener("click", event => {
 drawerElement.classList.remove("open");
 event.stopPropagation();
})