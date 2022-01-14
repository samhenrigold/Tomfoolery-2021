let pageScreenshot;
let previousHTML;


function generateScreenshot(){
  html2canvas(document.body, { //options here
    allowTaint: true
  }).then(function(canvas) {
    previousHTML = document.body.innerHTML;
    createCard(canvas.toDataURL());    
  })
}


function createCard(screenshotURL) {
  screenshotImage = document.createElement('div');
  parentCard = document.createElement('div');
  parentCard.setAttribute('id', 'parent-card');
  screenshotImage.setAttribute('id', 'screenshot');
  screenshotImage.style.backgroundColor = `white`;
  screenshotImage.style.backgroundImage = `url(${screenshotURL})`;
  screenshotImage.style.backgroundSize = `contain`;
  screenshotImage.style.backgroundRepeat = `no-repeat`;
  parentCard.classList.add('full');
  screenshotImage.style.width = `100vw`;
  screenshotImage.style.height = `100vh`;
  document.body.innerHTML = '';
  parentCard.appendChild(screenshotImage);
  document.body.appendChild(parentCard);
  setTimeout(() => {
    document.body.style.backgroundImage = 'url(NSTexturedFullScreenBackgroundColor.png)';
    parentCard.classList.remove('full');
    parentCard.classList.add('mini');
    flipCard(parentCard);
  }, 500);
}

function flipCard(parentCard) {
  backside = document.createElement('div');
  backside.style.width = `100vw`;
  backside.style.height = `100vh`;
  backside.setAttribute('id', 'backside-card');
  form = document.createElement('form');
  emailField = document.createElement('input');
  emailField.setAttribute('type', 'email');
  bodyField = document.createElement('input');
  bodyField.setAttribute('type', 'text');
  form.appendChild(emailField);
  form.appendChild(bodyField);
  backside.appendChild(form);
  parentCard.appendChild(backside);
  backside.style.display = 'none';
}