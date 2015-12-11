# reginald [![Build Status](https://travis-ci.org/jameswomack/reginald.svg?branch=master)](https://travis-ci.org/jameswomack/reginald)

> Clone and modify a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) instance, including removing, prepending, appending & replacing the source

Reginald is based on [clone-regexp](https://github.com/sindresorhus/clone-regexp) by [sindresorhus](https://github.com/sindresorhus). Reginald adds source manipulation functionality on top of what clone-regexp offered

## Install

```sh
$ npm i -S reginald
```


## Usage

```js
var reggie = require('reginald');
var re = /[a-z]/gi;

reggie(re);
//=> /[a-z]/gi

reggie(re) === re;
//=> false

reggie(re, {global: false});
//=> /[a-z]/i

reggie(re, {multiline: true});
//=> /[a-z]/gim

reggie(re, {source: 'wombat'});
//=> /wombat/gi

reggie(/a/, {replace: ['a','b']})
//=> /b/

reggie(/ab/, {remove: 'a'})
//=> /b/

reggie(/a/, {prepend: 'b'})
//=> /ba/

reggie(/a/, {append: 'b'})
//=> /ab/

reggie(/ab/, {remove: 'b'})
//=> /a/
```


## API

### reggie(regexp, [options])

#### regex

Type: `regexp`

RegExp instance to clone.


#### options

Type: `object`  
Properties: [`source`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) [`global`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) [`ignoreCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) [`multiline`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) [`sticky`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) [`unicode`](http://norbertlindenberg.com/2012/05/ecmascript-supplementary-characters/#RegExp)

Optionally modify the cloned RegExp instance.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
MIT © [James Womack](http://womack.io)
