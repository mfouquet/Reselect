import BrowserWindow from "sketch-module-web-view";
import * as utils from "./utilities/utilities";
import { URL_WEBSITE, URL_HELP, URL_CHANGELOG } from "./utilities/constants";

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
    // const npsObject = {
    //   nudgeAmount: utils.loadGlobalSetting(SETTINGS_GLOBAL_NUDGESMALL),
    //   pushAmount: utils.loadGlobalSetting(SETTINGS_GLOBAL_NUDGEBIG),
    //   shoveAmount: utils.loadPluginSetting(SETTINGS_PLUGIN_SHOVE),
    // };
    webContents.executeJavaScript(`prepareFirstLoad()`).catch(console.error);
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
    // const npsObject = JSON.parse(saveButtonClickedObject);
    // utils.saveGlobalSetting(SETTINGS_GLOBAL_NUDGESMALL, +npsObject.nudgeAmount);
    // utils.saveGlobalSetting(SETTINGS_GLOBAL_NUDGEBIG, +npsObject.pushAmount);
    // utils.savePluginSetting(SETTINGS_PLUGIN_SHOVE, +npsObject.shoveAmount);
    // utils.showToast("Nudge, Push, Shove settings saved successfully!");
  });

  browserWindow.loadURL(require("../web/ui.html"));
};

export { showSettings };
