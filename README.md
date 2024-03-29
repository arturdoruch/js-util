# Util

A collection of useful JavaScript utilities.
 
## Install

```
yarn add @arturdoruch/util
``` 

## Contents

#### Array utils

```js
import arrayUtils from '@arturdoruch/util/lib/array-utils.js';
```

 * removeValue

#### Object utils

```js
import objectUtils from '@arturdoruch/util/lib/object-utils.js';
```

 * filter
 * filterByKeyPattern
 * hasKeyPattern

#### Screen utils
  
```js  
import screenUtils from '@arturdoruch/util/lib/screen-utils.js';
```

 * getWidth
 * getHeight
 * getPageYOffset
 * getPageXOffset
 * setElementPosition

#### String utils

```js
import stringUtils from '@arturdoruch/util/lib/string-utils.js';
```

 * repeat
 * camelize
 * copyToClipboard

#### Url utils

```js
import urlUtils from '@arturdoruch/util/lib/url-utils.js';
```

 * parseQueryString
 * parseUrl
 
#### Type checker

Checks object type.

```js
import typeChecker from '@arturdoruch/util/lib/type-checker.js';
```

 * isUndefined
 * isBoolean
 * isString
 * isInteger
 * isPositiveInteger
 * isNumber
 * isArray
 * isFunction
 * isObject
 