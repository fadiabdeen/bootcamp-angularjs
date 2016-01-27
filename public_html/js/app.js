'use strict';
var app = angular.module('app', ['ngRoute']);


app.config(function ($routeProvider) {

    $routeProvider.when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportController'
    }).when('/', {
        templateUrl: 'views/dashboard.html'
    }).otherwise({
    });
});

app.controller("MainController", function ($scope) {

    $scope.name = "Hello World";

    $scope.test = function () {
        $scope.name = "Hey You";
    };

});

app.controller("ReportController", function ($scope,$http) {

    $scope.name = "Report Page";

    $scope.test = function () {
        
        $http.get("data.json").success(function(data){
            $scope.name=data.name;
        });
    };

});

