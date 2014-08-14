define([
    './module'
], function (filters) {
    'use strict';
    filters.filter('exampleFilter', function () {
        return function (input) {
            input = input || '';
            var out = input.toUpperCase();
            out = out.toUpperCase();

            return out;
        };
    });
});
