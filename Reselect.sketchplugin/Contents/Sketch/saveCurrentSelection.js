@import 'lib/file-utils.js';

var saveCurrentSelection = function(context) {
  var doc = context.document;
  var docId = doc.documentData().objectID();
  var currentSelection = context.selection;

  var scriptPath = context.scriptPath
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent]

  // Create an array containing the objectID's of each selected item
  var currentSelectionArray = [];
  for (var i = 0; i < currentSelection.count(); i++) {
    currentSelectionArray.push(currentSelection.objectAtIndex(i).objectID());
  }

  // Determine what the user would like to name the current selection
  var numOfLayers = (currentSelection.count() > 1) ? " layers" : " layer"
  var selectionName = [doc askForUserInput: "Enter a name for this selection" initialValue: currentSelection.count() + numOfLayers]

  // If they provide a selection name, continue on to saving the selection
  if (selectionName) {

    // Pull the document's selection file, if it exists
    var documentFile = jsonFromFile(scriptFolder + '/selections/' + docId + '.txt', true);

    // Create an array that will house each of the existing selection objects
    // in the document's selection file
    var selectionsArray = [];

    if (documentFile) {
      for (var i=0; i < documentFile.selectionsArray.count(); i++) {
        selectionsArray.push(documentFile.selectionsArray[i]);

        // If the user types a name that already exists, confirm
        // that the user would like to overwrite existing selection
        if (documentFile.selectionsArray[i].selectionName == selectionName) {
          var alert = NSAlert.alloc().init();
          var icon = NSImage.alloc().initByReferencingFile(scriptFolder + '/lib/icons/reselect-warning.icns');
          alert.setIcon(icon);
          alert.setMessageText("Warning");
          alert.setInformativeText("A selection with that name already exists for this document. Would you like to overwrite?");
          alert.addButtonWithTitle("Yes");
          alert.addButtonWithTitle("No");
          var responseCode = alert.runModal();

          // If the user selects Yes (code 1000), pop it off the array. If the user selects
          // No, exit out - (they'll have to go back and resave with a new name)
          if (responseCode != "1000") {
            return;
          } else {
            selectionsArray.pop();
          }
        }
      }
    } else {
      // No document file exists? Create a new document file object
      documentFile = {
        selectionsArray: [ ]
      }
    }

    // Create a new selection object with the user-provided name and
    // current selection
    var selection = {
      selectionName: selectionName,
      selection: currentSelectionArray
    }

    // Add that new selection object to the existing array of selections and
    // save it back to the document file
    selectionsArray.push(selection);
    documentFile.selectionsArray = selectionsArray;

    saveJsonToFile(documentFile, scriptFolder + '/selections/' + docId + '.txt');
  }
}
