import BrowserWindow from "sketch-module-web-view";
import * as utils from "./utilities/utilities";
import {
  SETTINGS_PLUGIN_RESELECTAMOUNT,
  URL_WEBSITE,
  URL_HELP,
  URL_CHANGELOG,
} from "./utilities/constants";

const showSettings = () => {
  const options = {
    identifier: "reselect",
    frame: false,
    height: 464,
    width: 332,
    resizable: false,
    alwaysOnTop: true,
    title: "reselect",
    backgroundColor: "#000000",
    show: false,
  };

  const browserWindow = new BrowserWindow(options);
  const webContents = browserWindow.webContents;

  browserWindow.once("ready-to-show", () => {
    browserWindow.show();
  });

  webContents.on("did-finish-load", () => {
    const resObject = {
      reselectAmount:
        utils.loadPluginSetting(SETTINGS_PLUGIN_RESELECTAMOUNT) || 10,
    };
    webContents
      .executeJavaScript(`prepareFirstLoad('${JSON.stringify(resObject)}')`)
      .catch(console.error);
  });

  webContents.on("dismissClicked", () => {
    browserWindow.close();
  });

  webContents.on("websiteButtonClicked", () => {
    utils.openURL(URL_WEBSITE);
  });

  webContents.on("helpButtonClicked", () => {
    utils.openURL(URL_HELP);
  });

  webContents.on("versionButtonClicked", () => {
    utils.openURL(URL_CHANGELOG);
  });

  webContents.on("saveButtonClicked", (saveButtonClickedObject) => {
    const resObject = JSON.parse(saveButtonClickedObject);
    utils.savePluginSetting(
      SETTINGS_PLUGIN_RESELECTAMOUNT,
      +resObject.reselectAmount
    );
    utils.showToast("Reselect settings saved successfully!");
  });

  browserWindow.loadURL(require("../web/ui.html"));
};

export { showSettings };
