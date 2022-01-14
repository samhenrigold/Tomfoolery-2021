const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let particleArray = [];
canvas.width = window.innerWidth;
canvas.height = 300;

const mouse = {
    x: null,
    y: null,
    radius: 150
}

ctx.fillStyle = 'white';

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = (Math.random() * 50);
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {

    }
}

function init() {
    particleArray = [];
    for (let i = 0; i < 20; i++) {
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        particleArray.push(new Particle(x,y));
    }
}

init();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
    }
    requestAnimationFrame(animate);
}

animate();