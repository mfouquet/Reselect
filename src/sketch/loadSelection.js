import DOM from "sketch/dom";
import UI from "sketch/ui";
import fs from "@skpm/fs";
import path from "@skpm/path";
import * as utils from "./utilities/utilities";

const loadSelection = () => {
  const document = DOM.getSelectedDocument();
  const documentId = document.id;

  const scriptPath = path.resolve("..");
  const documentFilePath = `${scriptPath}/selections/${documentId}.txt`;

  if (fs.existsSync(documentFilePath)) {
    const data = fs.readFileSync(documentFilePath);
    const documentFile = JSON.parse(data);

    let options = [];
    for (let i = 0; i < documentFile.selectionsArray.length; i++) {
      options.push(documentFile.selectionsArray[i].selectionName);
    }

    UI.getInputFromUser(
      "Choose a selection to load",
      {
        type: UI.INPUT_TYPE.selection,
        possibleValues: options,
      },
      (err, value) => {
        if (err) return;

        let selectedSelection;
        for (let i = 0; i < documentFile.selectionsArray.length; i++) {
          if (value === documentFile.selectionsArray[i].selectionName) {
            selectedSelection = documentFile.selectionsArray[i].selection;
          }
        }

        const selectedLayers = document.selectedLayers;
        selectedLayers.clear();

        for (let i = 0; i < selectedSelection.length; i++) {
          const layer = document.getLayerWithID(selectedSelection[i]);
          layer.selected = true;
        }
      }
    );
  } else {
    utils.showToast("There are no selections saved for this document.");
  }
};

export { loadSelection };
