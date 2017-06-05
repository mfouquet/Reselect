// Figured out how to temp save items with help from tylergaw's Day Player
// which is available here: https://github.com/tylergaw/day-player

var mainThreadDict = NSThread.mainThread().threadDictionary();

var kPluginDomain = "com.mfouquet.sketch.reselect"
var kReselectSelections = kPluginDomain + ".selections";
var kReselectHasReselected = kPluginDomain + ".hasReselected";
var kReselectMaxReselectAmount = kPluginDomain + ".maxReselectAmount";

if (!mainThreadDict[kReselectSelections]) {
  mainThreadDict[kReselectSelections] = [];
}

if (!mainThreadDict[kReselectHasReselected]) {
  mainThreadDict[kReselectHasReselected] = JSON.stringify(false);
}

if (!mainThreadDict[kReselectMaxReselectAmount]) {
  mainThreadDict[kReselectMaxReselectAmount] = null;
}

var saveToThreadDict = function(threadKey, obj) {
  mainThreadDict[threadKey] = obj;
};

var loadFromThreadDict = function(threadKey) {
  return mainThreadDict[threadKey];
}
