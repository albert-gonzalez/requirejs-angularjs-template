requirejs.config({
    baseUrl: '',
    paths: {
        angular: 'components/angular/angular.min',
        'angular-route': 'components/angular-route/angular-route.min',
        domReady: 'components/requirejs-domready/domReady'
    },

    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        }
    }
});
