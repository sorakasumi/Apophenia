/* global Handlebars, jobject */

$(function() {
    'use strict';

    var hexList = {

        hexList: hexList,

        causeRepaintsOn: $('h1, h2, h3, p'),

        init: function () {

            $(window).resize(function() {

                hexList.repaint();

            });

            hexList.build();

        },

        build: function () {
            var values, i;

            for (i = 0; i < jobject.entries.length; i++) {

                values = {entry: jobject.entries[i], nextEntry: jobject.entries[i+1]};

                $('body').append(Handlebars.entry(values));

            }

            $( window ).on('scroll', function () {

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

                    thing.children('.absolute').addClass('active');

                } else {

                    thing.children('.absolute').removeClass('active');

                }

            });
        },

        repaint: function () {
            hexList.causeRepaintsOn.css('z-index', 20);
        }
    };

    hexList.init();

});
