/* Map geometry for the Regional Atlas.
   The artwork is assets/stellara-digital-map.svg, a digital, pixel-grid chart. Its coastline and terrain are INVENTED to fit the proposed
   anchor points (status: proposed_noncanonical), so none of it is canon. Names are drawn by the atlas as label chips.
   Positions come from stellara_primary_locations_placement_audit.json, in the 1536 x 1024 space of the source canvas:
     x, y      the small anchor dot that marks the place
     lx, ly    the centre of the place's label chip
   When the placements are approved as canon, set proposed to false and approved to true; the banner then disappears.
   To change the art, replace the image (keep its 3:2 shape, or change viewBox) and update the numbers. */
window.STELLARA_ATLAS_GEO = {
  approved: false, proposed: true, theme: 'digital', viewBox: [1536, 1024], image: 'assets/stellara-digital-map.svg', layers: [],
  points: {
    "altair-city": { x: 390, y: 336, lx: 406, ly: 339 },
    "antares-city": { x: 610, y: 857, lx: 647, ly: 880 },
    "baltis-city": { x: 928, y: 281, lx: 901, ly: 274 },
    "breshno-flatlands": { x: 1037, y: 571, lx: 1083, ly: 557.5 },
    "caelum-cliffs": { x: 90, y: 461, lx: 105.4, ly: 518 },
    "celaeno-town": { x: 937, y: 552, lx: 891, ly: 585.9 },
    "cyngi-city": { x: 740, y: 488, lx: 715, ly: 509.8 },
    "deneb-desert": { x: 811, y: 730, lx: 737, ly: 754 },
    "elysia-falls": { x: 473, y: 391, lx: 476, ly: 390 },
    "eridani-city": { x: 165, y: 465, lx: 210, ly: 449 },
    "fomalhaut-estate": { x: 340, y: 610, lx: 319, ly: 661.3 },
    "gurios-mountains": { x: 1170, y: 151, lx: 1158, ly: 151 },
    "hamal-town": { x: 399, y: 515, lx: 407, ly: 545.1 },
    "helos-ruins": { x: 974, y: 202, lx: 928, ly: 204 },
    "ignara-highlands": { x: 279, y: 493, lx: 289.6, ly: 506.3 },
    "irra-beach": { x: 1242, y: 631, lx: 1252, ly: 671 },
    "kaxyl-forest": { x: 571, y: 504, lx: 615, ly: 469.9 },
    "lacaille-city": { x: 1334, y: 349, lx: 1344, ly: 355 },
    "largia-swamp": { x: 616, y: 610, lx: 635, ly: 601 },
    "menkent-town": { x: 427, y: 593, lx: 414, ly: 583.6 },
    "mintaka-city": { x: 1294, y: 287, lx: 1305.5, ly: 292 },
    "musca-town": { x: 276, y: 631, lx: 296, ly: 623.3 },
    "nair-city": { x: 1222, y: 200, lx: 1192, ly: 200 },
    "pavo-town": { x: 230, y: 321, lx: 249, ly: 334 },
    "polaris-lake": { x: 1016, y: 355, lx: 1018, ly: 359 },
    "rana-town": { x: 1181, y: 303, lx: 1151.5, ly: 312 },
    "risa-river": { x: 761, y: 421, lx: 718, ly: 431.7 },
    "sabik-town": { x: 647, y: 636, lx: 700, ly: 653 },
    "saiph-city": { x: 915, y: 732, lx: 918, ly: 739 },
    "shaula-town": { x: 564, y: 293, lx: 579, ly: 297 },
    "stellara-pok-mon-league": { x: 824, y: 549, lx: 818, ly: 546.7 },
    "talas-co-power-plant": { x: 1085, y: 448, lx: 1103, ly: 455 },
    "tucana-rainforest": { x: 463, y: 836, lx: 473, ly: 837 },
    "ulan-grotto": { x: 174, y: 358, lx: 193, ly: 381 },
    "vaisera-mountains": { x: 299, y: 243, lx: 299, ly: 214 },
    "vardos-badlands": { x: 421, y: 711, lx: 451, ly: 700.5 },
    "vega-city": { x: 1206, y: 570, lx: 1147, ly: 595.5 },
    "yanna-jungle": { x: 1328, y: 840, lx: 1328, ly: 864 }
  }
};
