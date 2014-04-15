/* global Path, Point, view */

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

            var hex = new Path.RegularPolygon( new Point(this.x, this.y), this.sides, this.radius );

            hex.strokeColor = 'lightgrey';

            // if (this.rotate) { hex.rotate(10); }
            // hex.rotate(this.rotate);
            // hex.fillColor = 'lightgrey';

        },

    };

    var hexPaper = {

        radius: 10,

        sides: 6,

        rotate: 10,

        init: function () {
            var i, i2, hex, alternateX = 0, alternateY = 0, rows, cols, width, height;

            width = this.radius * 2;
            height = this.radius * 2;

            // alternateX = Math.tan(this.rotate) * width;

            // if (this.rotate) {
            //     width *= 0.9;
            // } else {
            height *= 0.9;
            // }

            cols = view.size.width / width + 1;
            rows = view.size.height / height + 1;

            for (i = 0; i < rows; i++) {

                // if (!this.rotate) {
                alternateX = (i%2 === 0) ? 0 : this.radius;
                // }

                // alternateX += 20;

                for (i2 = 0; i2 < cols; i2++) {

                    // alternateY += 20;

                    // if (this.rotate) {
                    //     alternateY = (i2%2 === 0) ? 0 : this.radius;
                    // }

                    hex = $.extend( {}, hexagon, {
                        radius: this.radius,
                        sides: this.sides,
                        rotate: this.rotate,
                        x: i2 * width - alternateX,
                        y: i * height - alternateY
                    } );

                    hex.init();

                }

                // alternateY = 0;
            }

            console.log(view.size.width);

        },

    };


    hexPaper.init();

    // function isEven(value) {
    //     return (value%2 == 0);
    // }

});
