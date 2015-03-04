import Ember from 'ember';

export default Ember.Controller.extend({
  isMagic: false,

  actions: {
    magic: function() {
      this.set('isMagic', !this.get('isMagic'));
    }
  }
});
