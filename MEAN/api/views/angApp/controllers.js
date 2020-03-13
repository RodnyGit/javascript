angular.module("indexApp")
    .controller("UsuarioController", function ($scope, $http) {
        $scope.repos = [];
        $http.get("http://localhost:3001/usuario")
            .success(function (data) {
                $scope.repos = data;
            })
            .error(function (err) {
                console.log(err);
            });
    })
    .controller("UsuarioController", function ($scope, $http, $routeParams) {
        $scope.repos = [];
        $http.get("http://localhost:3001/usuario/" + $routeParams.id)
            .success(function (data) {
                $scope.repos = data;
            })
            .error(function (err) {
                console.log(err);
            });
    })
    .controller("ProductoController", function ($scope, $http) {
        $scope.repos = [];
        $http.get("http://localhost:3001/producto")
            .success(function (data) {
                $scope.repos = data;
            })
            .error(function (err) {
                console.log(err);
            });
    })
    .controller("ProductoController", function ($scope, $http, $routeParams) {
        $scope.repos = [];
        $http.get("http://localhost:3001/producto/" + $routeParams.id)
            .success(function (data) {
                $scope.repos = data;
            })
            .error(function (err) {
                console.log(err);
            });
    })