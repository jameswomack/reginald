'use strict'

var tap = require('tap')
var reggie = require('./')

tap.test('should clone and modify RegExp', function (t) {
	t.strictEqual(reggie(/a/, {multiline: true}).toString(), '/a/m')
	t.strictEqual(reggie(/a/gi, {source: 'b', global: false}).toString(), '/b/i')
	t.strictEqual(reggie(/a/, {
		source     : 'b',
		global     : true,
		ignoreCase : true,
		multiline  : true
	}).toString(), '/b/gim')
  t.end()
})

tap.test('should replace', function (t) {
	t.strictEqual(reggie(/a/, {replace: ['a','b']}).toString(), '/b/')
  t.end()
})

tap.test('should remove', function (t) {
	t.strictEqual(reggie(/ab/, {remove: 'a'}).toString(), '/b/')
  t.end()
})

tap.test('should prepend', function (t) {
	t.strictEqual(reggie(/a/, {prepend: 'b'}).toString(), '/ba/')
  t.end()
})

tap.test('should append', function (t) {
	t.strictEqual(reggie(/a/, {append: 'b'}).toString(), '/ab/')
  t.end()
})
