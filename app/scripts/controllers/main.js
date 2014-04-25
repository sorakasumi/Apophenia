'use strict';

angular.module('hexControls', [])

    .controller('hexListCtrl',

        function($scope, $http, $routeParams) {

            $http.get('scripts/colours.json').success(function(data) {

                $scope.colours = data;

            });

            if ($routeParams.urlHex) {

                $scope.currentHex = $routeParams.urlHex;

                $('.entry[data-hex=' + $scope.currentHex + ']').show();

            }


            $scope.showDetails = function(hex) {

                $scope.currentHex = hex;

                $('.entry').hide();
                $('.entry[data-hex=' + hex + ']').show();

            }

        });
