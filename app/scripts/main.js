/* global jobject, Handlebars */

$(function() {
    'use strict';

    var hexList = {

        init: function () {

            hexList.build();
            hexList.setListners();

        },

        build: function () {
            var i;

            for (i = 0; i < jobject.entries.length; i++) {

                // theHex = jobject.entries[i].hex;

                // $('<div>').addClass('hex').data('hex', theHex).css('background-color', '#' + theHex).appendTo( 'body' );

                $('body').append(Handlebars.hex(jobject.entries[i]));
                $('.main').append(Handlebars.entry(jobject.entries[i]));

            }

        },

        setListners: function () {
            var hex;

            $('.hex').on('mouseenter', function () {

                hex = $(this).data('hex');

                $('body').css('background', '#' + hex);
                $('.entry').hide();
                $('.entry[data-hex=' + hex + ']').show();

                if ($(this).hasClass('half')) {

                    // console.log('yep');

                }

            });

            $('.filter').on('change', function () {

                // console.log($(this).data('kind'));
                if ($(this).prop('checked')) {

                    $('.' + $(this).data('kind')).show();

                } else {

                    $('.' + $(this).data('kind')).hide();

                }


            });

        },

    };

    // hexList.init();

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
