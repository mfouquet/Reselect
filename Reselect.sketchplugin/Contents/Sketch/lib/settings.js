var loadSettingsFile = function(context) {
  var scriptPath = context.scriptPath;
  var scriptFolder = scriptPath.stringByDeletingLastPathComponent();
  scriptFolder = scriptFolder.stringByDeletingLastPathComponent();
  var settingsFile = jsonFromFile(scriptFolder + '/Resources/settings.js', true);

  saveToThreadDict(kReselectMaxReselectAmount, settingsFile.maxReselectAmount);
}
