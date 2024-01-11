"use strict";
function button(state) {
    this.state = state;
}
const ham = new button('none');
const hamMenu = document.querySelector("#ham");
const hamburger = document.querySelector("#ham-button");
hamburger.addEventListener('click', ()=>{
   hamMenu.style.display = ham.state==="none"?"flex":"none";
   ham.state = ham.state==="none"?"flex":"none";
})