'use strict';
var app = angular.module('app', ['ngRoute']);


app.config(function ($routeProvider) {

    $routeProvider.when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportController'
    }).when('/', {
        templateUrl: 'views/dashboard.html'

    }).when('/student/:id', {
        templateUrl: 'views/student.html',
    }).otherwise({
    });
});

app.controller("MainController", function ($scope) {

    $scope.name = "Hello World";

    $scope.test = function () {
        $scope.name = "Hey You";
    };

});

app.controller("StudentController", function ($scope, $routeParams) {
    $scope.templateUrl = 'templates/student.html';
    $scope.id = $routeParams.id;
});

app.controller("ReportController", function ($scope, $http) {

    $scope.name = "Report Page";

    $http.get("data.json").success(function (data) {
        $scope.students = data;
    });

    $scope.test = function () {


    };





});


app.service('MathService', function () {

    this.average = function (total, count) {
        return total / count;
    };

    this.dateFormat = function (data, type, full, meta) {
        return moment(data).format('llll');
    };
});


app.filter('momentFormat', function () {
    return function (dateString, format) {
//        return moment(dateString).format(format);
        return dateString + ".00";
    };
});


app.directive('footer', function () {
    return {
        templateUrl: 'views/footer.html'
    };
});

