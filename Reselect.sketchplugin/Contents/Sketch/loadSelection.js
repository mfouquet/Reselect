@import 'lib/file.js';
@import 'lib/search.js';

var loadSelection = function(context) {
  var doc = context.document;
  var docId = doc.documentData().objectID();

  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];

  var documentFile = jsonFromFile(scriptFolder + '/selections/' + docId + '.txt', true);

  if (documentFile) {

    // Loop through the document files selections and grab the selection names
    // to display in the drop down box
    var options = [];
    for (var i=0; i < documentFile.selectionsArray.count(); i++) {
      options.push(documentFile.selectionsArray[i].selectionName);
    }

    // Record the index of the user's selected option
    var choice = createSelect(context, 'Choose a selection to load', options)

    // Pull the selection array out that has all of the layers and then
    // select them in the document
    var selectedSelection = documentFile.selectionsArray[choice].selection;
    selectLayersWithMatchingObjectIds(doc, selectedSelection);
  } else {

    // Alert the user there are no selections that exist for that document
    var alert = NSAlert.alloc().init();
    var icon = NSImage.alloc().initByReferencingFile(scriptFolder + '/lib/icons/reselect-error.icns');
    alert.setIcon(icon);
    alert.setMessageText("Error");
    alert.setInformativeText("There are no selections saved for this document");
    alert.addButtonWithTitle("Ok");
    alert.runModal();
  }
}

var createSelect = function(context, msg, items, selectedItemIndex){
  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];

  selectedItemIndex = selectedItemIndex || 0

  var accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0,0,200,25))
  accessory.addItemsWithObjectValues(items)
  accessory.selectItemAtIndex(selectedItemIndex)

  var alert = NSAlert.alloc().init()
  var icon = NSImage.alloc().initByReferencingFile(scriptFolder + '/lib/icons/reselect.icns');
  alert.setIcon(icon);
  alert.setMessageText(msg)
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')
  alert.setAccessoryView(accessory)

  alert.runModal()
  var sel = accessory.indexOfSelectedItem()

  return sel;
}
