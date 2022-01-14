var player = document.getElementById('player');
var interval;
var both = 0;
var game = document.getElementById('game');
var counter = 0;
var currentPlatforms = [];

function moveLeft() {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(left > 0) {
        player.style.left = left - 2 + "px";
    }
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(left < 366) {
        player.style.left = left + 2 + "px";
    }
}

document.addEventListener('keydown', event => {
    if(both == 0){
        both++;

        if(event.key === 'ArrowLeft') {
            interval = setInterval(moveLeft, 1);
        }
    
        if(event.key === 'ArrowRight') {
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener('keyup', event => {
    clearInterval(interval);
    both = 0;
})

setInterval(function() {
    var lastPlatform = document.getElementById('platform' + (counter-1));
    var lastGap = document.getElementById('platformGap' + (counter-1));

    if(counter>0){
        var lastGapTop = parseInt(window.getComputedStyle(lastGap).getPropertyValue('top'));
        var lastPlatformTop = parseInt(window.getComputedStyle(lastPlatform).getPropertyValue('top'));
    }
    if(lastPlatformTop < 520 || counter == 0) {
        var platform = document.createElement('div');
        var platformGap = document.createElement('div');
        platform.setAttribute('class', 'platform');
        platformGap.setAttribute('class', 'platformGap');
        platform.setAttribute('id', 'platform' + counter);
        platformGap.setAttribute('id', 'platformGap' + counter);
        platform.style.top = lastPlatformTop + 100 + "px";
        platformGap.style.top = lastGapTop + 100 + "px";
        var randomGapPosition = Math.floor(Math.random() * 328);
        platformGap.style.left = randomGapPosition + 'px';
        game.appendChild(platform);
        game.appendChild(platformGap);
        currentPlatforms.push(counter);
        counter++
        document.getElementById('score').innerHTML = counter-6;
    }
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    var playerDrop = 0;
    for(var i = 0; i < currentPlatforms.length;i++){
        let current = currentPlatforms[i];
        let iPlatform = document.getElementById("platform"+current);
        let iPlatformGap = document.getElementById("platformGap"+current);
        let iPlatformTop = parseFloat(window.getComputedStyle(iPlatform).getPropertyValue("top"));
        let iPlatformGapLeft = parseFloat(window.getComputedStyle(iPlatformGap).getPropertyValue("left"));
        iPlatform.style.top = iPlatformTop - 0.5 + "px";
        iPlatformGap.style.top = iPlatformTop - 0.5 + "px";
        if(iPlatformTop < -20){
            currentPlatforms.shift();
            iPlatform.remove();
            iPlatformGap.remove();
        }
        if(iPlatformTop-20<playerTop && iPlatformTop>playerTop){
            playerDrop++;
            if(iPlatformGapLeft<=playerLeft && iPlatformGapLeft+20>=playerLeft){
                playerDrop = 0;
            }
        }
    }
    if(playerDrop==0){
        if(playerTop < 480){
            player.style.top = playerTop + 2 + "px";
        }
    }else{
        player.style.top = playerTop - 0.5 + "px";
    }
},1);