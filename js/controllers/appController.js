'use strict';

define(['controllers/loginControllers'],function (loginControllers) {

/* Controllers */

    var appControllers = angular.module('appController', []);

    loginControllers.controllers(appControllers);



      return appControllers;
});









