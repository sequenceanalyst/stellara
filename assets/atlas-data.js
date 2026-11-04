/* The Regional Atlas content: every parent location and its Points of Interest (POIs). Edit this file to change a POI.
   Imported from stellara-regional-atlas-pois-v1.json (38 locations, 164 POIs). The content is a DRAFT until "status" no longer says draft.

   A location has:  id (stable, never reuse), name, category (a key from "locationCategories"), pointsOfInterest, and the status fields below.
                    "description" stays null on purpose: the atlas reads the official text from the location's own page on this site.
                    "pageSlug" (optional) is the last part of the page address when it differs from the id.
   A POI has:       id (stable: the location id, two dashes, a short name), name, description, category (a key from "poiCategories"),
                    isNamedSubregion (true for a subregion named in the parent text), and for Gyms: isGym, gymType, gymAssignmentStatus.
   Coordinates are NOT here. They belong in assets/atlas-geo.js, and stay empty until a map is approved.
   Gym assignments are provisional until gymAssignmentStatus is changed to "verified" for each Gym. */
window.STELLARA_ATLAS = {
 "schemaVersion": "1.0",
 "title": "Stellara Regional Atlas — POI Master Data",
 "status": "draft_pending_canon_review",
 "source": "Stellara POI writing sessions, Batches 1–7; revised Gym descriptions incorporated",
 "mapGeometry": "Not included; no canonical approved coordinates, coastline, or biome boundaries",
 "gymAssignments": "Provisional; verify every Gym type against an authoritative approved Gym list before publication",
 "namedSubregions": "Veyra Moorlands, Salaris Flats, Borealis Tundra and Nymira Mangroves are POIs under their parent areas, not top-level map markers",
 "locationCategories": {
  "cities_towns": "Cities and Towns",
  "forests_wetlands": "Forests and Wetlands",
  "mountains_highlands": "Mountains and Highlands",
  "deserts_badlands": "Deserts and Badlands",
  "waterways_coasts": "Waterways and Coasts",
  "special_landmarks": "Special Landmarks"
 },
 "poiCategories": [
  "gym",
  "culture_history",
  "research_education",
  "commerce_community",
  "recreation",
  "natural_landmark"
 ],
 "audit": {
  "locations": 38,
  "pointsOfInterest": 164,
  "gyms": 18,
  "locationsByCategory": {
   "cities_towns": 18,
   "forests_wetlands": 5,
   "mountains_highlands": 3,
   "deserts_badlands": 2,
   "waterways_coasts": 5,
   "special_landmarks": 5
  },
  "knownReviewItems": [
   "Confirm all 18 Gym type-to-settlement assignments against the approved source",
   "Differentiate Hamal Hot Springs (town baths) from Elysia Falls Mineral Springs (natural pools)",
   "Keep speculative ancient history and mysterious Pokémon stories unresolved",
   "Verify alignment with final approved geography before assigning map coordinates",
   "All POI names and descriptions are drafted content, not previously approved canonical map placement"
  ]
 },
 "locations": [
  {
   "id": "cyngi-city",
   "name": "Cyngi City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Steel",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "cyngi-city--cyngi-city-gym",
     "name": "Cyngi City Gym",
     "description": "One of Cyngi City's most prominent sporting institutions, the Steel-type Gym is a massive complex featuring professional battle facilities, training programs and specialized workshops. Visitors can study everything from fundamental battle strategies to advanced Steel-type techniques, while the Gym's engineering department develops protective equipment and training apparatus for Pokémon. Major Gym challenges regularly attract enormous audiences.",
     "category": "gym",
     "isGym": true,
     "gymType": "Steel",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "cyngi-city--astral-promenade",
     "name": "Astral Promenade",
     "description": "One of Cyngi City's busiest commercial districts, Astral Promenade is home to numerous boutiques, restaurants, entertainment venues and luxury establishments. Its expansive pedestrian walkways are particularly popular with tourists, while elaborate lighting displays and regular street performances keep the district lively well into the evening.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "cyngi-city--stellara-civic-center",
     "name": "Stellara Civic Center",
     "description": "The administrative heart of Stellara, the Civic Center houses several major government institutions and public offices. Its modern buildings surround a spacious public square decorated with fountains, sculptures and seasonal gardens. Political demonstrations, cultural celebrations and official ceremonies are frequently held here, attracting residents from across the region.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "cyngi-city--risa-riverfront",
     "name": "Risa Riverfront",
     "description": "Stretching along the southern banks of the Risa River, this waterfront district features scenic promenades, restaurants and recreational facilities overlooking the water. Bridges connect the riverfront to neighboring areas, while sightseeing boats offer visitors an opportunity to experience Cyngi City's skyline from a different perspective.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "cyngi-city--stellara-museum-of-history",
     "name": "Stellara Museum of History",
     "description": "A prominent cultural institution dedicated to preserving Stellara's history, the museum contains exhibits covering ancient civilizations, regional development and the relationship between humans and Pokémon. Among its most popular attractions are archaeological artifacts, historical Poké Balls and reconstructed fossils recovered from various locations throughout the region.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "cyngi-city--meridian-park",
     "name": "Meridian Park",
     "description": "Despite its location within the crowded metropolis, Meridian Park provides a peaceful retreat filled with landscaped gardens, shaded walking paths and spacious lawns. The park is particularly popular among families and Pokémon owners, with designated areas for recreational battles, outdoor activities and Pokémon exercise.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "cyngi-city--the-grand-meridian",
     "name": "The Grand Meridian",
     "description": "An upscale entertainment complex featuring a prestigious hotel, observation deck, restaurants and performance venues. Visitors can enjoy panoramic views of Cyngi City's skyline from its upper floors, while the lower levels host concerts, exhibitions and social gatherings. The complex is especially popular among wealthy tourists and visiting celebrities.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "lacaille-city",
   "name": "Lacaille City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Electric",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "lacaille-city--lacaille-city-gym",
     "name": "Lacaille City Gym",
     "description": "Lacaille City's Electric-type Gym combines competitive Pokémon battling with education and renewable energy research. Its modern facilities include training arenas, laboratories and interactive exhibitions demonstrating the practical applications of electricity. The Gym also works closely with local environmental organizations, encouraging Trainers to explore how Electric-type Pokémon can contribute to sustainable living.",
     "category": "gym",
     "isGym": true,
     "gymType": "Electric",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "lacaille-city--verdant-conservatory",
     "name": "Verdant Conservatory",
     "description": "A botanical research facility and public attraction housing an extensive collection of plants from throughout the Pokémon world. Its climate-controlled gardens support numerous Grass- and Bug-type Pokémon, while researchers study the relationships between different species and their environments. Guided tours and educational programs are available throughout the year.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "lacaille-city--solstice-energy-institute",
     "name": "Solstice Energy Institute",
     "description": "One of Stellara's leading renewable energy research institutions, the Solstice Energy Institute develops technologies involving solar, wind and other sustainable power sources. Researchers also study the electrical capabilities of certain Pokémon, exploring how their natural abilities can contribute to energy production without compromising their welfare.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "lacaille-city--greenhaven-commons",
     "name": "Greenhaven Commons",
     "description": "A pedestrian-friendly shopping and residential district distinguished by its rooftop gardens, tree-lined streets and environmentally conscious architecture. Local businesses emphasize sustainable products and services, while outdoor markets offer fresh produce and handmade goods. Many establishments welcome Pokémon, and small community gardens are maintained throughout the neighborhood.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "lacaille-city--luminara-gardens",
     "name": "Luminara Gardens",
     "description": "A sprawling public garden famous for its carefully maintained flowerbeds, ornamental ponds and illuminated walking trails. At night, certain sections are naturally illuminated by Grass- and Bug-type Pokémon, creating colorful displays that attract visitors. The gardens are particularly popular during seasonal festivals and provide a peaceful setting for outdoor gatherings.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "lacaille-city--the-windspire-array",
     "name": "The Windspire Array",
     "description": "Situated along Lacaille City's outskirts, the Windspire Array consists of several towering wind turbines that supply renewable electricity to the surrounding area. Elevated observation platforms allow visitors to view the machinery and nearby countryside. Flying-type Pokémon are frequently observed around the installation, although conservation measures protect their natural flight paths.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "eridani-city",
   "name": "Eridani City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Water",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "eridani-city--eridani-city-gym",
     "name": "Eridani City Gym",
     "description": "Situated along Eridani City's waterfront, the Water-type Gym is an important center for aquatic Pokémon training and maritime education. In addition to its professional battle arena, the facility maintains swimming pools, aquatic rehabilitation services and water rescue programs. Its Trainers frequently collaborate with local rescue organizations, teaching visitors how to safely navigate and respond to emergencies at sea.",
     "category": "gym",
     "isGym": true,
     "gymType": "Water",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "eridani-city--port-eridani",
     "name": "Port Eridani",
     "description": "One of Stellara's busiest commercial harbors, Port Eridani handles enormous volumes of cargo and passenger traffic. Its extensive docks accommodate everything from fishing vessels to international cruise ships. Water-type Pokémon frequently assist with maritime operations, while nearby warehouses and shipping facilities provide employment for thousands of residents.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "eridani-city--mariner-s-wharf",
     "name": "Mariner's Wharf",
     "description": "A lively waterfront district known for its seafood restaurants, outdoor markets and picturesque views of the harbor. Fishing boats deliver fresh catches daily, while local musicians frequently perform along the promenade. Visitors can also arrange sightseeing cruises, fishing excursions and other recreational activities departing from the nearby docks.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "eridani-city--talas-company-headquarters",
     "name": "Talas Company Headquarters",
     "description": "The corporate headquarters of Talas Company, one of Stellara's major energy providers, occupies a prominent office complex within Eridani City's business district. Despite its economic importance, the company remains controversial following revelations of Pokémon mistreatment at its former power plant. Public demonstrations and calls for greater corporate accountability occasionally occur outside the building.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "eridani-city--harborlight-hall",
     "name": "Harborlight Hall",
     "description": "A historic performance venue that has played an important role in Eridani City's musical culture for generations. Originally established during the city's industrial heyday, the hall hosts concerts, theatrical productions and community celebrations. Its restored interior preserves much of its original architecture, making it a popular attraction among visitors and local performers.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "eridani-city--breakwater-point",
     "name": "Breakwater Point",
     "description": "Located near the outer harbor, Breakwater Point is a coastal observation area overlooking Eridani City's shipping lanes and the open ocean. Its reinforced seawalls protect nearby facilities from powerful waves, while the surrounding waters attract numerous aquatic Pokémon. The area is especially popular with anglers, photographers and visitors hoping to watch ships enter the harbor.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "vega-city",
   "name": "Vega City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Dark",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "vega-city--vega-city-gym",
     "name": "Vega City Gym",
     "description": "Entertainment is practically inseparable from Vega City's Dark-type Gym, where official challenges are accompanied by elaborate productions and enthusiastic crowds. Beyond its competitive events, the Gym offers instruction in unconventional battle strategies, deception and psychological tactics. Its evening workshops and exhibition matches are particularly popular among Trainers interested in developing less predictable fighting styles.",
     "category": "gym",
     "isGym": true,
     "gymType": "Dark",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "vega-city--the-grand-palisade",
     "name": "The Grand Palisade",
     "description": "One of Vega City's most recognizable landmarks, the Grand Palisade is a luxurious resort featuring a casino, theaters, restaurants and an expansive rooftop pool. Visitors from across the Pokémon world come to experience its lavish accommodations and extravagant entertainment. Its grand entrance and brightly illuminated exterior have become popular subjects for tourist photographs.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vega-city--sunset-boulevard",
     "name": "Sunset Boulevard",
     "description": "Whether visitors are looking for a late-night meal, live entertainment or somewhere to dance, Sunset Boulevard offers no shortage of options. Neon signs illuminate the crowded streets, where nightclubs, restaurants and performance venues operate well into the early morning. The district is particularly busy during festivals and major holidays.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vega-city--old-town-market",
     "name": "Old Town Market",
     "description": "Long before Vega became a major resort destination, its residents gathered here to trade goods and conduct business. Today, the district remains a thriving marketplace filled with family-owned shops, antique dealers and street vendors. Its older buildings provide a striking contrast to the city's modern resorts, and some businesses have operated for generations.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vega-city--blackwater-alley",
     "name": "Blackwater Alley",
     "description": "Tucked between several aging commercial buildings, Blackwater Alley has a reputation as one of Vega City's less reputable destinations. Its unmarked storefronts and private establishments attract an unusual assortment of clientele, while rumors of illicit gambling and underground dealings have made the area notorious. Despite increased police attention, its questionable activities have proven difficult to eliminate.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "nair-city",
   "name": "Nair City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Ice",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "nair-city--nair-city-gym",
     "name": "Nair City Gym",
     "description": "Nair City's Ice-type Gym is a celebrated winter sports facility that welcomes both competitive Trainers and recreational visitors. Its expansive indoor complex includes skating rinks, cold-weather training areas and professional battle facilities. Trainers can participate in specialized courses covering Ice-type Pokémon care, winter survival and battling in extreme climates, while seasonal competitions attract visitors from throughout Stellara.",
     "category": "gym",
     "isGym": true,
     "gymType": "Ice",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "nair-city--gurios-winter-resort",
     "name": "Gurios Winter Resort",
     "description": "Skiing, snowboarding and other winter sports draw thousands of visitors to this mountain resort each year. Located near the foothills of the Gurios Mountains, the facility maintains numerous slopes of varying difficulty, along with rental shops, restaurants and comfortable lodging. Experienced Trainers occasionally bring their Ice-type Pokémon to participate in supervised recreational activities.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "nair-city--nair-historical-museum",
     "name": "Nair Historical Museum",
     "description": "Much of what researchers know about Stellara's ancient history can be traced to discoveries made near the Helos Ruins. The Nair Historical Museum preserves many of these findings, including pottery, ceremonial objects and inscriptions whose meanings remain disputed. Its extensive archaeological collection attracts historians and researchers from several regions.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "nair-city--frostwood-square",
     "name": "Frostwood Square",
     "description": "A popular gathering place in central Nair City, Frostwood Square is surrounded by cafés, specialty shops and traditional stone buildings. During winter, its central plaza becomes a public ice-skating rink, while seasonal markets offer warm meals and handmade goods. Snow sculptures and decorative lighting make the square particularly lively during annual celebrations.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "nair-city--northwatch-observatory",
     "name": "Northwatch Observatory",
     "description": "Perched on a ridge overlooking the city, Northwatch Observatory provides panoramic views of Nair's skyline and the surrounding mountains. Originally established for meteorological research, it continues to monitor snowfall, mountain storms and other weather patterns. Visitors can explore a small exhibition on the region's climate or enjoy the observation deck during clear weather.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "saiph-city",
   "name": "Saiph City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Ground",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "saiph-city--saiph-city-gym",
     "name": "Saiph City Gym",
     "description": "Built from sandstone and reinforced materials suited to the desert climate, Saiph City's Ground-type Gym also functions as a center for desert survival education. Its experienced Trainers teach navigation, environmental awareness and techniques for working alongside Ground-type Pokémon. The Gym regularly organizes supervised expeditions into the surrounding desert, making it a popular destination for aspiring explorers.",
     "category": "gym",
     "isGym": true,
     "gymType": "Ground",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "saiph-city--deneb-research-institute",
     "name": "Deneb Research Institute",
     "description": "Dedicated to archaeology and paleontology, the Deneb Research Institute houses laboratories specializing in fossils, ancient Pokémon and artifacts recovered from the surrounding desert. Its researchers frequently organize expeditions to remote excavation sites, while public exhibits showcase some of their most significant discoveries. Fossil restoration is another important area of study.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "saiph-city--old-bazaar",
     "name": "Old Bazaar",
     "description": "Narrow streets and shaded courtyards form the heart of Saiph City's oldest marketplace. Merchants sell spices, pottery, textiles, jewelry and goods imported from distant regions. The bazaar is especially lively during the evening, when cooler temperatures encourage residents to gather for meals, shopping and conversation beneath its colorful awnings.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "saiph-city--oasis-gardens",
     "name": "Oasis Gardens",
     "description": "Fed by a carefully maintained network of underground water channels, Oasis Gardens is one of Saiph City's most treasured public spaces. Palm trees, flowering shrubs and shallow pools provide relief from the surrounding desert. Although the gardens are heavily maintained, several small Pokémon species have established themselves among the vegetation.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "saiph-city--sandstone-quarter",
     "name": "Sandstone Quarter",
     "description": "Many of Saiph City's oldest surviving buildings stand within the Sandstone Quarter, a historic neighborhood characterized by enclosed courtyards, narrow passageways and traditional desert architecture. The district preserves examples of early settlements that existed before modern cooling technology. Local guides frequently share stories about the city's founding and the hardships faced by its earliest residents.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "antares-city",
   "name": "Antares City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Bug",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "antares-city--antares-city-gym",
     "name": "Antares City Gym",
     "description": "Pokémon conservation plays an important role at Antares City's Bug-type Gym, which maintains extensive botanical gardens and carefully managed habitats throughout its grounds. Visitors can study Bug-type Pokémon under the guidance of experienced Trainers, participate in educational programs and learn about the surrounding jungle's ecosystem. The Gym's spacious battle arena also hosts major competitions and public exhibitions.",
     "category": "gym",
     "isGym": true,
     "gymType": "Bug",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "antares-city--canopy-walk",
     "name": "Canopy Walk",
     "description": "Suspended high above the jungle floor, the Canopy Walk is an extensive network of elevated pedestrian bridges connecting several of Antares City's districts. Visitors can observe the surrounding vegetation and occasionally spot wild Pokémon moving through the treetops. Observation platforms along the route provide opportunities for photography and wildlife appreciation.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "antares-city--antares-biodiversity-center",
     "name": "Antares Biodiversity Center",
     "description": "Researchers at the Antares Biodiversity Center study the extraordinary variety of Pokémon and plant species inhabiting the surrounding jungle. The facility operates conservation programs, rehabilitation services and educational exhibits intended to promote responsible interactions with wildlife. Visitors can attend guided presentations and learn about ongoing efforts to protect endangered habitats.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "antares-city--riverside-market",
     "name": "Riverside Market",
     "description": "Built along a series of elevated walkways overlooking a jungle waterway, Riverside Market is a bustling collection of produce stalls, restaurants and small shops. Local vendors offer tropical fruits, traditional dishes and handmade crafts. Wild Pokémon occasionally wander near the market, although protective measures discourage them from approaching food stalls.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "antares-city--the-living-courtyard",
     "name": "The Living Courtyard",
     "description": "At the center of a residential district stands an extraordinary collection of ancient trees that were preserved during the city's construction. Rather than removing them, architects designed the surrounding buildings and walkways around their enormous roots and trunks. The resulting courtyard has become a beloved gathering place and a symbol of Antares City's dedication to conservation.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "mintaka-city",
   "name": "Mintaka City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Psychic",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "mintaka-city--mintaka-city-gym",
     "name": "Mintaka City Gym",
     "description": "An important institution for the study of Pokémon cognition, Mintaka City's Psychic-type Gym maintains close relationships with several local research organizations. Its educational programs explore concentration, communication and the development of Psychic-type abilities, alongside more conventional battle training. Researchers and Trainers frequently collaborate on studies examining the remarkable mental capabilities of Pokémon.",
     "category": "gym",
     "isGym": true,
     "gymType": "Psychic",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "mintaka-city--mintaka-institute-of-technology",
     "name": "Mintaka Institute of Technology",
     "description": "Among Stellara's leading academic institutions, the Mintaka Institute of Technology specializes in robotics, artificial intelligence and advanced engineering. Its researchers regularly collaborate with Pokémon specialists to examine cognition, communication and behavioral patterns. Public exhibitions showcase student inventions, experimental technologies and discoveries from the institute's numerous laboratories.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "mintaka-city--innovation-district",
     "name": "Innovation District",
     "description": "Glass office towers, research facilities and technology startups dominate this busy commercial neighborhood. Many of Stellara's emerging technology companies maintain offices here, while cafés and shared workspaces attract students, engineers and entrepreneurs. Interactive displays and automated public services provide a glimpse into the technologies being developed throughout the city.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "mintaka-city--central-transit-exchange",
     "name": "Central Transit Exchange",
     "description": "Mintaka's extensive transportation network converges at the Central Transit Exchange, a large station connecting local rail lines, buses and regional transportation services. Automated scheduling systems help manage the constant flow of passengers, while shops and restaurants occupy the station's main concourse. Its convenient connections make it one of the city's busiest public facilities.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "mintaka-city--museum-of-science-and-discovery",
     "name": "Museum of Science and Discovery",
     "description": "Interactive exhibits invite visitors to explore scientific principles, technological history and the remarkable abilities of Pokémon. The museum's galleries cover subjects ranging from electricity and magnetism to evolution and Pokémon intelligence. One of its most popular exhibits examines how Psychic-type Pokémon perceive and interact with the world around them.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "baltis-city",
   "name": "Baltis City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Flying",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "baltis-city--baltis-city-gym",
     "name": "Baltis City Gym",
     "description": "Overlooking Polaris Lake, Baltis City's Flying-type Gym is renowned for its aerial training facilities and professional battling events. Its programs extend beyond competitive instruction to include flight safety, aerial navigation and meteorology. With the city's frequent thunderstorms, the Gym also assists local organizations in promoting weather awareness and safe flying practices for Trainers and their Pokémon.",
     "category": "gym",
     "isGym": true,
     "gymType": "Flying",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "baltis-city--rainwater-gardens",
     "name": "Rainwater Gardens",
     "description": "Originally constructed as part of Baltis City's flood management system, the Rainwater Gardens consist of interconnected ponds, streams and landscaped wetlands. During heavy rainfall, the gardens collect excess water from nearby neighborhoods. Their attractive scenery and abundance of aquatic Pokémon have made them popular destinations for walking, photography and outdoor recreation.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "baltis-city--lakefront-promenade",
     "name": "Lakefront Promenade",
     "description": "Restaurants, cafés and recreational facilities line this spacious walkway overlooking Polaris Lake. Residents frequently gather here to enjoy the lakeside scenery, while small docks provide access to boating and fishing excursions. On clear evenings, the promenade offers particularly impressive views of the sunset reflecting across the lake's surface.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "baltis-city--stormwatch-tower",
     "name": "Stormwatch Tower",
     "description": "Few landmarks demonstrate Baltis City's relationship with severe weather better than Stormwatch Tower. This prominent meteorological facility monitors approaching thunderstorms, rainfall and changing wind conditions. Its upper observation deck is occasionally opened to the public, while educational exhibits explain the city's sophisticated weather forecasting and flood prevention systems.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "baltis-city--canal-street-market",
     "name": "Canal Street Market",
     "description": "Built alongside one of Baltis City's many artificial waterways, Canal Street Market features covered shopping arcades, restaurants and independent businesses. Its sheltered walkways allow visitors to browse comfortably during frequent rain showers. The market is especially popular for its fresh produce, local cuisine and seasonal festivals celebrating the city's waterfront culture.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "altair-city",
   "name": "Altair City",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Dragon",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "altair-city--altair-city-gym",
     "name": "Altair City Gym",
     "description": "Few institutions hold as much prestige in Altair City as its Dragon-type Gym, which has produced numerous accomplished competitive Trainers. The sprawling complex features professional battle arenas, extensive training grounds and facilities dedicated to raising and caring for Dragon-type Pokémon. Its advanced coaching programs are highly sought after, while official Gym challenges are among the city's most anticipated sporting events.",
     "category": "gym",
     "isGym": true,
     "gymType": "Dragon",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "altair-city--altair-battle-academy",
     "name": "Altair Battle Academy",
     "description": "Considered one of Stellara's most prestigious institutions for competitive Pokémon training, Altair Battle Academy offers specialized instruction in battle strategy, Pokémon care and team development. Its extensive grounds contain classrooms, training fields and several indoor arenas. Many successful competitive Trainers have studied here, contributing to the academy's formidable reputation.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "altair-city--champion-s-plaza",
     "name": "Champion's Plaza",
     "description": "Statues and commemorative plaques honoring accomplished Trainers line this expansive public square in central Altair City. The plaza regularly hosts battle demonstrations, community tournaments and celebrations recognizing local achievements. Although some monuments depict regional Champions, others commemorate lesser-known Trainers whose contributions helped shape the city's competitive culture.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "altair-city--highridge-overlook",
     "name": "Highridge Overlook",
     "description": "An observation area situated along the edge of Altair's plateau, Highridge Overlook offers sweeping views of the surrounding valleys and distant Vaisera Mountains. Stone pathways lead visitors toward several viewing platforms, while nearby cafés provide refreshments. Powerful winds are common here, making the overlook a popular resting place for Flying-type Pokémon.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "altair-city--the-training-grounds",
     "name": "The Training Grounds",
     "description": "Scattered across a spacious outdoor complex, the Training Grounds provide dedicated areas for Pokémon battles, physical conditioning and specialized combat exercises. Trainers of varying experience levels visit to practice their techniques, exchange strategies and participate in informal competitions. Certain facilities are reserved for more advanced training due to the destructive capabilities of powerful Pokémon.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "pavo-town",
   "name": "Pavo Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Rock",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "pavo-town--pavo-town-gym",
     "name": "Pavo Town Gym",
     "description": "Located near the outskirts of Pavo Town, the Rock-type Gym is particularly popular among mountaineers and outdoor enthusiasts. In addition to its official battle facilities, the Gym operates a climbing school where Trainers can learn rock climbing, mountain navigation and techniques for working alongside Rock-type Pokémon. Its outdoor courses make extensive use of the surrounding terrain.",
     "category": "gym",
     "isGym": true,
     "gymType": "Rock",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "pavo-town--mountain-trailhead",
     "name": "Mountain Trailhead",
     "description": "Several hiking trails leading into the Vaisera Mountains begin at this well-maintained recreational area. Visitors will find equipment rental shops, rest shelters and information boards detailing nearby routes. Local guides frequently gather here to organize expeditions, while Trainers often use the surrounding foothills to practice traveling through mountainous terrain.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "pavo-town--pavo-outfitters",
     "name": "Pavo Outfitters",
     "description": "A longstanding family-owned establishment specializing in outdoor equipment, Pavo Outfitters sells camping supplies, climbing gear and protective clothing suitable for mountain expeditions. The shop also carries specialized equipment designed for Pokémon accompanying their Trainers into difficult environments. Its knowledgeable employees are particularly helpful to visitors unfamiliar with the Vaisera Mountains.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "pavo-town--stonebridge-square",
     "name": "Stonebridge Square",
     "description": "The center of Pavo Town is a modest public square surrounded by cafés, shops and traditional stone buildings. A small bridge crosses the stream running through its center, giving the square its name. Residents frequently gather here for markets and seasonal celebrations, while visiting hikers often stop for refreshments before continuing their journeys.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "rana-town",
   "name": "Rana Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Normal",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "rana-town--rana-town-gym",
     "name": "Rana Town Gym",
     "description": "Rana Town's Normal-type Gym places particular emphasis on developing well-rounded Trainers and strengthening relationships between humans and Pokémon. Alongside its competitive facilities, the Gym operates an educational program covering Pokémon care, basic battle strategy and practical skills useful in everyday life. Its welcoming atmosphere makes it especially popular among beginning Trainers.",
     "category": "gym",
     "isGym": true,
     "gymType": "Normal",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "rana-town--rana-breeding-center",
     "name": "Rana Breeding Center",
     "description": "One of Stellara's most respected Pokémon breeding facilities, the Rana Breeding Center provides educational programs, boarding services and professional guidance for aspiring Breeders. Its extensive grounds include pastures, nurseries and specialized care facilities. Visitors can learn about Pokémon development, responsible breeding practices and the importance of maintaining healthy living environments.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "rana-town--greenfield-racetrack",
     "name": "Greenfield Racetrack",
     "description": "Pokémon racing has been a longstanding tradition in Rana Town, and Greenfield Racetrack is the center of its competitive racing community. The facility hosts regular races, training sessions and annual championships that attract participants from across Stellara. Its surrounding grounds include stables, exercise areas and spectator seating.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "rana-town--farmers-exchange",
     "name": "Farmers' Exchange",
     "description": "Every morning, farmers and merchants gather at the Farmers' Exchange to sell fresh produce, dairy products and other agricultural goods. The market also serves as an important distribution center for shipments destined for larger cities. Pokémon are frequently seen helping workers transport supplies and manage deliveries throughout the bustling complex.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "musca-town",
   "name": "Musca Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Fighting",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "musca-town--musca-town-gym",
     "name": "Musca Town Gym",
     "description": "Martial arts have been an important part of Musca Town's culture for generations, and its Fighting-type Gym continues that tradition. The facility combines professional Pokémon battling with an extensive martial arts school, offering instruction in physical conditioning, self-discipline and various fighting styles. Both Trainers and ordinary residents participate in its educational programs.",
     "category": "gym",
     "isGym": true,
     "gymType": "Fighting",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "musca-town--artisan-s-row",
     "name": "Artisan's Row",
     "description": "Pottery workshops, woodworking studios and independent craft shops occupy the colorful buildings lining Artisan's Row. Many businesses have been passed down through generations, preserving traditional methods alongside modern techniques. Visitors can purchase handmade goods, commission specialized Pokémon equipment or participate in workshops led by local craftspeople.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "musca-town--the-open-courtyard",
     "name": "The Open Courtyard",
     "description": "Surrounded by traditional architecture, the Open Courtyard has served as Musca Town's main gathering place for decades. Public martial arts demonstrations, cultural performances and seasonal festivals regularly take place here. During quieter hours, residents practice exercises, socialize or enjoy meals from the small restaurants overlooking the square.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "musca-town--musca-cultural-center",
     "name": "Musca Cultural Center",
     "description": "Dedicated to preserving the diverse traditions that shaped Musca Town, the Cultural Center contains exhibits covering regional craftsmanship, martial arts and local history. Its spacious classrooms host pottery lessons, dance performances and educational workshops. The center also organizes cultural festivals that bring together residents from the town's many communities.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "hamal-town",
   "name": "Hamal Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Fire",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "hamal-town--hamal-town-gym",
     "name": "Hamal Town Gym",
     "description": "Hamal Town's Fire-type Gym makes extensive use of the area's natural geothermal resources, maintaining heated training facilities and specialized environments for Fire-type Pokémon. The Gym also offers educational programs on thermal energy, responsible fire management and Pokémon care. Its official challenges are popular community events that draw visitors from neighboring settlements.",
     "category": "gym",
     "isGym": true,
     "gymType": "Fire",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "hamal-town--hamal-hot-springs",
     "name": "Hamal Hot Springs",
     "description": "The mineral-rich waters of Hamal Hot Springs have attracted visitors for generations. Several indoor and outdoor bathing pools are maintained at different temperatures, allowing guests to relax while enjoying views of the surrounding hills. Although locals often praise the waters' healing properties, their medical benefits remain a subject of debate.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "hamal-town--steamwell-terrace",
     "name": "Steamwell Terrace",
     "description": "Built around a collection of natural geysers, Steamwell Terrace features elevated walkways and observation platforms overlooking the steaming landscape. Small cafés and souvenir shops serve tourists throughout the day. Visitors are encouraged to remain behind designated barriers, as the geysers can erupt unexpectedly and release dangerously hot water.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "shaula-town",
   "name": "Shaula Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Grass",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "shaula-town--shaula-town-gym",
     "name": "Shaula Town Gym",
     "description": "Rather than occupying a conventional sporting complex, Shaula Town's Grass-type Gym is surrounded by extensive gardens and outdoor training areas. Its educational programs emphasize horticulture, wilderness survival and developing strong relationships with Pokémon. The Gym also maintains a community nursery, where residents can learn to cultivate plants and care for the local environment.",
     "category": "gym",
     "isGym": true,
     "gymType": "Grass",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "shaula-town--woodland-commons",
     "name": "Woodland Commons",
     "description": "At the center of Shaula Town lies a spacious community garden surrounded by wooden buildings and shaded walking paths. Residents maintain vegetable plots, flowering plants and small ponds throughout the grounds. Wild Pokémon occasionally visit the gardens, and the commons frequently hosts communal meals, gardening workshops and local celebrations.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "shaula-town--the-forest-house",
     "name": "The Forest House",
     "description": "A rustic educational lodge situated near the entrance to Kaxyl Forest, the Forest House provides instruction in camping, navigation and responsible wilderness exploration. Experienced guides organize excursions into the surrounding woodland, while its small exhibition room introduces visitors to the Pokémon and plants commonly encountered throughout the forest.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "menkent-town",
   "name": "Menkent Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Ghost",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "menkent-town--menkent-town-gym",
     "name": "Menkent Town Gym",
     "description": "Housed within a restored historic building, Menkent Town's Ghost-type Gym is closely involved in preserving the town's unusual history. Alongside its competitive battling programs, the Gym conducts research into Ghost-type Pokémon and offers educational tours examining paranormal folklore. Its Trainers also assist residents with disturbances involving Ghost-type Pokémon.",
     "category": "gym",
     "isGym": true,
     "gymType": "Ghost",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "menkent-town--menkent-historical-society",
     "name": "Menkent Historical Society",
     "description": "Generations of local history are preserved within this modest museum, which occupies one of Menkent Town's oldest surviving buildings. Its collections include photographs, family records and artifacts associated with the surrounding region. Visitors are particularly interested in the society's extensive archives documenting unexplained occurrences and the legends surrounding Fomalhaut Estate.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "menkent-town--lantern-street",
     "name": "Lantern Street",
     "description": "Old-fashioned shops and narrow cobblestone walkways make Lantern Street one of Menkent Town's most recognizable attractions. Antique lanterns illuminate the buildings after sunset, while local businesses sell handmade goods, curiosities and souvenirs associated with the town's ghost stories. Guided evening walks are especially popular among visitors interested in paranormal folklore.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "celaeno-town",
   "name": "Celaeno Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Fairy",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "celaeno-town--celaeno-town-gym",
     "name": "Celaeno Town Gym",
     "description": "Celaeno Town's Fairy-type Gym is particularly well known for its extensive Pokémon salon, which offers grooming, styling and specialized care services. The Gym also maintains beautiful gardens and provides instruction in Fairy-type Pokémon training, general battling and performance preparation. Its seasonal showcases are popular attractions among residents and visiting Trainers alike.",
     "category": "gym",
     "isGym": true,
     "gymType": "Fairy",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "celaeno-town--rosewood-gardens",
     "name": "Rosewood Gardens",
     "description": "Colorful flowerbeds, ornamental hedges and winding stone paths fill this carefully maintained public garden. Fairy-type Pokémon are frequently spotted among the blossoms, particularly during the warmer months. Local horticulturists organize gardening demonstrations and seasonal flower exhibitions, while the gardens themselves provide a peaceful setting for visitors and residents.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "celaeno-town--celaeno-craft-market",
     "name": "Celaeno Craft Market",
     "description": "Traditional craftsmanship remains an important part of Celaeno Town's identity, and its weekly craft market provides local artisans with an opportunity to showcase their work. Visitors can browse handmade clothing, pottery, decorative accessories and floral arrangements. During annual festivals, the market expands to include performances, food stalls and gardening competitions.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "sabik-town",
   "name": "Sabik Town",
   "category": "cities_towns",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": {
    "type": "Poison",
    "assignmentStatus": "provisional_requires_verification"
   },
   "pointsOfInterest": [
    {
     "id": "sabik-town--sabik-town-gym",
     "name": "Sabik Town Gym",
     "description": "Sabik Town's Poison-type Gym operates alongside a specialized research facility dedicated to toxicology and Pokémon medicine. Its experienced Trainers provide education on Poison-type Pokémon, environmental hazards and safe handling practices. The Gym also collaborates with local scientists to develop treatments for poisoning and improve safety throughout the surrounding wetlands.",
     "category": "gym",
     "isGym": true,
     "gymType": "Poison",
     "gymAssignmentStatus": "provisional_requires_verification"
    },
    {
     "id": "sabik-town--largia-research-station",
     "name": "Largia Research Station",
     "description": "Located near the edge of Largia Swamp, this research facility studies the unusual ecosystems of Stellara's wetlands. Scientists investigate medicinal plants, water quality and the behavior of native Pokémon. Visitors can explore educational exhibits or participate in supervised field programs, although access to certain research areas is restricted.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "sabik-town--marshwalk-boardwalk",
     "name": "Marshwalk Boardwalk",
     "description": "Elevated wooden walkways wind through the shallow wetlands surrounding Sabik Town, allowing visitors to observe the local environment without disturbing its delicate ecosystems. Several observation platforms overlook pools and marsh vegetation where wild Pokémon are frequently spotted. The boardwalk is particularly popular among photographers, researchers and nature enthusiasts.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "sabik-town--sabik-apothecary",
     "name": "Sabik Apothecary",
     "description": "For generations, the Sabik Apothecary has specialized in remedies made from medicinal plants found throughout the surrounding wetlands. Its shelves contain traditional herbal preparations, modern medical supplies and treatments for common Pokémon ailments. The establishment also works with local researchers to ensure that its products are safe and responsibly sourced.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "kaxyl-forest",
   "name": "Kaxyl Forest",
   "category": "forests_wetlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "kaxyl-forest--old-timber-trail",
     "name": "Old Timber Trail",
     "description": "One of the oldest established routes through Kaxyl Forest, Old Timber Trail winds between towering trees and thick undergrowth. Its well-worn dirt paths connect several clearings and neighboring settlements, making it popular among traveling Trainers. Although generally safe during daylight hours, certain sections become difficult to navigate after heavy rainfall.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "kaxyl-forest--elderwood-grove",
     "name": "Elderwood Grove",
     "description": "Deep within Kaxyl Forest stands a secluded grove containing some of the oldest trees in Stellara. Their enormous trunks and intertwined roots have formed natural shelters used by numerous wild Pokémon. The dense canopy prevents much of the sunlight from reaching the forest floor, leaving the grove in near-constant shade.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "kaxyl-forest--fernbrook-clearing",
     "name": "Fernbrook Clearing",
     "description": "A small stream runs through this peaceful clearing, where soft grass and scattered wildflowers grow beneath an opening in the forest canopy. Pokémon frequently gather here to drink from the stream or rest among the vegetation. Its relatively open terrain also makes Fernbrook Clearing a popular location for camping and recreational Pokémon battles.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "kaxyl-forest--hollowroot-passage",
     "name": "Hollowroot Passage",
     "description": "Several enormous fallen trees have created a network of natural tunnels and sheltered passages along the forest floor. Small Pokémon often inhabit the hollow trunks, using them to hide from predators and unfavorable weather. Some passages connect to narrow animal trails, although their winding paths can easily disorient inexperienced travelers.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "kaxyl-forest--the-whispering-woods",
     "name": "The Whispering Woods",
     "description": "Local folklore claims that strange voices can occasionally be heard among the trees in this isolated section of Kaxyl Forest. Some residents attribute the phenomenon to Ghost-type Pokémon, while others believe it results from wind passing through hollow trunks. Regardless of the explanation, the area's unusual acoustics have made it a popular subject of local ghost stories.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "kaxyl-forest--mosswater-pond",
     "name": "Mosswater Pond",
     "description": "Surrounded by thick vegetation and moss-covered stones, Mosswater Pond is a quiet freshwater habitat concealed within the forest. Water-type Pokémon inhabit its shallow depths, while numerous Bug- and Grass-type species thrive along the shoreline. The pond is particularly attractive during the warmer months, when flowering plants cover portions of the surrounding banks.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "largia-swamp",
   "name": "Largia Swamp",
   "category": "forests_wetlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "largia-swamp--blackmire-crossing",
     "name": "Blackmire Crossing",
     "description": "A narrow stretch of relatively stable ground provides one of the few natural routes through the deeper portions of Largia Swamp. Twisted tree roots and muddy pools surround the passage, making travel difficult without proper preparation. Trainers frequently encounter Poison- and Water-type Pokémon lurking among the vegetation.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "largia-swamp--murkwater-basin",
     "name": "Murkwater Basin",
     "description": "Dark, stagnant water fills this broad depression near the heart of Largia Swamp. Thick algae covers much of its surface, concealing submerged roots and uneven terrain beneath. Several species of aquatic Pokémon inhabit the basin, although its poor visibility and potentially hazardous water discourage visitors from attempting to swim.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "largia-swamp--crooked-willow-grove",
     "name": "Crooked Willow Grove",
     "description": "Unusually shaped trees dominate this isolated section of the swamp, their exposed roots twisting through the muddy ground. Many have grown at strange angles due to unstable soil and frequent flooding. The grove provides shelter for numerous wild Pokémon, while its dense vegetation and persistent mist make navigation particularly difficult.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "largia-swamp--bitterleaf-marsh",
     "name": "Bitterleaf Marsh",
     "description": "Several species of medicinal and toxic plants grow throughout this shallow wetland, attracting researchers from nearby Sabik Town. Some plants are valued for their pharmaceutical applications, while others can cause serious irritation or poisoning when handled incorrectly. The marsh is carefully studied, although much of its vegetation remains undisturbed.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "largia-swamp--the-drowned-path",
     "name": "The Drowned Path",
     "description": "What appears to be an abandoned stone walkway occasionally emerges from the shallow waters of Largia Swamp. Large portions have disappeared beneath mud and vegetation, making its original purpose difficult to determine. Local residents believe the path once connected settlements that existed before the wetlands expanded, although little evidence has been recovered.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "tucana-rainforest",
   "name": "Tucana Rainforest",
   "category": "forests_wetlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "tucana-rainforest--emerald-canopy",
     "name": "Emerald Canopy",
     "description": "The upper reaches of Tucana Rainforest support a remarkable variety of Pokémon that rarely descend to the forest floor. Thick branches, hanging vines and flowering plants form an interconnected habitat high above the ground. Experienced climbers and researchers occasionally explore the canopy to observe species that are difficult to encounter elsewhere.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "tucana-rainforest--rainfall-hollow",
     "name": "Rainfall Hollow",
     "description": "Heavy rainfall collects within this sheltered depression, creating a network of temporary pools and narrow streams. The hollow supports numerous amphibious Pokémon and moisture-dependent plants, some of which are rarely found outside tropical environments. During particularly wet periods, rising water can make the area inaccessible without specialized equipment.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "tucana-rainforest--viridian-research-camp",
     "name": "Viridian Research Camp",
     "description": "Established by biologists studying Tucana's remarkable biodiversity, this modest field station provides temporary accommodations and research facilities. Scientists investigate Pokémon behavior, tropical vegetation and the medicinal properties of local plants. Visiting Trainers occasionally assist with supervised surveys, although researchers discourage unnecessary disturbances to the surrounding ecosystem.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "tucana-rainforest--old-settlement-trail",
     "name": "Old Settlement Trail",
     "description": "Weathered stone markers and partially overgrown pathways indicate the location of an ancient travel route once used by communities inhabiting Tucana Rainforest. Several small villages remain accessible along portions of the trail, preserving local customs and traditional architecture. The route has become a popular destination for researchers interested in the rainforest's human history.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "tucana-rainforest--thornveil-thicket",
     "name": "Thornveil Thicket",
     "description": "Dense vines and thorn-covered plants form an almost impenetrable barrier around this isolated section of the rainforest. Several species possess irritating or toxic properties, making careless exploration particularly dangerous. Despite these hazards, numerous Pokémon thrive among the vegetation, using its natural defenses for protection against larger predators.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "yanna-jungle",
   "name": "Yanna Jungle",
   "category": "forests_wetlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "yanna-jungle--nymira-mangroves",
     "name": "Nymira Mangroves",
     "description": "Along Antila Island's sheltered coastline lies Nymira Mangroves, an extensive wetland where freshwater streams meet the ocean. Partially submerged trees form a network of tangled roots, tidal channels and shallow lagoons. Water- and Grass-type Pokémon thrive throughout the area, while changing tides periodically alter which passages are accessible.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": true
    },
    {
     "id": "yanna-jungle--yanna-falls",
     "name": "Yanna Falls",
     "description": "Near the center of Yanna Jungle, a powerful waterfall descends into a series of natural pools surrounded by tropical vegetation. The clearer, shallower pools are popular swimming destinations, although visitors are discouraged from approaching the waterfall's strongest currents. Wild Pokémon frequently gather along the surrounding rocks and stream banks.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "yanna-jungle--sunbreak-clearing",
     "name": "Sunbreak Clearing",
     "description": "An unusual opening in the jungle canopy allows sunlight to reach a broad meadow surrounded by towering trees. Colorful flowers and low-growing vegetation flourish here, attracting numerous Bug- and Grass-type Pokémon. The clearing provides a convenient resting place for travelers, although the surrounding jungle remains home to territorial species.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "yanna-jungle--tanglevine-gorge",
     "name": "Tanglevine Gorge",
     "description": "Steep rocky walls and hanging vines characterize this narrow gorge, where a winding stream flows beneath the jungle canopy. Fallen trees and uneven ledges provide several possible routes through the terrain, but some passages are difficult to traverse. Strong Pokémon occasionally establish territories within the gorge, making exploration unpredictable.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "yanna-jungle--the-great-banyan",
     "name": "The Great Banyan",
     "description": "An ancient tree of exceptional size stands within a secluded section of Yanna Jungle. Its enormous branches extend across a wide area, while countless aerial roots have gradually formed a maze of natural columns beneath its canopy. Numerous Pokémon inhabit the tree, and local residents regard it as an important symbol of the island's natural heritage.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "breshno-flatlands",
   "name": "Breshno Flatlands",
   "category": "forests_wetlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "breshno-flatlands--wildflower-meadow",
     "name": "Wildflower Meadow",
     "description": "During the warmer months, this expansive meadow becomes covered in colorful flowers that attract numerous Bug- and Grass-type Pokémon. Gentle slopes and open terrain make it a popular destination for picnics, photography and recreational Pokémon battles. The meadow's appearance changes considerably throughout the year as different plants enter their flowering seasons.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "breshno-flatlands--windward-hill",
     "name": "Windward Hill",
     "description": "One of the highest natural elevations within Breshno Flatlands, Windward Hill offers uninterrupted views of the surrounding grasslands. Strong breezes frequently sweep across its summit, making it a popular location for kite flying and watching Flying-type Pokémon. The hill is particularly scenic during sunrise and sunset.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "breshno-flatlands--golden-grass-prairie",
     "name": "Golden Grass Prairie",
     "description": "Tall, golden grasses stretch across this quieter section of the flatlands, concealing numerous wild Pokémon among the vegetation. Unlike the more frequently traveled meadows, Golden Grass Prairie contains few established paths. Its relatively undisturbed environment makes it particularly appealing to Trainers interested in encountering Pokémon away from crowded recreational areas.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "breshno-flatlands--stillwater-pond",
     "name": "Stillwater Pond",
     "description": "A shallow freshwater pond occupies a natural depression among the rolling hills of Breshno Flatlands. Surrounded by reeds and scattered trees, it provides an important source of water for Pokémon living throughout the grasslands. Visitors occasionally gather near its banks to observe wildlife, fish or enjoy the peaceful scenery.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "vaisera-mountains",
   "name": "Vaisera Mountains",
   "category": "mountains_highlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "vaisera-mountains--veyra-moorlands",
     "name": "Veyra Moorlands",
     "description": "Rolling hills, open grasslands and scattered rock formations characterize the Veyra Moorlands, a highland environment stretching across the lower foothills of the Vaisera Mountains. Wildflowers bloom throughout the warmer months, while grazing Pokémon frequently wander across the landscape. Although generally accessible, sudden changes in weather can make the exposed terrain difficult to navigate.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": true
    },
    {
     "id": "vaisera-mountains--ironcrest-ridge",
     "name": "Ironcrest Ridge",
     "description": "A narrow mountain ridge overlooking several valleys, Ironcrest Ridge is a popular destination among experienced hikers and climbing enthusiasts. Its steep slopes and exposed rock faces provide challenging terrain for training, while the summit offers impressive views of Western Stellara. Strong winds are common, particularly along the higher elevations.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vaisera-mountains--stonefall-valley",
     "name": "Stonefall Valley",
     "description": "Nestled between several mountain peaks, Stonefall Valley is a secluded basin filled with rocky slopes, scattered trees and small freshwater streams. Rock- and Fighting-type Pokémon are frequently encountered throughout the area, making it a popular destination for Trainers seeking challenging opponents. Loose stones occasionally tumble from the surrounding cliffs, particularly after heavy rainfall.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vaisera-mountains--the-pilgrim-s-ascent",
     "name": "The Pilgrim's Ascent",
     "description": "For generations, martial artists and dedicated Trainers have traveled this demanding mountain trail to test their endurance and discipline. The route winds through steep slopes, narrow passages and several natural resting areas before reaching a secluded plateau. Some visitors undertake the journey as a personal challenge, while others come to train away from civilization.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vaisera-mountains--eagle-s-rest",
     "name": "Eagle's Rest",
     "description": "Situated on a broad rocky outcrop, Eagle's Rest provides a natural observation point overlooking much of the surrounding mountain range. Flying-type Pokémon frequently ride the thermal currents rising from the valleys below, occasionally gathering along the exposed cliffs. The location is especially popular among photographers and researchers studying mountain-dwelling Pokémon.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "gurios-mountains",
   "name": "Gurios Mountains",
   "category": "mountains_highlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "gurios-mountains--borealis-tundra",
     "name": "Borealis Tundra",
     "description": "Above the tree line of the Gurios Mountains lies Borealis Tundra, an expansive alpine landscape characterized by frozen soil, windswept grasslands and scattered patches of hardy vegetation. Temperatures remain low throughout much of the year, and snow can fall even during warmer months. Ice-type Pokémon thrive here despite the unforgiving conditions.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": true
    },
    {
     "id": "gurios-mountains--frostbite-pass",
     "name": "Frostbite Pass",
     "description": "One of the few established routes through the higher elevations of the Gurios Mountains, Frostbite Pass winds between steep cliffs and heavily snow-covered slopes. Mountain shelters have been constructed along portions of the trail, although sudden blizzards can still make travel dangerous. Experienced guides frequently assist Trainers attempting to cross the pass.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "gurios-mountains--whiteglass-glacier",
     "name": "Whiteglass Glacier",
     "description": "An enormous glacier stretches between several mountain peaks, its surface marked by deep crevasses and towering formations of compressed ice. Certain sections appear almost translucent beneath direct sunlight, giving the glacier its name. The area attracts researchers studying ancient ice deposits, although unstable surfaces make unsupervised exploration extremely hazardous.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "gurios-mountains--snowpine-valley",
     "name": "Snowpine Valley",
     "description": "Sheltered by the surrounding mountains, Snowpine Valley contains a dense woodland of cold-resistant trees and several partially frozen streams. Its relative protection from strong winds makes it an important habitat for Pokémon that struggle to survive at higher elevations. Small clearings provide suitable resting places for travelers exploring the lower mountain slopes.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "gurios-mountains--northpoint-summit",
     "name": "Northpoint Summit",
     "description": "Few locations in Stellara offer views as extensive as those from Northpoint Summit, one of the highest accessible peaks in the Gurios Mountains. Reaching its upper slopes requires considerable preparation, and severe weather frequently prevents expeditions from continuing. On clear days, visitors can see vast stretches of Northern Stellara from its exposed summit.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "deneb-desert",
   "name": "Deneb Desert",
   "category": "deserts_badlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "deneb-desert--salaris-flats",
     "name": "Salaris Flats",
     "description": "Once the basin of an ancient lake, Salaris Flats is now an expansive salt-covered landscape stretching across a remote section of Deneb Desert. Its pale surface reflects sunlight intensely during the day, while rare rainfall creates a thin layer of water that mirrors the sky. Hardy Ground-type Pokémon occasionally traverse the otherwise barren terrain.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": true
    },
    {
     "id": "deneb-desert--scorched-dunes",
     "name": "Scorched Dunes",
     "description": "Towering sand dunes dominate this remote stretch of Deneb Desert, their shapes constantly changing under the influence of powerful winds. The terrain is notoriously difficult to navigate, as familiar landmarks can disappear beneath shifting sands. Ground-type Pokémon frequently burrow beneath the surface to escape the heat, sometimes emerging unexpectedly when disturbed.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "deneb-desert--redstone-oasis",
     "name": "Redstone Oasis",
     "description": "A freshwater spring surrounded by reddish rock formations supports a small but thriving pocket of vegetation within the desert. Palm trees and drought-resistant plants provide shelter for numerous wild Pokémon, making the oasis an important resting place for travelers. Its water supply is relatively dependable, although visitors are encouraged to avoid disturbing the surrounding habitat.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "deneb-desert--the-buried-settlement",
     "name": "The Buried Settlement",
     "description": "Fragments of stone walls and weathered foundations emerge from the sands of this ancient archaeological site. Much of the settlement remains buried, and researchers continue to debate when its inhabitants lived and why they abandoned the area. Excavations are occasionally conducted here, with discoveries transported to Saiph City for further study.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "deneb-desert--sunstone-plateau",
     "name": "Sunstone Plateau",
     "description": "Rising above the surrounding dunes, Sunstone Plateau is a broad rocky formation composed of layered sandstone and exposed mineral deposits. Its elevated position makes it a useful landmark for desert travelers, while the sheltered crevices along its slopes provide habitats for Rock- and Ground-type Pokémon. Temperatures on its exposed surface can become dangerously high during midday.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "vardos-badlands",
   "name": "Vardos Badlands",
   "category": "deserts_badlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "vardos-badlands--painted-canyon",
     "name": "Painted Canyon",
     "description": "Layers of red, orange, yellow and pale sandstone form striking patterns along the walls of Painted Canyon. Centuries of erosion have exposed sedimentary deposits that reveal the region's geological history. The canyon is particularly popular among photographers and researchers, although narrow passages and loose rocks make certain sections difficult to explore.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vardos-badlands--dustfall-ravine",
     "name": "Dustfall Ravine",
     "description": "A deep ravine cuts through the badlands, its steep walls casting long shadows across the rocky ground below. Strong winds frequently carry fine dust through the passage, reducing visibility without warning. Several hardy Pokémon species inhabit the sheltered ledges and narrow crevices, making the ravine an interesting destination for experienced Trainers.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vardos-badlands--copperstone-mining-camp",
     "name": "Copperstone Mining Camp",
     "description": "Abandoned machinery, deteriorating wooden buildings and collapsed mine entrances mark the remains of Copperstone Mining Camp. Once an important center for mineral extraction, the settlement was gradually deserted after its deposits became commercially unprofitable. Wild Pokémon have since occupied several structures, while unstable tunnels pose significant dangers to curious explorers.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vardos-badlands--fossil-ridge",
     "name": "Fossil Ridge",
     "description": "Exposed layers of sedimentary rock have made Fossil Ridge a valuable location for paleontological research. Fossilized shells, plant impressions and other remnants of prehistoric life can occasionally be found embedded within the surrounding formations. Researchers regularly survey the area, although removing significant specimens without authorization is prohibited.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "vardos-badlands--splitrock-mesa",
     "name": "Splitrock Mesa",
     "description": "An enormous mesa rises above the surrounding canyons, distinguished by a deep fracture running through its central rock formation. The relatively flat summit provides wide views of Vardos Badlands and the distant Deneb Desert. Rock-type Pokémon are common along its slopes, while the narrow ascent requires careful footing.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "ignara-highlands",
   "name": "Ignara Highlands",
   "category": "mountains_highlands",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "ignara-highlands--mount-ignara",
     "name": "Mount Ignara",
     "description": "The dormant volcano at the center of Ignara Highlands rises above a landscape shaped by ancient eruptions. Its upper slopes consist largely of dark volcanic rock, while geothermal vents continue to release heat from beneath the surface. Although Mount Ignara has not erupted in recent history, access to hazardous areas near its summit is restricted.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "ignara-highlands--ashen-fields",
     "name": "Ashen Fields",
     "description": "Long-cooled lava flows have formed an expansive landscape of dark basalt and fractured volcanic stone. Despite the seemingly barren terrain, hardy plants have gradually taken root within cracks and pockets of accumulated soil. Fire-, Rock- and Ground-type Pokémon inhabit the area, using the uneven formations for shelter and protection.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "ignara-highlands--steamveil-springs",
     "name": "Steamveil Springs",
     "description": "Naturally heated pools and mineral-rich springs are scattered throughout this geothermal valley. Clouds of steam frequently drift across the rocky landscape, while deposits left behind by evaporating water create unusual patterns around the pools. Some areas remain cool enough to approach safely, but others contain dangerously hot water and unstable ground.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "ignara-highlands--cinderfall-gorge",
     "name": "Cinderfall Gorge",
     "description": "A deep gorge carved through ancient volcanic deposits reveals layers of basalt and other igneous rock. Narrow ledges run along portions of its walls, while small streams occasionally flow through the lowest sections after rainfall. The gorge attracts geologists studying the region's volcanic past and Trainers interested in exploring its rugged terrain.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "ignara-highlands--the-sulfur-vents",
     "name": "The Sulfur Vents",
     "description": "Numerous geothermal openings release steam and sulfurous gases throughout this isolated section of Ignara Highlands. Yellow mineral deposits cover the surrounding rocks, giving the landscape a distinctive appearance. While certain Fire-type Pokémon thrive near the warmer ground, visitors are warned that concentrated gases and unstable surfaces can make the area extremely dangerous.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "polaris-lake",
   "name": "Polaris Lake",
   "category": "waterways_coasts",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "polaris-lake--clearwater-marina",
     "name": "Clearwater Marina",
     "description": "Boating and fishing enthusiasts frequently gather at Clearwater Marina, one of the busiest recreational facilities along Polaris Lake. Its docks accommodate privately owned boats, fishing vessels and sightseeing tours, while nearby shops provide equipment rentals and supplies. Guided excursions offer visitors opportunities to observe aquatic Pokémon in their natural habitats.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "polaris-lake--deepwater-basin",
     "name": "Deepwater Basin",
     "description": "Far from the populated shores of Polaris Lake lies Deepwater Basin, an enormous underwater depression where the lake reaches some of its greatest depths. Few researchers have extensively explored its murky waters, contributing to longstanding stories of a gigantic Pokémon supposedly inhabiting the area. Although its existence remains unconfirmed, some fishermen refuse to venture anywhere near the basin.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "polaris-lake--willowbank-shore",
     "name": "Willowbank Shore",
     "description": "A peaceful stretch of shoreline distinguished by its willow trees, shallow waters and scattered patches of reeds. The area provides important nesting and feeding grounds for numerous aquatic Pokémon, making it particularly popular among nature enthusiasts. Small walking trails connect several observation points, although certain sections are protected to prevent disturbances to local wildlife.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "polaris-lake--the-riverhead",
     "name": "The Riverhead",
     "description": "Near Polaris Lake's western shoreline, the water gradually narrows into the beginning of the Risa River. The Riverhead is characterized by gentle currents, grassy banks and small islands formed by accumulated sediment. Visitors often gather here to watch Pokémon swimming between the lake and river, while anglers favor the calmer stretches of water.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "risa-river",
   "name": "Risa River",
   "category": "waterways_coasts",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "risa-river--painted-stone-banks",
     "name": "Painted Stone Banks",
     "description": "Smooth stones displaying unusual combinations of red, blue, yellow and green are scattered along this scenic section of the Risa River. Their vibrant colors have made the area popular among collectors and photographers. During periods of low water, additional stones become exposed, attracting visitors hoping to discover particularly striking specimens.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "risa-river--whitewater-rapids",
     "name": "Whitewater Rapids",
     "description": "The Risa River becomes considerably more turbulent as it passes through this narrow, rocky section. Powerful currents rush between exposed boulders, creating difficult conditions for ordinary boats. Experienced kayakers occasionally navigate the rapids, while certain Water-type Pokémon thrive in the fast-moving water and are frequently observed swimming against the current.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "risa-river--riverside-racing-grounds",
     "name": "Riverside Racing Grounds",
     "description": "A relatively straight and calm stretch of the Risa River serves as a popular venue for competitive Pokémon racing. Temporary spectator areas and marked courses are established during organized events, attracting Trainers and racing enthusiasts from neighboring settlements. Outside competitions, the surrounding banks remain open for fishing, recreation and Pokémon training.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "risa-river--three-bridges-crossing",
     "name": "Three Bridges Crossing",
     "description": "Three bridges constructed during different periods of Stellara's development span the Risa River at this important transportation crossing. The oldest is a narrow stone bridge maintained primarily for pedestrians, while newer structures accommodate modern vehicles and rail traffic. The surrounding area offers scenic views of the river and its bustling transportation routes.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "irra-beach",
   "name": "Irra Beach",
   "category": "waterways_coasts",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "irra-beach--coral-bay",
     "name": "Coral Bay",
     "description": "A sheltered coastal inlet along Irra Beach, Coral Bay is especially popular for swimming and snorkeling thanks to its remarkably clear waters. Colorful marine Pokémon can occasionally be observed among the submerged rocks and coral formations. Guided snorkeling excursions are available, although visitors are expected to avoid disturbing the fragile underwater environment.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "irra-beach--seabreeze-boardwalk",
     "name": "Seabreeze Boardwalk",
     "description": "Restaurants, souvenir shops and recreational businesses line this lively waterfront boardwalk, which is particularly crowded during the summer months. Visitors can rent beach equipment, sample local seafood or enjoy performances by traveling entertainers. Its proximity to Vega City has made the boardwalk a popular destination for tourists seeking a more relaxed atmosphere.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "irra-beach--surfbreak-point",
     "name": "Surfbreak Point",
     "description": "Rolling waves and favorable coastal conditions make Surfbreak Point one of Irra Beach's premier surfing destinations. Surfing competitions are regularly held here, attracting participants from throughout Stellara. Some Trainers practice riding the waves alongside their Water-type Pokémon, although stronger currents beyond the designated recreational areas can be dangerous.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "elysia-falls",
   "name": "Elysia Falls",
   "category": "waterways_coasts",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "elysia-falls--elysia-cascade",
     "name": "Elysia Cascade",
     "description": "Water tumbles down a series of rocky ledges before collecting in a broad pool surrounded by vegetation. The cascade is the centerpiece of Elysia Falls, attracting visitors who come to enjoy its scenery and relaxing atmosphere. Observation platforms provide excellent views of the waterfall without requiring travelers to approach its slippery rocks.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "elysia-falls--mineral-springs",
     "name": "Mineral Springs",
     "description": "Several naturally heated pools occupy a sheltered valley near the waterfall, their mineral-rich waters producing clouds of steam throughout the day. Both visitors and wild Pokémon occasionally gather around the warmer pools. Water temperatures vary considerably, however, and certain areas are unsafe for bathing due to intense geothermal heat.",
     "category": "recreation",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "elysia-falls--mistwood-trail",
     "name": "Mistwood Trail",
     "description": "A narrow walking path winds through the wooded slopes surrounding Elysia Falls, passing several streams and smaller geothermal springs. Moisture from the waterfall encourages thick moss and ferns to grow along the trail. Small Pokémon frequently inhabit the vegetation, while occasional openings in the trees offer views of the surrounding landscape.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "caelum-cliffs",
   "name": "Caelum Cliffs",
   "category": "waterways_coasts",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "caelum-cliffs--windward-bluff",
     "name": "Windward Bluff",
     "description": "Perched high above the ocean, Windward Bluff offers spectacular views of Stellara's western coastline. Strong sea winds sweep across the grassy headland, while Flying-type Pokémon frequently circle above the cliffs. The location is popular among photographers and experienced hikers, although visitors are advised to remain away from unstable cliff edges.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "caelum-cliffs--tidemouth-caverns",
     "name": "Tidemouth Caverns",
     "description": "A network of sea caves extends beneath Caelum Cliffs, shaped by centuries of powerful waves and coastal erosion. Some passages become accessible during low tide, revealing rocky chambers and shallow tidal pools inhabited by aquatic Pokémon. Rising water can quickly isolate portions of the caverns, making careful planning essential for exploration.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "caelum-cliffs--gullrock-sanctuary",
     "name": "Gullrock Sanctuary",
     "description": "Several isolated rock formations off the coast serve as important nesting grounds for Flying-type Pokémon. The surrounding waters also support numerous marine species, creating a diverse coastal ecosystem. Conservation organizations monitor the sanctuary throughout the year, and access to certain nesting areas is restricted during breeding seasons.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "caelum-cliffs--smuggler-s-cove",
     "name": "Smuggler's Cove",
     "description": "Hidden beneath a series of steep cliffs, Smuggler's Cove is a secluded beach accessible primarily through narrow coastal passages or by boat. Local folklore claims that smugglers once used the sheltered inlet to conceal goods from authorities. Today, its unusual rock formations and relative isolation attract adventurous Trainers and curious explorers.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "fomalhaut-estate",
   "name": "Fomalhaut Estate",
   "category": "special_landmarks",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "fomalhaut-estate--fomalhaut-manor",
     "name": "Fomalhaut Manor",
     "description": "The centerpiece of Fomalhaut Estate is a once-luxurious mansion that has deteriorated after decades of abandonment. Its dimly lit halls contain decaying furnishings, damaged portraits and remnants of the estate's former grandeur. Reports of unexplained noises, moving shadows and possible Ghost-type Pokémon have made the manor notorious among paranormal investigators and curious Trainers.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "fomalhaut-estate--the-forgotten-gardens",
     "name": "The Forgotten Gardens",
     "description": "Overgrown hedges, broken statues and neglected fountains surround the rear grounds of Fomalhaut Estate. Once carefully maintained, the gardens have become a tangled maze of vegetation and crumbling stone pathways. Strange lights have occasionally been reported among the trees, although whether they originate from Ghost-type Pokémon or something else remains uncertain.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "ulan-grotto",
   "name": "Ulan Grotto",
   "category": "special_landmarks",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "ulan-grotto--crystal-chamber",
     "name": "Crystal Chamber",
     "description": "Deep within Ulan Grotto lies an expansive cavern containing enormous formations of naturally luminescent crystals. Their soft, multicolored light illuminates the surrounding rock walls, creating a striking contrast with the darkness elsewhere in the cave system. Researchers occasionally visit to study the unusual minerals, while certain cave-dwelling Pokémon have adapted to the illuminated environment.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "ulan-grotto--echoing-depths",
     "name": "Echoing Depths",
     "description": "A network of narrow passages and enormous underground chambers forms one of Ulan Grotto's least explored areas. Sounds reverberate unpredictably through the tunnels, making it difficult to determine their source or direction. With few natural landmarks and almost no light, the Echoing Depths are particularly dangerous for travelers unfamiliar with the cave system.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "ulan-grotto--underground-lake",
     "name": "Underground Lake",
     "description": "Concealed beneath the Vaisera Mountains, this subterranean lake is fed by water filtering through the surrounding rock formations. Its still surface reflects the faint glow of nearby mineral deposits, while several aquatic Pokémon inhabit its cold depths. Portions of the shoreline remain accessible, although the lake's full extent has never been thoroughly mapped.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "helos-ruins",
   "name": "Helos Ruins",
   "category": "special_landmarks",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "helos-ruins--the-old-citadel",
     "name": "The Old Citadel",
     "description": "The remains of an imposing stone fortress stand near the center of Helos Ruins, overlooking the surrounding archaeological site. Although much of its structure has collapsed, several towers and defensive walls remain recognizable. Researchers continue to investigate the citadel's original purpose and its relationship to the civilization that once inhabited the area.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "helos-ruins--hall-of-inscriptions",
     "name": "Hall of Inscriptions",
     "description": "Ancient symbols and elaborate carvings cover the interior walls of this partially preserved structure. Some inscriptions depict humans and Pokémon participating in ceremonies and everyday activities, providing valuable insight into the region's distant past. Although researchers have deciphered portions of the writing, many passages remain untranslated or subject to competing interpretations.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "helos-ruins--sunken-courtyard",
     "name": "Sunken Courtyard",
     "description": "Vegetation has overtaken this expansive courtyard, where cracked stone walkways surround the remains of a large central monument. Several partially buried structures suggest that the courtyard once served as an important gathering place. Archaeologists regularly survey the area, while wild Pokémon have established habitats among its collapsed walls and overgrown gardens.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  },
  {
   "id": "stellara-pok-mon-league",
   "name": "Stellara Pokémon League",
   "category": "special_landmarks",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "stellara-pok-mon-league--champion-stadium",
     "name": "Champion Stadium",
     "description": "The centerpiece of the Stellara Pokémon League, Champion Stadium is an enormous sporting venue designed to accommodate some of the most prestigious Pokémon battles in the region. Its advanced facilities host the Masters' Tournament and other major competitions, attracting spectators from across the world. Matches are frequently broadcast to enormous audiences throughout Stellara.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "stellara-pok-mon-league--league-training-center",
     "name": "League Training Center",
     "description": "Professional battle arenas, specialized training facilities and educational classrooms occupy this expansive complex within the Pokémon League. Trainers of varying experience levels visit to improve their skills under qualified instructors, while accomplished competitors use its advanced facilities to prepare for major tournaments. The center also hosts occasional workshops conducted by Gym Leaders and other distinguished Trainers.",
     "category": "research_education",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "stellara-pok-mon-league--champions-gallery",
     "name": "Champions' Gallery",
     "description": "A prestigious museum dedicated to the history of competitive Pokémon battling in Stellara, the Champions' Gallery commemorates the region's most accomplished Trainers. Its exhibits include historical photographs, tournament records, trophies and memorabilia associated with previous Champions. Visitors can also explore interactive displays documenting memorable battles and important moments in the League's history.",
     "category": "culture_history",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "stellara-pok-mon-league--league-village",
     "name": "League Village",
     "description": "A bustling residential and commercial district provides accommodations, restaurants, shops and recreational facilities for Trainers visiting the Pokémon League. Its streets are frequently crowded during major tournaments, when competitors and spectators arrive from throughout Stellara. Despite its connection to professional battling, League Village functions much like an ordinary neighborhood, with permanent residents and everyday businesses.",
     "category": "commerce_community",
     "isGym": false,
     "isNamedSubregion": false
    }
   ],
   "pageSlug": "stellara-pokemon-league"
  },
  {
   "id": "talas-co-power-plant",
   "name": "Talas Co. Power Plant",
   "category": "special_landmarks",
   "description": null,
   "descriptionSource": "existing_website_latest_approved",
   "coordinates": null,
   "coordinatesStatus": "unapproved",
   "gym": null,
   "pointsOfInterest": [
    {
     "id": "talas-co-power-plant--abandoned-generator-hall",
     "name": "Abandoned Generator Hall",
     "description": "Massive generators and deteriorating industrial machinery occupy the central building of the former Talas Company Power Plant. Much of the equipment was damaged during the infamous Talas Incident, when mistreated Electric-type Pokémon revolted against the facility's operators. Exposed wiring and unstable structures remain serious hazards, while aggressive wild Pokémon have since occupied portions of the building.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    },
    {
     "id": "talas-co-power-plant--the-service-tunnels",
     "name": "The Service Tunnels",
     "description": "A network of maintenance passages extends beneath the abandoned power plant, connecting machinery rooms, storage facilities and former employee work areas. Years of neglect have left many corridors flooded, obstructed or without functioning lighting. Electrical discharges have occasionally been reported underground, suggesting that some damaged equipment or resident Pokémon remain active within the tunnels.",
     "category": "natural_landmark",
     "isGym": false,
     "isNamedSubregion": false
    }
   ]
  }
 ]
};
