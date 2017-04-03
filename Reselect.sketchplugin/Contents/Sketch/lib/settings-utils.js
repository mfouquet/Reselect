
var loadSettingsFile = function(context) {
  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];
  var settingsFile = jsonFromFile(scriptFolder + '/lib/settings.js', true);

  saveToThreadDict(kReselectMaxRestoreCount, settingsFile.maxRestoreCount);
  saveToThreadDict(kReselectCheckForUpdates, settingsFile.checkForUpdates);
}
