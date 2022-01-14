let config = {
    width: 800,
    height: 600,
    backgroundColor: 0x00aaff,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('dvd', 'https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg')
}

function create ()
{
    
}

function update ()
{
}