var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var expect = require('chai').expect;


var rename = require('../');

var addDashes = function(str) {
  return '--' + str;
};

describe('rename keys:', function () {
  it('should add dashes to the name key.', function () {
    var actual = rename({"name": "rename-keys"}, addDashes);
    expect(_.keys(actual)[0]).to.eql('--name');
  });
  it('should add dashes to each key of package.json.', function () {
    var actual = rename({"name": "rename-keys", "description": "foo"}, addDashes);
    expect(_.keys(actual)[1]).to.eql('--description');
  });
});
