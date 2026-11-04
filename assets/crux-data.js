/* The mission list on the Team Crux page. Edit this file to add, change or remove a Team Crux mission.
   It works exactly like assets/missions-data.js: one { ... } block is one mission, with a comma between blocks and every quote mark in pairs.
   The fields are the same: title, stars (1 to 6), type, issuer, location, repeatable, solo, party, description, objectives, requirements, rewards and id.
   Here "issuer" is who ordered the mission (shown as Ordered by), "description" is the orders and "party" is the squad.
   The Tier, Pokémon required and bonus EXP come from the "ranks" rows below, which match the Missions page.
   The "sample" line puts a SAMPLE MISSIONS tag on the console. Delete it once the missions are real.
   "forum" (optional) is a Discord link. When it is filled in, each mission gets an Open the Discord forum button. */
window.STELLARA_CRUX_MISSIONS = {
  sample: true,
  forum: '',
  ranks: [
    { name: 'Routine', tier: 'Beginner', pokemon: 'None', bonus: 25 },
    { name: 'Moderate', tier: 'Experienced', pokemon: '1 Experienced-tier Pokémon', bonus: 50 },
    { name: 'Challenging', tier: 'Great', pokemon: '1 Great-tier Pokémon', bonus: 100 },
    { name: 'Severe', tier: 'Ultra', pokemon: '2 Ultra-tier Pokémon', bonus: 150 },
    { name: 'Extreme', tier: 'Elite', pokemon: '3 Elite-tier Pokémon', bonus: 250 },
    { name: 'Catastrophic', tier: 'Champion', pokemon: '3 Champion-tier Pokémon', bonus: 400 }
  ],
  items: [
    {
      id: 'C-101', title: 'Quiet Pickup at the Docks', stars: 1, type: 'Smuggling', issuer: 'Dockside Cell', location: 'Marrow Cove',
      repeatable: true, solo: true, party: 'Solo',
      description: ['A sealed crate is waiting under a false manifest at the cove. A cell contact will hand it over if the Agent arrives after dark and says nothing to the harbor staff.', 'Nothing in it is dangerous. It only has to reach the safehouse before dawn without anyone asking what is inside.'],
      objectives: ['Meet the contact at the east pier.', 'Carry the crate to the safehouse unopened.', 'Leave no trace for the harbor patrol.'],
      rewards: 'Cell rations and a pocket of Poké Dollars.'
    },
    {
      id: 'C-102', title: 'Fresh Faces', stars: 1, type: 'Recruitment', issuer: 'Officer Vane', location: 'Pavo Town',
      repeatable: true, solo: true, party: 'Solo or pair',
      description: ['Officer Vane wants three promising Trainers noticed. Watch the local battles, learn who is good and who is desperate, and bring names back.'],
      objectives: ['Watch the Pavo Town battles for an evening.', 'Note three Trainers worth approaching.', 'Report back without being recognized.'],
      rewards: 'Standing with Officer Vane.'
    },
    {
      id: 'C-201', title: 'The Borrowed Ledger', stars: 2, type: 'Theft', issuer: 'Officer Vane', location: 'Talas Co. Offices',
      repeatable: false, solo: true, party: 'Solo or small group',
      description: ['A Talas Company accountant keeps a private ledger that shows who has been paying the Rangers. Crux would like to read it.', 'The accountant is careful, but the office cleaners are not. Someone with a quick hand and a quiet Pokémon could be in and out in minutes.'],
      objectives: ['Slip into the Talas Co. offices.', 'Photograph the ledger pages.', 'Return the book exactly where it was.'],
      requirements: 'Bring a Pokémon that can move without being heard.',
      rewards: 'A forged Talas keycard.'
    },
    {
      id: 'C-202', title: 'Cold Storage', stars: 2, type: 'Recon', issuer: 'Dockside Cell', location: 'Gurios Mountains',
      repeatable: true, solo: false, party: 'Small group',
      description: ['A shipping depot in the mountains has gone quiet. Crux wants to know whether it is abandoned, watched, or being used by someone else.'],
      objectives: ['Scout the depot from the ridge.', 'Count guards and vehicles.', 'Report who else is using it.'],
      rewards: 'Cold-weather gear.'
    },
    {
      id: 'C-301', title: 'A Sample for the Lab', stars: 3, type: 'Research', issuer: 'Enforcer Sable', location: 'Fomalhaut Estate',
      repeatable: false, solo: false, party: 'Small group',
      description: ['The research wing needs tissue from a rare morph who lives near the estate. They must not be hurt, and they must not know why Crux is interested.', 'Enforcer Sable has asked for patience over force. A scared morph will run, and a panicked one will fight.'],
      objectives: ['Locate the morph without alerting the estate.', 'Gain their trust or distract them long enough to collect the sample.', 'Deliver it to the research wing sealed.'],
      requirements: 'A Trainer comfortable with morph roleplay and the rules on forced outcomes.',
      rewards: 'Research-wing access for one week.'
    },
    {
      id: 'C-302', title: 'Line Cut', stars: 3, type: 'Sabotage', issuer: 'Enforcer Sable', location: 'Talas Co. Power Plant',
      repeatable: true, solo: false, party: 'Small group',
      description: ['A short blackout in the eastern district will draw Rangers away from the harbor. The plant has one weak junction, and Crux knows where.'],
      objectives: ['Reach the weak junction.', 'Cut power for exactly ten minutes.', 'Escape before the repair crews arrive.'],
      rewards: 'A Crux transit pass.'
    },
    {
      id: 'C-401', title: 'Safehouse Rebuild', stars: 4, type: 'Operations', issuer: 'Director Ashgrove', location: 'Undisclosed',
      repeatable: false, solo: false, party: 'Squad of 3 to 5',
      description: ['A League raid burned the old safehouse. The Director wants a replacement raised somewhere nobody will look, stocked and guarded, within the week.'],
      objectives: ['Choose and secure a site.', 'Stock it with supplies and a medical bay.', 'Set a lookout rotation.'],
      requirements: 'A squad leader is named before the mission starts.',
      rewards: 'A named base the squad may use in roleplay.'
    },
    {
      id: 'C-501', title: 'The Gym Leader’s Daughter', stars: 5, type: 'Kidnapping', issuer: 'Director Ashgrove', location: 'Pokémon League grounds',
      repeatable: false, solo: false, party: 'Squad of 4 to 6',
      description: ['Crux needs leverage over a League official. Staff will confirm the target character and ensure the other player has agreed before anything begins.', 'Every step of this mission is run by a moderator, and the scene follows the roleplay rules on consent.'],
      objectives: ['Plan the approach with the moderator.', 'Carry out the extraction as agreed.', 'Hold the target in a safe location.'],
      requirements: 'The other player must opt in. Staff approval comes first.',
      rewards: 'A standing favor from the Director.'
    },
    {
      id: 'C-601', title: 'Fall of the Crown', stars: 6, type: 'Operations', issuer: 'The Leader', location: 'Pokémon League',
      repeatable: false, solo: false, party: 'Full cell',
      description: ['The Leader has set the League itself as the next target. Only Directors and those they bring along will be told the full plan.'],
      objectives: ['Assemble the cell the Director names.', 'Receive the plan in person.', 'Carry it out as ordered.'],
      requirements: 'Only those the Director names take part.',
      rewards: 'Placement in the story arc.'
    }
  ]
};
