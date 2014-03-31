/* global jobject */

$(function() {
    'use strict';

    var hexList = {

        init: function () {

            hexList.build();
            hexList.setListners();

        },

        build: function () {
            var i, theHex;

            for (i = 0; i < jobject.entries.length; i++) {

                theHex = jobject.entries[i].hex;

                $( '<div>').addClass('hex').data('hex', theHex).css('background-color', '#' + theHex).appendTo( 'body' );

            }

        },

        setListners: function () {
            var hex;

            $('.hex').on('mouseenter', function () {

                hex = $(this).data('hex');

                $('body').css('background', '#' + hex);

            });

        },

    };

    hexList.init();

    // var thing = {
    //     colour: '',
    //     method: function () {
    //         console.log(this.colour);
    //     }
    // };

    // var thing1 = $.extend({}, thing);

    // thing1.colour = 'red';

    // thing1.method();

});
