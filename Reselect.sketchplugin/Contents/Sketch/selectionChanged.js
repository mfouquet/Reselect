@import 'lib/file-utils.js';
@import 'lib/mainThread-utils.js';
@import 'lib/settings-utils.js';

var onSelectionChanged = function(context) {

  // Grab the saved values from the threadDictionary
  var vPreviousSelections = loadFromThreadDict(kReselectSelections];
  var vHasRestored = JSON.parse(loadFromThreadDict(kReselectHasRestored));
  var vMaxRestoreCount = loadFromThreadDict(kReselectMaxRestoreCount);

  // Load the settings if they don't currently exist
  if (!vMaxRestoreCount) {
    loadSettingsFile(context);
  }

  // Only run this if the user has not previously restored
  // Otherwise, it'll just skip over the selections
  if (!vHasRestored) {

    // Get what the user previously had selected
    var previousSelection = context.actionContext.oldSelection;

    // Don't store the selection if there is nothing in the previous selection
    if (previousSelection.count() > 0) {

      // Create a new array to house all of the previous selections
      // Have to do this because the array comes out as an object from the
      // threadDictionary - this converts it to a proper array
      var selectionsArr = [];
      for (var p = 0; p < vPreviousSelections.count(); p++) {
        selectionsArr.push(vPreviousSelections[p]);
      }

      // Create a new array to hold what was in the previous selection
      var previousSelectionArr = [];
      for (var c = 0; c < previousSelection.count(); c++) {
        previousSelectionArr.push(previousSelection[c].objectID());
      }

      if (selectionsArr.length < vMaxRestoreCount) {
        // Push to the stack if there are less than 3 previous selections
        selectionsArr.push(previousSelectionArr);
      } else {
        // Remove the first selection and then push if currently at 3
        selectionsArr.shift();
        selectionsArr.push(previousSelectionArr);
      }

      // Save the selections back to the threadDictionary
      saveToThreadDict(kReselectSelections, selectionsArr);
    }
  } else {
    // User has just restored a selection - reset hasRestored
    // in threadDictionary to false
    saveToThreadDict(kReselectHasRestored, JSON.stringify(false));
  }
};
