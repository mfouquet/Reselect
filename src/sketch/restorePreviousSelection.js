import DOM from "sketch/dom";
import * as utils from "./utilities/utilities";

const restorePreviousSelection = () => {
  const document = DOM.getSelectedDocument();
  const selectedLayers = document.selectedLayers;
  let selections = utils.loadSessionVariable("selections") || [];

  const lastSelection = selections.pop();

  if (lastSelection) {
    selectedLayers.clear();

    for (let i = 0; i < lastSelection.length; i++) {
      const layer = document.getLayerWithID(lastSelection[i]);
      layer.selected = true;
    }
  }

  utils.saveSessionVariable("selections", selections);
  utils.saveSessionVariable("hasReselected", true);
};

export { restorePreviousSelection };
