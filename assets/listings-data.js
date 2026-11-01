/* Pokémon listings for the Exchange and the Black Market.
   Edit this file to add, change or remove a listing. One { ... } block is one Pokémon.

   Fields (the Stellara Pokémon template, plus a price):
     n  name        s  species     tier  Tier       t  types, as a list: ['Fire'] or ['Rock','Ground']
     ab ability     g  gender      h  height      w  weight
     mv moves, as a list       p  personality       aq  acquisition       pr  price (a number as text, or words)
     sprite  (optional) the file name of a picture saved in assets/sprites/, for example 'eevee-biscuit.png'.
             If you leave it out, or the file is missing, the empty frame shows instead.
   Black Market listings also have:
     id  the listing number, such as '#0417'
     risk  a list of the narrative risks from the Black Market page, such as ['Stolen Pokémon']

   Types with a colour: Normal, Fire, Psychic, Fairy, Electric, Rock, Ground, Dragon, Dark, Steel.
   Any other type still works; it just uses a plain colour.

   While "sample" is true, each screen shows a SAMPLE LISTINGS tag. Delete that line once the listings are real.
   "how" is the message shown when someone presses the Adopt or Make an offer button. */
window.STELLARA_LISTINGS = {
  sample: true,
  exchange: {
    how: 'Adoptions are arranged in the Stellara Discord. Post your request there and name the Pokémon you want.',
    items: [
      { n: 'Biscuit', s: 'Eevee', tier: 'Beginner', t: ['Normal'], ab: 'Run Away', g: 'Female', h: '0.3 m', w: '6.5 kg', mv: ['Tackle', 'Tail Whip', 'Sand Attack', 'Growl'], p: 'Friendly and curious. Follows anyone who might be carrying snacks.', aq: 'Surrendered by a previous Trainer and health-checked by the Exchange.', pr: '1,200' },
      { n: 'Ember', s: 'Growlithe', tier: 'Rookie', t: ['Fire'], ab: 'Intimidate', g: 'Male', h: '0.7 m', w: '19 kg', mv: ['Bite', 'Ember', 'Roar', 'Odor Sleuth'], p: 'Loyal and protective, with a loud bark for such a young Pokémon.', aq: 'Adopted into the Exchange after its Trainer relocated.', pr: '3,400' },
      { n: 'Hush', s: 'Ralts', tier: 'Rookie', t: ['Psychic', 'Fairy'], ab: 'Synchronize', g: 'Female', h: '0.4 m', w: '6.6 kg', mv: ['Growl', 'Confusion', 'Double Team', 'Disarming Voice'], p: 'Shy and watchful. Warms up slowly, then rarely leaves your side.', aq: 'Brought in by a Trainer who could no longer care for it.', pr: '2,800' },
      { n: 'Static', s: 'Mareep', tier: 'Beginner', t: ['Electric'], ab: 'Static', g: 'Male', h: '0.6 m', w: '7.8 kg', mv: ['Tackle', 'Thunder Wave', 'Thunder Shock', 'Growl'], p: 'Easygoing and sleepy, with a fleece that crackles when it is excited.', aq: 'Raised at an Exchange facility and cleared for adoption.', pr: '1,800' }
    ]
  },
  blackMarket: {
    how: 'Offers are made in the Stellara Discord. Post yours there and name the listing number.',
    items: [
      { id: '#0417', n: 'Gravel', s: 'Larvitar', tier: 'Experienced', t: ['Rock', 'Ground'], ab: 'Guts', g: 'Male', h: '0.6 m', w: '72 kg', mv: ['Bite', 'Sandstorm', 'Screech', 'Rock Slide'], p: 'Wary and quick to hiss at strangers. Flinches at sudden movement.', aq: 'Source withheld by the dealer.', pr: '14,500', risk: ['Mistreatment', 'Counterfeit Documentation'] },
      { id: '#0423', n: 'Dune', s: 'Gible', tier: 'Great', t: ['Dragon', 'Ground'], ab: 'Sand Veil', g: 'Female', h: '0.7 m', w: '20.5 kg', mv: ['Dragon Rage', 'Sand Attack', 'Dig', 'Bite'], p: 'Restless and fierce, with a habit of digging out of any enclosure.', aq: 'Source withheld by the dealer.', pr: '18,000', risk: ['Stolen Pokémon'] },
      { id: '#0431', n: 'Hush', s: 'Deino', tier: 'Great', t: ['Dark', 'Dragon'], ab: 'Hustle', g: 'Male', h: '0.8 m', w: '17.3 kg', mv: ['Tackle', 'Focus Energy', 'Bite', 'Dragon Breath'], p: 'Blind to everything it cannot hear, and tense around raised voices.', aq: 'Source withheld by the dealer.', pr: 'A favor', risk: ['Outstanding Obligations', 'Criminal Attention'] },
      { id: '#0440', n: 'Rivet', s: 'Beldum', tier: 'Experienced', t: ['Steel', 'Psychic'], ab: 'Clear Body', g: 'Genderless', h: '0.6 m', w: '95.2 kg', mv: ['Take Down', 'Magnet Rise', 'Metal Claw'], p: 'Aloof and hard to read. Hovers close to the ground and ignores most commands.', aq: 'Source withheld by the dealer.', pr: '21,000', risk: ['Criminal Attention', 'Counterfeit Documentation'] }
    ]
  }
};
