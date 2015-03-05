import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      lines: [1, 2, 3, 4, 5, 6, 7, 8]
    });
  }
});
