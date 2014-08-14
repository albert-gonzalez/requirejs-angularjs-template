define([
    './module'
], function (services) {
    'use strict';
    services.factory('exampleService', [function () {
        return {
            getValue: function () {
                return 'Hello World from example service! :)';
            }
        };
    }]);
});
