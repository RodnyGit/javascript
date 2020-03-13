angular.module("indexApp", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/usuario", {
                controller: "UsuarioController",
                templateUrl: "templates/home.html"
            })
            .when("/usuario/:id", {
                controller: "UsuarioController",
                templateUrl: "templates/home.html"
            })
            .when("/producto", {
                controller: "ProductoController",
                templateUrl: "templates/Repos.html"
            })
            .when("/producto/:id", {
                controller: "ProductoController",
                templateUrl: "templates/Repos.html"
            })
    });
    