@import 'lib/nibui.js';
@import 'lib/file.js';
@import 'lib/settings.js';
@import 'lib/threading.js';

var COSCRIPT;

var showSettings = function(context) {
  // ====
  // Prepare app and COSCRIPT
  COSCRIPT = COScript.currentCOScript();
  COSCRIPT.setShouldKeepAround(true);

  var sharedApp = NSApplication.sharedApplication();

  // Determine if the plugin window is already open
  var openWindow = false;

  for (var i = 0; i < sharedApp.windows().count(); i++) {
    var window = sharedApp.windows().objectAtIndex(i);

    if (window.identifier() == 'reselectWindow') {
      openWindow = true;
      window.makeKeyAndOrderFront(null);
    }
  }

  if (openWindow) {
    return;
  }


  // ====
  // Prepare the NIB so we can do stuff with the UI
  const nibui = new NibUI(context, 'UIBundle', 'ReselectNibUITemplate', [
    'mainWindow',
    'textReselectAmount', 'btnUp', 'btnDown',
    'btnSave',
    'btnWebsite', 'btnHelp', 'btnVersion'
  ]);


  // ====
  // Set up the window styling
  nibui.mainWindow.setTitlebarAppearsTransparent(true);
  nibui.mainWindow.standardWindowButton(NSWindowCloseButton).setHidden(false);
  nibui.mainWindow.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
  nibui.mainWindow.standardWindowButton(NSWindowZoomButton).setHidden(true);


  // ====
  // Load up the settings file
  loadSettingsFile(context);


  // ====
  // Prepare the UI
  nibui.textReselectAmount.setStringValue("10");


  // ====
  // Attach an action to the Up Button
  nibui.attachTargetAndAction(nibui.btnUp, function() {
    updateReselectAmountTextbox("up", context, nibui);
  });


  // ====
  // Attach an action to the Down Button
  nibui.attachTargetAndAction(nibui.btnDown, function() {
    updateReselectAmountTextbox("down", context, nibui);
  });


  // ====
  // Attach an action to the Save Button
  nibui.attachTargetAndAction(nibui.btnSave, function() {
    saveReselectAmount(context, nibui);
  });


  // ====
  // Attach an action to the Website Button
  nibui.attachTargetAndAction(nibui.btnWebsite, function() {
    NSWorkspace.sharedWorkspace()
      .openURL(NSURL.URLWithString("http://www.reselect.co/"));
  });


  // ====
  // Attach an action to the Help Button
  nibui.attachTargetAndAction(nibui.btnHelp, function() {
    NSWorkspace.sharedWorkspace()
      .openURL(NSURL.URLWithString("http://www.reselect.co/#usage"));
  });


  // ====
  // Attach an action to the Version Button
  nibui.attachTargetAndAction(nibui.btnVersion, function() {
    NSWorkspace.sharedWorkspace()
      .openURL(NSURL.URLWithString("https://github.com/mfouquet/Reselect/blob/master/CHANGELOG.md"));
  });


  // ====
  // Finish up UI work
  nibui.mainWindow.makeKeyAndOrderFront(null);
  nibui.mainWindow.setLevel(NSFloatingWindowLevel);
  nibui.destroy();
}


function updateReselectAmountTextbox(direction, context, nibui) {
  var reselectAmount = parseInt(nibui.textReselectAmount.stringValue());

  if (direction == "up") {
    reselectAmount++;
  } else {
    reselectAmount--;
  }

  nibui.textReselectAmount.setStringValue(reselectAmount.toString());
}


function saveReselectAmount(context, nibui) {
  var settingsObject = {
    maxReselectAmount: nibui.textReselectAmount.stringValue(),
  }

  var scriptPath = context.scriptPath;
  var scriptFolder = scriptPath.stringByDeletingLastPathComponent();
  scriptFolder = scriptFolder.stringByDeletingLastPathComponent();

  saveJsonToFile(settingsObject, scriptFolder + '/Resources/settings.js');

  // Save the values to the main thread as well
  saveToThreadDict(kReselectMaxReselectAmount, nibui.textReselectAmount.stringValue());
}
