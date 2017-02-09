/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smallImage = document.createElement('img');
smallImage.src = _small2.default;

document.body.appendChild(smallImage);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e0cc76d3b607c29cb3da25600df13d0e.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _math = __webpack_require__(1);

var _math2 = _interopRequireDefault(_math);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _math2.default)(10, 5);
console.log(total);

/***/ })
/******/ ]);