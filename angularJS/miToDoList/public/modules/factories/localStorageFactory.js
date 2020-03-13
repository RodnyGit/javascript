angular.module('ToDoList').factory('agendaFactory', function(localStorageService) {
	var agendaFactory = {};
	if (localStorageService.get('agendaKey')) {
		agendaFactory.agenda = localStorageService.get('agendaKey');
	} else {
		agendaFactory.agenda = [];
	}
	agendaFactory.addActivity = function(activity) {
		agendaFactory.agenda.push(activity);
		agendaFactory.updateStorage();
		agendaFactory.activity = {};
	};
	agendaFactory.clearStorage = function() {
		agendaFactory.agenda = [];
		agendaFactory.updateStorage();
	};
	agendaFactory.deleteActivity = function(titulo) {
		agendaFactory.agenda = agendaFactory.agenda.filter((item) => {
			return item.titulo !== titulo;
		});
		agendaFactory.updateStorage();
	};
	agendaFactory.updateStorage = function() {
		localStorageService.set('agendaKey', agendaFactory.agenda);
	};
	agendaFactory.getAll = function() {
		return agendaFactory.agenda;
	};
	return agendaFactory;
});
