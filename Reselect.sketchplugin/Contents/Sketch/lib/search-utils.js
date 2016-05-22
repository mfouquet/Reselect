// Repurposed this handy snippet (https://gist.github.com/abynim/04f88d5e4fe47118bfe3)
// from abynim to select a layer by its objectID

var selectLayersWithMatchingObjectIds = function(doc, objectIds, containerLayer) {

  // If there's no objectIds, nothing to select
  if (objectIds) {

    // Deselect current selection
    doc.currentPage().deselectAllLayers();

    for (var j = 0; j < objectIds.count(); j++) {

      // Define how we'll filter the layers by objectID
    	var scope = [[doc currentPage] children];
    	var predicate = NSPredicate.predicateWithFormat("(objectID == %@)", objectIds[j]);
    	var layers = [scope filteredArrayUsingPredicate:predicate];

    	// Loop through filtered layers and select them
    	var loop = [layers objectEnumerator], layer;
    	while (layer = [loop nextObject]) {
    		[layer select:true byExpandingSelection:true]
    	}
    }
  }
}
