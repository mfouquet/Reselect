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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch/restorePreviousSelection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sketch/restorePreviousSelection.js":
/*!************************************************!*\
  !*** ./src/sketch/restorePreviousSelection.js ***!
  \************************************************/
/*! exports provided: restorePreviousSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restorePreviousSelection", function() { return restorePreviousSelection; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/utilities */ "./src/sketch/utilities/utilities.js");



var restorePreviousSelection = function restorePreviousSelection() {
  var document = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  var selections = _utilities_utilities__WEBPACK_IMPORTED_MODULE_1__["loadSessionVariable"]("selections") || [];
  var lastSelection = selections.pop();

  if (lastSelection) {
    selectedLayers.clear();

    for (var i = 0; i < lastSelection.length; i++) {
      var layer = document.getLayerWithID(lastSelection[i]);
      layer.selected = true;
    }
  }

  _utilities_utilities__WEBPACK_IMPORTED_MODULE_1__["saveSessionVariable"]("selections", selections);
  _utilities_utilities__WEBPACK_IMPORTED_MODULE_1__["saveSessionVariable"]("hasReselected", true);
};



/***/ }),

/***/ "./src/sketch/utilities/utilities.js":
/*!*******************************************!*\
  !*** ./src/sketch/utilities/utilities.js ***!
  \*******************************************/
/*! exports provided: saveGlobalSetting, loadGlobalSetting, savePluginSetting, loadPluginSetting, saveSessionVariable, loadSessionVariable, openURL, showToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGlobalSetting", function() { return saveGlobalSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGlobalSetting", function() { return loadGlobalSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePluginSetting", function() { return savePluginSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPluginSetting", function() { return loadPluginSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSessionVariable", function() { return saveSessionVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSessionVariable", function() { return loadSessionVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openURL", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);


/* 
Saves a global setting in Sketch to the provided key
*/

var saveGlobalSetting = function saveGlobalSetting(key, value) {
  sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.setGlobalSettingForKey(key, value);
};
/* 
Loads a global setting in Sketch to the provided key
*/


var loadGlobalSetting = function loadGlobalSetting(key) {
  return sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.globalSettingForKey(key);
};
/* 
Saves a plugin setting in Sketch to the provided key
*/


var savePluginSetting = function savePluginSetting(key, value) {
  sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.setSettingForKey("com.mfouquet.sketch.reselect.".concat(key), value);
};
/* 
Loads a plugin setting in Sketch with the provided key
*/


var loadPluginSetting = function loadPluginSetting(key) {
  return sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.settingForKey("com.mfouquet.sketch.reselect.".concat(key));
};
/* 
Saves a session variable in Sketch to the provided key
*/


var saveSessionVariable = function saveSessionVariable(key, value) {
  sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.setSessionVariable("com.mfouquet.sketch.reselect.".concat(key), value);
};
/* 
Loads a session variable in Sketch with the provided key
*/


var loadSessionVariable = function loadSessionVariable(key) {
  return sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.sessionVariable("com.mfouquet.sketch.reselect.".concat(key));
};
/* 
Opens a URL from Sketch
*/


var openURL = function openURL(url) {
  var nsurl = NSURL.URLWithString(url);
  NSWorkspace.sharedWorkspace().openURL(nsurl);
};
/*
Shows a message at the bottom of the Sketch window
*/


var showToast = function showToast(message) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.message(message);
};



/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['restorePreviousSelection'] = __skpm_run.bind(this, 'restorePreviousSelection');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=restorePreviousSelection.js.map