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
      id: 'M-103', title: 'The Pollinator Problem', stars: 1, type: 'Assistance', issuer: 'Stellara Agricultural Cooperative', location: 'Breshno Flatlands',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'The flower farms of Breshno Flatlands depend on wild Combee and other pollinating Pokémon. Several colonies have recently abandoned cultivated fields in favor of nearby wildflower meadows, leaving farmers concerned about the coming harvest. Attempts to lure them back with sweet nectar have produced little improvement.',
        'The Stellara Agricultural Cooperative is looking for Trainers to investigate why the Pokémon have changed their habits and encourage them to return. The wild colonies must not be harmed, and the surrounding meadows should remain undisturbed. Each assignment may involve a different field or group of pollinators.'
      ],
      objectives: ['Inspect the affected fields and neighboring wildflower meadows.', 'Determine why the pollinating Pokémon are avoiding the crops.', 'Help restore conditions that encourage the Pokémon to return.'],
      rewards: 'A basket of seasonal produce and locally produced honey.'
    },
    {
      id: 'M-104', title: 'A Package for the Port', stars: 1, type: 'Delivery', issuer: 'Eridani Harbor Authority', location: 'Eridani City',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'Eridani City’s busy commercial port has fallen behind on smaller deliveries after an equipment malfunction disrupted its sorting offices. Several packages must be moved between warehouses, shipping desks and docked vessels before their recipients depart.',
        'The Harbor Authority needs temporary couriers to keep the port moving. The waterfront is crowded with workers, machinery and Pokémon helping with cargo operations. Trainers must follow the instructions on each package and avoid mixing up shipments. Each assignment involves a new set of deliveries.'
      ],
      objectives: ['Collect the assigned packages and verify their destinations.', 'Deliver the packages to the correct recipients around the port.', 'Obtain confirmation that each delivery was completed.'],
      rewards: 'A modest courier fee and a complimentary dockside meal.'
    },
    {
      id: 'M-105', title: 'Tracks Beneath the Canopy', stars: 1, type: 'Exploration', issuer: 'Stellara Conservation Society', location: 'Kaxyl Forest',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'Conservationists maintain observation points throughout Kaxyl Forest to monitor wild Pokémon and their habitats. Recent rainfall has damaged several trails and left some stations in need of inspection, delaying the Society’s routine surveys.',
        'The Stellara Conservation Society is recruiting Trainers to visit designated checkpoints and record signs of Pokémon activity. The surveyed routes are generally safe, but curious or territorial Pokémon may be encountered. Participants should remain on marked trails and report hazards rather than entering unknown sections of the forest.'
      ],
      objectives: ['Visit the designated observation points in Kaxyl Forest.', 'Record Pokémon activity and changes to the surrounding habitats.', 'Return the completed survey and report any damaged trails or stations.'],
      rewards: 'A field research notebook and a certificate of appreciation.'
    },
    {
      id: 'M-106', title: 'The Lake’s Lost Keepsake', stars: 1, type: 'Recovery', issuer: 'A visiting family', location: 'Polaris Lake',
      repeatable: false, solo: true, party: 'Solo or small group',
      description: [
        'During a family outing to Polaris Lake, an elderly visitor lost a silver pendant near one of the public docks. The necklace belonged to her late husband and holds considerable sentimental value. Her relatives have searched the shoreline without success.',
        'The family is offering a small reward for its return. Witnesses believe it fell into shallow water among scattered stones, although a curious Water-type Pokémon may have moved it. Trainers should search carefully and avoid disturbing the lake’s wildlife or attempting an unsafe dive.'
      ],
      objectives: ['Search the public dock and surrounding shoreline for the pendant.', 'Locate and safely retrieve the keepsake.', 'Return the pendant to its rightful owner.'],
      rewards: 'A small monetary reward and a handwritten letter of thanks.'
    },
    {
      id: 'M-107', title: 'The Greenhouse Mystery', stars: 1, type: 'Investigation', issuer: 'Lacaille Botanical Research Center', location: 'Lacaille City',
      repeatable: false, solo: true, party: 'Solo or small group',
      description: [
        'A botanical greenhouse in Lacaille City has suffered several strange disturbances. Gardening tools have been moved overnight, trays of seedlings have disappeared and an irrigation system has activated outside its scheduled hours. Small footprints near a ventilation opening suggest a Pokémon may be responsible.',
        'The research center needs someone to identify the visitor before more delicate specimens are damaged. The greenhouse contains fragile plants and sensitive equipment, so reckless battles or attempts to trap the Pokémon are prohibited. Trainers must find a solution that protects both the research and the suspected intruder.'
      ],
      objectives: ['Inspect the greenhouse and gather evidence of the disturbances.', 'Identify the cause and why the incidents are occurring.', 'Resolve the problem without harming the Pokémon or damaging the specimens.'],
      rewards: 'A decorative potted plant from the center and a small monetary reward.'
    },
    {
      id: 'M-203', title: 'Trouble Along the Risa', stars: 2, type: 'Escort', issuer: 'Risa River merchants', location: 'Risa River',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'Merchant vessels traveling along the Risa River have reported trouble in a narrow stretch of water where wild Water-type Pokémon have become territorial. Damaged equipment and delayed shipments have prompted local traders to seek extra protection.',
        'Trainers are needed to accompany smaller cargo vessels through the affected passage. Strong currents, submerged obstacles and unpredictable Pokémon make the trip hazardous. Captains prefer peaceful passage, but escorts must be ready to defend passengers and supplies when necessary. Different vessels and river conditions may be assigned each time.'
      ],
      objectives: ['Join an assigned cargo vessel before it enters the affected passage.', 'Protect its crew and cargo from hazards and aggressive Pokémon.', 'Ensure the vessel reaches its destination without serious injury or damage.'],
      rewards: 'A share of the transport fee and a voucher for a future river passage.'
    },
    {
      id: 'M-204', title: 'The Broken Signal', stars: 2, type: 'Recovery', issuer: 'Stellara Meteorological Bureau', location: 'Caelum Cliffs',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'Weather stations along Caelum Cliffs regularly suffer damage from strong winds and coastal storms. Several instruments have stopped transmitting readings, and the Bureau needs their components retrieved for inspection before replacements can be installed.',
        'The affected stations can be reached using established trails, but loose rocks, sudden gusts and nesting Flying-type Pokémon complicate the journey. Trainers must recover the specified equipment without disturbing protected nests or venturing across unstable cliff edges. Each assignment may involve different stations.'
      ],
      objectives: ['Travel to the designated coastal monitoring stations.', 'Locate and recover the damaged or missing equipment.', 'Deliver the components to the Bureau for inspection.'],
      rewards: 'A recovery fee and an ordinary portable weather meter.'
    },
    {
      id: 'M-205', title: 'Unwelcome Passengers', stars: 2, type: 'Assistance', issuer: 'Cyngi Transit Authority', location: 'Cyngi City',
      repeatable: true, solo: true, party: 'Solo or small group',
      description: [
        'Wild Pokémon have been nesting inside the maintenance corridors of Cyngi City’s transit network, damaging equipment and disrupting service. Maintenance crews have withdrawn from several tunnels after Pokémon became aggressive when approached.',
        'The Transit Authority needs Trainers to locate occupied nesting areas and guide the Pokémon toward safer habitats. Some systems remain active behind restricted doors, and narrow corridors can make encounters difficult to avoid. Every assignment covers a different affected section of the network.'
      ],
      objectives: ['Inspect the assigned maintenance corridors and identify the nesting areas.', 'Safely relocate or deter the Pokémon responsible for the disruptions.', 'Confirm that the passageways are safe for maintenance crews to enter.'],
      rewards: 'A maintenance assistance fee and a complimentary regional transit pass.'
    },
    {
      id: 'M-206', title: 'Lost in the Mire', stars: 2, type: 'Rescue', issuer: 'Rangers', location: 'Largia Swamp',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'Two amateur wildlife photographers have gone missing in Largia Swamp after heavy rainfall flooded several familiar trails. A search party found their abandoned campsite near the wetlands, but rising water prevented further progress.',
        'Rangers are requesting help from Trainers capable of navigating unstable ground, concealed pools and territorial Pokémon. The missing photographers are believed to have limited supplies, and worsening visibility makes the search increasingly urgent. Participants must locate both people without becoming stranded themselves.'
      ],
      objectives: ['Examine the abandoned campsite and identify the photographers’ likely route.', 'Locate both photographers while navigating the swamp’s hazards.', 'Escort them safely out of the wetlands and into the Rangers’ care.'],
      rewards: 'A rescue assistance fee and a waterproof field supplies kit.'
    },
    {
      id: 'M-207', title: 'The Midnight Trespassers', stars: 2, type: 'Investigation', issuer: 'Menkent Town authorities', location: 'Menkent Town outskirts',
      repeatable: false, solo: true, party: 'Solo or small group',
      description: [
        'Menkent Town residents have noticed movement and strange noises inside an abandoned storage building after sunset. The owner says nobody has permission to enter, and witnesses cannot agree on whether the figures they saw were people or Pokémon.',
        'Local authorities are asking Trainers to investigate before the disturbances cause an accident. The neglected building has unsafe flooring and damaged equipment, while any occupants may react badly to being discovered. If evidence of serious criminal activity is found, Trainers should report it rather than attempting a dangerous arrest alone.'
      ],
      objectives: ['Inspect the property and document signs of recent activity.', 'Determine who or what has been entering the building.', 'Resolve the disturbance or report any serious criminal activity to local authorities.'],
      rewards: 'A small monetary reward and a letter of commendation.'
    },
    {
      id: 'M-303', title: 'The Ashen Fault', stars: 3, type: 'Exploration', issuer: 'Stellara Geological Survey', location: 'Ignara Highlands',
      repeatable: true, solo: false, party: 'Small group recommended',
      description: [
        'The dormant volcano in Ignara Highlands continues to produce tremors, scalding vents and sudden changes to the surrounding terrain. Recent readings at remote monitoring sites suggest that familiar routes may have become unstable, threatening researchers and travelers.',
        'The Geological Survey needs capable Trainers to inspect affected sites without causing further damage. Superheated pools, unreliable footing and displaced Fire- and Rock-type Pokémon make the work dangerous. Each assignment covers a different monitoring area; the incidents do not indicate an imminent volcanic eruption.'
      ],
      objectives: ['Survey the designated geothermal stations and document dangerous changes.', 'Navigate unstable terrain and contend with hostile Pokémon where necessary.', 'Return the readings and identify locations that should be closed or investigated further.'],
      rewards: 'A hazardous-duty stipend and a kit of ordinary heat-resistant field supplies.'
    },
    {
      id: 'M-304', title: 'The Territorial Divide', stars: 3, type: 'Combat', issuer: 'Rangers', location: 'Vardos Badlands',
      repeatable: true, solo: false, party: 'Small group recommended',
      description: [
        'Wild Pokémon in the canyons of Vardos Badlands have been competing for territory and scarce resources. Some disputes have spread into travel corridors, forcing merchants and researchers to abandon their routes.',
        'Rangers need Trainers to restore safe passage without driving hostile Pokémon into neighboring habitats. Several adversaries may be involved, and narrow ravines make retreat difficult. Participants should identify the cause of the dispute rather than assuming every encounter must end in battle. Each assignment concerns a different affected corridor.'
      ],
      objectives: ['Identify the Pokémon responsible for the disruption along the assigned route.', 'Subdue, deter or otherwise resolve hostile encounters blocking passage.', 'Restore access without provoking further territorial disputes.'],
      rewards: 'A Ranger hazard allowance and reinforced field supplies.'
    },
    {
      id: 'M-305', title: 'Whispers Behind the Walls', stars: 3, type: 'Investigation', issuer: 'Pokémon League', location: 'Fomalhaut Estate',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'After the earlier investigation into unexplained fires at Fomalhaut Estate, a separate preservation survey has been interrupted by strange voices, shifting furnishings and disorienting visions. Several surveyors became separated in rooms they believed they had already explored, and the team refuses to return.',
        'The Pokémon League is requesting Trainers to examine these new disturbances and determine whether Ghost-type Pokémon are involved. The estate’s deteriorating halls remain dangerous, and some reported phenomena may be illusions intended to frighten visitors away. Participants should avoid disturbing the ongoing investigation into the estate’s previous fires.'
      ],
      objectives: ['Examine the rooms associated with the new disturbances.', 'Identify the cause of the voices and disorienting phenomena.', 'Resolve the immediate threat and report the findings without interfering with the earlier fire investigation.'],
      rewards: 'A League commendation and a modest preservation research stipend.'
    },
    {
      id: 'M-306', title: 'Beneath the Rising Tide', stars: 3, type: 'Rescue', issuer: 'Rangers', location: 'Caelum Cliffs sea caves',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'A team of marine biologists has become trapped inside a partially submerged cave beneath Caelum Cliffs after a surge of seawater flooded its usual entrance. Responders have located an alternate route but cannot cross its unstable passages safely.',
        'Rangers need capable Trainers to enter the coastal caverns before the next high tide. Sudden currents, falling rock and territorial aquatic Pokémon complicate the rescue. The researchers may be injured, and their evacuation must take priority over samples and instruments left behind.'
      ],
      objectives: ['Enter the coastal caves and locate the stranded biologists.', 'Navigate flooded passages and protect the researchers from environmental hazards and aggressive Pokémon.', 'Escort the researchers outside before rising water blocks the remaining exit.'],
      rewards: 'A rescue assistance fee and waterproof emergency supplies.'
    },
    {
      id: 'M-307', title: 'The Last Expedition', stars: 3, type: 'Recovery', issuer: 'Stellara Archaeological Institute', location: 'Stellara alpine tundra',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'An archaeological expedition abandoned its high-altitude research camp when a sudden blizzard swept across Stellara’s alpine tundra. All personnel escaped, but a sealed case of geological samples and expensive surveying instruments were left behind.',
        'The Institute is hiring Trainers to recover the materials before another storm cuts off access. Snow-covered ravines, obscured trail markers and powerful Ice-type Pokémon make reaching the camp difficult. Participants must be prepared to change routes and endure freezing conditions without compromising the contents of the research case.'
      ],
      objectives: ['Locate the abandoned camp using the expedition maps and last recorded coordinates.', 'Recover the sealed case and designated instruments despite the hazards.', 'Transport the materials safely to the Institute for inspection.'],
      rewards: 'A recovery fee and a replica artifact from the Institute’s collection.'
    },
    {
      id: 'M-403', title: 'The Breaking Point', stars: 4, type: 'Rescue', issuer: 'Stellara Geological Survey', location: 'Ignara Highlands',
      repeatable: true, solo: false, party: 'Small group recommended',
      description: [
        'The geothermal activity beneath Ignara Highlands can trigger violent steam eruptions, ground collapses and hazardous gas releases even though its volcano remains dormant. Remote monitoring outposts occasionally require emergency evacuations when these localized incidents isolate their personnel.',
        'The Geological Survey maintains a standing contract for Ultra-tier Trainers willing to respond to these emergencies. Depending on the incident, the affected site may contain collapsing structures, scalding vents and powerful displaced Fire- or Rock-type Pokémon. Getting to the stranded personnel may prove easier than bringing them back, and protecting lives must take priority over equipment.'
      ],
      objectives: ['Reach the assigned emergency site and assess its immediate hazards.', 'Locate and evacuate stranded personnel while managing environmental threats and hostile Pokémon.', 'Bring the survivors to safety and report any remaining dangers.'],
      requirements: 'Each repeat involves a separate localized emergency; players may not establish a regional eruption or permanent devastation.',
      rewards: 'A substantial emergency-response stipend and ordinary protective geothermal field equipment.'
    },
    {
      id: 'M-404', title: 'Dead Freight', stars: 4, type: 'Combat', issuer: 'Eridani Harbor Authority', location: 'Eridani City port',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'An inspection of shipping records at Eridani City has revealed a freighter carrying stolen industrial equipment and Pokémon transported without legal authorization. The vessel is scheduled to depart shortly, and its operators have ignored repeated orders to submit to inspection.',
        'The Harbor Authority is recruiting qualified Trainers to assist a controlled interception. The smugglers are organized, well-equipped and accompanied by powerful Pokémon. Confined cargo holds, hazardous machinery and the risk of evidence being dumped overboard make the operation difficult. Participants must secure the shipment and detain the criminals without endangering dockworkers or causing an uncontrolled disaster aboard the vessel.'
      ],
      objectives: ['Intercept the freighter and establish the location of the illegal cargo and smugglers.', 'Overcome resistance while protecting workers and preventing evidence or cargo from being destroyed.', 'Secure the vessel and transfer the suspects and recovered Pokémon to the authorities.'],
      requirements: 'The smugglers are an independent local operation unless staff explicitly approve wider criminal connections.',
      rewards: 'A substantial enforcement assistance fee and a formal Harbor Authority commendation.'
    },
    {
      id: 'M-405', title: 'Eye of the Tempest', stars: 4, type: 'Rescue', issuer: 'Stellara Conservation Society', location: 'Kaxyl Forest',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'A violent storm has isolated an ecological research station in Kaxyl Forest. Fallen trees have destroyed its communications array, several researchers are injured and rising floodwater threatens the remaining shelters. Ordinary rescue crews have been unable to pass blocked trails.',
        'The Conservation Society is asking Ultra-tier Trainers to reach the station and evacuate its occupants. Lightning, flash flooding and collapsing trees threaten the route, while displaced Electric- and Flying-type Pokémon have become dangerously aggressive. There is no guarantee that the same route used to reach the station will remain open for the return journey.'
      ],
      objectives: ['Reach the isolated station through the storm-damaged forest.', 'Locate and assist injured researchers while managing hazards and hostile Pokémon.', 'Evacuate the personnel to safety before flooding makes escape impossible.'],
      rewards: 'An emergency rescue stipend and reinforced all-weather supplies.'
    },
    {
      id: 'M-406', title: 'King of the Badlands', stars: 4, type: 'Combat', issuer: 'Rangers', location: 'Vardos Badlands',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'An exceptionally powerful Tyranitar has claimed a heavily traveled passage through Vardos Badlands and attacked multiple expeditions. Damaged vehicles and injured travelers have forced Rangers to close the canyon route while they seek assistance.',
        'The Tyranitar’s attacks fracture rock and stir violent sandstorms, leaving little room for error inside narrow ravines. Rangers suspect something recently provoked the Pokémon but have not identified the cause. Trainers must investigate and end the threat through combat, containment or another credible approach, rather than simply driving it toward nearby settlements.'
      ],
      objectives: ['Investigate the canyon and establish what has provoked the Tyranitar.', 'Confront, contain or otherwise neutralize its immediate aggression while surviving the terrain.', 'Confirm the route can be reopened without exposing travelers to further attacks.'],
      requirements: 'The Tyranitar cannot be captured or claimed through mission completion; ordinary catching restrictions still apply.',
      rewards: 'A substantial Ranger hazard allowance and an official commendation.'
    },
    {
      id: 'M-407', title: 'Beneath the Blackwater', stars: 4, type: 'Recovery', issuer: 'Stellara Oceanographic Institute', location: 'Deep offshore waters near Caelum Cliffs',
      repeatable: false, solo: false, party: 'Small group recommended',
      description: [
        'An automated deep-water research platform near Caelum Cliffs has broken free of its anchoring system and fallen into a submerged trench. Its sealed recorder contains irreplaceable survey readings, while its damaged power equipment threatens to contaminate the surrounding habitat if left unattended.',
        'The Oceanographic Institute is hiring Ultra-tier Trainers to recover the recorder and disable the damaged equipment. The trench is far deeper than the region’s familiar coastal caves, with near-total darkness, crushing water pressure and powerful aquatic Pokémon that defend their territory. Specialized underwater support will be provided, but losing contact with the surface could leave the team stranded.'
      ],
      objectives: ['Reach the sunken platform and locate its sealed data recorder.', 'Secure the recorder and disable the damaged equipment while surviving the trench’s hazards.', 'Return the recovered materials to the support vessel without compromising the surrounding habitat.'],
      requirements: 'Participants must coordinate appropriate pressure-rated underwater equipment and support; ordinary Pokémon ability to swim is not sufficient.',
      rewards: 'A substantial deep-water recovery stipend and ordinary specialized dive equipment.'
    },
    {
      id: 'M-502', title: 'The Hollow Mountain', stars: 5, type: 'Rescue', issuer: 'Rangers', location: 'Gurios Mountains',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: [
        'A series of earthquakes has damaged a remote mining settlement in the Gurios Mountains, collapsing tunnels and trapping dozens of workers. Rescue crews report further tremors, unstable supports and attacks by powerful Steel- and Ground-type Pokémon in newly exposed caverns.',
        'Rangers are requesting Elite-tier Trainers to assist an emergency underground rescue. Early surveys suggest the excavation breached a deeper cavern system, but the source of the continued disturbances remains unknown. Air supplies are dwindling, and a reckless confrontation underground could trigger further collapse. Staff will determine conditions within the sealed tunnels and how the crisis unfolds.'
      ],
      objectives: ['Enter the damaged mine and locate the surviving workers.', 'Investigate and overcome the threats preventing evacuation.', 'Bring the trapped personnel to safety and contain the immediate underground danger.'],
      requirements: 'Staff moderation and mission approval are required. Staff control the underlying threat, major NPCs and lasting outcomes.',
      rewards: 'A substantial rescue bounty and an official Ranger commendation; any exceptional reward is assigned by staff.'
    },
    {
      id: 'M-503', title: 'The Crimson Shipment', stars: 5, type: 'Investigation', issuer: 'Pokémon League', location: 'Cyngi City and surrounding routes',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: [
        'A League-supervised convoy carrying confiscated experimental equipment has disappeared while traveling from Cyngi City to a secure storage site. Investigators recovered a wrecked escort vehicle and evidence that powerful Pokémon were used in a coordinated ambush. The attackers appeared to know exactly which cargo to target.',
        'The Pokémon League is assembling a limited team of Elite-tier Trainers to recover the equipment before it can be activated or dismantled. The identity of the attackers, the equipment’s true purpose and the security breach are unresolved. Participants must follow the convoy’s trail and confront determined opponents without compromising the investigation. Staff will determine any connection to larger criminal organizations.'
      ],
      objectives: ['Investigate the convoy attack and identify leads to the perpetrators.', 'Locate and secure the stolen equipment despite organized resistance.', 'Deliver the recovered evidence and any detained suspects to League investigators.'],
      requirements: 'Staff moderation and mission approval are required. Criminal identities, technology and story revelations are staff-controlled.',
      rewards: 'A substantial investigation reward and formal League commendation; any exceptional reward is assigned by staff.'
    },
    {
      id: 'M-602', title: 'The City That Stood Still', stars: 6, type: 'Investigation', issuer: 'Pokémon League', location: 'Cyngi City',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: [
        'A severe electromagnetic disturbance has disabled transportation, emergency communications and utilities across multiple districts of Cyngi City. The failures began without warning, and unusual energy readings have been detected beneath the affected neighborhoods. Emergency services fear the crisis may spread into hospitals and evacuation routes.',
        'The Pokémon League is recruiting Champion-tier Trainers to investigate the source and support the emergency response. Powerful Pokémon have gathered around the suspected epicenter, while continuing interference prevents conventional teams from approaching. With civilian lives at stake and the cause still unknown, participants must balance investigation, protection and containment. Staff determine when the event begins and how the city is affected.'
      ],
      objectives: ['Investigate affected districts and identify the source of the electromagnetic disturbance.', 'Protect civilians and critical infrastructure while overcoming threats near the epicenter.', 'Contain or neutralize the source before the disruption spreads further.'],
      requirements: 'Prior staff approval and moderation are mandatory. Only staff may establish canonical city-wide damage and permanent consequences.',
      rewards: 'Exceptional League recognition and a major service reward; rare or mechanical rewards are assigned by staff.'
    },
    {
      id: 'M-603', title: 'The Devouring Deep', stars: 6, type: 'Combat', issuer: 'Pokémon League', location: 'Stellara offshore waters',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: [
        'Violent currents, destructive tidal surges and the disappearance of commercial vessels have alarmed Stellara’s coastal communities. Monitoring systems trace unusual movements to a deep offshore trench. Ships sent to investigate have returned damaged or not at all, and surviving crews describe powerful Pokémon and a vast unidentified presence moving through the water.',
        'The Pokémon League is organizing an emergency expedition with Champion-tier Trainers to identify and contain the threat. Conventional vessels cannot safely approach the trench, and even specialized support may fail in the extreme conditions. Participants face dangerous aquatic Pokémon, unstable currents and an unknown adversary whose abilities could endanger entire coastal settlements. The identity and ultimate consequences of the disturbance remain staff-controlled.'
      ],
      objectives: ['Reach the ocean trench and investigate the source of the catastrophic disturbances.', 'Survive the environment and overcome threats preventing the expedition from approaching the source.', 'Neutralize or contain the threat before further tidal surges endanger coastal communities.'],
      requirements: 'Prior staff approval and moderation are mandatory. Appropriate deep-water support is required; staff control the threat and regional outcomes.',
      rewards: 'Exceptional League recognition and a major expedition reward; rare or mechanical rewards are assigned by staff.'
    }
  ]
};
