

const colorInput = document.getElementById('color-input')

function cycleRadian() {
    let current = goodRadian.findIndex(x => x == radian)
    current == goodRadian.length - 1 ? radian = goodRadian[0] : radian = goodRadian[current + 1]
    document.getElementById('radian-btn').innerHTML = radian
}

function changeColor() {
    inkColor = document.getElementById('color-input').value
    colorInput.style.backgroundColor = inkColor;
}

function toggleSwirly() {
    const swirlyBtn = document.getElementById('swirly-btn')
    swirly = !swirly
    swirlyBtn.className == '' ? swirlyBtn.className = 'active' : swirlyBtn.className = ''
}

function toggleBanner() {
    const infoBtn = document.getElementById('info-btn');
    const infoBanner = document.getElementById('info-banner');
    infoBtn.className == '' ? infoBtn.className = 'active' : infoBtn.className = ''
    infoBtn.classList.length == 0 ? infoBanner.classList.add('hidden') : infoBanner.classList.remove('hidden')
    infoHidden = !infoHidden
}