import * as utils from "./utilities/utilities";

const selectionChanged = (context) => {
  let selections = utils.loadSessionVariable("selections") || [];
  const reselectAmount = utils.loadPluginSetting("amount") || 10;
  const previousSelection = context.actionContext.oldSelection;

  if (previousSelection.length > 0) {
    let previousSelectionIds = [];
    for (let i = 0; i < previousSelection.length; i++) {
      previousSelectionIds.push(previousSelection[i].objectID());
    }

    selections.push(previousSelectionIds);

    if (selections.length >= reselectAmount) {
      selections.shift();
    }

    utils.saveSessionVariable("selections", selections);
  }
};

export { selectionChanged };
