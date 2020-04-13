var number_objects;
var displayObject = $('.left-pack');

function loadRandom() {
    number_objects = 45 + Math.floor(Math.random() * 1);
}

function decreaseRandom() {
    number_objects -= Math.floor(Math.random() * 2) + 1;
}

function showRandom() {
    displayObject.text(number_objects);
}
loadRandom(); // load the value
showRandom(); // initial display
var interval = setInterval(function () {
decreaseRandom();
showRandom();
if (number_objects <= 3) {
    clearInterval(interval);
}
}, 7500);