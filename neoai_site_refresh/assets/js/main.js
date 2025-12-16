
(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if(btn && menu){
    btn.addEventListener('click', ()=>{
      menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', menu.classList.contains('is-open') ? 'true' : 'false');
    });
    document.addEventListener('click', (e)=>{
      if(!menu.classList.contains('is-open')) return;
      const within = menu.contains(e.target) || btn.contains(e.target);
      if(!within){
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }
})();
