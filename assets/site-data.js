/* THE ONE FILE THAT DEFINES THE SITE MAP. Navigation, breadcrumbs, sidebars, search, related links and previous/next links all come from this list.
   To add a page: copy a file from _templates/ into a new folder named after the route, write the content, then add one entry below.
   parent: the route of the page it belongs to ("" for a top-level section). layout: category, directory, article, organization, location or sitemap.
   related: other routes to link at the bottom of the page (add #section to link to a heading). */
var SITE = {
 "name": "Stellara",
 "tagline": "Pokémon Stellara",
 "discord": "",
 "footer": "Stellara is a fan-made Pokémon roleplay. Pokémon is a trademark of Nintendo, Game Freak and Creatures. This site is not affiliated with them.",
 "home": {
  "lead": "An Original Pokemon RP."
 },
 "pages": [
  {
   "route": "getting-started",
   "title": "Getting Started",
   "parent": "",
   "layout": "category",
   "nav": "Getting Started",
   "icon": "compass"
  },
  {
   "route": "pokemon",
   "title": "Pokémon",
   "parent": "",
   "layout": "category",
   "nav": "Pokémon",
   "icon": "ball"
  },
  {
   "route": "battling",
   "title": "Battling",
   "parent": "",
   "layout": "category",
   "nav": "Battling",
   "icon": "swords"
  },
  {
   "route": "activities",
   "title": "Activities",
   "parent": "",
   "layout": "category",
   "nav": "Activities",
   "icon": "flag"
  },
  {
   "route": "commerce",
   "title": "Pokémart & Trading",
   "parent": "",
   "layout": "category",
   "nav": "Pokémart & Trading",
   "icon": "bag"
  },
  {
   "route": "region",
   "title": "Stellara Region",
   "parent": "",
   "layout": "category",
   "nav": "Stellara Region",
   "icon": "mount",
   "related": [
    "getting-started/about",
    "pokemon/catching"
   ]
  },
  {
   "route": "organizations",
   "title": "Organizations",
   "parent": "",
   "layout": "category",
   "nav": "Organizations",
   "icon": "people",
   "heads": [
    "Team Crux in brief"
   ]
  },
  {
   "route": "getting-started/about",
   "title": "About Stellara",
   "parent": "getting-started",
   "layout": "article",
   "desc": "The Stellara Region is a land of extraordinary diversity, where sprawling metropolitan cities, breathtaking natural landscapes, and remarkable technological…",
   "related": [
    "region"
   ]
  },
  {
   "route": "getting-started/general-rules",
   "title": "General Rules",
   "parent": "getting-started",
   "layout": "article",
   "icon": "doc",
   "desc": "Eight rules.",
   "related": [
    "getting-started/roleplay-rules"
   ]
  },
  {
   "route": "getting-started/roleplay-rules",
   "title": "Roleplay Rules",
   "parent": "getting-started",
   "layout": "article",
   "icon": "chat",
   "desc": "Six rules.",
   "related": [
    "getting-started/general-rules"
   ]
  },
  {
   "route": "getting-started/starters",
   "title": "Starter Pokémon",
   "parent": "getting-started",
   "layout": "article",
   "icon": "ball",
   "desc": "Stellara uses a point-buy system for starting Pokémon.",
   "related": [
    "pokemon/tiers"
   ]
  },
  {
   "route": "getting-started/personal-computer",
   "title": "Personal Computer Guide",
   "parent": "getting-started",
   "layout": "article",
   "icon": "monitor",
   "desc": "The Personal Computer (PC) is where players keep records of their Pokémon, items and other important possessions.",
   "heads": [
    "Pokémon Information",
    "Item Inventory",
    "Maintaining Your PC"
   ]
  },
  {
   "route": "getting-started/morphs",
   "title": "Morphs",
   "parent": "getting-started",
   "layout": "article",
   "icon": "dna",
   "desc": "Morphs are individuals who possess Pokémon DNA, either naturally or through artificial genetic modification.",
   "heads": [
    "Morph Characteristics and Abilities",
    "Natural Morphs",
    "Artificial Morphs",
    "Additional Restrictions"
   ],
   "related": [
    "organizations/team-crux"
   ]
  },
  {
   "route": "pokemon/communication",
   "title": "Pokémon Communication",
   "parent": "pokemon",
   "layout": "article",
   "icon": "speech",
   "desc": "Pokémon can understand human language, although humans do not necessarily understand Pokémon in return."
  },
  {
   "route": "pokemon/tiers",
   "title": "Pokémon Tiers",
   "parent": "pokemon",
   "layout": "article",
   "icon": "ladder",
   "desc": "Tiers are the only stat used on Pokemon Stellara.",
   "heads": [
    "Pokémon Tier Differences"
   ],
   "related": [
    "getting-started/starters",
    "pokemon/progression",
    "pokemon/trainer-tiers",
    "battling/battle-rules"
   ]
  },
  {
   "route": "pokemon/trainer-tiers",
   "title": "Trainer Tiers",
   "parent": "pokemon",
   "layout": "article",
   "icon": "shield",
   "desc": "Trainer Tiers represent a Trainer's overall experience, accomplishments, knowledge and abilities as a Pokémon Trainer.",
   "heads": [
    "Trainer Tier Progression",
    "Ranking Up"
   ],
   "related": [
    "pokemon/tiers"
   ]
  },
  {
   "route": "pokemon/progression",
   "title": "Pokémon Progression & EXP",
   "parent": "pokemon",
   "layout": "article",
   "icon": "up",
   "desc": "On Stellara, Pokémon progression is handled through a tier-based system rather than numerical levels.",
   "heads": [
    "Earning EXP",
    "Pokémon Tier Advancement",
    "EXP Expenditure"
   ],
   "related": [
    {
     "r": "commerce/pokemart#pokemon-tier-advancement",
     "l": "Pokémart: Pokémon Tier Advancement"
    },
    "pokemon/tiers",
    "activities/missions"
   ]
  },
  {
   "route": "pokemon/evolution",
   "title": "Evolution",
   "parent": "pokemon",
   "layout": "article",
   "icon": "evo",
   "desc": "Evolution is the process through which Pokémon undergo a transformation, often changing their appearance, abilities and overall capabilities.",
   "heads": [
    "Tier Requirements",
    "Special Evolution Methods",
    "Evolution During Battle"
   ],
   "related": [
    {
     "r": "commerce/pokemart#evolution-items",
     "l": "Pokémart: Evolution Items"
    }
   ]
  },
  {
   "route": "pokemon/catching",
   "title": "Catching Pokémon",
   "parent": "pokemon",
   "layout": "article",
   "icon": "pokes",
   "desc": "Catching Pokémon is handled so that players can obtain Pokémon with as little staff moderation as possible.",
   "heads": [
    "Wild Pokémon Encounters",
    "Wild Pokémon Tiers",
    "Catching Process",
    "Collaborative Catching",
    "Catching Limits"
   ],
   "related": [
    {
     "r": "commerce/pokemart#catching",
     "l": "Pokémart: Catching (Poképasses)"
    },
    "pokemon/rare-pokemon",
    "region"
   ]
  },
  {
   "route": "pokemon/rare-pokemon",
   "title": "Rare & Restricted Pokémon",
   "parent": "pokemon",
   "layout": "article",
   "icon": "star",
   "desc": "Ultra Beasts and Paradox Pokémon originate from other dimensions, distant timelines and unusual environments.",
   "heads": [
    "Ultra Beasts and Paradox Pokémon",
    "Legendary and Mythical Pokémon",
    "Capture Categories"
   ],
   "related": [
    "pokemon/catching"
   ]
  },
  {
   "route": "battling/battle-rules",
   "title": "Battle Rules",
   "parent": "battling",
   "layout": "article",
   "icon": "swords",
   "desc": "Pokémon battles are a major part of Stellara, and we want them to be as creative, engaging and enjoyable as possible.",
   "heads": [
    "Freeform Combat",
    "Multiple Actions",
    "Dodging and Blocking",
    "Injuries and Exhaustion",
    "Pokémon Tiers",
    "Fair Play and Godmodding",
    "Battle Resolution",
    "Item Usage",
    "Damage Calculations",
    "Fainting and Recovery"
   ],
   "related": [
    {
     "r": "pokemon/tiers#tier-differences",
     "l": "Pokémon Tier Differences"
    }
   ]
  },
  {
   "route": "battling/moves",
   "title": "Moves",
   "parent": "battling",
   "layout": "article",
   "icon": "bolt",
   "desc": "Pokémon on Stellara can learn up to EIGHT MOVES at a time.",
   "heads": [
    "Damage and Energy",
    "Critical Hits",
    "Status Moves and Conditions",
    "Stat-Boosting Moves",
    "Accuracy and Special Effects"
   ],
   "related": [
    {
     "r": "commerce/pokemart#moves",
     "l": "Pokémart: Moves"
    }
   ]
  },
  {
   "route": "battling/abilities",
   "title": "Abilities",
   "parent": "battling",
   "layout": "article",
   "icon": "spark",
   "desc": "Pokémon Abilities function on Stellara, although their effects are adapted to accommodate the freeform, narrative-focused battle system."
  },
  {
   "route": "battling/special-mechanics",
   "title": "Special Battle Mechanics",
   "parent": "battling",
   "layout": "article",
   "icon": "grid4",
   "desc": "Special Battle Mechanics allow Pokémon to temporarily access extraordinary powers that can significantly influence the outcome of a battle.",
   "heads": [
    "The Four Mechanics"
   ],
   "related": [
    {
     "r": "commerce/pokemart#battle-upgrades",
     "l": "Pokémart: Battle Upgrades"
    }
   ]
  },
  {
   "route": "battling/mega-evolution",
   "title": "Mega Evolution",
   "parent": "battling/special-mechanics",
   "layout": "article",
   "icon": "mega",
   "desc": "Mega Evolution is a temporary transformation that significantly enhances a Pokémon's capabilities and may alter its appearance, typing and Ability.",
   "related": [
    {
     "r": "commerce/pokemart#battle-upgrades",
     "l": "Pokémart: Battle Upgrades"
    }
   ]
  },
  {
   "route": "battling/z-moves",
   "title": "Z-Moves",
   "parent": "battling/special-mechanics",
   "layout": "article",
   "icon": "zc",
   "desc": "Z-Moves are exceptionally powerful techniques that allow Pokémon to unleash extraordinary attacks or enhance the effects of their existing moves.",
   "heads": [
    "Z-Move Damage"
   ],
   "related": [
    {
     "r": "commerce/pokemart#battle-upgrades",
     "l": "Pokémart: Battle Upgrades"
    }
   ]
  },
  {
   "route": "battling/dynamax-gigantamax",
   "title": "Dynamax & Gigantamax",
   "parent": "battling/special-mechanics",
   "layout": "article",
   "icon": "dyn",
   "desc": "Dynamax is a temporary transformation that drastically increases a Pokémon's size, enhances its physical capabilities and transforms its moves into powerful Max Moves.",
   "related": [
    {
     "r": "commerce/pokemart#battle-upgrades",
     "l": "Pokémart: Battle Upgrades"
    }
   ]
  },
  {
   "route": "battling/terastallization",
   "title": "Terastallization",
   "parent": "battling/special-mechanics",
   "layout": "article",
   "icon": "tera",
   "desc": "Terastallization is a temporary transformation that changes a Pokémon's typing and gives it a crystallized appearance.",
   "related": [
    {
     "r": "commerce/pokemart#battle-upgrades",
     "l": "Pokémart: Battle Upgrades"
    }
   ]
  },
  {
   "route": "activities/pokemon-league",
   "title": "Stellara Pokémon League",
   "parent": "activities",
   "layout": "article",
   "icon": "trophy",
   "desc": "The Stellara Pokémon League has a reputation for being one of the most difficult Pokémon Leagues to complete.",
   "heads": [
    "Gym Challenges",
    "Becoming a Gym Leader",
    "The Champion Cup"
   ],
   "related": [
    "organizations/pokemon-league",
    "region/landmarks/stellara-pokemon-league"
   ]
  },
  {
   "route": "activities/stellara-trials",
   "title": "Stellara Trials",
   "parent": "activities",
   "layout": "article",
   "icon": "flame",
   "desc": "The Stellara Trials are a series of challenges designed to test the strength, intelligence, perseverance and capabilities of Trainers and their Pokemon.",
   "heads": [
    "Overview",
    "Stages and Trials",
    "Eligibility",
    "Rules and Risks",
    "Trial Crests",
    "Legend's Trial",
    "Paragon"
   ],
   "related": [
    "organizations/stellara-trials-association"
   ]
  },
  {
   "route": "activities/missions",
   "title": "Missions",
   "parent": "activities",
   "layout": "article",
   "icon": "flag",
   "desc": "Missions are adventures and assignments that Trainers can undertake to earn EXP, obtain valuable items, encounter rare Pokémon and develop their characters.",
   "heads": [
    "Mission Difficulty",
    "Mission Requirements",
    "Undertaking Missions",
    "Mission Rewards",
    "Completing Missions"
   ],
   "related": [
    {
     "r": "pokemon/progression#earning-exp",
     "l": "Pokémon Progression: Earning EXP"
    }
   ]
  },
  {
   "route": "activities/sponsorships",
   "title": "Sponsorships",
   "parent": "activities",
   "layout": "article",
   "icon": "ribbon",
   "desc": "Sponsorships are agreements between Trainers and companies or organizations that provide support, resources and opportunities in exchange for promoting their…",
   "heads": [
    "Sponsorship Tiers",
    "Primary and Secondary Sponsorships",
    "Obtaining and Maintaining Sponsorships"
   ]
  },
  {
   "route": "commerce/pokemart",
   "title": "Pokémart",
   "parent": "commerce",
   "layout": "ledger",
   "icon": "bag",
   "desc": "When you are ready to make a purchase, make a thread in this board and list everything that you want to buy.",
   "heads": [
    "Purchase Process",
    "Pokémon Tier Advancement",
    "Catching",
    "Battle Upgrades",
    "Medicine",
    "Evolution Items",
    "Moves"
   ],
   "related": [
    "pokemon/progression",
    "pokemon/catching",
    "pokemon/evolution",
    "battling/moves",
    "battling/special-mechanics"
   ]
  },
  {
   "route": "commerce/pokemon-exchange",
   "title": "Stellara Pokémon Exchange",
   "parent": "commerce",
   "layout": "article",
   "icon": "swap",
   "desc": "The Stellara Pokémon Exchange is an organization that specializes in the adoption, sale and trading of Pokémon.",
   "heads": [
    "Adoption",
    "Selling",
    "Appraisals",
    "Restrictions"
   ]
  },
  {
   "route": "commerce/black-market",
   "title": "Black Market",
   "parent": "commerce",
   "layout": "article",
   "icon": "mask",
   "desc": "The Black Market is an underground network involved in the illegal sale, purchase and trading of Pokémon.",
   "heads": [
    "Services",
    "Restrictions",
    "Narrative Risks"
   ]
  },
  {
   "route": "region/settlements",
   "title": "Towns & Cities",
   "parent": "region",
   "layout": "directory",
   "icon": "city"
  },
  {
   "route": "region/settlements/cyngi-city",
   "title": "Cyngi City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Cyngi City is the largest city in Stellara and serves as the region's primary commercial, financial and cultural center."
  },
  {
   "route": "region/settlements/lacaille-city",
   "title": "Lacaille City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Lacaille City is a major city located in Eastern Stellara and is widely recognized for its commitment to environmental sustainability and renewable energy."
  },
  {
   "route": "region/settlements/pavo-town",
   "title": "Pavo Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Pavo Town is a medium-sized town located at the base of the Vaisera Mountains in Western Stellara."
  },
  {
   "route": "region/settlements/vega-city",
   "title": "Vega City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Vega City is Stellara's largest resort city, located along the eastern coastline near Irra Beach."
  },
  {
   "route": "region/settlements/rana-town",
   "title": "Rana Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Rana Town is a rural settlement located near Polaris Lake and is widely regarded as the agricultural center of Stellara."
  },
  {
   "route": "region/settlements/nair-city",
   "title": "Nair City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Nair City is the largest city in Northern Stellara and is located near the Gurios Mountains."
  },
  {
   "route": "region/settlements/hamal-town",
   "title": "Hamal Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Hamal Town is a small settlement located near Elysia Falls, a popular natural attraction known for its hot springs and geothermal activity."
  },
  {
   "route": "region/settlements/shaula-town",
   "title": "Shaula Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Shaula Town is a small, nature-oriented settlement located near Kaxyl Forest."
  },
  {
   "route": "region/settlements/saiph-city",
   "title": "Saiph City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Saiph City is one of the largest cities in Southern Stellara and is located deep within the Deneb Desert."
  },
  {
   "route": "region/settlements/eridani-city",
   "title": "Eridani City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Eridani City is a major seaport located along the western coast of Stellara, near where the Risa River empties into the ocean.",
   "related": [
    "organizations/talas-company"
   ]
  },
  {
   "route": "region/settlements/antares-city",
   "title": "Antares City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Antares City is a major city built within a dense tropical jungle, making it one of the most architecturally distinctive settlements in Stellara."
  },
  {
   "route": "region/settlements/baltis-city",
   "title": "Baltis City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Baltis City is a large city located along the shores of Polaris Lake and is particularly well known for its frequent rainfall and powerful thunderstorms."
  },
  {
   "route": "region/landmarks/stellara-pokemon-league",
   "title": "Stellara Pokémon League Complex",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Landmark",
   "icon": "columns",
   "desc": "The Stellara Pokémon League is a massive complex that serves as the administrative center for official Pokémon battling and Trainer-related organizations throughout…",
   "related": [
    "activities/pokemon-league",
    "organizations/pokemon-league"
   ]
  },
  {
   "route": "region/settlements/altair-city",
   "title": "Altair City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Altair City is a large city located on an elevated plateau in Western Stellara, not too far from the Vaisera Mountains."
  },
  {
   "route": "region/settlements/menkent-town",
   "title": "Menkent Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Menkent Town is a small, historic town located near the outskirts of Kaxyl Forest, not too far from Fomalhaut Estate."
  },
  {
   "route": "region/settlements/celaeno-town",
   "title": "Celaeno Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Celaeno Town is a picturesque town situated within a fertile valley in Central Stellara."
  },
  {
   "route": "region/settlements/sabik-town",
   "title": "Sabik Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Sabik Town is a medium-sized settlement located along the outskirts of Largia Swamp."
  },
  {
   "route": "region/settlements/musca-town",
   "title": "Musca Town",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "Town",
   "icon": "house",
   "desc": "Musca Town is a medium-sized town located in Southwestern Stellara."
  },
  {
   "route": "region/settlements/mintaka-city",
   "title": "Mintaka City",
   "parent": "region/settlements",
   "layout": "location",
   "kind": "City",
   "icon": "city",
   "desc": "Mintaka City is a major city located in Northeastern Stellara and is widely regarded as one of the region's leading centers for scientific research and technological…"
  },
  {
   "route": "region/wilderness",
   "title": "Wilderness & Landmarks",
   "parent": "region",
   "layout": "directory",
   "icon": "mount"
  },
  {
   "route": "region/wilderness/breshno-flatlands",
   "title": "Breshno Flatlands",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "The Breshno Flatlands are a sprawling stretch of grasslands characterized by rolling hills, colorful wildflowers and wide-open meadows."
  },
  {
   "route": "region/wilderness/kaxyl-forest",
   "title": "Kaxyl Forest",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Kaxyl Forest is the largest forest in Stellara, stretching across miles of densely wooded terrain."
  },
  {
   "route": "region/wilderness/fomalhaut-estate",
   "title": "Fomalhaut Estate",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Fomalhaut Estate is an abandoned manor located near Kaxyl Forest, not too far from Largia Swamp."
  },
  {
   "route": "region/wilderness/largia-swamp",
   "title": "Largia Swamp",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Largia Swamp is a vast wetland located near Kaxyl Forest and Fomalhaut Estate."
  },
  {
   "route": "region/wilderness/vaisera-mountains",
   "title": "Vaisera Mountains",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "The Vaisera Mountains are one of Stellara's two major mountain ranges, occupying a considerable portion of the region's western territory."
  },
  {
   "route": "region/wilderness/deneb-desert",
   "title": "Deneb Desert",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Deneb Desert is a harsh, arid region located in Southern Stellara, known for its scorching temperatures, rolling sand dunes and ancient ruins scattered throughout the…"
  },
  {
   "route": "region/wilderness/irra-beach",
   "title": "Irra Beach",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Irra Beach is a beautiful stretch of coastline located along Eastern Stellara, near the resort city of Vega."
  },
  {
   "route": "region/wilderness/ulan-grotto",
   "title": "Ulan Grotto",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Ulan Grotto is an extensive network of underground caves located beneath the Vaisera Mountains."
  },
  {
   "route": "region/wilderness/elysia-falls",
   "title": "Elysia Falls",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Elysia Falls is a popular natural attraction located near Hamal Town, best known for its beautiful waterfall and numerous geothermal hot springs."
  },
  {
   "route": "region/wilderness/polaris-lake",
   "title": "Polaris Lake",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Polaris Lake is the largest lake in Stellara, covering an impressive area and supporting a diverse population of aquatic Pokémon."
  },
  {
   "route": "region/wilderness/helos-ruins",
   "title": "Helos Ruins",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Helos Ruins are the remains of an ancient civilization located in Northern Stellara, near the Gurios Mountains."
  },
  {
   "route": "region/wilderness/talas-co-power-plant",
   "title": "Talas Co. Power Plant",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Talas Co.",
   "related": [
    "organizations/talas-company"
   ]
  },
  {
   "route": "region/wilderness/risa-river",
   "title": "Risa River",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Risa River is one of Stellara's most important waterways, flowing westward from Polaris Lake before eventually emptying into the ocean near Eridani City."
  },
  {
   "route": "region/wilderness/gurios-mountains",
   "title": "Gurios Mountains",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "The Gurios Mountains are a frigid mountain range located in Northern Stellara, famous for their snow-covered peaks, massive glaciers and harsh weather conditions."
  },
  {
   "route": "region/wilderness/tucana-rainforest",
   "title": "Tucana Rainforest",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Tucana Rainforest is a tropical wilderness characterized by its humid climate, dense vegetation and remarkable variety of plant and Pokémon species."
  },
  {
   "route": "region/wilderness/yanna-jungle",
   "title": "Yanna Jungle",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Yanna Jungle covers much of Antila Island and is known for its tropical climate, colorful vegetation and extraordinary biodiversity."
  },
  {
   "route": "region/wilderness/vardos-badlands",
   "title": "Vardos Badlands",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Vardos Badlands is a rugged landscape located along the northwestern outskirts of Deneb Desert, where the sandy terrain gradually gives way to rocky plateaus and deep…"
  },
  {
   "route": "region/wilderness/caelum-cliffs",
   "title": "Caelum Cliffs",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Caelum Cliffs is a dramatic stretch of coastline located in Western Stellara, not too far from Eridani City."
  },
  {
   "route": "region/wilderness/ignara-highlands",
   "title": "Ignara Highlands",
   "parent": "region/wilderness",
   "layout": "location",
   "icon": "mount",
   "desc": "Ignara Highlands is a volcanic region located along the southern reaches of the Vaisera Mountains."
  },
  {
   "route": "organizations/pokemon-league",
   "title": "Pokémon League",
   "parent": "organizations",
   "layout": "organization",
   "icon": "trophy",
   "desc": "The Stellara Pokémon League is the governing body responsible for overseeing the region's eighteen Pokémon Gyms and the prestigious Champion Cup.",
   "related": [
    "activities/pokemon-league",
    "region/landmarks/stellara-pokemon-league"
   ]
  },
  {
   "route": "organizations/stellara-trials-association",
   "title": "Stellara Trials Association",
   "parent": "organizations",
   "layout": "organization",
   "icon": "flame",
   "desc": "The Stellara Trials Association (STA) is an independent organization responsible for overseeing the prestigious Stellara Trials, a series of extraordinary challenges…",
   "related": [
    "activities/stellara-trials"
   ]
  },
  {
   "route": "organizations/team-crux",
   "title": "Team Crux",
   "parent": "organizations",
   "layout": "organization",
   "icon": "mask",
   "desc": "Team Crux is one of the most notorious criminal organizations operating within the Stellara Region.",
   "heads": [
    "Overview",
    "Joining Team Crux",
    "Member Benefits",
    "Ranks",
    "Promotions"
   ],
   "related": [
    "getting-started/morphs"
   ]
  },
  {
   "route": "organizations/talas-company",
   "title": "Talas Company",
   "parent": "organizations",
   "layout": "organization",
   "icon": "factory",
   "desc": "Headquartered in Eridani City, Talas Company is one of Stellara's largest energy corporations.",
   "related": [
    "region/settlements/eridani-city",
    "region/wilderness/talas-co-power-plant"
   ]
  },
  {
   "route": "sitemap",
   "title": "Site Map",
   "parent": "",
   "layout": "sitemap",
   "desc": "Every page on the site, grouped by section.",
   "hidden": true
  },
  {
   "route": "404",
   "title": "Page not found",
   "parent": "",
   "layout": "notfound",
   "hidden": true
  }
 ]
};
