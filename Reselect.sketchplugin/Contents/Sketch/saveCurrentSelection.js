var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch/saveCurrentSelection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sketch/saveCurrentSelection.js":
/*!********************************************!*\
  !*** ./src/sketch/saveCurrentSelection.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/michaelfouquet/Development/Personal/Reselect/src/sketch/saveCurrentSelection.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (1:1):\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[33m@\u001b[39m\u001b[36mimport\u001b[39m \u001b[32m'lib/file.js'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mvar\u001b[39m saveCurrentSelection \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m(context) {\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m  \u001b[36mvar\u001b[39m sketch \u001b[33m=\u001b[39m context\u001b[33m.\u001b[39mapi()\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:757:17)\n    at Object.raiseWithData (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:750:17)\n    at Object.expectOnePlugin (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:8849:18)\n    at Object.parseDecorator (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:11385:10)\n    at Object.parseDecorators (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:11367:30)\n    at Object.parseStatement (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:11200:12)\n    at Object.parseBlockOrModuleBlockBody (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:11778:25)\n    at Object.parseBlockBody (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:11764:10)\n    at Object.parseTopLevel (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:11134:10)\n    at Object.parse (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:12836:10)\n    at parse (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/parser/lib/index.js:12889:38)\n    at parser (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/michaelfouquet/Development/Personal/Reselect/node_modules/@babel/core/lib/transformation/index.js:31:50)");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['saveCurrentSelection'] = __skpm_run.bind(this, 'saveCurrentSelection');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=saveCurrentSelection.js.map