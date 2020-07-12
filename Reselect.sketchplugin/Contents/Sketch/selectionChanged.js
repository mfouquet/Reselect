var that=this;function __skpm_run(e,t){that.context=t;var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/sketch/selectionChanged.js")}({"./src/sketch/selectionChanged.js":
/*!****************************************!*\
  !*** ./src/sketch/selectionChanged.js ***!
  \****************************************/
/*! exports provided: selectionChanged */function(e,t,n){"use strict";n.r(t),n.d(t,"selectionChanged",function(){return i});var r=n(/*! ./utilities/utilities */"./src/sketch/utilities/utilities.js"),o=n(/*! ./utilities/constants */"./src/sketch/utilities/constants.js"),i=function(e){if(r.loadSessionVariable("hasReselected"))r.saveSessionVariable("hasReselected",!1);else{var t=r.loadSessionVariable("selections")||[],n=r.loadPluginSetting(o.SETTINGS_PLUGIN_RESELECTAMOUNT)||10,i=e.actionContext.oldSelection;if(i.length>0){for(var s=[],u=0;u<i.length;u++)s.push(i[u].objectID());t.push(s),t.length>n&&t.shift(),r.saveSessionVariable("selections",t)}}}},"./src/sketch/utilities/constants.js":
/*!*******************************************!*\
  !*** ./src/sketch/utilities/constants.js ***!
  \*******************************************/
/*! exports provided: SETTINGS_PLUGIN_RESELECTAMOUNT, URL_WEBSITE, URL_HELP, URL_CHANGELOG */function(e,t,n){"use strict";n.r(t),n.d(t,"SETTINGS_PLUGIN_RESELECTAMOUNT",function(){return r}),n.d(t,"URL_WEBSITE",function(){return o}),n.d(t,"URL_HELP",function(){return i}),n.d(t,"URL_CHANGELOG",function(){return s});var r="amount",o="http://www.reselect.co/",i="http://www.reselect.co/",s="https://github.com/mfouquet/Reselect/releases"},"./src/sketch/utilities/utilities.js":
/*!*******************************************!*\
  !*** ./src/sketch/utilities/utilities.js ***!
  \*******************************************/
/*! exports provided: saveGlobalSetting, loadGlobalSetting, savePluginSetting, loadPluginSetting, saveSessionVariable, loadSessionVariable, openURL, showToast */function(e,t,n){"use strict";n.r(t),n.d(t,"saveGlobalSetting",function(){return u}),n.d(t,"loadGlobalSetting",function(){return c}),n.d(t,"savePluginSetting",function(){return a}),n.d(t,"loadPluginSetting",function(){return l}),n.d(t,"saveSessionVariable",function(){return f}),n.d(t,"loadSessionVariable",function(){return d}),n.d(t,"openURL",function(){return h}),n.d(t,"showToast",function(){return g});var r=n(/*! sketch/settings */"sketch/settings"),o=n.n(r),i=n(/*! sketch/ui */"sketch/ui"),s=n.n(i),u=function(e,t){o.a.setGlobalSettingForKey(e,t)},c=function(e){return o.a.globalSettingForKey(e)},a=function(e,t){o.a.setSettingForKey("com.mfouquet.sketch.reselect.".concat(e),t)},l=function(e){return o.a.settingForKey("com.mfouquet.sketch.reselect.".concat(e))},f=function(e,t){o.a.setSessionVariable("com.mfouquet.sketch.reselect.".concat(e),t)},d=function(e){return o.a.sessionVariable("com.mfouquet.sketch.reselect.".concat(e))},h=function(e){var t=NSURL.URLWithString(e);NSWorkspace.sharedWorkspace().openURL(t)},g=function(e){s.a.message(e)}},"sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/settings")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")}});"default"===e&&"function"==typeof n?n(t):n[e](t)}that.selectionChanged=__skpm_run.bind(this,"selectionChanged"),that.onRun=__skpm_run.bind(this,"default");