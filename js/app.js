angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('locations', {
                url: '/locations',
                controller: 'locationsCtrl',
                templateUrl: "../views/locations.html"
            })
            .state('about', {
                url: '/adventurers',
                parent: 'home',
                templateUrl: '../views/about-adventurers.html'
            })
            .state('booked', {
                url: '/booked/:id',
                controller: 'bookedCtrl',
                templateUrl: '../views/booked.html'
            })
            .state('packages', {
                url: '/packages',
                controller: 'packagesCtrl',
                templateUrl: '../views/packages.html'
            })
            .state('contact', {
                url: '/contact',
                parent: 'home',
                templateUrl: '../views/contact.html'
            });

        $urlRouterProvider
            .otherwise('/');
    });
