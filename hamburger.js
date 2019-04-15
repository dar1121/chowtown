var hamburger = document.getElementsByClassName('hamburger');
for( var i=0; i<hamburger.length; i++){
    hamburger[i].addEventListener("click", function() {
    hamburger.classList.toggle("is-active"); });
}

