/**
 * Created with JetBrains WebStorm.
 * User: Darren
 * Date: 2014-03-23
 * Time: 4:53 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

define(['app'],
    function (app) {

      return app.config(['$routeProvider','$locationProvider',
            function($routeProvider,$locationProvider) {
                $routeProvider.
                    when('/', {
                        templateUrl: 'templates/main.html',
                        controller: 'loginController'
                    }).
                    when('/register', {
                        templateUrl: 'templates/register.html',
                        controller: 'registerController'
                    }).
                    when('/root', {
                        templateUrl: 'templates/root.html',
                        controller: 'rootController'
                    }).
                    otherwise({
                        redirectTo: '/'
                    });

                // use the HTML5 History API
                //$locationProvider.html5Mode(true);
            }]);


    });
