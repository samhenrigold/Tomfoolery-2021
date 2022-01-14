var offset = [0,0];
var box = document.getElementById('box');
var titleBar = document.getElementById('titleBar');
var isMouseDown = false;
var isBoxCollapsed = false;
var boxHeight = 220;

box.addEventListener('mousedown', function(boxMovement) {
    isMouseDown = true;
    offset = [
        box.offsetLeft - boxMovement.clientX,
        box.offsetTop - boxMovement.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isMouseDown = false;
}, true);

document.addEventListener('mousemove', function(boxMovement) {
    event.preventDefault();
    if (isMouseDown) {
        box.style.left = (boxMovement.clientX + offset[0]) + 'px';
        box.style.top = (boxMovement.clientY + offset[1]) + 'px';
    }
}, true);

function boxCollapse() {
    if (boxHeight == 220) {
      box.style.height = 38 + 'px';
      boxHeight = 38;
    } else {
        box.style.height = 220 + 'px';
        boxHeight = 220;
    }
  };