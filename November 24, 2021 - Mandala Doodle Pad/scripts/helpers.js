let lastTap

function getLocalCoordinates(ev) {
  if (ev.type == "touchmove") {
    let touch = ev.touches[0] || ev.changedTouches[0];
    //   console.log({touch});
    let realTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    console.log({ realTarget });
    ev.offsetX = touch.clientX - realTarget.getBoundingClientRect().x;
    ev.offsetY = touch.clientY - realTarget.getBoundingClientRect().y;
  }
  return [ev.offsetX, ev.offsetY];
}

function getSymmetryPoints(x, y) {
  // The coordinate system has its origin at the center of the canvas,
  // has up as 0 degrees, right as 90 deg, down as 180 deg, and left as 270 deg.
  var ctrX = symmetryX;
  var ctrY = symmetryY;
  var relX = x - ctrX;
  var relY = ctrY - y;
  var dist = Math.hypot(relX, relY);
  var angle = Math.atan2(relX, relY); // Radians
  var result = [];
  for (var i = 0; i < radian; i++) {
    var theta = angle + ((Math.PI * 2) / radian) * i; // Radians
    x = ctrX + Math.sin(theta) * dist;
    y = ctrY - Math.cos(theta) * dist;
    result.push([x, y]);
    if (!swirly) {
      x = ctrX - Math.sin(theta) * dist;
      result.push([x, y]);
    }
  }

  return result;
}

function recordPointerLocation(e, p) {
  let local = getLocalCoordinates(e)
  p.prevX = p.currentX
  p.prevY = p.currentY

  p.currentX = local[0] * 2
  p.currentY = local[1] * 2
}


const resizeCanvas = () => {
  canvas.width = window.innerWidth * devicePixelRatio
  canvas.height = window.innerHeight * devicePixelRatio
  symmetryX = window.innerWidth * devicePixelRatio / 2;
  symmetryY = window.innerHeight * devicePixelRatio / 2;
}

// resize canvas on window resize
window.addEventListener('resize', resizeCanvas)

for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) {
  document.addEventListener(ev, (e) => {
      e.preventDefault()
      document.body.style.zoom = 1
  })
}

document.addEventListener('touchstart', (e) => {
    let difference = e.timeStamp - lastTap
    if (difference < 300 && difference > 0) {
        e.preventDefault()
        e.stopPropagation()
    }
    lastTap = e.timeStamp
}, { passive: false })