// Hero, abilities, patches and team comps. Maps live in maps.js, lineups in lineups.js.
const DATA = {

  // ── META ──────────────────────────────────────────────────────────────
  meta: {
    season:       "10.5",
    seasonName:   "Butcher's Blasphemy",
    lastUpdate:   "October 9, 2026",
    nextSeason:   "Season 11 (est. November 2026)",
    loggedInAs:   "Peni Parker",
  },

  // ── HERO STATS ────────────────────────────────────────────────────────
  hero: {
    name:      "Peni Parker",
    role:      "Vanguard",
    health:    650,
    difficulty: 4,          // out of 5
    winRate:   "57.0%",
    pickRate:  "1.1%",
    tier:      "S",
    tierRank:  "#1 Overall / #1 Vanguard",
    bio: "Peni Parker and her SP//DR mech are one of the most dominant battlefield control units in the game. Her nest-and-mine setup creates near-impenetrable zones, her Cyber-Web network denies flanks, and the SP//DR unit's raw HP allows aggressive play. Master the zone, win the map.",
  },

  // ── ABILITIES ─────────────────────────────────────────────────────────
  // key: the keybind label shown on the card
  // type: 'passive' | 'active' | 'ult' | 'teamup'
  // changed: null for no change, or a string describing the patch change
  // changeType: 'nerf' | 'buff' | null
  abilities: [
    {
      key: "Passive",
      type: "passive",
      name: "Wall Crawl",
      desc: "Hold SPACE to crawl on vertical surfaces. Allows SP//DR to maintain field advantage by accessing elevated angles and unexpected angles of attack.",
      changed: null,
    },
    {
      key: "LMB",
      type: "active",
      name: "Cyber-Web Cluster",
      desc: "Launch a Cyber-Web Cluster forward that adheres to surfaces and creates anchor points for the web network. The foundation of Peni's zone-control setup — build these first.",
      changed: null,
    },
    {
      key: "RMB",
      type: "active",
      name: "Cyber-Web Snare",
      desc: "Deploy a snare web connected to the Cyber-Web network. Enemies caught in an active Cyber-Web Snare are slowed and rooted, with the delay determined by network density.",
      changed: "S9.5 — Reworked: right-click no longer provides an instant immobilize. The snare now requires preparation and an established web network to achieve root effect. Adapt by setting up your web BEFORE engagements start.",
      changeType: "nerf",
    },
    {
      key: "SHIFT",
      type: "active",
      name: "SP//DR Dash",
      desc: "SP//DR surges forward, overriding obstacles. Use to close gaps or escape flanks. Can be chained with web placement for aggressive network expansion.",
      changed: null,
    },
    {
      key: "E",
      type: "active",
      name: "Spider-Nest & Arachno-Mines",
      desc: "Deploy a Spider-Nest that continuously generates Spider-Drones and Arachno-Mines. The Arachno-Mines are concealed and invulnerable inside active Cyber-Webs. Your primary zone-denial tool — place on objectives and chokepoints.",
      changed: "S2.5 — Team-Up enhancement: Peni can now deploy an additional enhanced Spider-Nest that coexists with the original (requires Rocket Raccoon Rocket Network team-up).",
      changeType: "buff",
    },
    {
      key: "F",
      type: "active",
      name: "Armor Expulsion",
      desc: "SP//DR temporarily expels damaged armor plating, granting a burst of extreme durability. Use aggressively when taking heavy focus fire — the invulnerability window allows full repositioning.",
      changed: null,
    },
    {
      key: "Q",
      type: "ult",
      name: "Spider-Sweeper",
      desc: "SP//DR enters a frenzied sweep mode, spinning web arms at high speed across a wide arc. Deals sustained damage and pushes enemies off objectives. Best used when the enemy team is clustered on a capture point.",
      changed: null,
    },
    {
      key: "C",
      type: "teamup",
      name: "Rocket Network (Armored Spider-Nest)",
      desc: "Team-Up with Rocket Raccoon. Peni deploys an additional enhanced Spider-Nest that coexists with the original, also dropping armor packs for allies. Requires Rocket Raccoon on your team.",
      changed: null,
    },
  ],


  // ── PATCH LOG ─────────────────────────────────────────────────────────
  // types: 'nerf' | 'buff' | 'fix' | 'teamup' | 'seasonal' | null
  // Add new entries at the TOP of this array (most recent first)
  patches: [
    {
      version: "S10.5",
      date: "Oct 9, 2026",
      tags: ["seasonal"],
      summary: "Season 10.5: Path to Doomsday launches. No Peni Parker balance changes.",
      detail: "Path to Doomsday — Avengers: Infinity War PVP mode added. All Hallows' Glow event Oct 16. Endgame PVE mode Oct 23. Halloween: Night of Illusions Oct 30. The Season 10 launch balance patch (20260911) remains in force.",
    },
    {
      version: "S10 Mid",
      date: "Sep 24, 2026",
      tags: ["seasonal"],
      summary: "God Quarry Domination map added to the rotation.",
      detail: "New map: God Quarry (Domination) — set in Omnipotence City, Gorr's citadel. Three distinct combat sections: House of Ideas, Halls of All-Knowing, Confessional Eternity. Available in quick match from September 24.",
    },
    {
      version: "S10",
      date: "Sep 11, 2026",
      tags: ["seasonal"],
      summary: "Butcher's Blasphemy launches. Gorr the God Butcher joins as new Duelist. Scarlet Witch receives full kit rewrite. ~70% of roster rebalanced. Peni Parker carries S9.5 balance forward.",
      detail: "Peni retains S-tier status at 57.0% win rate, #1 hero overall. Rank reset in effect. The Godbomb Battle Pass debuts. Dev Vision Vol. 21 adjustments — Peni receives no additional changes beyond the S9.5 nerf.",
    },
    {
      version: "S9.5",
      date: "Aug 7, 2026",
      tags: ["nerf"],
      summary: "Peni Parker — Cyber-Web Snare reworked. Right-click loses instant immobilize.",
      detail: "The instant lock on right-click is removed. The snare now requires an established web network to achieve root effect, shifting Peni from reactive lockdown to proactive zone setup. Despite the nerf, Peni retains 59.1% win rate (highest in the game). The Hood added as new Vanguard. Venom survivability also reduced.",
    },
    {
      version: "S9",
      date: "Jul 10, 2026",
      tags: ["seasonal"],
      summary: "Team-Up system rework. Both of Peni's team-up abilities (C key) can now be used without the partner hero present — only the enhanced effect requires the partner.",
      detail: "Thebes map (Domination) added July 23. Age of Ultron PvE event. Spider-Man Brand New Day cosmetics.",
    },
    {
      version: "S8.5",
      date: "Jun 12, 2026",
      tags: ["seasonal"],
      summary: "Cyclops added as Duelist. No Peni changes.",
      detail: "",
    },
    {
      version: "S8",
      date: "May 15, 2026",
      tags: ["seasonal"],
      summary: "Devil Dinosaur added as Vanguard. Peni Parker Freshman Bundle released.",
      detail: "The Freshman Bundle includes skin + emoji pack. No kit changes.",
    },
    {
      version: "S2.5",
      date: "2025",
      tags: ["buff", "teamup"],
      summary: "Rocket Network team-up updated — Peni gains an extra enhanced Spider-Nest that coexists with the original.",
      detail: "Rocket Network (Rocket Raccoon / Peni Parker): Peni gets an extra enhanced Spider-Nest that can coexist with the original while also dropping armor packs. Rocket Raccoon gets an enhanced Rebirth Beacon that can now spawn Cyber-Webs, Spider-Drones, and Archano-Mines.",
    },
    {
      version: "S1 Launch",
      date: "Early 2025",
      tags: [],
      summary: "Peni Parker released as a Vanguard at Season 1. SP//DR mech kit, zone-control focus.",
      detail: "Initial kit: Wall Crawl, Cyber-Web Cluster, Cyber-Web Snare (with instant immobilize), Spider-Nest & Arachno-Mines, Armor Expulsion, Spider-Sweeper (ult).",
    },
  ],

  // ── TEAM COMPOSITIONS ─────────────────────────────────────────────────
  teamComps: [
    {
      name: "Rocket Network",
      partners: ["Rocket Raccoon (required)", "Any Strategist"],
      type: "Team-Up Enhanced",
      synergy: "Core team-up that gives Peni a second coexisting Spider-Nest and gives Rocket an enhanced Rebirth Beacon. Maximum zone density — run this when your team has Rocket.",
      tips: [
        "Place Rocket's Rebirth Beacon inside your Cyber-Web for protection.",
        "The second Spider-Nest massively accelerates mine field coverage.",
        "Coordinate ultimate timing — Spider-Sweeper + Rocket's beacon ult for team revival under sweep.",
      ],
    },
    {
      name: "Full Control",
      partners: ["Captain America", "Luna Snow"],
      type: "Ranked / Competitive",
      synergy: "Cap provides frontline disruption that pushes enemies into Peni's web network. Luna's AoE heals keep SP//DR sustained during objective holds. Extremely high objective win rate.",
      tips: [
        "Cap dives, Peni zones, Luna heals — run this as your default ranked comp.",
        "Save Spider-Sweeper for when Cap's shield bash initiates.",
        "Luna's ult synergizes with Armor Expulsion timing.",
      ],
    },
    {
      name: "Double Vanguard Bunker",
      partners: ["Doctor Strange", "Any Strategist"],
      type: "Ranked / Dive Counter",
      synergy: "Strange's portals enable SP//DR to teleport the fight into your prepared web zone. The double Vanguard wall makes dive compositions nearly non-functional.",
      tips: [
        "Strange opens portals to bring enemies into your pre-set mine fields.",
        "Communicate portal timing — Peni needs 10 seconds to fully prepare a zone.",
        "Strong on all Domination maps; less reliable on Convoy.",
      ],
    },
  ],

}; // ← end of DATA object. Nothing below this needs editing for season updates.
