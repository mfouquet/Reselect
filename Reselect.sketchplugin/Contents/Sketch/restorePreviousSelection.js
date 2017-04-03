@import 'lib/file-utils.js';
@import 'lib/mainThread-utils.js';
@import 'lib/search-utils.js';
@import 'lib/settings-utils.js';

var restorePreviousSelection = function(context) {

  // Check for any plugin updates
  checkForUpdates(context);

  // Get the currently selected layers and deselect them all
  var doc = context.document;
  var page = [doc currentPage];
  var layers = [page children];

  // Get the array of previous selections
  var vPreviousSelections = loadFromThreadDict(kReselectSelections];

  // Create a new array to house all of the previous selections
  // Have to do this because the array comes out as an object from the
  // threadDictionary - this converts it to a proper array
  var selectionsArr = [];
  for (var p = 0; p < vPreviousSelections.count(); p++) {
    selectionsArr.push(vPreviousSelections[p]);
  }

  // Get the last selection
  var lastSelection = selectionsArr.pop();

  // Loop through the last selection and select the layer if there's a match
  selectLayersWithMatchingObjectIds(doc, lastSelection);

  // Save the new array that should be short one now and
  // set hasRestored to true
  saveToThreadDict(kReselectSelections, selectionsArr);
  saveToThreadDict(kReselectHasRestored, JSON.stringify(true));
}

var checkForUpdates = function(context) {
  var vCheckForUpdates = loadFromThreadDict(kReselectCheckForUpdates);

  if (!vCheckForUpdates) {
    loadSettingsFile(context);
  }

  if (vCheckForUpdates) {
    if (checkForPluginUpdate(context) && isTodayNewDay()) {
      var scriptPath = context.scriptPath;
      var scriptFolder = [scriptPath stringByDeletingLastPathComponent];

      // Alert the user there are no selections that exist for that document
      var alert = NSAlert.alloc().init();
      var icon = NSImage.alloc().initByReferencingFile(scriptFolder + '/lib/icons/reselect.icns');
      alert.setIcon(icon);
      alert.setMessageText("A new version of Reselect is available");
      alert.setInformativeText("Download the new version at: https://github.com/mfouquet/Reselect");
      alert.addButtonWithTitle("Ok");
      alert.runModal();
    }
  }
}
