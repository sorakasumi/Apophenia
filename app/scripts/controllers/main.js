'use strict';

angular.module('hexControls', [])

    .controller('hexListCtrl',

        function($scope, $http, $routeParams) {

            $http.get('scripts/colours.json').success(function(data) {

                $scope.colours = data;

            });

            $scope.colour = { };

            if ($routeParams.urlHex) {

                $scope.colour.hex = $routeParams.urlHex;

            }

            $scope.showDetails = function(colour) {

                $scope.colour = colour;

            }

        })

    .filter('kindfilter',

        function() {

            // filter takes (input, arguments)

            return function(colours, filterKinds) {

                if (filterKinds) {
                    var kinds, out = [];

                    for (var i = 0; i < colours.length; i++) {

                        // check if 'kind' is an array, if not wrap it in an array

                        kinds = (colours[i].kind instanceof Array) ? colours[i].kind : [colours[i].kind];

                        // loop through till matching kind is found

                        for (var i2 = 0; i2 < kinds.length; i2++) {

                            // check if kind is found in active filters

                            if (filterKinds[kinds[i2]] === true) {

                                out.push(colours[i]);

                                break;

                            }

                        }

                    }

                    return out;

                }

            };

        });
