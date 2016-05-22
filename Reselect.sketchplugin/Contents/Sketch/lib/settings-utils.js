
var loadSettingsFile = function(context) {
  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];
  var settingsFile = jsonFromFile(scriptFolder + '/lib/settings.js', true);

  saveToThreadDict(kReselectMaxRestoreCount, settingsFile.maxRestoreCount);
  saveToThreadDict(kReselectCheckForUpdates, settingsFile.checkForUpdates);
}

// Check for updates code is from the excellent Checkpoints plugin by einancunlu
// available here: https://github.com/einancunlu/Checkpoints-Plugin-for-Sketch
var checkForPluginUpdate = function(context) {
  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];
	var manifestFilePath = scriptFolder + "/manifest.json";

	var manifestJSON = jsonFromFile(manifestFilePath);
	var isThereNewUpdate = false;

	try {
		var response = jsonFromUrl('https://raw.githubusercontent.com/mfouquet/Reselect/master/Reselect.sketchplugin/Contents/Sketch/manifest.json')
		if (response && response.version) {
			if (response.version.toString() != manifestJSON.version.toString()) {
				isThereNewUpdate = true
			}
		}
	} catch (e) {
		log(e)
		return false
	}
	return isThereNewUpdate
}

var isTodayNewDay = function isTodayNewDay() {

	var lastUpdateCheckDay = loadFromThreadDict(kReselectLastUpdateCheck);

	var formatter = [[NSDateFormatter alloc] init]
	[formatter setDateStyle: NSDateFormatterShortStyle]
	var today = [formatter stringFromDate: [NSDate date]]
	saveToThreadDict(kReselectLastUpdateCheck, today)

	if (lastUpdateCheckDay) {
		return lastUpdateCheckDay != today
	} else {
		return true
	}
}
