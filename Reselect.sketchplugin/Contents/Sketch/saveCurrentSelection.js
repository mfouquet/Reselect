var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/sketch/saveCurrentSelection.js")}({"./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */function(e,t,r){var n=r(/*! buffer */"buffer").Buffer,i=r(/*! ./utils */"./node_modules/@skpm/fs/utils.js"),a=i.parseStat,o=i.fsError,l=i.fsErrorForPath,s=i.encodingFromOptions,c=i.NOT_IMPLEMENTED;e.exports.constants={F_OK:0,R_OK:4,W_OK:2,X_OK:1},e.exports.access=c("access"),e.exports.accessSync=function(t,r){r|=0;var n=NSFileManager.defaultManager();switch(r){case 0:canAccess=e.exports.existsSync(t);break;case 1:canAccess=Boolean(Number(n.isExecutableFileAtPath(t)));break;case 2:canAccess=Boolean(Number(n.isWritableFileAtPath(t)));break;case 3:canAccess=Boolean(Number(n.isExecutableFileAtPath(t)))&&Boolean(Number(n.isWritableFileAtPath(t)));break;case 4:canAccess=Boolean(Number(n.isReadableFileAtPath(t)));break;case 5:canAccess=Boolean(Number(n.isReadableFileAtPath(t)))&&Boolean(Number(n.isExecutableFileAtPath(t)));break;case 6:canAccess=Boolean(Number(n.isReadableFileAtPath(t)))&&Boolean(Number(n.isWritableFileAtPath(t)));break;case 7:canAccess=Boolean(Number(n.isReadableFileAtPath(t)))&&Boolean(Number(n.isWritableFileAtPath(t)))&&Boolean(Number(n.isExecutableFileAtPath(t)))}if(!canAccess)throw new Error("Can't access "+String(t))},e.exports.appendFile=c("appendFile"),e.exports.appendFileSync=function(t,r,i){if(!e.exports.existsSync(t))return e.exports.writeFileSync(t,r,i);var a=NSFileHandle.fileHandleForWritingAtPath(t);a.seekToEndOfFile();var o=s(i,"utf8"),l=n.from(r,"NSData"===o||"buffer"===o?void 0:o).toNSData();a.writeData(l)},e.exports.chmod=c("chmod"),e.exports.chmodSync=function(e,t){var r=MOPointer.alloc().init();if(NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFilePosixPermissions:t},e,r),null!==r.value())throw l(e,void 0,r.value())},e.exports.chown=c("chown"),e.exports.chownSync=c("chownSync"),e.exports.close=c("close"),e.exports.closeSync=c("closeSync"),e.exports.copyFile=c("copyFile"),e.exports.copyFileSync=function(e,t,r){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().copyItemAtPath_toPath_error(e,t,n),null!==n.value())throw l(e,!1,n.value())},e.exports.createReadStream=c("createReadStream"),e.exports.createWriteStream=c("createWriteStream"),e.exports.exists=c("exists"),e.exports.existsSync=function(e){var t=NSFileManager.defaultManager();return Boolean(Number(t.fileExistsAtPath(e)))},e.exports.fchmod=c("fchmod"),e.exports.fchmodSync=c("fchmodSync"),e.exports.fchown=c("fchown"),e.exports.fchownSync=c("fchownSync"),e.exports.fdatasync=c("fdatasync"),e.exports.fdatasyncSync=c("fdatasyncSync"),e.exports.fstat=c("fstat"),e.exports.fstatSync=c("fstatSync"),e.exports.fsync=c("fsync"),e.exports.fsyncSync=c("fsyncSync"),e.exports.ftruncate=c("ftruncate"),e.exports.ftruncateSync=c("ftruncateSync"),e.exports.futimes=c("futimes"),e.exports.futimesSync=c("futimesSync"),e.exports.lchmod=c("lchmod"),e.exports.lchmodSync=c("lchmodSync"),e.exports.lchown=c("lchown"),e.exports.lchownSync=c("lchownSync"),e.exports.link=c("link"),e.exports.linkSync=function(e,t){var r=MOPointer.alloc().init();if(NSFileManager.defaultManager().linkItemAtPath_toPath_error(e,t,r),null!==r.value())throw l(e,void 0,r.value())},e.exports.lstat=c("lstat"),e.exports.lstatSync=function(e){var t=MOPointer.alloc().init(),r=NSFileManager.defaultManager().attributesOfItemAtPath_error(e,t);if(null!==t.value())throw l(e,void 0,t.value());return a(r)},e.exports.mkdir=c("mkdir"),e.exports.mkdirSync=function(e,t){var r=511,n=!1;t&&t.mode&&(r=t.mode),t&&t.recursive&&(n=t.recursive),"number"==typeof t&&(r=t);var i=MOPointer.alloc().init();if(NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(e,n,{NSFilePosixPermissions:r},i),null!==i.value())throw new Error(i.value())},e.exports.mkdtemp=c("mkdtemp"),e.exports.mkdtempSync=function(t){var r=t+function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<6;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}();return e.exports.mkdirSync(r),r},e.exports.open=c("open"),e.exports.openSync=c("openSync"),e.exports.read=c("read"),e.exports.readdir=c("readdir"),e.exports.readdirSync=function(e,t){for(var r=s(t,"utf8"),i=NSFileManager.defaultManager().subpathsAtPath(e),a=[],o=0;o<i.length;o++){var l=i[o];a.push("buffer"===r?n.from(l):String(l))}return a},e.exports.readFile=c("readFile"),e.exports.readFileSync=function(e,t){var r=s(t,"buffer"),i=NSFileManager.defaultManager().contentsAtPath(e);if(!i)throw l(e,!1);var a=n.from(i);return"buffer"===r?a:"NSData"===r?a.toNSData():a.toString(r)},e.exports.readlink=c("readlink"),e.exports.readlinkSync=function(e){var t=MOPointer.alloc().init(),r=NSFileManager.defaultManager().destinationOfSymbolicLinkAtPath_error(e,t);if(null!==t.value())throw l(e,void 0,t.value());return String(r)},e.exports.readSync=c("readSync"),e.exports.realpath=c("realpath"),e.exports.realpath.native=c("realpath.native"),e.exports.realpathSync=function(e){return String(NSString.stringWithString(e).stringByResolvingSymlinksInPath())},e.exports.realpathSync.native=c("realpathSync.native"),e.exports.rename=c("rename"),e.exports.renameSync=function(e,t){var r=MOPointer.alloc().init(),n=NSFileManager.defaultManager();n.moveItemAtPath_toPath_error(e,t,r);var i=r.value();if(null!==i){if("NSCocoaErrorDomain"!==String(i.domain())||516!==Number(i.code()))throw l(e,void 0,i);var a=MOPointer.alloc().init();if(n.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(NSURL.fileURLWithPath(t),NSURL.fileURLWithPath(e),null,NSFileManagerItemReplacementUsingNewMetadataOnly,null,a),null!==a.value())throw l(e,void 0,a.value())}},e.exports.rmdir=c("rmdir"),e.exports.rmdirSync=function(t){var r=MOPointer.alloc().init(),n=NSFileManager.defaultManager();if(!e.exports.lstatSync(t).isDirectory())throw o("ENOTDIR",{path:t,syscall:"rmdir"});if(n.removeItemAtPath_error(t,r),null!==r.value())throw l(t,!0,r.value(),"rmdir")},e.exports.stat=c("stat"),e.exports.statSync=function(t){return e.exports.lstatSync(e.exports.realpathSync(t))},e.exports.symlink=c("symlink"),e.exports.symlinkSync=function(e,t){var r=MOPointer.alloc().init();NSFileManager.defaultManager().createSymbolicLinkAtPath_withDestinationPath_error(t,e,r);if(null!==r.value())throw new Error(r.value())},e.exports.truncate=c("truncate"),e.exports.truncateSync=function(e,t){var r=NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);r.truncateFileAtOffset(t||0),r.closeFile()},e.exports.unlink=c("unlink"),e.exports.unlinkSync=function(t){var r=MOPointer.alloc().init(),n=NSFileManager.defaultManager();if(e.exports.lstatSync(t).isDirectory())throw o("EPERM",{path:t,syscall:"unlink"});n.removeItemAtPath_error(t,r);if(null!==r.value())throw l(t,!1,r.value())},e.exports.unwatchFile=c("unwatchFile"),e.exports.utimes=c("utimes"),e.exports.utimesSync=function(e,t,r){var n=MOPointer.alloc().init();NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFileModificationDate:t},e,n);if(null!==n.value())throw l(e,void 0,n.value())},e.exports.watch=c("watch"),e.exports.watchFile=c("watchFile"),e.exports.write=c("write"),e.exports.writeFile=c("writeFile"),e.exports.writeFileSync=function(e,t,r){var i=s(r,"utf8");n.from(t,"NSData"===i||"buffer"===i?void 0:i).toNSData().writeToFile_atomically(e,!0)},e.exports.writeSync=c("writeSync")},"./node_modules/@skpm/fs/utils.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/utils.js ***!
  \****************************************/
/*! no static exports found */function(e,t,r){e.exports.parseStat=function(e){return{dev:String(e.NSFileDeviceIdentifier),mode:e.NSFileType|e.NSFilePosixPermissions,nlink:Number(e.NSFileReferenceCount),uid:String(e.NSFileOwnerAccountID),gid:String(e.NSFileGroupOwnerAccountID),size:Number(e.NSFileSize),atimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),mtimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),ctimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),birthtimeMs:1e3*Number(e.NSFileCreationDate.timeIntervalSince1970()),atime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),mtime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),ctime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),birthtime:new Date(1e3*Number(e.NSFileCreationDate.timeIntervalSince1970())+.5),isBlockDevice:function(){return e.NSFileType===NSFileTypeBlockSpecial},isCharacterDevice:function(){return e.NSFileType===NSFileTypeCharacterSpecial},isDirectory:function(){return e.NSFileType===NSFileTypeDirectory},isFIFO:function(){return!1},isFile:function(){return e.NSFileType===NSFileTypeRegular},isSocket:function(){return e.NSFileType===NSFileTypeSocket},isSymbolicLink:function(){return e.NSFileType===NSFileTypeSymbolicLink}}};var n={EPERM:{message:"operation not permitted",errno:-1},ENOENT:{message:"no such file or directory",errno:-2},EACCES:{message:"permission denied",errno:-13},ENOTDIR:{message:"not a directory",errno:-20},EISDIR:{message:"illegal operation on a directory",errno:-21}};function i(e,t){var r=new Error(e+": "+n[e].message+", "+(t.syscall||"")+(t.path?" '"+t.path+"'":""));return Object.keys(t).forEach(function(e){r[e]=t[e]}),r.code=e,r.errno=n[e].errno,r}e.exports.fsError=i,e.exports.fsErrorForPath=function(e,t,n,a){var o=NSFileManager.defaultManager();if(!o.fileExistsAtPath(e))return i("ENOENT",{path:e,syscall:a||"open"});if(!o.isReadableFileAtPath(e))return i("EACCES",{path:e,syscall:a||"open"});if(void 0!==t){var l=r(/*! ./index */"./node_modules/@skpm/fs/index.js").lstatSync(e).isDirectory();if(l&&!t)return i("EISDIR",{path:e,syscall:a||"read"});if(!l&&t)return i("ENOTDIR",{path:e,syscall:a||"read"})}return new Error(n||"Unknown error while manipulating "+e)},e.exports.encodingFromOptions=function(e,t){return e&&e.encoding?String(e.encoding):e?String(e):t},e.exports.NOT_IMPLEMENTED=function(e){return function(){throw new Error("fs."+e+" is not implemented yet. If you feel like implementing it, any contribution will be gladly accepted on https://github.com/skpm/fs")}}},"./node_modules/@skpm/path/index.js":
/*!******************************************!*\
  !*** ./node_modules/@skpm/path/index.js ***!
  \******************************************/
/*! no static exports found */function(e,t,r){var n=r(/*! ./sketch-specifics */"./node_modules/@skpm/path/sketch-specifics.js"),i=47,a=46;function o(e,t){for(var r,n="",o=0,l=-1,s=0,c=0;c<=e.length;c+=1){if(c<e.length)r=e.charCodeAt(c);else{if(r===i)break;r=i}if(r===i){if(l===c-1||1===s);else if(l!==c-1&&2===s){if(n.length<2||2!==o||n.charCodeAt(n.length-1)!==a||n.charCodeAt(n.length-2)!==a)if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){-1===u?(n="",o=0):o=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),l=c,s=0;continue}}else if(2===n.length||1===n.length){n="",o=0,l=c,s=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(l+1,c):n=e.slice(l+1,c),o=c-l-1;l=c,s=0}else r===a&&-1!==s?++s:s=-1}return n}var l={resolve:function(){for(var e,t="",r=!1,a=arguments.length-1;a>=-1&&!r;a-=1){var s;a>=0?s=arguments[a]:(void 0===e&&(e=l.dirname(n.cwd())),s=e),0!==(s=n.getString(s,"path")).length&&(t=s+"/"+t,r=s.charCodeAt(0)===i)}return t=o(t,!r),r?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(0===(e=n.getString(e,"path")).length)return".";var t=e.charCodeAt(0)===i,r=e.charCodeAt(e.length-1)===i;return 0!==(e=o(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return(e=n.getString(e,"path")).length>0&&e.charCodeAt(0)===i},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;t+=1){var r=arguments[t];(r=n.getString(r,"path")).length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":l.normalize(e)},relative:function(e,t){if((e=n.getString(e,"from path"))===(t=n.getString(t,"to path")))return"";if((e=l.resolve(e))===(t=l.resolve(t)))return"";for(var r=1;r<e.length&&e.charCodeAt(r)===i;r+=1);for(var a=e.length,o=a-r,s=1;s<t.length&&t.charCodeAt(s)===i;s+=1);for(var c=t.length-s,u=o<c?o:c,f=-1,h=0;h<=u;h+=1){if(h===u){if(c>u){if(t.charCodeAt(s+h)===i)return t.slice(s+h+1);if(0===h)return t.slice(s+h)}else o>u&&(e.charCodeAt(r+h)===i?f=h:0===h&&(f=0));break}var p=e.charCodeAt(r+h);if(p!==t.charCodeAt(s+h))break;p===i&&(f=h)}var d="";for(h=r+f+1;h<=a;h+=1)h!==a&&e.charCodeAt(h)!==i||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(s+f):(s+=f,t.charCodeAt(s)===i&&(s+=1),t.slice(s))},toNamespacedPath:function(e){return e},dirname:function(e){if(0===(e=n.getString(e,"path")).length)return".";for(var t=e.charCodeAt(0),r=t===i,a=-1,o=!0,l=e.length-1;l>=1;l-=1)if((t=e.charCodeAt(l))===i){if(!o){a=l;break}}else o=!1;return-1===a?r?"/":".":r&&1===a?"//":e.slice(0,a)},basename:function(e,t){void 0!==t&&(t=n.getString(t,"ext")),e=n.getString(e,"path");var r,a=0,o=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var s=t.length-1,c=-1;for(r=e.length-1;r>=0;r-=1){var u=e.charCodeAt(r);if(u===i){if(!l){a=r+1;break}}else-1===c&&(l=!1,c=r+1),s>=0&&(u===t.charCodeAt(s)?-1==--s&&(o=r):(s=-1,o=c))}return a===o?o=c:-1===o&&(o=e.length),e.slice(a,o)}for(r=e.length-1;r>=0;--r)if(e.charCodeAt(r)===i){if(!l){a=r+1;break}}else-1===o&&(l=!1,o=r+1);return-1===o?"":e.slice(a,o)},extname:function(e){for(var t=-1,r=0,o=-1,l=!0,s=0,c=(e=n.getString(e,"path")).length-1;c>=0;--c){var u=e.charCodeAt(c);if(u!==i)-1===o&&(l=!1,o=c+1),u===a?-1===t?t=c:1!==s&&(s=1):-1!==t&&(s=-1);else if(!l){r=c+1;break}}return-1===t||-1===o||0===s||1===s&&t===o-1&&t===r+1?"":e.slice(t,o)},format:function(e){if(null===e||"object"!=typeof e)throw new Error("pathObject should be an Object");return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){var t={root:"",dir:"",base:"",ext:"",name:""};if(0===(e=n.getString(e,"path")).length)return t;var r,o=e.charCodeAt(0),l=o===i;l?(t.root="/",r=1):r=0;for(var s=-1,c=0,u=-1,f=!0,h=e.length-1,p=0;h>=r;--h)if((o=e.charCodeAt(h))!==i)-1===u&&(f=!1,u=h+1),o===a?-1===s?s=h:1!==p&&(p=1):-1!==s&&(p=-1);else if(!f){c=h+1;break}return-1===s||-1===u||0===p||1===p&&s===u-1&&s===c+1?-1!==u&&(t.base=t.name=0===c&&l?e.slice(1,u):e.slice(c,u)):(0===c&&l?(t.name=e.slice(1,s),t.base=e.slice(1,u)):(t.name=e.slice(c,s),t.base=e.slice(c,u)),t.ext=e.slice(s,u)),c>0?t.dir=e.slice(0,c-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null,resourcePath:n.resourcePath};e.exports=l,e.exports.posix=l},"./node_modules/@skpm/path/sketch-specifics.js":
/*!*****************************************************!*\
  !*** ./node_modules/@skpm/path/sketch-specifics.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,r){var n=r(/*! util */"util");e.exports.getString=function(e,t){if(!n.isString(e)){if("NSURL"===n.getNativeClass(e))return String(e.path().copy());throw new Error(t+" should be a string. Got "+typeof e+" instead.")}return String(e)},e.exports.cwd=function(){return"undefined"!=typeof __command&&__command.script()&&__command.script().URL()?String(__command.script().URL().path().copy()):String(MSPluginManager.defaultPluginURL().path().copy())},e.exports.resourcePath=function(e){if("undefined"!=typeof __command&&__command.pluginBundle()){var t=__command.pluginBundle().urlForResourceNamed(e);if(t)return String(t.path())}}},"./src/sketch/saveCurrentSelection.js":
/*!********************************************!*\
  !*** ./src/sketch/saveCurrentSelection.js ***!
  \********************************************/
/*! exports provided: saveCurrentSelection */function(e,t,r){"use strict";r.r(t),r.d(t,"saveCurrentSelection",function(){return f});var n=r(/*! sketch/dom */"sketch/dom"),i=r.n(n),a=r(/*! sketch/ui */"sketch/ui"),o=r.n(a),l=r(/*! @skpm/fs */"./node_modules/@skpm/fs/index.js"),s=r.n(l),c=r(/*! @skpm/path */"./node_modules/@skpm/path/index.js"),u=r.n(c),f=function(){var e=i.a.getSelectedDocument(),t=e.id,r=e.selectedLayers,n="".concat(r.layers.length," ").concat(1===r.layers.length?"layer":"layers");o.a.getInputFromUser("Enter a name for this selection",{initialValue:n},function(e,n){if(!e){for(var i=[],a=0;a<r.layers.length;a++)i.push(r.layers[a].id);var o,l=u.a.resolve(".."),c="".concat(l,"/selections"),f="".concat(l,"/selections/").concat(t,".txt");if(s.a.existsSync(c)||s.a.mkdirSync(c),s.a.existsSync(f)){var h=s.a.readFileSync(f);o=JSON.parse(h);for(var p=-1,d=0;d<o.selectionsArray.length;d++)o.selectionsArray[d].selectionName===n&&(p=d);if(-1!==p){var m=NSAlert.alloc().init();if(m.setMessageText("Warning"),m.setInformativeText("A selection with that name already exists for this document. Would you like to overwrite?"),m.addButtonWithTitle("Yes"),m.addButtonWithTitle("No"),"1000"!=m.runModal())return;o.selectionsArray.splice(p,1)}}else o={selectionsArray:[]};o.selectionsArray.push({selectionName:n,selection:i}),s.a.writeFileSync(f,JSON.stringify(o))}})}},buffer:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("buffer")},"sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/dom")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")},util:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("util")}});"default"===e&&"function"==typeof r?r(t):r[e](t)}that.saveCurrentSelection=__skpm_run.bind(this,"saveCurrentSelection"),that.onRun=__skpm_run.bind(this,"default");