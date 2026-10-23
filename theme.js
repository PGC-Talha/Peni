(function(){
  const root=document.documentElement;
  const stored=()=>{try{return localStorage.getItem('spider-theme')}catch(e){return null}};
  const setTheme=(theme,animate)=>{
    const next=theme==='dark'?'dark':'light';
    if(animate){root.classList.add('theme-transition');requestAnimationFrame(()=>setTimeout(()=>root.classList.remove('theme-transition'),420))}
    root.dataset.theme=next;
    try{localStorage.setItem('spider-theme',next)}catch(e){}
    document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      const dark=next==='dark';
      button.setAttribute('aria-pressed',String(dark));
      button.innerHTML=`<span aria-hidden="true">${dark?'☼':'◐'}</span> ${dark?'Light mode':'Dark mode'}`;
      button.title=`Switch to ${dark?'light':'dark'} mode`;
    });
  };
  if(!root.dataset.theme)root.dataset.theme=stored()||'light';
  setTheme(root.dataset.theme,false);
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-theme-toggle]');
    if(button)setTheme(root.dataset.theme==='dark'?'light':'dark',true);
  });
})();
