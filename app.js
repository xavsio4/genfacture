/*
** Angular app for the invoice generation screen 
** Author : X.Villamuera
** date : 10/2014
*/

'use strict'; //for compatibility but also js cleaniless
//declaration of the main module of the angular App
var app = angular.module('myApp',['ui.sortable','ngAnimate','ngRoute','ui.router']);

app.value("appTitle","iCompexp Invoice generator");


//add a first controller
app.controller('InvoiceCtrl', ['$scope','$state', function($scope,$state) {
  //$scope.double = function(value) { return value * 2; };
    $scope.invrows = [{}];
    $scope.invrows.tax = [{}];

  	$scope.addInvoiceRow = function() {
  										$scope.invrows.push({});
  										};

  	$scope.deleteInvoiceRow = function(index) {
  										$scope.invrows.splice(index,1);
  										console.log("delete "+index)
  									};

	$scope.getTotalGross = function() {
										var total = 0;
										for(var i = 0; i < $scope.invrows.length; i++)
											{ 	var item = $scope.invrows[i];
												total += (item.price * item.quantity) + ((item.price * item.quantity) * item.tax) ;
											}
										return total;
									};

	$scope.getTotalTax = function() {
										var total = 0;
										for(var i = 0; i < $scope.invrows.length; i++)
											{ 	var item = $scope.invrows[i];
												total += ((item.price * item.quantity) * item.tax);
											}
										return total;

										};

	$scope.getTotalNet = function() {
										var total = 0;
										for(var i = 0; i < $scope.invrows.length; i++)
											{ 	var item = $scope.invrows[i];
												total += (item.price * item.quantity);
											}
										return total;

										};

	//Form Submission


	$scope.submit = function () {
  
    	$state.go('preview');

  		} 



	
}]);//end controller InvController


app.controller('PreviewCtrl', ['$scope','$state', function($scope,$state) {

	}

	]);// end preview controller



//App routing

 // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/preview', {
                templateUrl : 'partials/preview.html',
                controller  : 'InvoiceCtrl'
            });

            

    });


// implementing UI routing
app.config(function($stateProvider, $urlRouterProvider) {
    
   // $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
       .state('preview', {
      		url: "/preview",
       		templateUrl: "partials/preview.html" });
        
        
        
});



//Some general directives

angular.module('myApp').directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);

// numbers only
app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^-?0-9.0-9]/g, '');
 
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }           
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});