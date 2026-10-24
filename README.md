# SP//DER Defense Corp. (Season 10.5)

Static site: no build step. Open `index.html`, or push the folder to Netlify / GitHub Pages as-is.

## One-time: copy the lineup images locally
    python download_images.py
This saves all 72 lineup images into `images/`. The site no longer loads anything from the original site, so run this before you deploy.

## Add maps and lineups
Open `admin.html` on the live site and connect with an authorized fine-grained GitHub token (this repository only, Contents: read & write). The editor can add maps and lineups, upload screenshots, and commit each save to the repository.

## Edit maps / season info
- `data/maps.js`: map list (id, name, location, mode, notes).
- `data/site.js`: hero stats, abilities, patches, team comps, header info (`meta`).

## Edit from the browser (no local files)
Open `admin.html` on your live site. Paste a fine-grained GitHub token (this repo only, Contents: read & write), then add, edit or delete lineups, upload screenshots, and add maps. Each save is one commit; the site updates in about a minute. Keep the token private and share it only with trusted maintainers.

