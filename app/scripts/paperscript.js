/* global Path, Point */

$(function() {
    'use strict';

    var hexagon = {

        radius: 50,

        sides: 6,

        x: 0,

        y: 0,

        init: function () {

            this.draw();

        },

        draw: function () {

            var hex = new Path.RegularPolygon(new Point(this.x, this.y), this.sides, this.radius);

            hex.strokeColor = 'black';

        },

    };

    var hexPaper = {

        init: function () {
            var i, i2, hex;

            for(i = 0; i < 10; i++) {

                for(i2 = 0; i2 < 10; i2++) {

                    hex = $.extend({}, hexagon, {x:(i2+1)*100,y:(i+1)*110});

                    hex.init();

                }
            }

            console.log(hexagon.x);
        },

    };


    hexPaper.init();

});
