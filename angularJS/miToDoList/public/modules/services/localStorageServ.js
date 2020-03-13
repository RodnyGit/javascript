angular.module('ToDoList').service('agendaService', function(localStorageService) {	
	if (localStorageService.get('agendaKey')) {
		this.agenda = localStorageService.get('agendaKey');
	} else {
		this.agenda = [];
	}
	this.addActivity = function(activity) {
		this.agenda.push(activity);
		this.updateStorage();
		this.activity = {};
	};
	this.clearStorage = function() {
		this.agenda = [];
		this.updateStorage();
	};
	this.deleteActivity = function(titulo) {
		this.agenda = this.agenda.filter((item) => {
			return item.titulo !== titulo;
		});
		this.updateStorage();
	};
	this.updateStorage = function() {
		localStorageService.set('agendaKey', this.agenda);
	};
	this.getAll = function() {
		return this.agenda;
	};	
});
