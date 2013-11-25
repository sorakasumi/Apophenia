/* global Handlebars */

$(function() {
	'use strict';



	// var cheese = Handlebars.colour(jobject.entries[2]);

	for (var i = 0; i < jobject.entries.length; i++) {
	    // console.log(jobject.entries[i].colour);
		$('body').append(Handlebars.entry(jobject.entries[i]));
	}

	var causeRepaintsOn = $("h1, h2, h3, p");

	$(window).resize(function() {
	  causeRepaintsOn.css("z-index", 1);
	  console.log('repaint')
	});
	// $('body').append(cheese);
});