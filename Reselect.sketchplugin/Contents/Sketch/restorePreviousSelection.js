@import 'lib/search.js';
@import 'lib/threading.js';

var restorePreviousSelection = function(context) {

  // Get the currently selected layers and deselect them all
  var doc = context.document;
  var page = [doc currentPage];
  var layers = [page children];

  var vPreviousSelections = mainThreadDict[kReselectSelections];

  // Create a new array to house all of the previous selections
  // Have to do this because the array comes out as an object from the
  // threadDictionary - this converts it to a proper array
  var selectionsArr = [];
  for (var p = 0; p < vPreviousSelections.count(); p++) {
    selectionsArr.push(vPreviousSelections[p]);
  }

  var lastSelection = selectionsArr.pop();
  selectLayersWithMatchingObjectIds(doc, lastSelection);

  saveToThreadDict(kReselectSelections, selectionsArr);
  saveToThreadDict(kReselectHasRestored, JSON.stringify(true));
}
