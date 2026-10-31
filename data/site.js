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
      desc: "Hold SPACE to crawl on vertical surfaces.",
      changed: null,
    },
    {
      key: "LMB",
      type: "active",
      name: "Cyber-Web Cluster",
      desc: "Launch forward a Cyber-Web Cluster.",
      changed: "Season 10: firing interval reduced from 0.3s to 0.25s; firing no longer slows Peni.",
      changeType: "buff",
    },
    {
      key: "RMB",
      type: "active",
      name: "Cyber-Web Snare",
      desc: "Fire a web that slows and marks an enemy with a Web-Tracer, or creates a Cyber-Web when it hits terrain. Hitting a marked enemy again immobilizes them.",
      changed: "Two charges, 3s recharge each. Enemy hit: 30% slow for 1s and a 5s Web-Tracer; a second hit immobilizes for 0.7s. Peni's webs heal her for 25/s and allies for 15/s, grant 25% movement speed, and can convert excess healing into bonus health.",
      changeType: null,
    },
    {
      key: "SHIFT",
      type: "active",
      name: "Bionic Spider-Nest",
      desc: "Deploy a Bionic Spider-Nest at a targeted area. It periodically spawns Spider-Drones and creates Cyber-Webs that heal and speed up Peni and her allies.",
      changed: "Nest: 350 health, 15s cooldown, 10m placement range. It creates a 12m web and spawns two 40-damage drones every 3s; drone hits slow by 8% for 2s, stacking up to 40%.",
      changeType: null,
    },
    {
      key: "E",
      type: "active",
      name: "Arachno-Mine",
      desc: "Deploy Arachno-Mines that can be concealed within the confines of a Cyber-Web.",
      changed: "Each mine deals 100 damage in a 3m radius. Peni starts with four charges; each charge recharges in 4s.",
      changeType: null,
    },
    {
      key: "F",
      type: "active",
      name: "Cyber-Bond",
      desc: "Shoot a web strand that links Peni to a targeted area or Cyber-Web. If stretched too far, it pulls her back.",
      changed: null,
    },
    {
      key: "Q",
      type: "ult",
      name: "Spider-Sweeper",
      desc: "Enhance the SP//dr suit, launching up enemies in its path and repeatedly deploying Arachno-Mines, Spider-Drones, and Cyber-Webs.",
      changed: "Lasts 12s, grants 450 bonus health and 70% movement speed, and the sweep deals 60 damage. Peni can deploy up to seven mines during the ultimate.",
      changeType: null,
    },
    {
      key: "C",
      type: "teamup",
      name: "Vibranium Mech",
      desc: "Activate a temporary Cyber-Web Cluster attack-speed and damage boost. With Black Panther on the team, it also deploys a frontal Vibranium Shield and reduces the Cluster's Vibranium Energy cost.",
      changed: "5s duration, 15s cooldown. The shield has 300 health, or 400 health with Black Panther; the enhanced Cluster fires every 0.18s.",
      changeType: null,
    },
    {
      key: "C",
      type: "teamup",
      name: "Rocket Network (Armored Spider-Nest)",
      desc: "Deploy an Armored Spider-Nest that drops Spider-Drones and Armor Packs worth 50 bonus health. With Rocket Raccoon on the team, the nest regenerates health and Rocket's B.R.B. creates Cyber-Webs, drones, and Arachno-Mines.",
      changed: "The Armored Spider-Nest has 250 health and a 25s cooldown. Armor Packs drop every 3s; the enhanced nest heals for 25 health/s.",
      changeType: null,
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
      summary: "Peni Parker — Cyber-Web Snare now applies a Web-Tracer and slow before immobilizing on a follow-up hit.",
      detail: "A hit applies a 30% slow for 1s and a Web-Tracer for 5s. Hitting a traced enemy with the snare immobilizes them for 0.7s. The ability gained two charges, each recharging in 3s. The immobilize no longer requires a separate web network.",
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
      partners: ["Peni Parker", "Rocket Raccoon"],
      type: "Team-Up",
      synergy: "Peni deploys an Armored Spider-Nest that drops Spider-Drones and Armor Packs. With Rocket on the team, the nest regenerates health and Rocket's B.R.B. creates Cyber-Webs, drones, and Arachno-Mines.",
      tips: [
        "Place the Armored Spider-Nest near the objective but protect it from enemy fire.",
        "Armor Packs grant 50 bonus health and drop every 3 seconds.",
        "Rocket's enhanced B.R.B. can seed nearby Cyber-Webs, drones, and mines.",
      ],
    },
    {
      name: "Vibranium Mech",
      partners: ["Peni Parker", "Black Panther"],
      type: "Team-Up",
      synergy: "Activating Vibranium Mech boosts Cyber-Web Cluster's attack speed and damage. With Black Panther on the team, it also creates a frontal Vibranium Shield and reduces the Cluster's Vibranium Energy cost.",
      tips: [
        "Use the 5-second boost when you need a burst of Cluster pressure.",
        "With Black Panther present, activation also deploys the shield.",
        "The current cooldown is 15 seconds.",
      ],
    },
  ],

}; // ← end of DATA object. Nothing below this needs editing for season updates.
