var createAlert = function(msg, items, selectedItemIndex) {

  var alert = NSAlert.alloc().init();
  alert.setMessageText("Error");
  alert.setInformativeText("There's no selections saved for this document");
  alert.addButtonWithTitle("Ok");
  alert.runModal();
}

var createSelect = function(msg, items, selectedItemIndex) {

}
