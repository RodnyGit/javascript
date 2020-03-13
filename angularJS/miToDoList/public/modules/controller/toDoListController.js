angular.module('ToDoList').controller('ToDoListController', function($scope, agendaService) {
	$scope.agenda = agendaService.getAll();

	$scope.addActivity = function() {
		agendaService.addActivity($scope.activity);
		$scope.activity = {};
	};
	$scope.deleteActivity = function(titulo) {
		agendaService.deleteActivity(titulo);
		$scope.agenda = agendaService.getAll();
	};
	$scope.clear = function() {
		agendaService.clearStorage();
		$scope.agenda = agendaService.getAll();
	};
});
