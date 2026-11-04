/* Map geometry for the Regional Atlas. Kept apart from the content so the artwork can be added without touching the POI data.
   There is NO approved map yet, so nothing here is canon. While "approved" is false the atlas shows a labeled index board (not a map)
   and every location is listed as unplaced.

   To add the approved map later:
     approved  set to true
     viewBox   [width, height] of the drawing area, for example [1000, 700]
     layers    SVG markup strings drawn under the markers (coastline, biomes, rivers), one per layer: { id, label, svg }
     points    one entry per location id: { x: 512, y: 340 }, in viewBox units */
window.STELLARA_ATLAS_GEO = { approved: false, viewBox: [1000, 700], layers: [], points: {} };
