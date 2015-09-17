import Ember from 'ember';
import BaseAuthenticator from './base';

const { RSVP } = Ember;

export default BaseAuthenticator.extend({
  restore() {
    return RSVP.resolve();
  },

  authenticate(data) {
    return RSVP.resolve(data);
  },

  invalidate() {
    return RSVP.resolve();
  }
});
