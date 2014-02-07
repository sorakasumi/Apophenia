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
            var cheese = myObject.hexToRgb(jobject.entries[i].hex);
            console.log(cheese);

            var values = {entry: jobject.entries[i], prevEntry: jobject.entries[i-1]};
            $('body').append(Handlebars.entry(values));

        }

    },

    hexToRgb: function (hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return r + ',' + g + ',' + b;
    },

    repaint: function () {
        causeRepaintsOn.css('z-index', 1);
    }
};

$(function() {
	'use strict';

    myObject.init();

});
