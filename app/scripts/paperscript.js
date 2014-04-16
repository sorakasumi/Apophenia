/* global Path, Point, Size, view, Group */

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

            var hex = new Path.RegularPolygon( this.point, this.sides, this.radius );

            hex.strokeColor = 'lightgrey';

            // if (this.rotate) { hex.rotate(10); }
            // hex.rotate(this.rotate);
            // hex.fillColor = 'lightgrey';

        },

    };

    var hexPaper = {

        radius: 10,

        sides: 6,

        rotate: 30,

        init: function () {

            // test junk --------------------------

            var bounds = new Path.Rectangle(view.center, new Size(500, 300));
            bounds.position = view.center;
            bounds.strokeColor = 'red';

            var rotateBounds = new Path.Circle(view.center, (pythagAB(500,300) / 2));
            rotateBounds.strokeColor = 'blue';

            var squareRotateBounds = new Path.Rectangle(view.center, new Size(pythagAB(500,300), pythagAB(500,300)));
            squareRotateBounds.position = view.center;
            squareRotateBounds.strokeColor = 'green';

            // end junk --------------------------

            var i, i2, hex, alternate = 0, rows, cols, width, height, rads;
            // var i, i2, hex, alternateX = 0, alternateY = 0, rows, cols, width, height, rads;

            var hexGroup = new Group();
            hexGroup.strokeColor = 'black';

            // width = this.radius * 2;
            // height = this.radius * 2;

            var hexSize = new Size(this.radius * 2);
            hexSize.height *= 0.9;
            // console.log(bounds.size);
            // console.log(hexSize);
            // console.log(bounds.bounds.size / hexSize);

            var gridSize = new Size(bounds.bounds.size / hexSize + 1);
            // console.log(gridSize);


            // alternateX = Math.tan(this.rotate) * width;

            // if (this.rotate) {
            //     width *= 0.9;
            // } else {
            // }

            // rads = this.rotate * (Math.PI/180);

            // var diag = Math.sqrt(Math.pow(view.size.width,2) + Math.pow(view.size.height,2));
            // var spareHeight = (diag - view.size.height) / 2;
            // var spareWidth = (diag - view.size.width) / 2;

            // var diag = pythagAB(bounds.height);
            // cols = bounds.bounds.width / width + 1;
            // console.log(bounds.bounds);
            // cols = diag / width + 1;
            // rows = bounds.bounds.height / height + 1;
            // rows = diag / height + 2;



            for (i = 0; i < gridSize.height; i++) {

                // if (!this.rotate) {

                alternate = (i%2 === 0) ? 0 : this.radius;
                // alternateX = (i%2 === 0) ? 0 : this.radius;
                // }

                // alternateX += 20;

                for (i2 = 0; i2 < gridSize.width; i2++) {
                    // var x, y;

                    // var point = new Point(bounds.bounds.x + i2 * hexSize.width + alternate, bounds.bounds.y + i * hexSize.height);
                    var point = new Point(bounds.bounds.point + new Point(i2,i) * hexSize);
                    point.x += alternate;
                    // var x, y, newX, newY;

                    // alternateY += 20;

                    // if (this.rotate) {
                    //     alternateY = (i2%2 === 0) ? 0 : this.radius;
                    // }
                    // x = bounds.bounds.x + i2 * width + alternate;
                    // x = i2 * width - alternateX - spareWidth;
                    // y = bounds.bounds.y + i * height;
                    // y = i * height - alternateY - spareHeight;

                    // var notCenter = new Point(diag/2,diag/2);

                    // var point1 = new Point(x,y);
                    // var point2 = point1 - notCenter;

                    // x = point2.x;
                    // y = point2.y;

                    // newX = x * Math.cos(rads) - y * Math.sin(rads);
                    // newY = x * Math.sin(rads) + y * Math.cos(rads);

                    // var point3 = new Point(newX,newY);
                    // var point4 = point3 + notCenter;

                    // newX = point4.x;
                    // newY = point4.y;

                    hex = $.extend( {}, hexagon, {
                        radius: this.radius,
                        sides: this.sides,
                        rotate: this.rotate,
                        point: point,
                        // x: newX,
                        // x: x,
                        // y: newY
                        // y: y
                    } );

                    hex.init();

                }

                // alternateY = 0;
            }

            // console.log(view.center);

        },

    };


    hexPaper.init();

    // function isEven(value) {
    //     return (value%2 == 0);
    // }

    function pythagAB (a,b) {

        return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    }

});
