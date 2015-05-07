import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
  	return Ember.RSVP.resolve(data);
  },
  authenticate: function(data) {
  	var adapter, store, user;
    if (data == null) {
      data = {};
    }
    store = this.container.lookup('store:main');
    adapter = store.adapterFor('application');
    user = data.user;
    if (user) {
      adapter.set('sessionToken', user.get('sessionToken'));
      data = {
        userId: user.get('id'),
        sessionToken: user.get('sessionToken')
      };
      return Ember.RSVP.resolve(data);
    } else {
      return store.modelFor('user').login(store, data).then(function(user) {
        adapter.set('sessionToken', user.get('sessionToken'));
        data = {
          userId: user.get('id'),
          sessionToken: user.get('sessionToken')
        };
        return data;
      });
    }
	//return Ember.RSVP.resolve(credentials);
  },
  invalidate: function(data) {
  	return Ember.RSVP.resolve(data);
  }
});