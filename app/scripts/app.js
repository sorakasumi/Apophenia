'use strict';

angular
    .module('hexApp', [
        'ngRoute',
        'hexControls',
        'ngAnimate'
    ])
    .config(function($routeProvider) {

        $routeProvider.

            when('/:urlHex', {

                templateUrl: 'views/main.html',
                controller: 'hexListCtrl'

            }).

            when('/', {

                templateUrl: 'views/main.html',
                controller: 'hexListCtrl'

            }).

            otherwise({

                redirectTo: '/'

            });

        });
