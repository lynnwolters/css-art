function animateElement() {
var element = document.querySelector('.my-element');
var scale = 0;

var timer = setInterval(function() {
    if (scale >= 1) {
    clearInterval(timer);
    }
    element.style.scale = scale;
    scale += 0.1;
}, 50)}

