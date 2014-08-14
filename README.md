#RequireJS + AngularJS Template

RequireJS + AngularJS Template that it can be used for new projects.

Used technologies:
* RequireJS + AngularJS.
* Unit Testing with Karma and Jasmine.
* Package Management with Bower and npm.
* Optimized CSS and JS distribution with Grunt.

This RequireJS + AngularJS configuration is based on [this complete tutorial by StarterSquad](https://www.startersquad.com/blog/angularjs-requirejs/).

If you want to see a complete example using this template, visit [Zeldify Your Name](http://albert-gonzalez.github.io/zeldify-your-name)

##Requisites
* [NodeJS](http://nodejs.org/) and npm
* [Bower](https://github.com/bower/bower) installed globally `npm install -g bower`
* [Grunt cli](https://github.com/gruntjs/grunt-cli) installed globally `npm install -g grunt-cli`
* [Karma cli](https://github.com/karma-runner/karma) installed globally `npm install -g karma-cli`

##Download
Clone this repository:

`git clone https://github.com/albert-gonzalez/requirejs-angularjs-template`

##Install
Go to requirejs-angularjs-template path and execute

`npm start`

This command will install the node modules, it will execute bower install, it will build the js and it will start the http-server

Open the url `localhost:8000` in your browser

##Build JS and CSS distribution
There is a [`Gruntfile`](https://github.com/albert-gonzalez/requirejs-angularjs-template/blob/master/Gruntfile.js) configured for building the js distribution with this command:

`grunt build`

This will compile javascript with the r.js optimizer

## Unit Testing

Execute:

`karma start`

This will start the karma runner and execute the test.

Karma config is in the file [`karma.conf.js`](https://github.com/albert-gonzalez/requirejs-angularjs-template/blob/master/karma.conf.js)

Requirejs config for the test is in the file [`test/test-main.js`](https://github.com/albert-gonzalez/requirejs-angularjs-template/blob/master/test/test-main.js). This file configures Requirejs paths and finds the test for executing them.
