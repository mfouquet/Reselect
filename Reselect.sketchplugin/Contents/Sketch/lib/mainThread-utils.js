// Figured out how to temp save items with help from tylergaw's Day Player
// which is available here: https://github.com/tylergaw/day-player

var mainThreadDict = NSThread.mainThread().threadDictionary();

var kPluginDomain = "com.mfouquet.sketch.reselect"
var kReselectSelections = kPluginDomain + ".selections";
var kReselectHasRestored = kPluginDomain + ".hasRestored";
var kReselectMaxRestoreCount = kPluginDomain + ".maxRestoreCount";
var kReselectCheckForUpdates = kPluginDomain + ".checkForUpdates";
var kReselectLastUpdateCheck = kPluginDomain + ".lastUpdateCheck";

if (!mainThreadDict[kReselectSelections]) {
  mainThreadDict[kReselectSelections] = [];
}

if (!mainThreadDict[kReselectHasRestored]) {
  mainThreadDict[kReselectHasRestored] = JSON.stringify(false);
}

if (!mainThreadDict[kReselectMaxRestoreCount]) {
  mainThreadDict[kReselectMaxRestoreCount] = null;
}

if (!mainThreadDict[kReselectCheckForUpdates]) {
  mainThreadDict[kReselectCheckForUpdates] = null;
}

var saveToThreadDict = function(threadKey, obj) {
  mainThreadDict[threadKey] = obj;
};

var loadFromThreadDict = function(threadKey) {
  return mainThreadDict[threadKey];
}
