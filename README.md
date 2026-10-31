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

Per the architecture document: no in-site Pokémart checkout, PC management, accounts, applications, catches or mission submissions; no encounter tables; no map; no Discord URL. `discord` in `site-data.js` is empty, and the Discord button appears in the header when you fill it in.

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
