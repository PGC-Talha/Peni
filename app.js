(function(){
DATA.maps=MAPS;
const $=s=>document.querySelector(s), app=$('#app');
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const PAGES=[['','Startup'],['lineups','Lineups'],['maps','Maps'],['abilities','Abilities'],['patches','Patch Log'],['teamcomps','Team Comps']];
const MODES=['Convergence','Domination','Convoy'];
const img=(f,c)=>`<img ${c||''} loading="lazy" src="images/${esc(f)}" alt="">`;
$('#m-user').textContent=DATA.meta.loggedInAs;$('#m-upd').textContent=DATA.meta.lastUpdate;
try{$('#loc').textContent=Intl.DateTimeFormat().resolvedOptions().timeZone.replace('_',' ')}catch(e){}
$('#dir-menu').innerHTML=PAGES.map(p=>`<a href="#/${p[0]}" data-p="${p[0]}">${p[1]}</a>`).join('');
$('#dir-btn').onclick=e=>{e.stopPropagation();const m=$('#dir-menu');m.hidden=!m.hidden};
document.addEventListener('click',()=>$('#dir-menu').hidden=true);
const mapById=id=>MAPS.find(m=>m.id===id), lusOf=id=>LINEUPS.filter(l=>l.map===id);
const back=(href,label)=>`<div class="back"><span class="dim">Return to Index</span><a href="${href}">&lt;- ${label||'Back'}</a></div>`;

function startup(){
  const p=DATA.patches[0],h=DATA.hero;
  return `<span class="tag">//sys.msg</span><h1>Welcome to the SP//DER© Defense Corp. training resource library.</h1>
  <p>Built to help SP//DER© operators maximize efficiency and mission completion rates. Season ${esc(DATA.meta.season)} · ${esc(DATA.meta.seasonName)}.</p>
  <h2>Changelog</h2><div class="card"><span class="tag">Latest patch notes (${esc(p.version)})</span><p><b>${esc(p.summary)}</b></p><p class="dim">${esc(p.detail||'')}</p></div>
  <h2>Operator brief</h2><div class="grid"><div class="card">${[['Role',h.role],['Health',h.health],['Win rate',h.winRate],['Pick rate',h.pickRate],['Tier',h.tier+'-Tier'],['Ranking',h.tierRank]].map(r=>`<div class="stat"><span class="dim">${r[0]}</span><b>${esc(r[1])}</b></div>`).join('')}</div><div class="card"><p>${esc(h.bio)}</p></div></div>`;
}
function lineupsIndex(){
  let h=`<span class="tag">directory/</span><h1>Lineups</h1>`;
  MODES.forEach(mode=>{
    h+=`<h2>${mode}</h2>`+MAPS.filter(m=>m.mode===mode).map(m=>{
      const n=lusOf(m.id).length, inner=`<span>${esc(m.name)}<small>${esc(m.location)}</small></span>`;
      return n?`<a class="row" href="#/lineups/${m.id}">${inner}<span class="go">${n} lineup${n>1?'s':''} →</span></a>`
              :`<div class="row empty">${inner}<span class="go">no lineups yet</span></div>`}).join('');
  });
  return h;
}
const lrow=l=>`<a class="row" href="#/lineups/${l.map}/${l.id}"><span>${esc(l.title)}${l.point?`<small>${esc(l.point)}</small>`:''}</span><span class="go">view →</span></a>`;
function mapPage(id){
  const m=mapById(id);if(!m)return nf();const l=lusOf(id),sided=l.some(x=>x.side);
  let h=back('#/lineups')+`<span class="tag">${esc(m.location)}</span><h1>${esc(m.name)}</h1><span class="badge b-${m.mode}">${m.mode}</span><div style="height:28px"></div>`;
  if(!l.length)return h+`<div class="slot">No lineups yet. Add some in data/lineups.js (see add.html).</div>`;
  if(sided)h+=`<div class="cols">`+['Attack','Defense'].map(s=>`<div><h3>${s}</h3>${l.filter(x=>x.side===s).map(lrow).join('')||'<div class="slot">no lineups yet</div>'}</div>`).join('')+(l.some(x=>!x.side)?'':'')+`</div>`;
  else h+=`<div class="cols one"><div>${l.map(lrow).join('')}</div></div>`;
  const rest=sided?l.filter(x=>!x.side):[];if(rest.length)h+=`<h3 style="margin:28px 0 14px">Other</h3>`+rest.map(lrow).join('');
  return h;
}
function lineupPage(mid,lid){
  const m=mapById(mid),l=LINEUPS.find(x=>x.id===lid&&x.map===mid);if(!m||!l)return nf();
  const ims=l.images||[];
  return back('#/lineups/'+mid)+`<div class="crumb">${esc(m.name)}${l.side?' / <b>'+esc(l.side)+'</b>':''}${l.point?' / <b>'+esc(l.point)+'</b>':''}</div><h1>${esc(l.title)}</h1>
  ${l.author?`<p class="dim">By <a href="${esc(l.authorUrl)}" target="_blank" rel="noopener">${esc(l.author)}</a></p>`:''}
  ${l.desc?`<div class="desc">${esc(l.desc)}</div>`:''}
  ${ims.length?`<div class="viewer">${img(ims[0],'id="big"')}</div>`+(ims.length>1?`<div class="thumbs">${ims.map((f,i)=>`<button data-f="${esc(f)}" class="${i?'':'on'}">${img(f)}</button>`).join('')}</div>`:''):'<div class="slot">No images yet.</div>'}`;
}
function mapsPage(f){
  const list=MAPS.filter(m=>!f||m.mode===f);
  return `<span class="tag">//map database</span><h1>Maps</h1><p>Season ${esc(DATA.meta.season)} competitive pool, with Peni notes.</p>
  <div class="filters">${['',...MODES].map(x=>`<button data-f="${x}" class="${x===(f||'')?'on':''}">${x||'All'}</button>`).join('')}</div>
  <div class="grid">${list.map(m=>`<div class="card"><span class="badge b-${m.mode}">${m.mode}</span>${m.isNew?'<span class="badge ok">New</span>':''}<h3 style="margin:10px 0 2px;color:var(--head)">${esc(m.name)}</h3><div class="dim" style="font-size:.9rem">${esc(m.location)} · added ${esc(m.added)}</div><p style="margin-top:12px">${esc(m.note)}</p>${m.peni?`<b style="color:var(--teal)">Peni: ${esc(m.peni)}</b>`:''}</div>`).join('')}</div>`;
}
function abilities(){return `<span class="tag">//operator kit</span><h1>Abilities</h1>`+DATA.abilities.map(a=>`<div class="card"><span class="key">${esc(a.key)}</span><b style="color:var(--head)">${esc(a.name)}</b>${a.changed?` <span class="badge b-${a.changeType||''}">${a.changeType==='buff'?'Buffed':a.changeType==='nerf'?'Nerfed':'Updated'}</span>`:''}<p style="margin-top:10px">${esc(a.desc)}</p>${a.changed?`<p class="dim">${esc(a.changed)}</p>`:''}</div>`).join('')}
function patches(){return `<span class="tag">//system changelog</span><h1>Patch Log</h1>`+DATA.patches.map(p=>`<div class="pn"><div><div class="v">${esc(p.version)}</div><div class="dim">${esc(p.date)}</div></div><div>${(p.tags||[]).map(t=>`<span class="badge b-${t}">${esc(t)}</span>`).join('')}<p style="margin-top:8px"><b>${esc(p.summary)}</b></p><p class="dim">${esc(p.detail||'')}</p></div></div>`).join('')}
function comps(){return `<span class="tag">//alliance configurations</span><h1>Team Comps</h1><div class="grid">`+DATA.teamComps.map(c=>`<div class="card"><b style="color:var(--head)">${esc(c.name)}</b><div class="dim">⬡ ${c.partners.map(esc).join(' + ')}</div><span class="badge" style="margin-top:8px">${esc(c.type)}</span><p style="margin-top:10px">${esc(c.synergy)}</p><ul class="tips">${c.tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`).join('')+`</div>`}
const nf=()=>`<h1>Not found</h1><p><a href="#/lineups">← Back to lineups</a></p>`;
let mapFilter='';
function route(){
  const [a,b,c]=location.hash.replace(/^#\/?/,'').split('/').map(decodeURIComponent);
  const page=a||'';let h;
  if(page==='lineups')h=c?lineupPage(b,c):b?mapPage(b):lineupsIndex();
  else if(page==='maps')h=mapsPage(mapFilter);else if(page==='abilities')h=abilities();
  else if(page==='patches')h=patches();else if(page==='teamcomps')h=comps();else if(page==='')h=startup();else h=nf();
  app.innerHTML=h;window.scrollTo(0,0);
  const cur=PAGES.find(p=>p[0]===page)||PAGES[0];$('#dir-cur').textContent=cur[1];
  document.querySelectorAll('#dir-menu a').forEach(x=>x.classList.toggle('on',x.dataset.p===page));
}
app.addEventListener('click',e=>{
  const t=e.target.closest('.thumbs button');if(t){$('#big').src=t.querySelector('img').src;document.querySelectorAll('.thumbs button').forEach(x=>x.classList.toggle('on',x===t));}
  const f=e.target.closest('.filters button');if(f){mapFilter=f.dataset.f;app.innerHTML=mapsPage(mapFilter);}
});
addEventListener('hashchange',route);route();
})();
