import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
		authorizationFailed: function(error) {
			console.log('faaaail');
		},
		sessionAuthenticationFailed: function (error) {
			//this.controllerFor('login').set('er')'
			console.log('session faaaail');
	    },
	}
});