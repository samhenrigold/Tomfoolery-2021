canvas = document.querySelector('canvas');
divHUD = document.getElementById('HUD');
customColorField = document.getElementById('customColorField');
customColorButton = document.getElementById('customColorField');
brushWidthSlider = document.getElementById('brushWidth');
ctx = canvas.getContext('2d');
dpi = devicePixelRatio;
canvas.height = innerHeight;
canvas.width = innerWidth;
isPainting = false;
colorPalette = ["#000000", "#FF5733", "#33FF57", "#5733FF"];
currentColor = 0

// Execute a function when the user releases a key on the keyboard
function changeToCustomColor() {
    if (colorPalette.includes(customColorField.value)){
        return
    } else {
        colorPalette.push(customColorField.value);
        currentColor = colorPalette.indexOf((customColorField.value));
        console.log(colorPalette);
    }
}

function startPosition() {
    isPainting = true;
}

function endPosition() {
    isPainting = false;
    ctx.beginPath();
}

function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function paint(e){
    if(!isPainting) return;
    ctx.lineWidth = brushWidthSlider.value;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = colorPalette[currentColor];
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('touchend', endPosition);
canvas.addEventListener('mousemove', paint);
canvas.addEventListener('touchmove', paint);

// Create color buttons
for(i=0; i < (colorPalette.length); i++){
    colorButton = document.createElement("button");
    colorButton.style.backgroundColor = colorPalette[i];
    colorButton.style.width = 44 + "pt";
    colorButton.style.height = 44 + "pt";
    colorButton.setAttribute('id', 'colorButton'+[i]);
    colorButton.setAttribute('onclick', 'currentColor='+[i]);
    divHUD.appendChild(colorButton);
}