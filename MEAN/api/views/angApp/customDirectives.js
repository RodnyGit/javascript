angular.module("indexApp")
.directive("avatarImage", function () {
    return function(scope,element,attrs){
        attrs.$observe("avatarImage",function(value){
            element.css({
                "background": 'url('+value+')',
                "background-position":"center",
                "background-size":"cover"
            });
        });
    };
})