(function () {
  'use strict';

  function rename(obj, fn) {
    var newKey;
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      newKey = fn(key)
      if (newKey !== undefined && newKey != key) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
    return obj;
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
