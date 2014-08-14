define([
    './module'
], function (directives) {
    'use strict';
    directives.directive('exampleDirective', function () {
        return {
            template: 'Hello World from example directive! :)'
        };
    });
});
