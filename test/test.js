var fs = require('fs');
var path = require('path');
var assert = require('assert');
var rename = require('../');

describe('rename keys', function () {
  var addDashes = function(str) {
    return '--' + str;
  };

  it('should add dashes to the name key.', function () {
    var actual = rename({"name": "rename-keys"}, addDashes);
    assert.deepEqual(Object.keys(actual)[0], '--name');
  });

  it('should add dashes to each key of package.json.', function () {
    var actual = rename({"name": "rename-keys", "description": "foo"}, addDashes);
    assert.deepEqual(Object.keys(actual)[1], '--description');
  });

  it('should return original object because nothing is renamed', function () {
    assert.deepEqual(rename({a: 1}, function() {}), {a: 1});
  });

  it('should only rename keys which have to be renamed', function () {
    assert.deepEqual(rename({a: 1, b: 1}, function(prop) {
      if (prop == 'b') return 'c'
    }), {a: 1, c: 1});
  });
});
