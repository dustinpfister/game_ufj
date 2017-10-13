
var Game = (function () {

    var ship, // ship sprite
    guys = {

        max : 5, // max guys at any time
        spawnRate : 3000, // amount of time between spawns
        lastSpawn : new Date(), // the last time there was a spawn
        current : [], // current guys in the game world

        // main update script for guys object
        update : function () {

            var now = new Date(), // The time now
            ng, // new guy
            i, // index
            len; // length

            // spawn new guys maybe if it is time
            if (now - this.lastSpawn >= this.spawnRate) {

                // have we not reached the max?
                if (this.current.length < this.max) {

                    // then spawn a guy
                    console.log('guy spawn!');

                    ng = game.add.sprite(0, game.world.height - 32, 'shipsheet');

                    ng.data = {

                        forward : true,
                        dx : 1

                    };

                    this.current.push(ng);

                }

                this.lastSpawn = now;

            }

            // update current guys
            i = 0;
            len = this.current.length;
            while (i < len) {

                var g = this.current[i];

                g.x += g.data.dx;

                if (g.x >= game.world.width - 32) {

                    g.x = game.world.width - 32;
                    g.data.dx = -1;

                }

                if (g.x <= 0) {

                    g.x = 0;
                    g.data.dx = 1;

                }

                i += 1;
            }

        }

    },
    k; // keyboard

    return {

        // create the scene
        create : function () {

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

        update : function () {

            // can main update script for guys object
            guys.update();

        }

    };

}
    ());
