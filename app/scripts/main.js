/* global Handlebars */

$(function() {
	'use strict';

	var jobject = {
		'entries': [
			{ 'hex':'accede', 'definition':'agree to a demand, request, or treaty'},
			{ 'hex':'bacaba', 'definition':''},
			{ 'hex':'baccae', 'definition':''},
			{ 'hex':'beaded', 'definition':'decorate or cover with beads'},
			{ 'hex':'bedded', 'definition':'having a specified number or type of beds'},
			{ 'hex':'bedead', 'definition':''},
			{ 'hex':'bedeaf', 'definition':''},
			{ 'hex':'decade', 'definition':'a period of ten years'},
			{ 'hex':'deface', 'definition':'spoil the surface or appearance of (something), for example by drawing or writing on it'},
			{ 'hex':'efface', 'definition':'erase (a mark) from a surface'},
			{ 'hex':'facade', 'definition':'the principal front of a building, that faces on to a street or open space'}
		]
	};

	// var cheese = Handlebars.colour(jobject.entries[2]);

	for (var i = 0; i < jobject.entries.length; i++) {
	    // console.log(jobject.entries[i].colour);
		$('body').append(Handlebars.entry(jobject.entries[i]));
	}

	// $('body').append(cheese);
});