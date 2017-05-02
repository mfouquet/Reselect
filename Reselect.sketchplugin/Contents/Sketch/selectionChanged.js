@import 'lib/file.js';
@import 'lib/threading.js';
@import 'lib/settings.js';

var onSelectionChanged = function(context) {
  var vPreviousSelections = loadFromThreadDict(kReselectSelections);
  var vHasReselected = JSON.parse(loadFromThreadDict(kReselectHasReselected));
  var vMaxReselectAmount = loadFromThreadDict(kReselectMaxReselectAmount);

  if (!vMaxReselectAmount) {
    loadSettingsFile(context);
  }

  if (!vHasReselected) {
    var previousSelection = context.actionContext.oldSelection;

    if (previousSelection.count() > 0) {

      // Create a new array to house all of the previous selections
      // Have to do this because the array comes out as an object from the
      // threadDictionary - this converts it to a proper array
      var selectionsArr = [];
      for (var p = 0; p < vPreviousSelections.count(); p++) {
        selectionsArr.push(vPreviousSelections[p]);
      }

      // Create a new array housing the currently selected layers
      var previousSelectionArr = [];
      for (var c = 0; c < previousSelection.count(); c++) {
        previousSelectionArr.push(previousSelection[c].objectID());
      }

      if (selectionsArr.length >= vMaxReselectAmount) {
        selectionsArr.shift();
      }

      selectionsArr.push(previousSelectionArr);
      saveToThreadDict(kReselectSelections, selectionsArr);
    }
  } else {
    // User has just restored a selection - reset hasRestored
    // in threadDictionary to false
    saveToThreadDict(kReselectHasReselected, JSON.stringify(false));
  }
};
