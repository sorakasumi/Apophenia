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






        });
