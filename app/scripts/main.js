/* global Handlebars, jobject */

var myObject = {

    myObject: myObject,



    init: function () {

        // console.log('hello');


        var causeRepaintsOn = $("h1, h2, h3, p");

        $(window).resize(function() {

            myObject.repaint();

        });

        myObject.build();

    },

    build: function () {

        for (var i = 0; i < jobject.entries.length; i++) {
            // var cheese = myObject.hexToRgb(jobject.entries[i].hex);
            // console.log(cheese);

            var values = {entry: jobject.entries[i], nextEntry: jobject.entries[i+1], iter: 3*(10 - i), iter2: -3*(10 - i)};
            $('body').append(Handlebars.entry(values));

        }

        $( window ).on('scroll', function (event) {

            myObject.handleCurrent();

        });

        myObject.handleCurrent();

    },

    handleCurrent: function () {

        $('.entry').each( function () {

            var thing = $( this );

            var location = thing.position().top - $( window ).scrollTop();

            if ( location < ($( window ).height() / 2) && location > -($( window ).height() / 2) ) {

                thing.children('.absolute').css('opacity','1');

            } else {

                thing.children('.absolute').css('opacity','0');

            }

        });
    },

    hexToRgb: function (hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return r + ',' + g + ',' + b;
    },

    getMidPoint: function (hex1, hex2) {


    },

    repaint: function () {
        causeRepaintsOn.css('z-index', 1);
    }
};

$(function() {
	'use strict';

    myObject.init();

});
