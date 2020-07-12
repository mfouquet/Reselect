import * as utils from "./utilities/utilities";
import { SETTINGS_PLUGIN_RESELECTAMOUNT } from "./utilities/constants";

const selectionChanged = (context) => {
  const hasReselected = utils.loadSessionVariable("hasReselected");

  if (!hasReselected) {
    let selections = utils.loadSessionVariable("selections") || [];
    const reselectAmount =
      utils.loadPluginSetting(SETTINGS_PLUGIN_RESELECTAMOUNT) || 10;
    const previousSelection = context.actionContext.oldSelection;

    if (previousSelection.length > 0) {
      let previousSelectionIds = [];
      for (let i = 0; i < previousSelection.length; i++) {
        previousSelectionIds.push(previousSelection[i].objectID());
      }

      selections.push(previousSelectionIds);

      if (selections.length > reselectAmount) {
        selections.shift();
      }

      utils.saveSessionVariable("selections", selections);
    }
  } else {
    utils.saveSessionVariable("hasReselected", false);
  }
};

export { selectionChanged };
