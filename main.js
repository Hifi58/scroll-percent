window.onscroll = function() { scrollIndicator() } ;


function scrollIndicator() {
const pixel = document.documentElement;
const contenu_element_height = document.documentElement.scrollTop;
const interieur_element_height = document.documentElement.clientHeight;
let screen_height = interieur_element_height - contenu_element_height;
let percent = contenu_element_height/interieur_element_height*100;
let scroll = document.getElementById("bar").style.width= percent + "%";

console.log(pixel);
console.log(contenu_element_height);
console.log(interieur_element_height);
console.log(screen_height);
console.log(percent);
console.log(scroll);
}