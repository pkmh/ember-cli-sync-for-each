import Ember from 'ember';
import staggeredCall from 'ember-cli-staggered-call';
import { test } from 'ember-qunit';

test('it returns a promise which resolves', function(assert) {
  assert.expect(1);

  staggeredCall([1,2,3], function() {
    return Ember.RSVP.Promise.resolve();
  }).then(function(result) {
    assert.ok(true);
  });

});

test('it returns a promise which resolves, given an empty array', function(assert) {
  assert.expect(1);

  staggeredCall([], function() {
    return Ember.RSVP.Promise.resolve();
  }).then(function(result) {
    assert.ok(true);
  });

});
