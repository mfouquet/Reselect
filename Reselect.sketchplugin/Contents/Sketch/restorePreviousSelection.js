@import 'lib/threading.js';

var restorePreviousSelection = function(context) {
  var sketch = context.api();

  // Get the currently selected layers and deselect them all
  var document = sketch.selectedDocument;
  var selection = document.selectedLayers;

  var vPreviousSelections = loadFromThreadDict(kReselectSelections);

  // Create a new array to house all of the previous selections
  // Have to do this because the array comes out as an object from the
  // threadDictionary - this converts it to a proper array
  var selectionsArr = [];
  for (var p = 0; p < vPreviousSelections.count(); p++) {
    selectionsArr.push(vPreviousSelections[p]);
  }

  var lastSelection = selectionsArr.pop();

  if (lastSelection) {
    selection.clear();

    for (var l = 0; l < lastSelection.count(); l++) {
      document.layerWithID(lastSelection[l]).addToSelection();
    }
  }

  saveToThreadDict(kReselectSelections, selectionsArr);
  saveToThreadDict(kReselectHasReselected, JSON.stringify(true));
}
