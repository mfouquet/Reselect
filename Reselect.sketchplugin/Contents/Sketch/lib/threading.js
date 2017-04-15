var mainThreadDict = NSThread.mainThread().threadDictionary();
var kPluginDomain = "com.mfouquet.sketch.reselect";
var kSelections = kPluginDomain + ".selections";

if (!mainThreadDict[kSelections]) {
  log('create selection dictionary');
  mainThreadDict[kSelections] = [];
}
