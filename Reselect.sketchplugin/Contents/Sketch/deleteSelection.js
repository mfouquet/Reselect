@import 'lib/file.js';
@import 'lib/search.js';

var deleteSelection = function(context) {
  var sketch = context.api();

  var document = sketch.selectedDocument;
  var documentId = document.sketchObject.documentData().objectID();

  var scriptPath = context.scriptPath;
  var scriptFolder = scriptPath.stringByDeletingLastPathComponent();

  var documentFile = jsonFromFile(scriptFolder + '/selections/' + documentId + '.txt', true);

  if (documentFile && documentFile.selectionsArray.count() > 0) {

    // Loop through the document files selections and grab the selection names
    // to display in the drop down box
    var options = [];
    for (var i = 0; i < documentFile.selectionsArray.count(); i++) {
      options.push(documentFile.selectionsArray[i].selectionName);
    }

    // Record the index of the user's selected option
    var choice = sketch.getSelectionFromUser("Choose a selection to delete", options, 0);

    // Pull the selection array out that has all of the layers and then
    // delete it out of the document selection array
    var selectedIndex = choice[1];
    var selectedSelection = documentFile.selectionsArray[selectedIndex];
    var newDocumentArray = [];

    for (var j = 0; j < documentFile.selectionsArray.count(); j++) {
      if (selectedIndex != j) {
        newDocumentArray.push(documentFile.selectionsArray[j]);
      }
    }

    documentFile.selectionsArray = newDocumentArray;
    saveJsonToFile(documentFile, scriptFolder + '/selections/' + documentId + '.txt');
    sketch.message("The selection, " + documentFile.selectionsArray[selectedIndex].selectionName
      + ", has been deleted.")

  } else {
    sketch.alert("There are no selections saved for this document.", "Error");
  }
}
