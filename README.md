# Stellara website (Version 4)

A static site: plain HTML, CSS and JavaScript. There is no build step and nothing to install. It works on GitHub Pages, and any web server that serves folders works the same way. Open it through a web server. Opening the files directly from disk will not follow the folder links.

Page content comes only from `Stellara Updated Version 4.docx`. The route plan comes from `Stellara_V4_Website_IA.md`.

## How the site is built

| Part | What it does |
|---|---|
| `assets/site-data.js` | **The one file that defines the site map.** Every menu, breadcrumb, sidebar, search result, related link and previous/next link is built from its list of pages. |
| `assets/site.js` | Builds the header, hero, sidebar, on-page contents list, card lists, related links, pager and footer in the browser. You should not need to edit it. |
| `assets/style.css` | The Stellara halftone style. Colors are variables at the top. |
| `<route>/index.html` | One folder per page. The folder path is the address, for example `getting-started/starters/` is `/getting-started/starters`. |
| `_templates/` | Starting points for new pages. |
| icons | Each entry in `site-data.js` can name an icon (`icon: "swords"`). The icon drawings live at the top of `assets/site.js`. A page with no icon gets a default. |

Each page file holds only that page's content. The menus and layout around it come from the shared files, so changing a menu name or order is one edit in `site-data.js`.

## Page layouts

| Layout | Used for | Template |
|---|---|---|
| `home` | The home page | (the home page itself) |
| `category` | A section landing page. Lists its pages as cards. | `_templates/category.html` |
| `directory` | Towns & Cities and Wilderness & Landmarks. Lists locations as cards. | `_templates/category.html` |
| `article` | Rules and systems pages. Has an on-page contents list when there are three or more headings. | `_templates/article.html` |
| `organization` | The four organization pages | `_templates/organization.html` |
| `location` | Towns, cities, wilderness and landmarks | `_templates/location.html` |
| `sitemap` | The site map | (`sitemap/index.html`) |

## The Pokémart ledger

`commerce/pokemart/index.html` is a price ledger. Each item is one `<li class="lrow">` with its price, and `assets/ledger.js` adds the icon, the Add button and the shop-thread list bar. To change a price, edit the number in that row (`data-p` and the number shown). To add an item, copy a row and change `data-ic` (icon name), `data-c` (icon color) and `data-p`/`data-u` (price and unit). `data-lim` sets the most a member can hold, and `data-ask` sets the blanks added to the copied list. Icon drawings are at the top of `ledger.js`.

The document writes prices as both EXP and XP. The ledger shows each price in the unit the document uses, and the list total is labeled EXP. The blanks in the copied list (such as "Pokémon / Move") come from what the document says each purchase must name.

## Points of Interest and the Regional Atlas

- **POI index on location pages.** Every location page ends its text with a "Points of Interest" list (a numbered index where one description unfolds at a time). It is drawn by `assets/pois.js` from `assets/atlas-data.js`; the page is matched to its data by the last part of its address. To add or change a POI, edit its entry in `atlas-data.js` (the fields are explained at the top of that file). A page needs no change. A link such as `/region/settlements/cyngi-city/#poi-cyngi-city--astral-promenade` opens that POI.
- **Tags.** Each POI has one place type (Natural landmark, Commerce and community, Culture and history, Research and education, Recreation) or is a Gym. Gyms show a tag for their own type (for example "Fire Gym") with a matching icon; the 18 colours and icons are at the top of `assets/pois.js`. POIs the text names as subregions also carry a "Subregion" tag.
- **Draft label.** While `status` in `atlas-data.js` says "draft", the POI list and the Atlas show a Draft label. Change the status to remove it. Gym types are marked "provisional" there until each Gym's `gymAssignmentStatus` is changed to `verified`.
- **Regional Atlas** (`region/atlas/`): a filterable digital map and location panel drawn by `assets/atlas.js`. Marker positions live only in `assets/atlas-geo.js` and are PROPOSED, not canon (the page shows a Proposed map banner). The map artwork, `assets/stellara-digital-map.svg`, is generated from those positions. After moving a marker run `node tools/atlas-map/build-map.js`, then `node tools/atlas-map/audit.js`, which checks the 38 ids, the terrain under every marker and the geography written in the location descriptions. `assets/atlas-geo.preview.js` and `region/atlas/preview/` are an old invented style preview and are not canon.
- `_explore/` holds layout experiments. It is listed in `.gitignore` and is not published.

## Location and organization pages

- **Location pages** (layout `location`): the hero shows the place type in its corner. To give a place its own picture, add `art: "assets/art/vaisera-mountains.webp"` to its entry in `site-data.js` and put the image in `assets/art/`. The hero then shows that picture instead of the banner. Below the text, "Within this location" and "Places mentioned" are built from the links in the text, followed by previous and next cards.
- **Organization pages** (layout `organization`): the right-hand rail shows an emblem, related pages, the page contents and the other organizations. To use a real emblem, add `emblem: "assets/art/team-crux.webp"` to the entry. On Team Crux, the five ranks are drawn as steps along a line.

## Gym badges

The Stellara Pokémon League page has a "Gyms and Badges" section of 18 flip cards. It is not in the architecture document (which lists Gym-by-Gym profiles and badges as out of scope for V4); the Gym list and the badge art were supplied by the owner. The badge images are in `assets/badges/`. The Gym list (town or city and type) and the badge names are in `build-v4.js`-generated HTML; to change one Gym, edit its card in `activities/pokemon-league/index.html`. The six places the owner's list called "City" (Musca, Hamal, Shaula, Menkent, Celaeno, Sabik) are "Town" on this site, and the cards link to the existing town pages. Pictures of each town or city can be added with `art` in `assets/site-data.js` (see Location pages).

## Trial Crests

The Stellara Trials page has eight Trial Crest flip cards in the Trial Crests section. Like the Gym badges, this is not in the architecture document; the crest art was supplied by the owner (images in `assets/crests/`). The back of each card repeats the stage and its minimum requirement from the Eligibility section. The cards use the same script as the Gym badges (`assets/gyms.js`).

## Organization logos

The Pokémon League, Stellara Trials Association and Team Crux pages show the logos the owner supplied (`assets/logos/`, 512px for the profile rail and 128px for the cards). Like the badges and crests, they are not in the architecture document. The artwork is dark navy, red and black, so it sits on a light plate. Talas Company has no logo yet and shows a drawn icon; to add one, put the PNG in `assets/logos/` and add `emblem: "assets/logos/talas-company.png"` and a 128px copy named `talas-company-128.png` to its entry in `assets/site-data.js`. The logos are rasterized, not vector, so they get soft if shown much larger than about 512px.

## Callouts and key points

On rules and organization pages, the site turns text that is already bold into extras, so writers only need to use bold for emphasis:

- A paragraph that opens with a full bold sentence (28 characters or more, ending in a period) is shown as a callout. If the sentence states a limit or requirement (words like must, cannot, only, approval, required) the callout is amber, otherwise cyan. All-caps sentences are left as plain bold.
- Bold text in capital letters, such as **TEN POINTS** or **RANDOM ENCOUNTERS:**, is shown as a small badge.
- A bold line on its own, with no full stop, becomes a sub-heading.
- On screens narrower than about 1100px, up to twelve bold phrases are listed in a "Key points on this page" fold-out next to the contents list, with the section each one is in. There is no right-hand column on wide screens.
- A thin progress line at the top of the screen shows how far down the page you are.

This is decided by word lists in `assets/site.js`, so a limit sentence that does not use one of those words will show as a note. The styles are at the end of `assets/style.css`.

## Adding a page

1. Make a folder named after the route, for example `activities/events/`.
2. Copy the right file from `_templates/` into it as `index.html`.
3. Set `data-route` (the folder path) and `data-root` (one `../` for each folder level in the route) on the `<body>` tag, and set the `<title>`.
4. Write the content. Give every `<h2>` an `id`.
5. Add one entry to `assets/site-data.js`:

```js
{ route: "activities/events", title: "Events", parent: "activities", layout: "article", desc: "One sentence.", related: ["activities/missions"] }
```

`parent` is the route of the section it belongs to. Order in the file is the order in menus. `related` links appear at the bottom of the page, and a `#heading-id` after a route links straight to a heading.

## Not built (by design)

Per the architecture document: no in-site Pokémart checkout, PC management, accounts, applications, catches or mission submissions; no encounter tables; no Discord URL. `discord` in `site-data.js` is empty, and the Discord button appears in the header when you fill it in.

## Source notes

**Excluded.** Everything labeled `LEGACY CONTENT - DO NOT READ` (old Mega Evolution, Z-Move, Dynamax and Terastallization text, document pages 41 to 44). Also the document title, its table of contents and its opening paragraph, which describes the old forum thread.

**Headings added.** These headings are not in the source. They are labels for the anchors the architecture document lists:
Pokémart "Purchase Process" (source heading: "Overview"), Evolution "Tier Requirements", Team Crux "Overview", the seven Stellara Trials headings, the Pokémon Exchange "Adoption", "Selling", "Appraisals" and "Restrictions", and the Black Market "Services", "Restrictions" and "Narrative Risks".

**Source language kept as written.** The text still says "thread", "board" and "the MOD REQUEST section of the Discord" in several places. Wording is not changed, because the architecture document asks that rules not change silently. Editing it is an editorial decision.

**Added at the owner's request, not in the architecture document:** the `getting-started/about` page (About Stellara). It holds the four introduction paragraphs that used to be on the home page. The Stellara Region page still shows the same four paragraphs, so the text appears on two pages. The home banner line is set by `home.lead` in `assets/site-data.js` (it is written by the generator, so change it there if you edit the file directly).

**Also added at the owner's request:** the `getting-started/character-creation` page (Character Creation), written from text supplied after the V4 document. It lists the character sheet fields as a `<dl class="fields">` list; the two optional fields carry an "Optional" tag. It sits after Roleplay Rules in Getting Started. Editorial note: the source sentence reads "Google Docs; etc." (kept as supplied).

**Open editorial items for you to decide:**
1. The League complex page (from the document's Towns and Cities section) calls the tournament the "Masters' Tournament". The League rules page calls it the "Champion Cup". Both are published as written.
2. Tier advancement costs appear twice, on Pokémon Progression and on the Pokémart. The values match. The Progression table also lists Beginner as "Starting Tier"; the Pokémart table does not list Beginner.
3. The Gym Challenges table gives a Gym Leader's Pokémon tier by badge count (0–1 Rookie up to 8+ Elite). The document calls these guidelines.
4. The footer text (`footer` in `site-data.js`) is boilerplate, not from the document. Change or remove it.
5. Settlement and wilderness pages hold only the paragraph the document provides. The document does not include wild Pokémon lists for each location.
6. The four sub-areas (Veyra Moorlands, Salaris Flats, Borealis Tundra, Nymira Mangroves) appear as linked mentions inside their parent location page, not as separate pages.

**Cross-links** are listed in each page's `related` entry in `site-data.js`. Links inside location text point to other documented locations and organizations by name.

**Pokémon listings (Exchange and Black Market).** The Exchange page has an "Available Pokémon" kiosk and the Black Market page has an "Available Listings" terminal. Both are drawn by `assets/listings.js` from `assets/listings-data.js`; to change a listing, edit that data file (the fields are explained at its top). Sprites go in `assets/sprites/` and are named in the listing's `sprite` field. The listings are sample data until the `sample: true` line is removed. The Adopt and Make an offer buttons open a request panel that copies a post title and message and links to the Discord forum; the forum links and the wording are in the data file. Prices are in EXP.

**Missions.** The Missions page has an "Available Missions" field console (a searchable, sortable list that unfolds each mission under its row), drawn by `assets/missions.js` from `assets/missions-data.js`. To add, change or remove a mission, edit that data file; the fields are explained at its top. The minimum Tier, Pokémon required and bonus EXP come from the star rank (the `ranks` list in the same file), so each mission only needs its stars. The missions are sample data until the `sample: true` line is removed. Set `forum` in the data file to a Discord link to add an "Open the Discord forum" button to each mission.

**Page width and Wide view.** The page layout is capped at 1480px (header, article area and footer share the cap) and the left menu column is 220px. Pages with a console (the Exchange, Black Market and Missions lists) get a "Wide view" button, drawn by `assets/site.js`, that hides the left menu so the console can use the full width. The choice is remembered in the visitor's browser. The button is hidden on screens narrower than 900px, where the menu is already folded into the page.
