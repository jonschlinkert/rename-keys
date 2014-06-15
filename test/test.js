var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var expect = require('chai').expect;


var rename = require('../');

describe('rename keys', function () {
  var addDashes = function(str) {
    return '--' + str;
  };

  it('should add dashes to the name key.', function () {
    var actual = rename({"name": "rename-keys"}, addDashes);
    expect(_.keys(actual)[0]).to.eql('--name');
  });

  it('should add dashes to each key of package.json.', function () {
    var actual = rename({"name": "rename-keys", "description": "foo"}, addDashes);
    expect(_.keys(actual)[1]).to.eql('--description');
  });

  it('should return original object because nothing is renamed', function () {
    expect(rename({a: 1}, function() {})).to.eql({a: 1});
  });

  it('should only rename keys which have to be renamed', function () {
    expect(rename({a: 1, b: 1}, function(prop) {
      if (prop == 'b') return 'c'
    })).to.eql({a: 1, c: 1});
  });
});
