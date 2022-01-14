const canvas = document.getElementById('drawCanvas')
const ctx = canvas.getContext('2d')
const devicePixelRatio = window.devicePixelRatio || 1;

// Canvas parameters
const goodRadian = [2, 4, 8, 16, 32, 64, 128]
let radian = 8;
let inkColor = "#1A202C"
let swirly = false
let drawing = false
let points = {
    prevX: 0,
    prevY: 0,
    currentX: 0,
    currentY: 0
}

let infoHidden = true

window.onload = init()

function init() {
    resizeCanvas()

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorInput.value = inkColor = "#FFFFFF"
        changeColor()
    }
    
    canvas.onpointerdown = (e) => {
        drawing = true
        ctx.lineWidth = 5
        recordPointerLocation(e, points)
     }
    canvas.onpointermove = (e) => { 
        if (drawing) {
            recordPointerLocation(e, points)
            drawLine(points)
        }
     }
    canvas.onpointerup = canvas.onpointerout = () => { drawing = false }
}

function drawLine(p) {
    ctx.strokeStyle = inkColor
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    ctx.beginPath()

    canvas.ontouchmove = (e) => { ctx.lineWidth = (Math.log(e.touches[0].force + 1) * 20) }
    let prevSym = getSymmetryPoints(p.prevX, p.prevY)
    let currentSym = getSymmetryPoints(p.currentX, p.currentY)

    for (i in prevSym) {
        ctx.moveTo(prevSym[i][0], prevSym[i][1])
        ctx.lineTo(currentSym[i][0], currentSym[i][1])
    }

    ctx.stroke();
    ctx.closePath()
}