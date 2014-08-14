define([
    'angular-mocks',
    'app/js/filters/example.filter'
], function () {
    describe('Example Filter', function() {
        var filter;
        beforeEach(function () {
            module('app.filters');
            inject(function ($injector) {
                // We have to append Filter to the filter's name
                filter = $injector.get('exampleFilterFilter');
            });
        });

        it('should toUpcase the input string', function () {
            expect(filter('Hello World')).toEqual('HELLO WORLD');
        });
    });
});
