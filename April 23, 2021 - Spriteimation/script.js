const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = 600;
const canvasHeight = canvas.height = 600;
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const dropdown = document.getElementById('animations');
const isPaused = document.getElementById('isPaused');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})


/*
These are always 0, they're not 0 when run in the animate function. Not sure why.
const spriteWidth = playerImage.width/12;
const spriteHeight = playerImage.height/10; 
Ended up hard coding the values:
*/

const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
let frameStagger = 3;
let playerState = 'bite'


const spriteFrames = [];
const spriteStates = [
    {   name: 'idle',
        frames: 7   },
    {   name: 'jump',
        frames: 7   },
    {   name: 'fall',
        frames: 7   },
    {   name: 'run',
        frames: 9   },
    {   name: 'dizzy',
        frames: 11   },
    {   name: 'sit',
        frames: 5   },
    {   name: 'roll',
        frames: 7   },
    {   name: 'bite',
        frames: 7   },
    {   name: 'ko',
        frames: 7   },
    {   name: 'getHit',
        frames: 4   },
];
spriteStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++){
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    };
    spriteFrames[state.name] = frames;
});

isPaused.addEventListener('change', function(e){
    isPaused.checked ? frameStagger = 99999 : frameStagger = 3;
})

// add UI picker options for choosing states
for(let i = 0; i < spriteStates.length; i++) {
    newOption = document.createElement('option');
    newOption.text = spriteStates[i].name;
    newOption.value = spriteStates[i].name;
    document.querySelector('select').appendChild(newOption);
}

function animate(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    let position = Math.floor(gameFrame/frameStagger) % spriteFrames[playerState].loc.length;
    let currentFrame = spriteWidth * position;
    let currentState = spriteFrames[playerState].loc[position].y;
    ctx.drawImage(playerImage, currentFrame, currentState, spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();