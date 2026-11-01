/* The mission list on the Missions page. Edit this file to add, change or remove a mission.
   One { ... } block is one mission. Keep a comma between blocks, and keep every quote mark in pairs.

   Each mission has:
     title         the mission's name
     stars         its difficulty, from 1 to 6. The minimum Trainer Tier, the Pokémon required and the bonus EXP
                   are filled in from "ranks" below, so you do not type them for each mission
     type          for example 'Delivery', 'Rescue', 'Investigation', 'Escort', 'Exploration' or 'Combat'.
                   Any word works, and the Type filter lists whatever you use
     issuer        who issues the mission, such as 'Talas Company'. The Issued by filter lists whatever you use
     location      where it takes place
     repeatable    true if it can be done more than once, false if it can be done only once
     solo          true if it can reasonably be done alone, false if it needs a group
     party         a short note on group size, such as 'Solo or small group'
     description   the briefing. Use one line in quotes for each paragraph, separated by commas
     objectives    what the Trainers must do, one line in quotes for each
     requirements  (optional) anything extra, beyond the Tier and Pokémon the difficulty already requires
     rewards       (optional) rewards beyond the bonus EXP
     id            (optional) a short label such as 'M-201'. If you leave it out, one is made for you

   The "sample" line puts a SAMPLE MISSIONS tag on the console. Delete it once the missions are real.
   "forum" (optional) is a Discord link. When it is filled in, each mission gets an Open the Discord forum button. */
window.STELLARA_MISSIONS = {
  sample: true,
  forum: '',
  /* One row for each star, from 1 to 6. These match the Missions page. Change them here if the rules change. */
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
      id: 'M-101', title: 'Parcels for Pavo Town', stars: 1, type: 'Delivery', issuer: 'Stellara Pokémon Exchange', location: 'Pavo Town',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'The Exchange has a stack of sealed carrier crates that need to reach the small clinic and two homes in Pavo Town before the end of the week. None of it is valuable, but the clinic is waiting on medicine for a few of its resident Pokémon and the families are expecting their adoption papers.',
        'The roads are quiet and the route is well marked. Expect to stop for directions, meet a few curious residents, and possibly chase down a crate that has slipped off the back of a cart.'
      ],
      objectives: ['Collect the crates from the Exchange facility.', 'Deliver each crate to the correct address in Pavo Town.', 'Return the signed receipts to the Exchange.'],
      rewards: 'A small bundle of Pokémart vouchers.'
    },
    {
      id: 'M-102', title: 'The Missing Swablu', stars: 1, type: 'Rescue', issuer: 'Pavo Town residents', location: 'Pavo Town and nearby fields',
      repeatable: false, solo: true, party: 'Solo or small group',
      description: [
        'A young girl lost her Swablu during the harvest festival and it has not come home in two days. Her family has searched the town and now asks for outside help. Swablu are skittish and may be hiding in the tall grass beyond the fences or sheltering in a barn.',
        'Gentle handling is important. The Swablu is frightened, not hurt, and will not trust anyone who approaches it loudly.'
      ],
      objectives: ['Search the fields and farm buildings around Pavo Town.', 'Find the Swablu and coax it out of hiding.', 'Return it safely to its family.'],
      rewards: 'A heartfelt thank-you and a handmade berry basket.'
    },
    {
      id: 'M-201', title: 'Static on the Power Line', stars: 2, type: 'Investigation', issuer: 'Talas Company', location: 'Talas Co. Power Plant',
      repeatable: true, solo: false, party: 'Small group',
      description: [
        'Power to the eastern district has been cutting out for hours at a time. Engineers have traced the fault to a stretch of transmission cable near the plant, where wild Electric-type Pokémon appear to be gathering and chewing on the insulation.',
        'Talas Company wants the cause confirmed and the Pokémon moved on without harm. Cables carry live current, so an unwary Trainer could be shocked, and a panicked flock of Pokémon will not discriminate between friend and stranger.'
      ],
      objectives: ['Inspect the damaged transmission cable.', 'Find out why the Pokémon are gathering there.', 'Safely relocate or calm them so the line can be repaired.'],
      requirements: 'Must bring at least one Pokémon that is immune or resistant to Electric-type moves.',
      rewards: 'A Talas Company repair kit and a letter of recommendation.'
    },
    {
      id: 'M-202', title: 'The Crumbling Trail', stars: 2, type: 'Escort', issuer: 'Rangers', location: 'Gurios Mountains',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'A group of researchers has been working in the Gurios Mountains for a week and must come down before the weather turns. Part of the mountain trail has washed out, and the Rangers do not have enough people to guide them back.',
        'The researchers are tired and carrying delicate equipment, and a few of them are afraid of heights. A calm head and a sure-footed team will make the difference.'
      ],
      objectives: ['Meet the research team at the upper camp.', 'Guide them down the safest route.', 'Keep the equipment and the researchers intact.'],
      rewards: 'Ranger field supplies.'
    },
    {
      id: 'M-301', title: 'Embers in the Estate', stars: 3, type: 'Investigation', issuer: 'Pokémon League', location: 'Fomalhaut Estate',
      repeatable: false, solo: false, party: 'Small group',
      description: [
        'Several rooms at the old Fomalhaut Estate have burned in the last month, each time in the middle of the night and with no sign of how the fire began. The caretaker is certain it is not an accident, and the League has agreed to look into it quietly.',
        'Trainers must question the staff, search the grounds, and decide whether they are dealing with a wild Pokémon, a prankster or something more dangerous. The estate is large, the halls are dark, and some of the residents would rather not be questioned.'
      ],
      objectives: ['Interview the staff and the caretaker.', 'Search the burned rooms for clues.', 'Identify the source of the fires and stop it.'],
      requirements: 'A Pokémon that knows a Water-type move is strongly recommended.',
      rewards: 'A League commendation and one rare held item chosen by the moderator.'
    },
    {
      id: 'M-302', title: 'The Sandstorm Caravan', stars: 3, type: 'Escort', issuer: 'Stellara Pokémon Exchange', location: 'Deneb Desert',
      repeatable: true, solo: false, party: 'Group of two to four',
      description: [
        'The Exchange is moving a shipment of rare Pokémon across the Deneb Desert to a buyer in the south. The caravan has been delayed by storms and its guards have turned back. The shipment cannot wait, and the Exchange is paying handsomely for a replacement escort.',
        'The desert is unforgiving. Water is scarce, the heat is relentless, and wild Pokémon in the dunes are known to attack travelers who stray. The caravan master is nervous and short-tempered, and a few of the Pokémon in the crates are not as calm as the paperwork claims.'
      ],
      objectives: ['Join the caravan at the desert gate.', 'Protect the shipment from wild Pokémon and thieves.', 'Deliver every crate to the buyer in good condition.'],
      rewards: 'A share of the delivery fee, paid as items.'
    },
    {
      id: 'M-401', title: 'Echoes in Ulan Grotto', stars: 4, type: 'Exploration', issuer: 'Stellara Trials Association', location: 'Ulan Grotto',
      repeatable: false, solo: false, party: 'Group of three to five',
      description: [
        'A new passage has opened at the back of Ulan Grotto after a recent tremor, and surveyors have lost contact with a team that went in to map it. Strange sounds can be heard from the entrance, and the Association fears that something large has taken up residence.',
        'Trainers will need to navigate flooded tunnels, loose rock and total darkness. The cavern appears to amplify noise, so every shout and every battle will carry. Rescue the surveyors if possible, and learn what is in the grotto before it comes out on its own.'
      ],
      objectives: ['Find the missing surveyors.', 'Map the new passage as far as it is safe to do so.', 'Identify the creature in the grotto and report its nature.'],
      requirements: 'Trainers should bring light sources and a Pokémon able to cross water.',
      rewards: 'Association credentials and a rare mineral.'
    },
    {
      id: 'M-402', title: 'Breach at the Ironworks', stars: 4, type: 'Combat', issuer: 'Rangers', location: 'Mintaka City',
      repeatable: true, solo: false, party: 'Group of three to five',
      description: [
        'Armed thieves have broken into a Mintaka City ironworks and are holding several workers and a number of captive Pokémon inside. The Rangers cannot storm the building without risking the hostages, and have asked for experienced Trainers to help from within.',
        'This is a dangerous assignment. The thieves are organized, and their Pokémon are well trained. Trainers may be hurt, and any misstep may endanger the hostages.'
      ],
      objectives: ['Enter the ironworks without alerting the thieves.', 'Free the hostages and captive Pokémon.', 'Subdue or capture the thieves.'],
      requirements: 'Trainers must be comfortable with combat and the risk of serious injury.',
      rewards: 'Ranger commendation and a stipend in items.'
    },
    {
      id: 'M-501', title: 'The Black Tide', stars: 5, type: 'Combat', issuer: 'Pokémon League', location: 'Irra Beach',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: [
        'A dark, oily tide has begun to wash up on Irra Beach, and Pokémon along the coast are falling ill or fleeing inland. The League believes a powerful Pokémon is poisoning the water from somewhere offshore and has asked the strongest Trainers in the region to find it.',
        'Trainers will have to take to the water, survive the poisoned currents and confront the creature at the center of the tide. Death and permanent injury are possible, and the fate of the coast depends on what they do.'
      ],
      objectives: ['Investigate the source of the tide.', 'Confront the Pokémon responsible.', 'Restore the water, or contain the damage.'],
      requirements: 'Staff will review your party before the mission begins.',
      rewards: 'To be set by the moderator, including a rare Pokémon encounter.'
    },
    {
      id: 'M-601', title: 'The Shattered Sky', stars: 6, type: 'Combat', issuer: 'Pokémon League', location: 'Stellara Pokémon League',
      repeatable: false, solo: false, party: 'Staff-moderated, invite only',
      description: [
        'A rift has opened above the League, and the sky is falling apart in slow, silent sheets of light. Whatever is on the other side has already begun to answer the rift with a roar that cracks windows across the capital.',
        'Only the most experienced Trainers in Stellara have been summoned. The League has been unable to say what the threat is, only that it cannot be allowed through, and that it may be impossible to stop. Survival is not guaranteed, and the region may not be the same afterward.'
      ],
      objectives: ['Reach the rift before it widens.', 'Hold the line against whatever comes through.', 'Close the rift, or die trying.'],
      requirements: 'Invite only. Staff will contact eligible Trainers directly.',
      rewards: 'To be set by staff.'
    }
  ]
};
