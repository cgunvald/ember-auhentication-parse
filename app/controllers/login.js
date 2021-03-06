import Ember from 'ember';

/*export default Ember.Controller.extend({
	actions: {
		signIn: function() {
			var credentials = this.getProperties('identification', 'password');
			console.log(credentials);
		}
	}
});
*/

import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
	loginFailed: false,
	authenticator: 'authenticator:custom',
	actions: {
		closeMessage: function() {
			this.set('loginFailed', false);
		}
	}

	
});
