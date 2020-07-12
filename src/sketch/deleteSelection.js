import DOM from "sketch/dom";
import UI from "sketch/ui";
import fs from "@skpm/fs";
import path from "@skpm/path";
import * as utils from "./utilities/utilities";

const deleteSelection = () => {
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
      "Choose a selection to delete",
      {
        type: UI.INPUT_TYPE.selection,
        possibleValues: options,
      },
      (err, value) => {
        if (err) return;

        for (let i = 0; i < documentFile.selectionsArray.length; i++) {
          if (value === documentFile.selectionsArray[i].selectionName) {
            documentFile.selectionsArray.splice(i, 1);
          }
        }

        if (documentFile.selectionsArray.length === 0) {
          fs.unlinkSync(documentFilePath);
        } else {
          fs.writeFileSync(documentFilePath, JSON.stringify(documentFile));
        }
      }
    );
  } else {
    utils.showToast("There are no selections saved for this document.");
  }
};

export { deleteSelection };
