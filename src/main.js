
var Boot = {

    // in preload load the loading bar asset only
    preload : function () {

        console.log('boot preload');
        game.load.image('loadingbar', '/img/loadingbar1.png');

    },

    // assuming the load file has been loaded
    // create and start the load State
    create : function () {

        game.state.add('load', Load);
        game.state.start('load');

    }

};

var game = new Phaser.Game(320, 240, Phaser.AUTO, 'gamearea', Boot, false, false);
