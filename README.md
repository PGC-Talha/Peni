# SP//DER Defense Corp. (Season 10.5)


## Add a lineup
1. Drop your screenshots into `images/`.
2. Open `add.html` in your browser, fill the form, copy the result.
3. Paste it at the bottom of `data/lineups.js` (before the closing `];`).

## Edit maps / season info
- `data/maps.js`: map list (id, name, location, mode, notes).
- `data/site.js`: hero stats, abilities, patches, team comps, header info (`meta`).

## Edit from the browser (no local files)
Open `admin.html` on your live site. Paste a fine-grained GitHub token (this repo only, Contents: read & write), then add, edit or delete lineups, upload screenshots, and add maps. Each save is one commit; the site updates in about a minute.
