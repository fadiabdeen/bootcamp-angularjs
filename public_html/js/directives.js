app.directive('footer',function($http){
    return {
        templateUrl: 'views/footer.html'
//        ,
//        link: function(scope, element){
//            
//            $http.get('config/build.json')
//            .success(function (data) {
//                scope.buildTimeStamp = data.buildTimeStamp;
//                scope.buildNumber = data.buildNumber;
//                scope.buildResults = data.buildResultsUrl;
//                console.log(data);
//            }).error(function(){
//                scope.buildInfo='no build info'
//            });
//        }
    };
});