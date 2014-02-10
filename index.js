(function () {
  'use strict';

  function rename(obj, fn) {
    fn = fn || function (prop) {return prop};
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }
      obj[fn(key)] = obj[key];
      delete obj[key];
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
