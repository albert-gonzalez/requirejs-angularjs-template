define([
    'angular-mocks',
    'app/js/controllers/example.controller'
], function () {
    'use strict';
    describe('Example controller', function () {

        var scope,
            exampleService,
            defineController;

        defineController = function () {
            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                $controller('exampleController', {$scope: scope, exampleService: exampleService});
            });
        }

        beforeEach(function () {
            exampleService = jasmine.createSpyObj('exampleService', ['getValue']);
            module('app.controllers');
            defineController();
        });

        it('calls example service', function () {
            expect(exampleService.getValue).toHaveBeenCalled();
        });
    });
});
