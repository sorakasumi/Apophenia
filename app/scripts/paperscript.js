
var hexPaper = {

    init: function () {
        var i, i2;

        for(i = 0; i < 10; i++) {

            for(i2 = 0; i2 < 10; i2++) {

                var hex = $.extend({}, hexagon);

                hex.init(i,i2);

            }
        }
    },

}

var hexagon = {

    radius: 50,

    sides: 6,

    init: function (i, i2) {

        var hex = new Path.RegularPolygon(new Point((i2+1)*100,(i+1)*100), 6, radius);

        hex.fillColor = 'black';

    },

}

hexPaper.init();
