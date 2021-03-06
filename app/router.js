import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('index', { path: '/'});
  this.resource('login', { path: '/login'});
  this.resource('signup', {path: '/signup'});
});
