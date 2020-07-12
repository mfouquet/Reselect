var that=this;function __skpm_run(e,t){that.context=t;var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/sketch/restorePreviousSelection.js")}({"./src/sketch/restorePreviousSelection.js":
/*!************************************************!*\
  !*** ./src/sketch/restorePreviousSelection.js ***!
  \************************************************/
/*! exports provided: restorePreviousSelection */function(e,t,n){"use strict";n.r(t),n.d(t,"restorePreviousSelection",function(){return s});var r=n(/*! sketch/dom */"sketch/dom"),o=n.n(r),i=n(/*! ./utilities/utilities */"./src/sketch/utilities/utilities.js"),s=function(){var e=o.a.getSelectedDocument(),t=e.selectedLayers,n=i.loadSessionVariable("selections")||[],r=n.pop();if(r){t.clear();for(var s=0;s<r.length;s++){e.getLayerWithID(r[s]).selected=!0}}i.saveSessionVariable("selections",n),i.saveSessionVariable("hasReselected",!0)}},"./src/sketch/utilities/utilities.js":
/*!*******************************************!*\
  !*** ./src/sketch/utilities/utilities.js ***!
  \*******************************************/
/*! exports provided: saveGlobalSetting, loadGlobalSetting, savePluginSetting, loadPluginSetting, saveSessionVariable, loadSessionVariable, openURL, showToast */function(e,t,n){"use strict";n.r(t),n.d(t,"saveGlobalSetting",function(){return u}),n.d(t,"loadGlobalSetting",function(){return c}),n.d(t,"savePluginSetting",function(){return a}),n.d(t,"loadPluginSetting",function(){return l}),n.d(t,"saveSessionVariable",function(){return f}),n.d(t,"loadSessionVariable",function(){return d}),n.d(t,"openURL",function(){return h}),n.d(t,"showToast",function(){return p});var r=n(/*! sketch/settings */"sketch/settings"),o=n.n(r),i=n(/*! sketch/ui */"sketch/ui"),s=n.n(i),u=function(e,t){o.a.setGlobalSettingForKey(e,t)},c=function(e){return o.a.globalSettingForKey(e)},a=function(e,t){o.a.setSettingForKey("com.mfouquet.sketch.reselect.".concat(e),t)},l=function(e){return o.a.settingForKey("com.mfouquet.sketch.reselect.".concat(e))},f=function(e,t){o.a.setSessionVariable("com.mfouquet.sketch.reselect.".concat(e),t)},d=function(e){return o.a.sessionVariable("com.mfouquet.sketch.reselect.".concat(e))},h=function(e){var t=NSURL.URLWithString(e);NSWorkspace.sharedWorkspace().openURL(t)},p=function(e){s.a.message(e)}},"sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/dom")},"sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/settings")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")}});"default"===e&&"function"==typeof n?n(t):n[e](t)}that.restorePreviousSelection=__skpm_run.bind(this,"restorePreviousSelection"),that.onRun=__skpm_run.bind(this,"default");