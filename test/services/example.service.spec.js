define([
    'angular-mocks',
    'app/js/services/example.service'
], function () {
    'use strict';
    describe('Example service"', function () {
        var exampleService;
        beforeEach(function () {
            module('app.services');
            inject(function($injector) {
                exampleService = $injector.get('exampleService');
            });
        });

        it('returns Hello World message', function() {
            expect(exampleService.getValue()).toEqual('Hello World from example service! :)');
        });
    });
});
