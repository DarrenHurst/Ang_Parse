'use strict';

require.config({
    baseUrl:'js',
    paths:{
        text:'vendor/text',
        jquery:'vendor/jquery',
        plugins:'plugins'
    },
    shim:{

    },
    priority:[

    ],
    urlArgs:'v=1.0'
});

require([
    'jquery',
    'routes',
    'text',
    'plugins'


], function ($) {

    var body = document.getElementsByTagName('body')[0];
    $(document).ready(function () { angular.bootstrap(body,['myApp']);});
    Parse.initialize("6UrUQf88Pj4RGnrgGVC8s8FmlRHvnj4LPDAUMYQr", "zgN09MHWqWyZpR80nvUSdIPE7I85cS3pIZpSFILt");



});