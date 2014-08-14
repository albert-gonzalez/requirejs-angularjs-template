define([
    './module'
], function (controllers) {
    'use strict';
    controllers.controller('exampleController', ['$scope', 'exampleService', function ($scope, exampleService) {
        $scope.example = exampleService.getValue();
    }]);
});
