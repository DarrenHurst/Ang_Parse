'use strict';

define(['controllers/appController'],function (appController) {
        //add controllers
        return angular.module('myApp',['ngRoute','appController']);
});