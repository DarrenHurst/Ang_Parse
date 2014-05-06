/**
 * Created with JetBrains WebStorm.
 * User: Darren
 * Date: 2014-03-24
 * Time: 11:31 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

define(['objects/parseUser'],function (parseUser) {
    return{
        controllers: function(appControllers){
            appControllers.controller('loginController', ['$scope', '$routeParams',
                function($scope, $routeParams) {

                    $scope.onSignIn = function(_user){parseUser.login(_user.username,_user.password);}

                    parseUser.checkForSession();


                }]);

            appControllers.controller('rootController',['$scope', '$routeParams',
                function($scope, $routeParams) {


                    $scope.logout = function(){parseUser.logout();}

                    parseUser.checkForSession();


                }]);

            appControllers.controller('registerController',['$scope', '$routeParams',
                function($scope, $routeParams) {


                    $scope.registerUser = function(_user){
                           if(_user.username){
                               //TODO check if user exists
                               //TODO check if email_valid
                               //TODO check if password is greater than eqaul 8
                               parseUser.registerUser(_user.username,_user.password);

                           }


                    }



                }]);
        }
    }

});