/* Map geometry for the Regional Atlas: the ONE source of marker positions.
   Every place has an anchor (x, y), the point its node sits on, in a 1536 x 1024 space (north is up). lx, ly is where its label chip starts; atlas.js
   nudges chips so none overlap. Positions are PROPOSED, not canon (status proposed_noncanonical): they follow the official location descriptions
   where those give a direction or a neighbour, and are a plausible guess where they do not.
   mapScale is how much smaller the landmass is drawn than its design size (0.78 = 78%, shrunk about the map centre). The positions here are the
   final, scaled ones; the build and audit scripts undo the scale to work in design space.
   The artwork, assets/stellara-digital-map.svg, is generated FROM these positions, so the terrain follows the markers:
     node tools/atlas-map/build-map.js     rebuild the artwork after moving anything
     node tools/atlas-map/audit.js         check ids, counts, terrain under every marker and the geography in the descriptions
   basis: 'lore' = the official description fixes where it is (a direction or a neighbour); 'guess' = it does not, so the position is a proposal and the
   atlas draws a hollow node and says so in the panel.
   After rebuilding the artwork, raise the ?v= number on the image so browsers load the new file.
   When the placements are approved as canon, set proposed to false and approved to true; the banner then disappears. */
window.STELLARA_ATLAS_GEO = {
  approved: false, proposed: true, theme: 'digital', mapScale: 0.78, viewBox: [1536, 1024], image: 'assets/stellara-digital-map.svg?v=4', layers: [],
  /* the Risa River, from the west shore of Polaris Lake to the ocean beside Eridani City (final positions, west is left) */
  rivers: [{ id: 'risa-river', points: [[871, 399.7], [832, 409], [777.4, 423.1], [715, 436.3], [652.6, 449.6], [590.2, 452.7], [535.6, 462.1], [488.8, 465.2], [434.2, 471.4], [371.8, 477.7], [309.4, 479.2], [254.8, 477.7], [192.4, 477.7]] }],
  points: {
    "gurios-mountains": { x: 1050.4, y: 237.4, lx: 1050.4, ly: 215.6, basis: 'lore' },
    "nair-city": { x: 1140.1, y: 288.1, lx: 1140.1, ly: 266.3, basis: 'lore' },
    "helos-ruins": { x: 1058.2, y: 307.6, lx: 1058.2, ly: 285.8, basis: 'lore' },
    "baltis-city": { x: 913.9, y: 350.5, lx: 913.9, ly: 328.7, basis: 'lore' },
    "polaris-lake": { x: 917.8, y: 393.4, lx: 917.8, ly: 371.6, basis: 'lore' },
    "rana-town": { x: 1011.4, y: 377.8, lx: 1011.4, ly: 356, basis: 'lore' },
    "mintaka-city": { x: 1241.5, y: 346.6, lx: 1241.5, ly: 324.8, basis: 'guess' },
    "lacaille-city": { x: 1151.8, y: 455.8, lx: 1151.8, ly: 434, basis: 'lore' },
    "talas-co-power-plant": { x: 785.2, y: 280.3, lx: 785.2, ly: 258.5, basis: 'guess' },
    "vega-city": { x: 1132.3, y: 576.7, lx: 1132.3, ly: 554.9, basis: 'lore' },
    "irra-beach": { x: 1173.6, y: 615.7, lx: 1173.6, ly: 593.9, basis: 'lore' },
    "breshno-flatlands": { x: 652.6, y: 307.6, lx: 652.6, ly: 285.8, basis: 'guess' },
    "celaeno-town": { x: 793, y: 370, lx: 793, ly: 348.2, basis: 'guess' },
    "stellara-pok-mon-league": { x: 707.2, y: 389.5, lx: 707.2, ly: 367.7, basis: 'guess' },
    "cyngi-city": { x: 730.6, y: 506.5, lx: 730.6, ly: 484.7, basis: 'lore' },
    "risa-river": { x: 652.6, y: 449.6, lx: 652.6, ly: 427.8, basis: 'lore' },
    "vaisera-mountains": { x: 387.4, y: 331, lx: 387.4, ly: 309.2, basis: 'lore' },
    "ulan-grotto": { x: 364, y: 354.4, lx: 364, ly: 332.6, basis: 'lore' },
    "pavo-town": { x: 325, y: 412.9, lx: 325, ly: 391.1, basis: 'lore' },
    "altair-city": { x: 531.7, y: 354.4, lx: 531.7, ly: 332.6, basis: 'lore' },
    "eridani-city": { x: 240.7, y: 498.7, lx: 240.7, ly: 476.9, basis: 'lore' },
    "caelum-cliffs": { x: 237.6, y: 551, lx: 237.6, ly: 529.2, basis: 'lore' },
    "elysia-falls": { x: 504.4, y: 463.6, lx: 504.4, ly: 441.8, basis: 'lore' },
    "hamal-town": { x: 504.4, y: 508.9, lx: 504.4, ly: 487, basis: 'lore' },
    "ignara-highlands": { x: 403, y: 537.7, lx: 403, ly: 515.9, basis: 'lore' },
    "musca-town": { x: 317.2, y: 623.5, lx: 317.2, ly: 601.7, basis: 'guess' },
    "kaxyl-forest": { x: 594.1, y: 561.1, lx: 594.1, ly: 539.3, basis: 'lore' },
    "shaula-town": { x: 596.4, y: 485.5, lx: 596.4, ly: 463.6, basis: 'lore' },
    "menkent-town": { x: 477.1, y: 572.8, lx: 477.1, ly: 551, basis: 'lore' },
    "fomalhaut-estate": { x: 518.4, y: 618.1, lx: 518.4, ly: 596.2, basis: 'lore' },
    "largia-swamp": { x: 578.5, y: 670.3, lx: 578.5, ly: 648.5, basis: 'lore' },
    "sabik-town": { x: 635.4, y: 675.8, lx: 635.4, ly: 654, basis: 'lore' },
    "deneb-desert": { x: 902.2, y: 658.6, lx: 902.2, ly: 636.8, basis: 'lore' },
    "saiph-city": { x: 937.3, y: 713.2, lx: 937.3, ly: 691.4, basis: 'lore' },
    "vardos-badlands": { x: 816.4, y: 623.5, lx: 816.4, ly: 601.7, basis: 'lore' },
    "tucana-rainforest": { x: 520, y: 760, lx: 520, ly: 738.2, basis: 'lore' },
    "antares-city": { x: 617.5, y: 774.1, lx: 617.5, ly: 752.2, basis: 'lore' },
    "yanna-jungle": { x: 1210.3, y: 799, lx: 1210.3, ly: 777.2, basis: 'lore' }
  }
};
