
var Game = (function () {

    var ship, // ship sprite
    k; // keyboard

    return {

        preload : function () {

            // setup the ship sprite
            ship = game.add.sprite(game.world.centerX - 16, game.world.centerY - 16, 'shipsheet');

            // set the keyboard hander to k
            k = game.input.keyboard;

            // setup keys
            // A
            k.addKey(65).onHoldCallback = function (key) {

                ship.x -= 1;
                ship.frame = 2;

            };

            // D
            k.addKey(68).onHoldCallback = function (key) {

                ship.x += 1;
                ship.frame = 1;

            };

            // W
            k.addKey(87).onHoldCallback = function (key) {

                ship.y -= 1;

            };

            // S
            k.addKey(83).onHoldCallback = function (key) {

                ship.y += 1;

            };

            k.onUpCallback = function () {

                ship.frame = 0;

            }
        },

        create : function () {},

        update : function () {}

    };

}
    ());
