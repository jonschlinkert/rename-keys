'use strict';

var isObject = require('isobject');

/**
 * Rename the keys on the given `object` using a renaming `fn`. The
 * renaming function receives the `key` and `value` of each property
 * in the object. If the renaming function returns a _non-empty string_
 * it will be used to rename the key, otherwise the original key is
 * retained.
 *
 * ```js
 * var obj = renameKeys({a: 1, b: 2, c: 3}, function(key, val) {
 *   return '--' + key;
 * });
 * console.log(obj);
 * //=> { '--a': 1, '--b': 2, '--c': 3}
 * ```
 * @param {Object} `object` The object with keys to rename.
 * @param {Function} `fn` Renaming function to use on each key in the object.
 * @return {Object} Returns a new object with renamed keys.
 * @api public
 */

const renameKeys = function(obj, fn) {
  if (!isObject(obj)) {
    throw new TypeError('expected an object');
  }

  if (typeof fn !== 'function') {
    return obj;
  }

  var keys = Object.keys(obj);
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];
    var str = fn(key, val);
    if (typeof str === 'string' && str !== '') {
      key = str;
    }
    if (isObject(val)) {
      result[key] = 
        (val, fn);
    } else {
      result[key] = val;
    }
  }
  return result;
};

module.exports = renameKeys;
