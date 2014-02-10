/* global Handlebars, jobject */

var hexList = {

    hexList: hexList,

    init: function () {

        var causeRepaintsOn = $("h1, h2, h3, p");

        $(window).resize(function() {

            hexList.repaint();

        });

        hexList.build();

    },

    build: function () {

        for (var i = 0; i < jobject.entries.length; i++) {

            var values = {entry: jobject.entries[i], nextEntry: jobject.entries[i+1]};

            $('body').append(Handlebars.entry(values));

        }

        $( window ).on('scroll', function (event) {

            hexList.handleCurrent();

        });

        hexList.handleCurrent();

    },

    handleCurrent: function () {
        var thing, location, height;

        $('.entry').each( function () {

            thing = $( this );

            location = thing.position().top - $( window ).scrollTop();

            height = $( window ).height() / 2;

            if ( location < height && location > -height ) {

                thing.children('.absolute').css('opacity','1');

            } else {

                thing.children('.absolute').css('opacity','0');

            }

        });
    },

    repaint: function () {
        causeRepaintsOn.css('z-index', 1);
    }
};

$(function() {
	'use strict';

    hexList.init();

});
