import Settings from "sketch/settings";
import UI from "sketch/ui";

/* 
Saves a global setting in Sketch to the provided key
*/
const saveGlobalSetting = (key, value) => {
  Settings.setGlobalSettingForKey(key, value);
};

/* 
Loads a global setting in Sketch to the provided key
*/
const loadGlobalSetting = (key) => {
  return Settings.globalSettingForKey(key);
};

/* 
Saves a plugin setting in Sketch to the provided key
*/
const savePluginSetting = (key, value) => {
  Settings.setSettingForKey(`com.mfouquet.sketch.nudgepushshove.${key}`, value);
};

/* 
Loads a plugin setting in Sketch with the provided key
*/
const loadPluginSetting = (key) => {
  return Settings.settingForKey(`com.mfouquet.sketch.nudgepushshove.${key}`);
};

/* 
Opens a URL from Sketch
*/
const openURL = (url) => {
  const nsurl = NSURL.URLWithString(url);
  NSWorkspace.sharedWorkspace().openURL(nsurl);
};

/*
Shows a message at the bottom of the Sketch window
*/
const showToast = (message) => {
  UI.message(message);
};

export {
  saveGlobalSetting,
  loadGlobalSetting,
  savePluginSetting,
  loadPluginSetting,
  openURL,
  showToast,
};
