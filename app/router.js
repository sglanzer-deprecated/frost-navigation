import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('class');
  this.route('transition', function() {
    this.route('details');
  });
  this.route('dashboard');
});

export default Router;
