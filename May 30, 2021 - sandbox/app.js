const ctab = document.querySelector('.clienttable')
const curtain = document.querySelector('.curtain')
const header = curtain.querySelector('span')
let matrixTargetSize = (window.innerWidth/176)*12
const ctabStart = ctab.scrollHeight


const controller = new ScrollMagic.Controller();
let tl = new TimelineLite();

TweenMax.set(header, {transformOrigin: `48% 40%`, x:`2%`})

tl.to(header, 1, {
    transform:`matrix(${matrixTargetSize}, 0, 0, ${matrixTargetSize}, 0, 0)`,
    transformOrigin: `48% 40%`,
    x:`0%`,
    ease:Cubic.easeInOut
})

const scene = new ScrollMagic.Scene({
    duration: ctabStart*0.4,
    triggerElement: ctab,
    triggerHook: 0.5
}).setTween(tl)
    // .addIndicators()
    .addTo(controller)
    .on('progress', () => {
        if(scene.progress() <= 0.5) {
            curtain.setAttribute('aria-hidden', false)
            curtain.style.visibility = 'visible'
            ctab.setAttribute('aria-hidden', true)
        } else if (scene.progress() > 0.5) {
            curtain.setAttribute('aria-hidden', true)
            curtain.style.visibility = 'hidden'
            ctab.setAttribute('aria-hidden', false)
        }
    })

window.addEventListener('scroll', (event) => {
    document.querySelector('#helper > svg > path').classList.add('hidden')
  });