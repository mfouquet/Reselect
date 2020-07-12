import DOM from "sketch/dom";
import UI from "sketch/ui";
import fs from "@skpm/fs";
import path from "@skpm/path";

const saveCurrentSelection = () => {
  const document = DOM.getSelectedDocument();
  const documentId = document.id;
  const selectedLayers = document.selectedLayers;

  const dialogInitialValue = `${selectedLayers.layers.length} ${
    selectedLayers.layers.length === 1 ? "layer" : "layers"
  }`;

  UI.getInputFromUser(
    "Enter a name for this selection",
    { initialValue: dialogInitialValue },
    (err, selectionName) => {
      if (err) return;

      let selectionIds = [];
      for (let i = 0; i < selectedLayers.layers.length; i++) {
        selectionIds.push(selectedLayers.layers[i].id);
      }

      const scriptPath = path.resolve("..");
      const selectionsPath = `${scriptPath}/selections`;
      const documentFilePath = `${scriptPath}/selections/${documentId}.txt`;

      if (!fs.existsSync(selectionsPath)) {
        fs.mkdirSync(selectionsPath);
      }

      let documentFile;
      if (fs.existsSync(documentFilePath)) {
        const data = fs.readFileSync(documentFilePath);
        documentFile = JSON.parse(data);

        let fileToOverwriteIndex = -1;
        for (let i = 0; i < documentFile.selectionsArray.length; i++) {
          if (documentFile.selectionsArray[i].selectionName === selectionName) {
            fileToOverwriteIndex = i;
          }
        }

        if (fileToOverwriteIndex !== -1) {
          const alert = NSAlert.alloc().init();
          alert.setMessageText("Warning");
          alert.setInformativeText(
            "A selection with that name already exists for this document. Would you like to overwrite?"
          );
          alert.addButtonWithTitle("Yes");
          alert.addButtonWithTitle("No");
          const responseCode = alert.runModal();

          // If the user selects Yes (code 1000), pop it off the array. If the user selects
          // No, exit out - (they'll have to go back and resave with a new name)
          if (responseCode != "1000") {
            return;
          } else {
            documentFile.selectionsArray.splice(fileToOverwriteIndex, 1);
          }
        }
      } else {
        documentFile = {
          selectionsArray: [],
        };
      }

      documentFile.selectionsArray.push({
        selectionName: selectionName,
        selection: selectionIds,
      });

      fs.writeFileSync(documentFilePath, JSON.stringify(documentFile));
    }
  );
};

export { saveCurrentSelection };
