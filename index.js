(function () {
  'use strict';

  function rename(obj, fn) {
    var res = {};
    for (var key in obj) {
      if (hasOwn(obj, key)) {
        var prop = fn(key);
        var valid = key && !hasOwn(res, prop);
        res[(valid ? prop : key) || key] = obj[key];
      }
    }
    return res;
  }

  function hasOwn(obj, key) {
    return obj.hasOwnProperty(key);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = rename;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return rename;
      });
    } else {
      window.rename = rename;
    }
  }
})();
