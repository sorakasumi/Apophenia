/* global Path, Point, Size, view, Group, Rectangle */

var isReady = false;

$(function() {
    'use strict';

    var hexagon = {

        radius: 50,

        sides: 6,

        point: new Point(0,0),

        init: function () {

            this.draw();

        },

        draw: function () {

            var hex = new Path.RegularPolygon( this.point, this.sides, this.radius );

            hex.fillColor = '#b4d455';
            // hex.strokeColor = 'lightgrey';

            hexPaper.hexGroup.addChild(hex);

        },

    };

    var hexPaper = {

        radius: 20,

        sides: 6,

        rotate: 15,

        hexGroup: new Group(),

        test: false,

        animno: 0,

        init: function () {

            if (this.test === 'mini') {

                var testSize = new Size(500, 300);
                this.build(testSize);
                this.buildTest(testSize);

            } else {

                this.build(view.size);

            }

        },

        build: function (screenSize) {

            var i, i2, hex, hexSize, gridSize, alternate = 0, trueBounds;

            trueBounds = new Rectangle(view.center, new Size(pythagAB(screenSize)));
            trueBounds.point = view.center - (trueBounds.size / 2);

            hexSize = new Size(this.radius * 2);
            hexSize.height *= 0.86;

            gridSize = new Size(trueBounds.size / hexSize + 1);


            for (i = 0; i < gridSize.height; i++) {

                alternate = (i%2 === 0) ? 0 : this.radius;

                for (i2 = 0; i2 < gridSize.width; i2++) {

                    var point = new Point(trueBounds.point + new Point(i2,i) * hexSize);
                    point.x += alternate;

                    hex = $.extend( {}, hexagon, {
                        radius: this.radius,
                        sides: this.sides,
                        rotate: this.rotate,
                        point: point,
                    } );

                    hex.init();

                }

            }

            // console.log(view.center);

            this.hexGroup.rotate(this.rotate);


            this.cleanJunk();

            isReady = true;
        },

        cleanJunk: function () {
            var i, pos, bounds, buffer, hexList, deletes = [];

            hexList = this.hexGroup.children;
            buffer = (this.test) ? this.radius: -this.radius ;
            bounds = view.bounds;

            for (i = 0; i < hexList.length; i++) {

                pos = hexList[i].position;

                if (pos.x > bounds.width - buffer || pos.y > bounds.height - buffer || pos.y < 0 + buffer || pos.x < 0 + buffer) {

                    deletes.push(hexList[i]);

                }

            }

            for (i = 0; i < deletes.length; i++) {
                deletes[i].remove();

            }

        },

        buildTest: function (testSize) {

            var bounds = new Path.Rectangle(view.center, testSize);
            bounds.position = view.center;
            bounds.strokeColor = 'red';

            var rotateBounds = new Path.Circle(view.center, (pythagAB(testSize) / 2));
            rotateBounds.strokeColor = 'blue';

            var squareRotateBounds = new Path.Rectangle(view.center, new Size(pythagAB(testSize)));
            squareRotateBounds.position = view.center;
            squareRotateBounds.strokeColor = 'green';

        },

        animTest: function () {
            // console.log('hello');

            if (this.animno < this.hexGroup.children.length) {

                this.hexGroup.children[this.animno].strokeColor = 'white';
                this.animno++;

            } else {

                isReady = false;
            }
            // console.log(this.hexGroup);\



        }

    };


    hexPaper.init();

    function pythagAB (size) {

        return Math.sqrt(Math.pow(size.width,2) + Math.pow(size.height,2));

    }

});


function onFrame() {
    'use strict';

    if (isReady){

        $.hexPaper.animTest();

    }

}

