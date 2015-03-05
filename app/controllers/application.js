import Ember from 'ember';

export default Ember.Controller.extend({
  isMagic: false,
  routes: Ember.A([
    Ember.Object.create({route: 'red', alias: 'Red', style: 'red'}),
    Ember.Object.create({route: 'green', alias: 'Green', style: 'green'}),
    Ember.Object.create({route: 'blue', alias: 'Blue', style: 'blue'})
  ]),
  historicalRoutes: Ember.A([]),

  actions: {
    magic: function() {
      this.set('isMagic', !this.get('isMagic'));
    },

    launch: function() {
      this.set('isMagic', false);
    }
  }

});
