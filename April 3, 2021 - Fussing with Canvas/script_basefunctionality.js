const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let particleArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let canvasParticleFieldDensity = 1000;

const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('click', (e) => {
    if (mouse.radius == 150) {
        mouse.radius = 0;
    } else {
        mouse.radius = 150;
    }
});

ctx.fillStyle = 'white';

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = (Math.random() * 5);
        this.density = (Math.random() * 100) + 1;
    }
    draw() {
        // ctx.fillStyle = `hsl(${Math.floor(Math.random()*255).toString(2)},50%,90%)`; <-- this wacky shit made the colors jitter around
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        let dX = mouse.x - this.x;
        let dY = mouse.y - this.y;
        let distance = Math.hypot(dX, dY);
        let forceDirectionX = dX / distance;
        let forceDirectionY = dY / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius){
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if ( this.x !== this.baseX ) {
                let dX = this.x - this.baseX;
                this.x -= dX/70;
            }
            if ( this.y !== this.baseY ) {
                let dY = this.y - this.baseY;
                this.y -= dY/70;
            }
        }
    }
}

function init() {
    particleArray = [];
    for (let i = 0; i < canvasParticleFieldDensity; i++) {
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        particleArray.push(new Particle(x,y));
    }
    console.log(particleArray);
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