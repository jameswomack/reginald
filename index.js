'use strict';

var isArray  = require('lodash.isarray');
var isRegexp = require('is-regexp');
var isSupportedRegexpFlag = require('is-supported-regexp-flag');

var flagMap = {
	global     : 'g',
	ignoreCase : 'i',
	multiline  : 'm'
};

if (isSupportedRegexpFlag('y')) {
	flagMap.sticky = 'y';
}

if (isSupportedRegexpFlag('u')) {
	flagMap.unicode = 'u';
}

module.exports = function (re, opts) {
	if (!isRegexp(re)) {
		throw new TypeError('Expected a RegExp instance :(');
	}

	opts = opts || {};

	var flags = Object.keys(flagMap).map(function (el) {
		return (typeof opts[el] === 'boolean' ? opts[el] : re[el]) ? flagMap[el] : '';
	}).join('');

  var source = opts.source || re.source;

  if (opts.replace) {
    if (!isArray(opts.replace) || opts.replace.length !== 2) {
      throw new TypeError('`opts.replace` needs to be an array with 2 items :(');
    }

    source = source.replace.apply(source, opts.replace)
  } else if (opts.append) {
    source = source.concat(opts.append)
  } else if (opts.prepend) {
    source = opts.prepend.concat(source)
  } else if (opts.remove) {
    source = source.replace(opts.remove, '')
  }

	return new RegExp(source, flags);
};
