angular.module('vapormos')
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'js/app/views/index.client.view.html',
        controller: 'IndexController'
      }).
      when('/index', {
        templateUrl: 'js/app/views/index.client.view.html',
        controller: 'IndexController'
      }).
      when('/login', {
        templateUrl: 'js/app/views/login.client.view.html',
        controller: 'LoginController'
      }).
      when('/logout', {
        templateUrl: 'js/app/views/login.client.view.html',
        controller: 'LoginController'
      }).
      when('/signup', {
        templateUrl: 'js/app/views/signup.client.view.html',
        controller: 'SignupController'
      }).
      when('/ourblends', {
        templateUrl: 'js/app/views/ourblends.client.view.html',
        controller: 'OurblendsController'
      }).
      when('/customjuices', {
        templateUrl: 'js/app/views/customjuice.client.view.html',
        controller: 'CustomjuiceController'
      }).
      when('/otherbrandname', {
        templateUrl: 'js/app/views/brandnamejuice.client.view.html',
        controller: 'BrandnameController'
      }).
      when('/cart', {
        templateUrl: 'js/app/views/cart.client.view.html',
        controller: 'CartController'
      }).
      when('/orders', {
        templateUrl: 'js/app/views/orders.client.view.html',
        controller: 'OrdersController'
      }).
      when('/account', {
        templateUrl: 'js/app/views/account.client.view.html',
        controller: 'AccountController'
      }).
      when('/termsandconditions', {
        templateUrl: 'js/app/views/termsandconditions.client.view.html',
        controller: 'TermsController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);