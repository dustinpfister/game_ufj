
var Load = {

    preload : function () {
        var loadSprite = game.add.sprite(0, 0, 'loadingbar');
        loadSprite.width = 0;
        loadSprite.x = game.world.centerX - loadSprite.width / 2;
        loadSprite.y = game.world.centerY - 16;

        // what to do when a file as completed downloading
        game.load.onFileComplete.add(function (progress, key, success, loaded, total) {

            loadSprite.width = game.width * (progress / 100);
            loadSprite.x = game.world.centerX - loadSprite.width / 2;

        }, this);

        console.log('load state');

    },

    create : function () {

        game.state.add('game', Game);
        game.state.start('game');

    }

};
