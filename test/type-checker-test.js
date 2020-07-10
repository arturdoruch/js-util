/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

import objectChecker from './../lib/type-checker';

// todo Define real tests.

let x;
let y = 1;

console.log('undefined');
console.log(objectChecker.isUndefined(x));
console.log(objectChecker.isUndefined(y)); // false

console.log('boolean');
console.log(objectChecker.isBoolean(true));
console.log(objectChecker.isBoolean(null)); // false

console.log('string');
console.log(objectChecker.isString('abc'));
console.log(objectChecker.isString(String('abc')));
console.log(objectChecker.isString('123'));
console.log(objectChecker.isString(23)); // false

console.log('number');
console.log(objectChecker.isNumber(-12.2));
console.log(objectChecker.isNumber(Number('1.234')));
console.log(objectChecker.isNumber(Infinity));
console.log(objectChecker.isNumber(NaN)); // false
console.log(objectChecker.isNumber('123')); // false

console.log('integer');
console.log(objectChecker.isInteger(-23));
console.log(objectChecker.isInteger(0));
console.log(objectChecker.isInteger(Infinity)); // false
console.log(objectChecker.isInteger(2.3)); // false
console.log(objectChecker.isInteger('3545')); // false

console.log('positive integer');
console.log(objectChecker.isPositiveInteger(1));
console.log(objectChecker.isPositiveInteger(-1)); // false
console.log(objectChecker.isPositiveInteger(0)); // false

console.log('array');
console.log(objectChecker.isArray([]));
console.log(objectChecker.isArray('abc')); //false

console.log('object');
console.log(objectChecker.isObject({}));
console.log(objectChecker.isObject(function () {})); // false
console.log(objectChecker.isObject(String('abc'))); // false
console.log(objectChecker.isObject(1)); // false
console.log(objectChecker.isObject(x)); // false

console.log('function');
console.log(objectChecker.isFunction(function () {}));
console.log(objectChecker.isFunction(objectChecker)); // false
console.log(objectChecker.isFunction('abc')); // false