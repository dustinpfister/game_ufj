
var Game = (function () {

    var ship;

    return {

        preload : function () {

            console.log('ready to rock!');

            ship = game.add.sprite(0, 0, 'shipsheet');

        },

        create : function () {}

    };

}
    ());
