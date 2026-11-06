/* The mission list on the Team Crux page. Edit this file to add, change or remove a Team Crux mission.
   It works exactly like assets/missions-data.js: one { ... } block is one mission, with a comma between blocks and every quote mark in pairs.
   The fields are the same: title, stars (1 to 6), type, issuer, location, repeatable, solo, party, description, objectives, requirements, rewards and id.
   Here "issuer" is who ordered the mission (shown as Ordered by), "description" is the orders and "party" is the squad.
   The Tier, Pokémon required and bonus EXP come from the "ranks" rows below, which match the Missions page.
   Missions CRX-001 to CRX-020 come from the approved Team Crux export. Locations are descriptive labels, not Atlas places.
   Rewards are optional narrative recognition that staff may grant; they are never automatic items, Pokémon or promotions.
   The "sample" line puts a SAMPLE MISSIONS tag on the console. It is off now that the missions are real.
   "forum" (optional) is a Discord link. When it is filled in, each mission gets an Open the Discord forum button. */
window.STELLARA_CRUX_MISSIONS = {
  sample: false,
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
      id: 'CRX-001', title: 'Unmarked Cargo', stars: 1, type: 'Delivery', issuer: 'Crux Logistics Division', location: 'Commercial warehouse district',
      repeatable: true, solo: true, party: 'Solo or group',
      description: ['A shipment of laboratory equipment must be delivered to a concealed Team Crux storage facility under the guise of an ordinary commercial delivery. The assignment appears routine until a clerical error sends the shipment to the wrong warehouse, where an unsuspecting employee has already opened one of its containers.', 'Although the shipment contains nothing immediately dangerous, its contents could raise uncomfortable questions if examined too closely. The assigned operative must recover the cargo and complete the delivery without exposing the organization’s involvement or creating an unnecessary disturbance.'],
      objectives: ['Locate the misplaced shipment and assess its condition.', 'Resolve the situation involving the warehouse personnel.', 'Deliver the equipment to its intended destination.'],
      rewards: 'Favorable recognition from the Logistics Division for a discreetly completed delivery.'
    },
    {
      id: 'CRX-002', title: 'Eyes on the Competition', stars: 1, type: 'Investigation', issuer: 'Crux Intelligence Division', location: 'Public research exhibition',
      repeatable: true, solo: true, party: 'Solo or group',
      description: ['A private research institution has begun advertising an experimental device capable of monitoring unusual Pokémon energy signatures. Team Crux suspects the technology could interfere with its concealed research operations and wants a preliminary assessment of its capabilities.', 'An operative is dispatched to attend a public demonstration, where the equipment unexpectedly reacts to a Pokémon belonging to an attendee. The incident causes considerable confusion among the researchers, creating an opportunity to observe the device under circumstances its developers apparently did not anticipate.'],
      objectives: ['Attend the demonstration and observe the experimental device.', 'Document its capabilities, limitations, and unusual reactions.', 'Determine whether the technology warrants further investigation by Team Crux.'],
      rewards: 'An opportunity to develop a useful research contact, subject to staff approval if recurring.'
    },
    {
      id: 'CRX-003', title: 'Biological Samples', stars: 1, type: 'Recovery', issuer: 'Crux Research Division', location: 'Designated wilderness habitat',
      repeatable: true, solo: true, party: 'Solo or group',
      description: ['Team Crux researchers require naturally occurring biological samples from a wilderness habitat known for its unusual Pokémon population. The collection process should be straightforward, but the assigned operative discovers that several wild Pokémon have begun aggressively defending the designated area.', 'Further observation suggests that the Pokémon may be protecting an injured member of their group. The operative must determine how to obtain the requested materials without unnecessarily disturbing the local population or provoking a confrontation.'],
      objectives: ['Investigate the Pokémon’s unusual territorial behavior.', 'Collect suitable biological or environmental samples.', 'Return the samples and report any noteworthy observations.'],
      rewards: 'Access to a brief, nonclassified analysis of the recovered samples.'
    },
    {
      id: 'CRX-004', title: 'Signal Interference', stars: 1, type: 'Assistance', issuer: 'Crux Communications Division', location: 'Remote communications outpost',
      repeatable: true, solo: true, party: 'Solo or group',
      description: ['A concealed communications relay has begun producing erratic transmissions, disrupting contact with a nearby Team Crux outpost. The malfunction initially appears to be technical, but reports of unusual electrical activity have prompted the organization to dispatch an operative.', 'Upon reaching the installation, the operative discovers that several wild Electric-type Pokémon have settled around the relay. Attracted by its electrical output, the Pokémon have inadvertently disrupted its operation and become defensive toward anyone approaching their new territory.'],
      objectives: ['Investigate the source of the communications failure.', 'Resolve the interference caused by the wild Pokémon.', 'Restore the relay and verify that transmissions have resumed.'],
      rewards: 'Permission to use the restored relay for future routine Team Crux communications.'
    },
    {
      id: 'CRX-005', title: 'False Credentials', stars: 2, type: 'Investigation', issuer: 'Crux Intelligence Division', location: 'Regional scientific conference',
      repeatable: false, solo: true, party: 'Solo or group',
      description: ['Team Crux has arranged for an operative to attend a prestigious scientific conference under an assumed professional identity. Their assignment is to identify researchers whose work could benefit the organization’s experimental programs and gather intelligence on promising developments.', 'One particularly interesting scientist appears desperate to leave the conference after receiving threatening messages. The operative must investigate whether the threats are connected to the scientist’s work while maintaining their cover among increasingly suspicious attendees.'],
      objectives: ['Establish and maintain a credible identity at the conference.', 'Investigate the threatened researcher and their work.', 'Report valuable intelligence or potential contacts to Team Crux.'],
      rewards: 'A possible professional contact who may provide future narrative opportunities.'
    },
    {
      id: 'CRX-006', title: 'Missing Shipment', stars: 2, type: 'Investigation', issuer: 'Crux Logistics Division', location: 'Community clinic and transport route',
      repeatable: false, solo: true, party: 'Solo or group',
      description: ['A shipment of medical supplies intended for a Team Crux laboratory has disappeared during transit. Its courier claims the cargo was stolen, but the assigned operative discovers that several supplies have already appeared at a small community clinic.', 'The clinic’s personnel insist that an anonymous donor provided the materials to treat sick and injured Pokémon. Recovering the supplies could leave the clinic unable to continue treatment, while abandoning the shipment would violate Team Crux’s orders. The operative must determine what happened and how to address the loss.'],
      objectives: ['Trace the missing supplies and investigate the courier’s account.', 'Determine how the materials reached the community clinic.', 'Resolve the missing shipment and report the outcome.'],
      rewards: 'Recognition from the Logistics Division for a well-documented resolution; favorable or unfavorable attention may follow the operative’s decisions.'
    },
    {
      id: 'CRX-007', title: 'Unwanted Attention', stars: 2, type: 'Escort', issuer: 'Crux Security Division', location: 'Urban district and designated safehouse',
      repeatable: true, solo: true, party: 'Solo or group',
      description: ['An undercover Team Crux operative has attracted the attention of local investigators and must be relocated before their identity is compromised. The assigned escort discovers that the operative has become increasingly paranoid, refusing to explain what originally attracted suspicion.', 'During the relocation, the operative admits to having made unauthorized contact with an individual connected to a previous assignment. Their actions may have placed both themselves and their contact at risk, forcing the escort to reconsider the security of the planned route.'],
      objectives: ['Establish contact with the compromised operative.', 'Escort them to a designated safe location.', 'Investigate the circumstances surrounding their compromised identity.'],
      rewards: 'Access to a temporary safehouse for an approved character-driven plot.'
    },
    {
      id: 'CRX-008', title: 'Unstable Specimen', stars: 2, type: 'Recovery', issuer: 'Crux Research Division', location: 'Wilderness surrounding a temporary laboratory',
      repeatable: false, solo: true, party: 'Solo or group',
      description: ['A Pokémon undergoing experimental behavioral conditioning has escaped from a temporary Team Crux research facility. Researchers describe the specimen as unpredictable, although preliminary reports suggest it has avoided confronting people whenever possible.', 'The assigned operative discovers that the Pokémon has taken refuge among a group of wild Pokémon that appear determined to protect it. Recovering the specimen may require understanding why it fled and finding a way to approach it without provoking the surrounding Pokémon.'],
      objectives: ['Locate the escaped specimen and assess its condition.', 'Investigate its behavior and relationship with the wild Pokémon.', 'Attempt to secure its safe recovery and report the outcome.'],
      rewards: 'Access to a limited research report concerning Pokémon behavior and conditioning.'
    },
    {
      id: 'CRX-009', title: 'The Inside Man', stars: 3, type: 'Investigation', issuer: 'Crux Internal Security', location: 'Regional Team Crux operational facility',
      repeatable: false, solo: true, party: 'Solo or group',
      description: ['Confidential operational information has appeared in the possession of an outside organization. Team Crux suspects an information leak within one of its regional cells, and several members have been placed under investigation.', 'Evidence points toward a respected operative with an otherwise impeccable record. However, the accused claims to have uncovered evidence of misconduct by a superior officer, raising the possibility that the investigation itself is being manipulated. The assigned investigators must unravel the conflicting accounts before the accused is punished or the actual source of the leak disappears.'],
      objectives: ['Investigate the information leak and review the available evidence.', 'Question relevant personnel and evaluate conflicting testimony.', 'Identify the likely responsible parties and submit a detailed report.'],
      rewards: 'Favorable consideration for future Internal Security assignments and restricted investigative responsibilities.'
    },
    {
      id: 'CRX-010', title: 'Project Chimera', stars: 3, type: 'Investigation', issuer: 'Crux Research Division', location: 'Former research site and surrounding settlements',
      repeatable: false, solo: true, party: 'Solo or group',
      description: ['A former Team Crux researcher has begun contacting individuals connected to a discontinued genetic engineering initiative known as Project Chimera. The researcher claims that several experimental subjects survived the project’s termination and that their biological conditions are deteriorating.', 'Team Crux wants these allegations investigated before sensitive information becomes public. However, the researcher refuses to surrender their evidence unless the organization agrees to provide medical assistance to the surviving Pokémon. The assignment becomes increasingly complicated as the operative encounters contradictory accounts of the project’s termination and evidence suggesting that the researcher may be telling the truth.'],
      objectives: ['Locate the former researcher and establish the credibility of their claims.', 'Investigate evidence concerning the surviving experimental subjects.', 'Report the findings and determine how to address the researcher’s demands.'],
      rewards: 'Access to a limited historical research summary and the possibility of arranging a future medical assistance plot.'
    },
    {
      id: 'CRX-011', title: 'Hostile Acquisition', stars: 3, type: 'Combat', issuer: 'Crux Operations Division', location: 'Rival-controlled industrial facility',
      repeatable: true, solo: true, party: 'Group recommended (solo allowed)',
      description: ['A rival criminal organization has acquired technology intended for prohibited Pokémon experimentation. Team Crux has ordered the equipment seized before it can be relocated to a more secure installation.', 'The equipment is stored within an active industrial facility protected by experienced Trainers and defensive Pokémon. Several civilian technicians remain on-site, unaware of the criminal organization’s activities. An indiscriminate attack could destroy the equipment and endanger the workers, requiring the assigned operatives to consider how they approach the opposition.'],
      objectives: ['Investigate the facility and identify the opposing organization’s defenses.', 'Overcome or circumvent hostile Trainers protecting the equipment.', 'Secure the experimental technology and arrange its recovery.'],
      rewards: 'Recognition from the Operations Division and potential access to future equipment-recovery assignments.'
    },
    {
      id: 'CRX-012', title: 'The Forgotten Laboratory', stars: 3, type: 'Exploration', issuer: 'Crux Research Division', location: 'Abandoned underground research facility',
      repeatable: false, solo: true, party: 'Group recommended (solo allowed)',
      description: ['Recently recovered records indicate that an abandoned underground laboratory once served as a research installation for scientists affiliated with Team Crux’s predecessors. The facility was evacuated following an unexplained incident, and official records concerning its operations are incomplete.', 'The assigned operatives discover that portions of the laboratory still possess functioning security systems. Wild Pokémon have settled throughout the complex, while signs of recent activity suggest that another group has been exploring the ruins. The team must navigate unstable sections of the installation while determining what research remains intact.'],
      objectives: ['Explore the abandoned laboratory and investigate its former operations.', 'Navigate environmental hazards, security systems, and hostile Pokémon.', 'Recover surviving research materials and report evidence of recent activity.'],
      rewards: 'Access to selected historical documentation concerning discontinued research methods.'
    },
    {
      id: 'CRX-013', title: 'Broken Allegiance', stars: 4, type: 'Investigation', issuer: 'Crux Internal Security', location: 'Research installation and regional hideouts',
      repeatable: false, solo: true, party: 'Group recommended (solo allowed)',
      description: ['A senior Team Crux researcher has disappeared after removing classified materials from a concealed laboratory. Internal Security believes the scientist intends to sell the information to a rival organization and has authorized an operation to locate them.', 'The investigation reveals that the researcher was attempting to document unauthorized experiments conducted on vulnerable Pokémon. Several former colleagues have since disappeared, and an unknown group is pursuing the same evidence. With multiple parties attempting to secure the classified materials, the assigned operatives must navigate conflicting loyalties, dangerous opposition, and the possibility that the scientist’s accusations are legitimate.'],
      objectives: ['Locate the missing researcher and investigate their disappearance.', 'Evaluate the evidence surrounding the alleged unauthorized experiments.', 'Address competing attempts to seize the classified materials and report the outcome.'],
      rewards: 'Favorable consideration for sensitive Internal Security work, or a potential recurring connection to the missing researcher with approval.'
    },
    {
      id: 'CRX-014', title: 'Blackout Protocol', stars: 4, type: 'Combat', issuer: 'Crux Operations Division', location: 'Secured experimental installation',
      repeatable: false, solo: true, party: 'Group recommended (solo allowed)',
      description: ['A rival research organization has constructed an experimental device capable of disrupting Pokémon abilities within a limited area. Team Crux considers the technology a potential threat to its operations and has ordered its activation prevented.', 'The installation is guarded by experienced Trainers whose Pokémon have been specifically prepared to fight under the device’s influence. Operatives attempting to disable the system may discover that their own Pokémon are unusually vulnerable to its effects, forcing them to adapt their strategies while facing coordinated opposition. Destroying the device may be the simplest solution, but recovering its research could prove valuable to Team Crux.'],
      objectives: ['Investigate the installation and overcome its security defenses.', 'Confront the opposing Trainers while accounting for the experimental device.', 'Prevent activation and secure any recoverable research or equipment.'],
      rewards: 'Recognition for neutralizing a technological threat and access to a limited technical report.'
    },
    {
      id: 'CRX-015', title: 'Containment Breach', stars: 4, type: 'Rescue', issuer: 'Crux Emergency Operations', location: 'Compromised research complex',
      repeatable: false, solo: true, party: 'Group recommended (solo allowed)',
      description: ['A classified Team Crux research complex has suffered a severe containment failure, releasing several experimental Pokémon into the facility. Emergency systems have malfunctioned, sections of the laboratory have become inaccessible, and numerous researchers remain trapped inside.', 'As the assigned operatives investigate, they discover that the escaped Pokémon are reacting differently to their surroundings. Some have become aggressively territorial, others are attempting to escape, and several appear to be protecting injured members of their group. Meanwhile, a damaged emergency system threatens to seal off the laboratory’s lower levels, leaving the operatives with multiple urgent problems to address.'],
      objectives: ['Enter the damaged complex and assess the containment failure.', 'Locate and evacuate trapped personnel while navigating hazardous areas.', 'Address immediate threats from the escaped Pokémon and failing security systems.'],
      rewards: 'Recognition from the Research Division and consideration for specialized emergency-response assignments.'
    },
    {
      id: 'CRX-016', title: 'The Silent Convoy', stars: 4, type: 'Escort', issuer: 'Crux Logistics Division', location: 'Remote transport route and ambush site',
      repeatable: false, solo: true, party: 'Group recommended (solo allowed)',
      description: ['A classified Team Crux convoy transporting valuable research specimens has failed to arrive at its destination. Its last transmission reported a coordinated attack by an unidentified group, followed by complete radio silence.', 'The assigned operatives are dispatched to locate the missing transport and recover its cargo. Upon discovering the convoy, they find abandoned vehicles, missing security personnel, and several experimental Pokémon that have escaped their containment units. Evidence suggests that some of the convoy’s crew may have deliberately assisted the attackers. The surviving transport must be secured and escorted out before the hostile group returns.'],
      objectives: ['Locate the missing convoy and investigate the circumstances of the attack.', 'Recover surviving personnel and secure the escaped research specimens.', 'Escort the remaining transport and personnel to a secure destination.'],
      rewards: 'Recognition from the Logistics Division and priority consideration for future high-value transport operations.'
    },
    {
      id: 'CRX-017', title: 'The Genesis Archive', stars: 5, type: 'Recovery', issuer: 'Crux Executive Directorate', location: 'Classified archival research site',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: ['An encrypted archive containing decades of prohibited Pokémon genetic research has resurfaced after years of presumed destruction. Its contents reportedly document experiments conducted before Team Crux’s current research programs, including several initiatives whose existence has been deliberately concealed.', 'An elite recovery unit is dispatched to secure the archive, but multiple organizations have already converged on its location. Some intend to claim the research for themselves, while others seek to destroy it permanently. Complicating matters, the individual safeguarding the archive claims to be a surviving participant in one of the original experiments. The operatives must navigate competing interests, formidable opposition, and the possibility that recovering the archive could expose secrets even Team Crux’s leadership would prefer to remain buried.'],
      objectives: ['Locate the Genesis Archive and investigate its current custodians.', 'Overcome or negotiate with competing parties attempting to secure the research.', 'Secure the archive or otherwise establish its disposition and report the outcome to Team Crux leadership.'],
      requirements: 'Staff moderation is required. Ask a moderator to run this mission.',
      rewards: 'Exceptional recognition from Team Crux leadership and potential access to select classified information or future research-related storylines, at staff discretion.'
    },
    {
      id: 'CRX-018', title: 'Apex Instability', stars: 5, type: 'Combat', issuer: 'Crux Advanced Research Division', location: 'Restricted wilderness containment zone',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: ['A powerful experimental Pokémon has escaped from a classified research installation after undergoing an unauthorized enhancement procedure. The specimen possesses capabilities far beyond those expected of its species, but the procedure has left it physically unstable and increasingly difficult to control.', 'Rather than immediately attacking nearby settlements, the Pokémon has retreated into the wilderness, where its unpredictable abilities have begun disrupting the surrounding environment. A specialized recovery team previously dispatched by Team Crux has disappeared, and local authorities are beginning to investigate reports of unusual activity. An elite unit must confront the experimental Pokémon, locate the missing personnel, and determine whether the specimen can survive another attempt at containment.'],
      objectives: ['Investigate the missing recovery team’s disappearance and establish the specimen’s location.', 'Confront the experimental Pokémon and contain the immediate threat.', 'Investigate the specimen’s deteriorating condition and determine whether safe recovery is possible.'],
      requirements: 'Staff moderation is required. Ask a moderator to run this mission.',
      rewards: 'Recognition for containing an exceptional threat and possible involvement in future advanced research or containment operations, at staff discretion.'
    },
    {
      id: 'CRX-019', title: 'Project Ascension', stars: 6, type: 'Assistance', issuer: 'Crux Executive Directorate', location: 'Classified advanced research installation',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: ['After years of development, Team Crux has reached a critical milestone in Project Ascension, a highly classified initiative intended to dramatically enhance the capabilities of Pokémon through experimental technology.', 'Shortly before the project’s scheduled demonstration, a coordinated attack disables several security systems and compromises the research installation. While some personnel believe the facility has been infiltrated by an opposing organization, others suspect that individuals within Team Crux deliberately arranged the attack to prevent the experiment from proceeding. With portions of the installation damaged, valuable research at risk, and opposing forces converging on the facility, an elite unit is dispatched to regain control. However, the surviving researchers disagree over whether the experiment should continue, and the operatives may discover that the project’s greatest danger is not the attack itself.'],
      objectives: ['Regain control of the compromised installation and address immediate threats.', 'Protect surviving personnel and investigate the circumstances surrounding the attack.', 'Secure Project Ascension’s research and determine how to respond to the ongoing experimental crisis.'],
      requirements: 'Prior staff approval and staff moderation are both required before this mission can run.',
      rewards: 'Exceptional recognition from Team Crux leadership and the possibility of involvement in future classified operations or major faction storylines, subject to staff approval.'
    },
    {
      id: 'CRX-020', title: 'Ghosts of the Prototype', stars: 6, type: 'Investigation', issuer: 'Crux Executive Directorate', location: 'Multiple classified research and archival sites',
      repeatable: false, solo: false, party: 'Staff-moderated group',
      description: ['Classified intelligence has uncovered evidence suggesting that an extraordinary Pokémon connected to Team Crux’s earliest genetic experiments may have survived an incident that supposedly resulted in its destruction. The findings have alarmed the organization’s highest-ranking officials, who have ordered an immediate investigation.', 'An elite investigative unit is dispatched to recover historical records and locate individuals associated with the original experiments. Their investigation leads them through abandoned research installations, concealed archives, and encounters with powerful Pokémon whose behavior defies conventional expectations. As the operatives uncover conflicting accounts of the original project, they begin to suspect that the organization’s official records were deliberately altered. Someone has gone to extraordinary lengths to erase evidence of what happened, and the individuals responsible may still possess considerable influence.'],
      objectives: ['Investigate evidence concerning the original experiment and the purported surviving Pokémon.', 'Recover historical records and locate individuals connected to the research.', 'Evaluate the credibility of the findings and submit a classified report to Team Crux leadership.'],
      requirements: 'Prior staff approval and staff moderation are both required before this mission can run.',
      rewards: 'Exceptional recognition from Team Crux leadership and possible access to future major storyline developments, at staff discretion.'
    }
  ]
};
