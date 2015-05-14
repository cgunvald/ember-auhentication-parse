import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		sessionAuthenticationFailed: function (error) {
			this.controllerFor('login').set('loginFailed',true);
			console.log('session faaaail');
	    },
	}
});
