
mainApp.component('customComponent', {
	template : 'Hello, {{$ctrl.user}}',
	controller : function CustomComponentController() {
		this.user = 'Kyle';
	}
});
