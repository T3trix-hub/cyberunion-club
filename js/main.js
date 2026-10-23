(function(){
const S=SITE,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tel=p=>'tel:'+p.replace(/[^+\d]/g,''),br=n=>n==null?'—':String(n).replace('.',',')+' Br',pad=n=>String(n).padStart(2,'0');
const IC={cs2:'<circle cx="32" cy="32" r="16"/><path d="M32 6v14M32 44v14M6 32h14M44 32h14"/><circle cx="32" cy="32" r="2" fill="currentColor"/>',
dota2:'<path d="M12 12l34 34M38 50l12-12M46 46l8 8M52 12L18 46M26 50L14 38M18 46l-8 8"/>',
valorant:'<path d="M32 6l7 19 19 7-19 7-7 19-7-19-19-7 19-7z"/>',
fortnite:'<path d="M14 52L42 24M24 14c14-6 28 0 32 16"/>',
apex:'<path d="M32 6l22 13v26L32 58 10 45V19zM32 22l9 16H23z"/>',
pubg:'<path d="M10 38a22 22 0 0144 0zM8 38h48v7H8zM32 16v10"/>',
r6:'<path d="M32 6l20 8v16c0 14-9 22-20 28C21 52 12 44 12 30V14zM32 18v24M22 28h20"/>',
warzone:'<path d="M8 28a24 24 0 0148 0zM8 28l24 24M56 28L32 52M32 28v24"/><rect x="28" y="52" width="8" height="6"/>',
lol:'<path d="M32 6l16 16-16 36-16-36zM16 22h32M32 6l-6 16 6 36 6-36z"/>',
rust:'<path d="M16 54L44 20M34 12c12-3 20 3 22 14-9 0-17-4-22-14z"/>',
gta5:'<path d="M8 42l6-14h30l8 14v8H8z"/><circle cx="20" cy="50" r="5"/><circle cx="44" cy="50" r="5"/>',
hearthstone:'<rect x="14" y="12" width="26" height="38" rx="3" transform="rotate(-10 27 31)"/><rect x="26" y="14" width="26" height="38" rx="3" transform="rotate(8 39 33)"/>',
wot:'<rect x="8" y="40" width="48" height="12" rx="6"/><path d="M18 40V28h24v12M42 33h16"/>',
warthunder:'<path d="M32 6l4 20 22 10v6L36 38l-2 14 8 6v2l-10-3-10 3v-2l8-6-2-14-22 8v-6l22-10z"/>',
minecraft:'<path d="M32 8l22 12v24L32 56 10 44V20zM10 20l22 12 22-12M32 32v24"/>'};
const HUE={'Шутер':355,'MOBA':215,'Battle Royale':275,'Песочница':150,'Открытый мир':320,'Карточная':190,'Техника':32};
const pages=[['index.html','Главная'],['halls.html','Залы и цены'],['games.html','Игры'],['contacts.html','Контакты']];
const cur=location.pathname.split('/').pop()||'index.html';
$('#site-header').innerHTML=`<div class="wrap bar"><a class="logo glitch" href="index.html"><img src="images/logo-mark.png" alt="" width="38" height="38"><span><small>${S.mall} · МИНСК</small>КИБЕР ЮНИОН</span></a><nav id="nav">${pages.map(p=>`<a href="${p[0]}"${p[0]===cur?' class="on"':''}>${p[1]}</a>`).join('')}<a class="btn sm" href="${tel(S.phone)}">Бронь</a></nav><button id="burger" aria-label="Меню"><i></i><i></i><i></i></button></div>`;
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
$('#site-footer').innerHTML=`<div class="wrap foot"><div><img src="images/logo-mark.png" alt="" width="46" height="46"><b>КИБЕР ЮНИОН</b>${S.mall}, ${S.address}<br>${S.hours}</div><div><b>Разделы</b>${pages.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('<br>')}</div><div><b>Связь</b><a href="${tel(S.phone)}">${S.phone}</a><br><a href="https://t.me/${S.telegram}" target="_blank" rel="noopener">Telegram</a><br><a href="https://instagram.com/${S.instagram}" target="_blank" rel="noopener">Instagram</a></div></div><div class="wrap copy">© Кибер Юнион · Сайт сделал <a href="https://t3trix-hub.github.io/t3trix-portfolio/" target="_blank" rel="noopener">T3trix</a></div>`;
$$('[data-site]').forEach(e=>e.textContent=S[e.dataset.site]);
$$('[data-tel]').forEach(e=>e.href=tel(S.phone));$$('[data-tg]').forEach(e=>e.href='https://t.me/'+S.telegram);
$$('[data-ig]').forEach(e=>e.href='https://instagram.com/'+S.instagram);$$('[data-map]').forEach(e=>e.href=S.ymaps);
$$('[data-n]').forEach(e=>e.textContent={halls:HALLS.length,games:GAMES.length}[e.dataset.n]);
const min=h=>Object.entries(h.p).reduce((a,b)=>b[1]<a[1]?b:a),DUR={h1:'1 ч',h3:'3 ч',h5:'5 ч',night:'10 ч'};
const mq=$('#mq');if(mq){const t=GAMES.map(g=>`<span>${esc(g[1])}</span>`).join('');mq.innerHTML=`<div>${t}${t}</div>`}
const bn=$('#bento');
if(bn)bn.innerHTML=HALLS.map((h,i)=>{const m=min(h);return`<a class="bn rv${i<2?' big':''}" href="halls.html#${h.id}"${h.img?` style="--im:url(../${h.img})"`:''}><span class="no">${pad(i+1)}</span><h3>${esc(h.n)}</h3><p>${esc(h.tag)}</p><b>от ${br(m[1])} <em>/ ${DUR[m[0]]}</em></b></a>`}).join('');
const tile=(g,i)=>`<div class="gt rv" data-g="${esc(g[2])}" style="--h:${HUE[g[2]]||215}"><img src="images/games/${g[0]}.jpg" alt="" loading="lazy" onload="this.parentNode.classList.add('has')" onerror="this.remove()"><span class="gg">${esc(g[2])}</span>${IC[g[0]]?`<svg class="gi" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[g[0]]}</svg>`:''}<h3>${esc(g[1])}</h3><span class="gn">${pad(i+1)}</span></div>`;
const gt=$('#gteaser');if(gt)gt.innerHTML=GAMES.slice(0,8).map(tile).join('');
const gl=$('#games');
if(gl){const gs=[...new Set(GAMES.map(g=>g[2]))],ch=$('#gchips');
 ch.innerHTML=`<button class="on" data-g="">Все · ${GAMES.length}</button>`+gs.map(x=>`<button data-g="${esc(x)}">${esc(x)} · ${GAMES.filter(g=>g[2]===x).length}</button>`).join('');
 const show=f=>{$$('button',ch).forEach(b=>b.classList.toggle('on',b.dataset.g===f));gl.innerHTML=GAMES.filter(g=>!f||g[2]===f).map(tile).join('');window.reveal&&reveal()};
 ch.onclick=e=>{const b=e.target.closest('button');if(b)show(b.dataset.g)};show('')}
const sh=$('#shots');
if(sh){sh.innerHTML=GALLERY.map(p=>`<figure><img loading="lazy" src="${p[0]}" alt="${esc(p[1])}"><figcaption>${esc(p[1])}</figcaption></figure>`).join('');
 const lb=document.createElement('div');lb.id='lb';document.body.append(lb);lb.onclick=()=>lb.classList.remove('on');
 sh.onclick=e=>{const i=e.target.closest('img');if(i){lb.innerHTML=`<img src="${i.src}" alt="">`;lb.classList.add('on')}}}
const mx=$('#matrix');
if(mx)mx.innerHTML=`<table><thead><tr><th>Зал</th><th>1 час</th><th>3 часа</th><th>5 часов</th><th class="nt">Ночной пакет<small>22:00–08:00 · 10 ч</small></th></tr></thead><tbody>${HALLS.map(h=>`<tr id="${h.id}"><th>${esc(h.n)}<small>${esc(h.tag)}</small></th>${[['h1','1 час'],['h3','3 часа'],['h5','5 часов'],['night','Ночной пакет']].map(c=>`<td data-l="${c[1]}"${c[0]==='night'?' class="nt"':''}>${br(h.p[c[0]])}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
$$('main h1,main h2,.hud>div,.step,.faq details,.band>*,.two>*,.shots figure').forEach(e=>e.classList.add('rv'));
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const t=x.target;t.classList.add('in');io.unobserve(t);setTimeout(()=>t.style.transitionDelay='',900)}}),{threshold:.08}):null;
window.reveal=()=>{let i=0;$$('.rv:not(.in)').forEach(e=>{if(!io)return e.classList.add('in');if(!e.dataset.o){e.dataset.o=1;e.style.transitionDelay=Math.min(i++,8)*55+'ms';io.observe(e)}})};reveal();
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||a.target||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin||u.pathname===location.pathname||!/\.html?$|\/$/.test(u.pathname))return;e.preventDefault();document.body.classList.add('leave');setTimeout(()=>location.href=a.href,220)});
addEventListener('pageshow',e=>{if(e.persisted)document.body.classList.remove('leave')});
})();
