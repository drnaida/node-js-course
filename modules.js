// console.log(arguments);
// console.log(require('module').wrapper);

// moduke.exports
const Calc = require('./test-module-1');
const calc1 = new Calc();
console.log(calc1.add(2, 5));

// exports

// const calc2 = require('./test-module-2');
const {add, multiply } = require('./test-module-2');
console.log(add(2, 5));
console.log(multiply(2, 5));

//caching

require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();