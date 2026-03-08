/* ================================================================
   FIXSTORE — PRODUCTION SCRIPT v5
================================================================ */
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); tg.enableClosingConfirmation(); }
const TG_USER = tg?.initDataUnsafe?.user || { id: 0, first_name: 'Гость', username: '', photo_url: null };

/* ── MD5 (для Robokassa) ── */
function md5(str){function safeAdd(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)}function bitRotateLeft(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}function md5ff(a,b,c,d,x,s,t){return md5cmn((b&c)|((~b)&d),a,b,x,s,t)}function md5gg(a,b,c,d,x,s,t){return md5cmn((b&d)|(c&(~d)),a,b,x,s,t)}function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|(~d)),a,b,x,s,t)}function md5blk(s){var md5blks=[],i;for(i=0;i<64;i+=4){md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24);}return md5blks}function md51(s){var n=s.length,state=[1732584193,-271733879,-1732584194,271733878],i,length64,tail,tmp,lo,hi;for(i=64;i<=n;i+=64){md5cycle(state,md5blk(s.substring(i-64,i)));}s=s.substring(i-64);length64=[];tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<s.length;i++){tail[i>>2]|=s.charCodeAt(i)<<((i%4)<<3);}tail[i>>2]|=0x80<<((i%4)<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i++){tail[i]=0;}}lo=n*8;hi=Math.floor(lo/4294967296);lo=lo%4294967296;tail[14]=lo;tail[15]=hi;md5cycle(state,tail);return state}function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a=md5ff(a,b,c,d,k[0],7,-680876936);d=md5ff(d,a,b,c,k[1],12,-389564586);c=md5ff(c,d,a,b,k[2],17,606105819);b=md5ff(b,c,d,a,k[3],22,-1044525330);a=md5ff(a,b,c,d,k[4],7,-176418897);d=md5ff(d,a,b,c,k[5],12,1200080426);c=md5ff(c,d,a,b,k[6],17,-1473231341);b=md5ff(b,c,d,a,k[7],22,-45705983);a=md5ff(a,b,c,d,k[8],7,1770035416);d=md5ff(d,a,b,c,k[9],12,-1958414417);c=md5ff(c,d,a,b,k[10],17,-42063);b=md5ff(b,c,d,a,k[11],22,-1990404162);a=md5ff(a,b,c,d,k[12],7,1804603682);d=md5ff(d,a,b,c,k[13],12,-40341101);c=md5ff(c,d,a,b,k[14],17,-1502002290);b=md5ff(b,c,d,a,k[15],22,1236535329);a=md5gg(a,b,c,d,k[1],5,-165796510);d=md5gg(d,a,b,c,k[6],9,-1069501632);c=md5gg(c,d,a,b,k[11],14,643717713);b=md5gg(b,c,d,a,k[0],20,-373897302);a=md5gg(a,b,c,d,k[5],5,-701558691);d=md5gg(d,a,b,c,k[10],9,38016083);c=md5gg(c,d,a,b,k[15],14,-660478335);b=md5gg(b,c,d,a,k[4],20,-405537848);a=md5gg(a,b,c,d,k[9],5,568446438);d=md5gg(d,a,b,c,k[14],9,-1019803690);c=md5gg(c,d,a,b,k[3],14,-187363961);b=md5gg(b,c,d,a,k[8],20,1163531501);a=md5gg(a,b,c,d,k[13],5,-1444681467);d=md5gg(d,a,b,c,k[2],9,-51403784);c=md5gg(c,d,a,b,k[7],14,1735328473);b=md5gg(b,c,d,a,k[12],20,-1926607734);a=md5hh(a,b,c,d,k[5],4,-378558);d=md5hh(d,a,b,c,k[8],11,-2022574463);c=md5hh(c,d,a,b,k[11],16,1839030562);b=md5hh(b,c,d,a,k[14],23,-35309556);a=md5hh(a,b,c,d,k[1],4,-1530992060);d=md5hh(d,a,b,c,k[4],11,1272893353);c=md5hh(c,d,a,b,k[7],16,-155497632);b=md5hh(b,c,d,a,k[10],23,-1094730640);a=md5hh(a,b,c,d,k[13],4,681279174);d=md5hh(d,a,b,c,k[0],11,-358537222);c=md5hh(c,d,a,b,k[3],16,-722521979);b=md5hh(b,c,d,a,k[6],23,76029189);a=md5hh(a,b,c,d,k[9],4,-640364487);d=md5hh(d,a,b,c,k[12],11,-421815835);c=md5hh(c,d,a,b,k[15],16,530742520);b=md5hh(b,c,d,a,k[2],23,-995338651);a=md5ii(a,b,c,d,k[0],6,-198630844);d=md5ii(d,a,b,c,k[7],10,1126891415);c=md5ii(c,d,a,b,k[14],15,-1416354905);b=md5ii(b,c,d,a,k[5],21,-57434055);a=md5ii(a,b,c,d,k[12],6,1700485571);d=md5ii(d,a,b,c,k[3],10,-1894986606);c=md5ii(c,d,a,b,k[10],15,-1051523);b=md5ii(b,c,d,a,k[1],21,-2054922799);a=md5ii(a,b,c,d,k[8],6,1873313359);d=md5ii(d,a,b,c,k[15],10,-30611744);c=md5ii(c,d,a,b,k[6],15,-1560198380);b=md5ii(b,c,d,a,k[13],21,1309151649);a=md5ii(a,b,c,d,k[4],6,-145523070);d=md5ii(d,a,b,c,k[11],10,-1120210379);c=md5ii(c,d,a,b,k[2],15,718787259);b=md5ii(b,c,d,a,k[9],21,-343485551);x[0]=safeAdd(a,x[0]);x[1]=safeAdd(b,x[1]);x[2]=safeAdd(c,x[2]);x[3]=safeAdd(d,x[3]);}function hex(x){var hex_tab='0123456789abcdef',str='',i;for(i=0;i<x.length;i++){str+=hex_tab.charAt((x[i]>>4)&0x0F)+hex_tab.charAt(x[i]&0x0F);}return str}function rhex(n){var s='',j;for(j=0;j<4;j++){s+=hex([(n>>>(j*8+4))&0x0f])+hex([(n>>>(j*8))&0x0f]);}return s}function hex_md5(s){return rhex(md51(s)[0])+rhex(md51(s)[1])+rhex(md51(s)[2])+rhex(md51(s)[3]);}
return hex_md5(str).toUpperCase();}

/* ── LocalStorage ── */
const LS={get(k,d=null){try{const v=localStorage.getItem('fs_'+k);return v!==null?JSON.parse(v):d}catch{return d}},set(k,v){try{localStorage.setItem('fs_'+k,JSON.stringify(v))}catch{}}};

/* ── PVZ Cities ── */
const PVZ_CITIES=['Ростов-на-Дону','Шахты','Батайск','Аксай','Новочеркасск','Таганрог','Краснодар','Волгоград','Ставрополь','Москва','Санкт-Петербург','Сочи','Казань','Екатеринбург','Новосибирск','Самара','Воронеж','Уфа','Пермь','Нижний Новгород'];

/* ── Spin prizes ── */
const SPIN_PRIZES=[
  {label:'Нет удачи',code:null,pct:0,color:'#2a2a3a',weight:40},
  {label:'Нет удачи',code:null,pct:0,color:'#252535',weight:30},
  {label:'−3%',code:'SPIN3',pct:3,color:'#8a6020',weight:15},
  {label:'−5%',code:'SPIN5',pct:5,color:'#a07030',weight:10},
  {label:'−7%',code:'SPIN7',pct:7,color:'#c09040',weight:4},
  {label:'−10%',code:'SPIN10',pct:10,color:'#c9a84c',weight:1},
];

/* ── Quiz ── */
const QUIZ_STEPS=[
  {q:'Какой характер аромата?',opts:['Свежий, морской','Тёплый, восточный','Цветочный, нежный','Пряный, дерзкий']},
  {q:'Когда планируете носить?',opts:['Каждый день','Для особых случаев','Для работы','На прогулку']},
  {q:'Что важнее всего?',opts:['Стойкость 12+ ч','Яркий шлейф','Ненавязчивость','Натуральный состав']},
];
const FAKE_NAMES=['Анна К.','Дмитрий М.','Светлана В.','Алексей П.','Ольга Т.','Михаил С.','Екатерина Д.','Роман Ж.','Наталья Б.','Иван Ф.'];

/* ── STATE ── */
let S={
  page:'home',filter:'all',sort:'default',searchQ:'',
  currentProduct:null,carouselIdx:0,qty:1,selectedSize:null,
  cart:[],wishlist:[],recentlyViewed:[],
  products:[],orders:[],sets:[],reviews:{},
  selectedPvz:null,deliveryMode:'pvz',widgetCity:'Ростов-на-Дону',
  promoCode:null,promoDiscount:0,payMethod:'robokassa_card',
  topupAmount:0,spinUsedDate:'',spinPromo:null,
  quizAnswers:[],quizStep:0,drop:null,reviewRating:0,
  compareList:[],adminOrderFilter:'all',
  promoCodes:{'FIX10':{pct:10,limit:0,used:0},'FIRST15':{pct:15,limit:0,used:0}},
  robokassa:{merchantLogin:'',password1:'',password2:'',testMode:true},
  settings:{adminUsername:'fixvet',adminTgId:0,supportTg:'@FixVetStoreBot',googleClientId:'',freeDeliveryThreshold:5000,minOrderAmount:0},
  user:{id:TG_USER.id||0,name:[TG_USER.first_name,TG_USER.last_name].filter(Boolean).join(' ')||'Гость',username:TG_USER.username||'',photo_url:TG_USER.photo_url||null,balance:0,referrals:0,bonus:0,googleEmail:null,googleLinked:false,googleLinkDate:null,googleName:null,googlePicture:null,lastBonusDate:''},
  stories:[{id:'s1',emoji:'✨',label:'Новинки',seen:false},{id:'s2',emoji:'🔥',label:'Хиты',seen:false},{id:'s3',emoji:'🎁',label:'Акции',seen:false},{id:'s4',emoji:'🌸',label:'Духи',seen:false},{id:'s5',emoji:'👔',label:'Одежда',seen:false}],
  botToken:'',
};

function loadState(){
  S.products=LS.get('products',[]);S.cart=LS.get('cart',[]);S.orders=LS.get('orders',[]);
  S.wishlist=LS.get('wishlist',[]);S.reviews=LS.get('reviews',{});S.recentlyViewed=LS.get('recentlyViewed',[]);
  S.drop=LS.get('drop',null);S.spinUsedDate=LS.get('spinDate','');S.stories=LS.get('stories',S.stories);
  S.promoCodes=LS.get('promoCodes',S.promoCodes);S.sets=LS.get('sets',[]);S.botToken=LS.get('botToken','');
  const u=LS.get('user',null);if(u)S.user={...S.user,...u};
  const rk=LS.get('robokassa',null);if(rk)S.robokassa={...S.robokassa,...rk};
  const st=LS.get('settings',null);if(st)S.settings={...S.settings,...st};
}
const sv={
  products(){LS.set('products',S.products)},cart(){LS.set('cart',S.cart)},
  orders(){LS.set('orders',S.orders)},wishlist(){LS.set('wishlist',S.wishlist)},
  reviews(){LS.set('reviews',S.reviews)},recently(){LS.set('recentlyViewed',S.recentlyViewed)},
  drop(){LS.set('drop',S.drop)},spin(){LS.set('spinDate',S.spinUsedDate)},
  stories(){LS.set('stories',S.stories)},user(){LS.set('user',S.user)},
  rk(){LS.set('robokassa',S.robokassa)},settings(){LS.set('settings',S.settings)},
  promos(){LS.set('promoCodes',S.promoCodes)},sets(){LS.set('sets',S.sets)},
  bot(){LS.set('botToken',S.botToken)},
};

/* ── Helpers ── */
function fmt(n){return Math.round(+n).toLocaleString('ru-RU')+' ₽';}
function escH(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function pad(n){return String(n).padStart(2,'0');}
let _tt=null;
function showToast(msg,type=''){const el=document.getElementById('toast');el.textContent=msg;el.className='toast'+(type?' '+type:'');el.classList.remove('hidden');clearTimeout(_tt);_tt=setTimeout(()=>el.classList.add('hidden'),3200);}
function avgRating(pid){const rv=S.reviews[pid]||[];if(!rv.length)return 0;return rv.reduce((s,r)=>s+r.rating,0)/rv.length;}
function isAdmin(){
  const uname=(TG_USER.username||'').toLowerCase().replace('@','');
  const adminU=(S.settings.adminUsername||'').toLowerCase().replace('@','');
  if(adminU&&uname&&uname===adminU)return true;
  if(S.settings.adminTgId&&TG_USER.id&&String(TG_USER.id)===String(S.settings.adminTgId))return true;
  return false;
}

/* ================================================================
   NAVIGATE
================================================================ */
const PAGES={home:'page-home',cart:'page-cart',product:'page-product',payment:'page-payment',profile:'page-profile',admin:'page-admin',success:'page-success',wishlist:'page-wishlist'};
function navigate(page,data=null){
  const cur=document.getElementById(PAGES[S.page]);if(cur)cur.classList.remove('active');
  S.page=page;window.history.replaceState(null,'','#'+page);
  const next=document.getElementById(PAGES[page]);if(!next)return;
  next.scrollTop=0;
  const inner=next.querySelector('.product-page-inner');if(inner)inner.scrollTop=0;
  next.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  if(page==='home')renderHome();
  else if(page==='cart')renderCart();
  else if(page==='product'&&data)openProduct(data);
  else if(page==='payment')renderPayment();
  else if(page==='profile')renderProfile();
  else if(page==='admin'){if(!isAdmin()){showToast('⛔ Нет доступа — укажите свой username в настройках','error');navigate('profile');return;}renderAdmin();}
  else if(page==='success'&&data)document.getElementById('success-order-id').textContent=data;
  else if(page==='wishlist')renderWishlist();
}
window.addEventListener('hashchange',()=>{const h=window.location.hash.slice(1);if(h&&PAGES[h])navigate(h);});

/* ================================================================
   HOME
================================================================ */
function renderHome(){renderStories();renderDropBanner();renderProducts();renderMiniSections();renderDailyDeal();updateBadges();startBoughtTicker();}

function renderStories(){
  const track=document.getElementById('stories-track');track.innerHTML='';
  S.stories.forEach(st=>{
    const div=document.createElement('div');div.className='story-item';
    div.innerHTML=`<div class="story-ring${st.seen?' seen':''}"><div class="story-inner">${st.emoji}</div></div><div class="story-label">${st.label}</div>`;
    div.addEventListener('click',()=>onStoryClick(st));track.appendChild(div);
  });
}
function onStoryClick(st){
  const idx=S.stories.findIndex(s=>s.id===st.id);if(idx>=0){S.stories[idx].seen=true;sv.stories();}
  renderStories();
  const fmap={s4:'perfume',s5:'clothes',s2:'hits',s1:'new'};
  if(fmap[st.id]){S.filter=fmap[st.id];document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter===fmap[st.id]));renderProducts();}
  else if(st.id==='s3')openSpin();
}

function renderDropBanner(){
  const el=document.getElementById('drop-banner');
  if(!S.drop?.date){el.classList.add('hidden');return;}
  el.classList.remove('hidden');document.getElementById('drop-name').textContent=S.drop.name||'';updateDropTimer();
}
function updateDropTimer(){
  if(!S.drop?.date)return;
  const diff=new Date(S.drop.date).getTime()-Date.now();
  if(diff<=0){document.getElementById('drop-timer').textContent='🔥 Уже началось!';return;}
  const h=Math.floor(diff/3600000),m=Math.floor((diff%3600000)/60000),sec=Math.floor((diff%60000)/1000);
  document.getElementById('drop-timer').textContent=`${pad(h)}:${pad(m)}:${pad(sec)}`;
}
setInterval(updateDropTimer,1000);

function renderDailyDeal(){
  const sec=document.getElementById('daily-deal-section');
  if(!S.products.length){sec.classList.add('hidden');return;}
  const p=S.products[Math.floor(Math.random()*S.products.length)];
  if(!p){sec.classList.add('hidden');return;}
  S._dailyProduct=p;sec.classList.remove('hidden');
  const th=p.photos?.[0]||'';
  document.getElementById('dd-product').innerHTML=`<div style="display:flex;align-items:center;gap:10px;cursor:pointer" id="dd-prod-click">${th?`<img src="${escH(th)}" style="width:52px;height:52px;border-radius:8px;object-fit:cover" onerror="this.style.display='none'"/>`:`<div style="width:52px;height:52px;border-radius:8px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:1.5rem">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div style="flex:1"><div style="font-family:var(--fd);font-size:.9rem;font-weight:600">${escH(p.name)}</div><div style="color:var(--gold);font-size:.85rem;font-weight:700;margin-top:2px">${fmt(p.price)}</div></div><button class="btn-primary" style="padding:8px 14px;font-size:.78rem" onclick="event.stopPropagation();addToCart(S._dailyProduct,1);showToast('✓ Добавлен','success')">В корзину</button></div>`;
  document.getElementById('dd-prod-click')?.addEventListener('click',()=>navigate('product',p));
  updateDailyTimer();
}
function updateDailyTimer(){const now=new Date(),mid=new Date(now);mid.setHours(24,0,0,0);const d=mid-now;const h=Math.floor(d/3600000),m=Math.floor((d%3600000)/60000),s=Math.floor((d%60000)/1000);const el=document.getElementById('dd-timer');if(el)el.textContent=`${pad(h)}:${pad(m)}:${pad(s)}`;}
setInterval(updateDailyTimer,1000);

let _tickerT=null;
function startBoughtTicker(){
  if(!S.products.length)return;clearInterval(_tickerT);
  function show(){const p=S.products[Math.floor(Math.random()*S.products.length)];const name=FAKE_NAMES[Math.floor(Math.random()*FAKE_NAMES.length)];const el=document.getElementById('bought-ticker');const txt=document.getElementById('bt-text');txt.textContent=`${name} только что купил${Math.random()>.5?'а':''} «${p.name}»`;el.classList.remove('hidden');setTimeout(()=>el.classList.add('hidden'),5500);}
  setTimeout(show,4000);_tickerT=setInterval(show,28000+Math.random()*15000);
}

function renderMiniSections(){
  const rt=(secId,trackId,items)=>{const s=document.getElementById(secId),t=document.getElementById(trackId);t.innerHTML='';if(!items.length){s.classList.add('hidden');return;}s.classList.remove('hidden');items.forEach(p=>t.appendChild(makeMiniCard(p)));};
  rt('recently-section','recently-track',S.recentlyViewed.slice(0,6));
  rt('hits-section','hits-track',S.products.filter(p=>p.badges?.hit).slice(0,6));
  rt('new-section','new-track',S.products.filter(p=>p.badges?.new).slice(0,6));
  const ss=document.getElementById('sets-section'),st=document.getElementById('sets-track');st.innerHTML='';
  if(!S.sets.length){ss.classList.add('hidden');}else{ss.classList.remove('hidden');S.sets.forEach(set=>st.appendChild(makeSetMiniCard(set)));}
}
function makeMiniCard(p){const d=document.createElement('div');d.className='mini-card';const th=p.photos?.[0]||'';d.innerHTML=`${th?`<img class="mini-card-img" src="${escH(th)}" loading="lazy" onerror="this.style.display='none'"/>`:`<div class="mini-card-ph">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="mini-card-body"><div class="mini-card-name">${escH(p.name)}</div><div class="mini-card-price">${fmt(p.price)}</div></div>`;d.addEventListener('click',()=>navigate('product',p));return d;}
function makeSetMiniCard(set){const d=document.createElement('div');d.className='mini-card';const th=set.photo||'';d.innerHTML=`${th?`<img class="mini-card-img" src="${escH(th)}" loading="lazy" onerror="this.style.display='none'"/>`:`<div class="mini-card-ph">🎁</div>`}<div class="mini-card-body"><div class="mini-card-name">${escH(set.name)}</div><div class="mini-card-price">${fmt(set.price)}</div></div>`;d.addEventListener('click',()=>openSetDetail(set));return d;}

/* Products grid */
function getFiltered(){
  let list=[...S.products];
  if(S.filter==='perfume')list=list.filter(p=>p.cat==='perfume');
  else if(S.filter==='clothes')list=list.filter(p=>p.cat==='clothes');
  else if(S.filter==='hits')list=list.filter(p=>p.badges?.hit);
  else if(S.filter==='new')list=list.filter(p=>p.badges?.new);
  else if(S.filter==='sets')return S.sets.map(s=>({...s,_isSet:true}));
  if(S.searchQ){const q=S.searchQ.toLowerCase();list=list.filter(p=>p.name.toLowerCase().includes(q)||(p.tags||[]).some(t=>t.toLowerCase().includes(q))||(p.desc||'').toLowerCase().includes(q));}
  switch(S.sort){
    case 'price-asc':list.sort((a,b)=>a.price-b.price);break;
    case 'price-desc':list.sort((a,b)=>b.price-a.price);break;
    case 'popular':list.sort((a,b)=>(b.sold||0)-(a.sold||0));break;
    case 'new':list.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));break;
    case 'rating':list.sort((a,b)=>avgRating(b.id)-avgRating(a.id));break;
  }
  return list;
}
function renderProducts(){
  const grid=document.getElementById('products-grid'),empty=document.getElementById('home-empty');
  const list=getFiltered();grid.innerHTML='';
  if(!list.length){grid.classList.add('hidden');empty.classList.remove('hidden');return;}
  grid.classList.remove('hidden');empty.classList.add('hidden');
  list.forEach((p,i)=>grid.appendChild(p._isSet?makeSetCard(p,i):makeProductCard(p,i)));
}
function makeProductCard(p,i=0){
  const inWish=S.wishlist.includes(p.id);
  const rv=S.reviews[p.id]||[],rating=avgRating(p.id);
  const card=document.createElement('div');card.className='product-card';card.style.animationDelay=(i*.04)+'s';
  const th=p.photos?.[0]||'';
  card.innerHTML=`<div class="pc-img-wrap">${th?`<img class="pc-img" src="${escH(th)}" loading="lazy" onerror="this.style.display='none'"/>`:`<div class="pc-placeholder">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="pc-badges"><span class="pc-badge pb-cat">${p.cat==='perfume'?'Духи':'Одежда'}</span>${p.badges?.new?'<span class="pc-badge pb-new">Новинка</span>':''}${p.badges?.hit?'<span class="pc-badge pb-hit">Хит</span>':''}${p.badges?.original?'<span class="pc-badge pb-orig">Оригинал</span>':''}${p.badges?.last?'<span class="pc-badge pb-last">Посл.</span>':''}</div><button class="pc-wish-btn${inWish?' active':''}" data-id="${p.id}"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button></div><div class="pc-body"><div class="pc-name">${escH(p.name)}</div><div class="pc-price-row"><div class="pc-price">${fmt(p.price)}</div>${p.oldPrice?`<div class="pc-old-price">${fmt(p.oldPrice)}</div>`:''}</div>${rating?`<div class="pc-stars">${'★'.repeat(Math.round(rating))}${'☆'.repeat(5-Math.round(rating))} <span style="color:var(--text3);font-size:.64rem">(${rv.length})</span></div>`:''} ${p.sold?`<div class="pc-sold">Куплено ${p.sold} раз</div>`:''}${p.stock>0&&p.stock<=5?`<div style="font-size:.64rem;color:#e0b050;margin-top:2px">⚠️ Осталось: ${p.stock} шт.</div>`:''}</div>`;
  card.querySelector('.pc-wish-btn').addEventListener('click',e=>{e.stopPropagation();toggleWishlist(p.id,card.querySelector('.pc-wish-btn'));});
  card.addEventListener('click',()=>navigate('product',p));
  return card;
}
function makeSetCard(s,i=0){
  const card=document.createElement('div');card.className='product-card';card.style.animationDelay=(i*.04)+'s';
  const th=s.photo||'';
  card.innerHTML=`<div class="pc-img-wrap">${th?`<img class="pc-img" src="${escH(th)}" loading="lazy" onerror="this.style.display='none'"/>`:`<div class="pc-placeholder">🎁</div>`}<div class="pc-badges"><span class="pc-badge pb-set">Набор</span></div></div><div class="pc-body"><div class="pc-name">${escH(s.name)}</div><div class="pc-price-row"><div class="pc-price">${fmt(s.price)}</div><div class="pc-old-price">${fmt(s.originalPrice||Math.round(s.price*1.2))}</div></div><div style="font-size:.64rem;color:var(--green);margin-top:2px">Экономия ${fmt(Math.round((s.originalPrice||s.price*1.2)-s.price))}</div></div>`;
  card.addEventListener('click',()=>openSetDetail(s));return card;
}
function openSetDetail(set){
  const items=S.products.filter(p=>(set.productIds||[]).includes(p.id));
  if(!items.length){showToast('Добавьте товары в набор через /admin','error');return;}
  items.forEach(p=>addToCart(p,1));showToast('✓ Набор добавлен в корзину','success');navigate('cart');
}

/* Search */
const $si=document.getElementById('search-input'),$sc=document.getElementById('search-clear'),$sug=document.getElementById('search-suggestions');
$si.addEventListener('input',()=>{S.searchQ=$si.value.trim();$sc.classList.toggle('hidden',!S.searchQ);renderProducts();renderSuggestions();});
$sc.addEventListener('click',()=>{$si.value='';S.searchQ='';$sc.classList.add('hidden');$sug.classList.add('hidden');renderProducts();});
function renderSuggestions(){
  if(!S.searchQ){$sug.classList.add('hidden');return;}
  const q=S.searchQ.toLowerCase(),matches=S.products.filter(p=>p.name.toLowerCase().includes(q)).slice(0,4);
  if(!matches.length){$sug.classList.add('hidden');return;}
  $sug.classList.remove('hidden');$sug.innerHTML='';
  matches.forEach(p=>{const d=document.createElement('div');d.className='suggestion-item';d.innerHTML=`<span>${p.cat==='perfume'?'🌸':'👔'}</span>${escH(p.name)}`;d.addEventListener('click',()=>{$si.value=p.name;S.searchQ=p.name;$sug.classList.add('hidden');renderProducts();navigate('product',p);});$sug.appendChild(d);});
}
document.addEventListener('click',e=>{if(!$sug.contains(e.target)&&e.target!==$si)$sug.classList.add('hidden');});
document.querySelectorAll('.filter-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');S.filter=btn.dataset.filter;renderProducts();});});
const $sortBtn=document.getElementById('btn-sort'),$sortDD=document.getElementById('sort-dropdown');
$sortBtn.addEventListener('click',e=>{e.stopPropagation();$sortDD.classList.toggle('hidden');});
document.addEventListener('click',()=>$sortDD.classList.add('hidden'));
document.querySelectorAll('.sort-opt').forEach(opt=>{opt.addEventListener('click',()=>{S.sort=opt.dataset.sort;document.getElementById('sort-label').textContent=opt.textContent.trim();document.querySelectorAll('.sort-opt').forEach(o=>o.classList.remove('active'));opt.classList.add('active');$sortDD.classList.add('hidden');renderProducts();});});

/* Wishlist */
function toggleWishlist(id,btn=null){
  const idx=S.wishlist.indexOf(id);
  if(idx>=0){S.wishlist.splice(idx,1);showToast('Убрано из избранного');}else{S.wishlist.push(id);showToast('❤️ Добавлено в избранное','success');}
  sv.wishlist();if(btn)btn.classList.toggle('active',S.wishlist.includes(id));updateBadges();
}
function renderWishlist(){
  const grid=document.getElementById('wishlist-grid'),empty=document.getElementById('wishlist-empty');
  const items=S.products.filter(p=>S.wishlist.includes(p.id));grid.innerHTML='';
  if(!items.length){empty.classList.remove('hidden');grid.classList.add('hidden');return;}
  empty.classList.add('hidden');grid.classList.remove('hidden');
  items.forEach((p,i)=>grid.appendChild(makeProductCard(p,i)));
}
document.getElementById('btn-wishlist-header').addEventListener('click',()=>navigate('wishlist'));
document.getElementById('btn-back-wishlist').addEventListener('click',()=>navigate('home'));
document.getElementById('btn-cart-header').addEventListener('click',()=>navigate('cart'));

/* ── Compare ── */
document.getElementById('btn-compare-open').addEventListener('click',openCompareModal);
function openCompareModal(){
  const body=document.getElementById('compare-body');const p1=S.compareList[0],p2=S.compareList[1];
  if(!p1&&!p2){body.innerHTML=`<div class="compare-hint">Добавьте ароматы к сравнению: откройте товар и нажмите кнопку ≡ (сравнение)</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px"><div class="compare-slot-empty">Откройте аромат и добавьте</div><div class="compare-slot-empty">Откройте аромат и добавьте</div></div>`;}
  else{const cols=[p1,p2].map(p=>p?buildCompareCol(p):`<div class="compare-slot-empty" style="aspect-ratio:auto;min-height:200px">Добавьте товар</div>`).join('');body.innerHTML=`<div class="compare-grid">${cols}</div>`;if(p1&&p2)body.innerHTML+=`<div style="margin-top:10px;text-align:center;font-size:.75rem;color:var(--text3)">Нажмите кнопку ≡ на странице товара чтобы убрать из сравнения</div>`;}
  document.getElementById('modal-compare').classList.remove('hidden');
}
function buildCompareCol(p){
  const th=p.photos?.[0]||'';const rv=S.reviews[p.id]||[];const r=avgRating(p.id);
  return `<div class="compare-col"><button class="btn-danger-sm" style="width:100%;margin-bottom:7px;font-size:.66rem" onclick="S.compareList=S.compareList.filter(c=>c.id!=='${p.id}');updateCompareBadge();openCompareModal()">✕ Убрать</button>${th?`<img class="compare-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="compare-img-ph">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="compare-name">${escH(p.name)}</div><div class="compare-price">${fmt(p.price)}</div><div class="compare-row"><span class="compare-key">Тип</span><span class="compare-val">${p.cat==='perfume'?'Духи':'Одежда'}</span></div><div class="compare-row"><span class="compare-key">Рейтинг</span><span class="compare-val">${r?r.toFixed(1)+` (${rv.length})`:'-'}</span></div><div class="compare-row"><span class="compare-key">Продано</span><span class="compare-val">${p.sold||0}</span></div>${p.topNotes?`<div class="compare-row"><span class="compare-key">Верх</span><span class="compare-val">${escH(p.topNotes)}</span></div>`:''}${p.midNotes?`<div class="compare-row"><span class="compare-key">Сердце</span><span class="compare-val">${escH(p.midNotes)}</span></div>`:''}${p.baseNotes?`<div class="compare-row"><span class="compare-key">База</span><span class="compare-val">${escH(p.baseNotes)}</span></div>`:''}<button class="btn-primary" style="width:100%;margin-top:9px;padding:8px;font-size:.78rem" onclick="addToCart(S.products.find(x=>x.id==='${p.id}'),1);showToast('✓ В корзину','success')">В корзину</button></div>`;
}
function updateCompareBadge(){const b=document.getElementById('compare-badge');b.textContent=S.compareList.length||'';b.style.display=S.compareList.length?'':'none';}

/* ================================================================
   PRODUCT PAGE
================================================================ */
function openProduct(p){
  S.currentProduct=p;S.qty=1;S.selectedSize=null;
  S.recentlyViewed=S.recentlyViewed.filter(x=>x.id!==p.id);
  S.recentlyViewed.unshift(p);if(S.recentlyViewed.length>10)S.recentlyViewed=S.recentlyViewed.slice(0,10);sv.recently();
  buildCarousel(p.photos||[]);
  document.getElementById('product-name').textContent=p.name;
  document.getElementById('product-price').textContent=fmt(p.price);
  const op=document.getElementById('product-old-price');
  if(p.oldPrice){op.textContent=fmt(p.oldPrice);op.classList.remove('hidden');}else op.classList.add('hidden');
  document.getElementById('product-desc').textContent=p.desc||'';
  document.getElementById('product-tags').innerHTML=(p.tags||[]).map(t=>`<span class="product-tag">#${escH(t)}</span>`).join('');
  document.getElementById('qty-val').textContent='1';
  const rv=S.reviews[p.id]||[],avg=avgRating(p.id);
  document.getElementById('product-stars').textContent=avg?'★'.repeat(Math.round(avg))+'☆'.repeat(5-Math.round(avg)):'☆☆☆☆☆';
  document.getElementById('product-review-count').textContent=rv.length?`${avg.toFixed(1)} (${rv.length})`:' ';
  document.getElementById('product-sold').textContent=p.sold?`· ${p.sold} продаж`:'';
  const stockEl=document.getElementById('stock-indicator');
  if(typeof p.stock==='number'&&p.stock===0){stockEl.className='stock-indicator stock-out';stockEl.textContent='❌ Нет в наличии';stockEl.classList.remove('hidden');}
  else if(typeof p.stock==='number'&&p.stock>0&&p.stock<=5){stockEl.className='stock-indicator stock-low';stockEl.textContent=`⚠️ Остаток: ${p.stock} шт.`;stockEl.classList.remove('hidden');}
  else stockEl.classList.add('hidden');
  const bw=document.getElementById('product-badges-wrap');bw.innerHTML=`<span class="product-cat-badge">${p.cat==='perfume'?'🌸 Духи':'👔 Одежда'}</span>`;
  if(p.badges?.hit)bw.innerHTML+=`<span class="product-cat-badge" style="background:rgba(200,70,50,.6)">🔥 Хит</span>`;
  if(p.oldPrice)bw.innerHTML+=`<span class="product-cat-badge" style="background:rgba(82,192,122,.5)">−${Math.round((1-p.price/p.oldPrice)*100)}%</span>`;
  const nb=document.getElementById('perfume-notes-block');
  if(p.cat==='perfume'&&(p.topNotes||p.midNotes||p.baseNotes)){
    nb.classList.remove('hidden');const ng=document.getElementById('notes-grid');ng.innerHTML='';
    if(p.topNotes)ng.innerHTML+=noteRow('Верх.',p.topNotes);
    if(p.midNotes)ng.innerHTML+=noteRow('Сердце',p.midNotes);
    if(p.baseNotes)ng.innerHTML+=noteRow('База',p.baseNotes);
  }else nb.classList.add('hidden');
  const sgb=document.getElementById('size-guide-block');
  if(p.cat==='clothes'&&p.sizes?.length){
    sgb.classList.remove('hidden');const sl=document.getElementById('sizes-list');sl.innerHTML='';
    p.sizes.forEach(sz=>{const chip=document.createElement('div');chip.className='size-chip';chip.textContent=sz;chip.addEventListener('click',()=>{document.querySelectorAll('.size-chip').forEach(c=>c.classList.remove('selected'));chip.classList.add('selected');S.selectedSize=sz;});sl.appendChild(chip);});
  }else sgb.classList.add('hidden');
  document.getElementById('btn-product-wishlist').classList.toggle('active',S.wishlist.includes(p.id));
  const cFab=document.getElementById('btn-product-compare');
  if(p.cat==='perfume'){cFab.classList.remove('hidden');const inC=S.compareList.some(c=>c.id===p.id);cFab.style.background=inC?'rgba(201,168,76,.35)':'rgba(13,13,16,.7)';}else cFab.classList.add('hidden');
  const btBlock=document.getElementById('bought-together-block');
  const others=S.products.filter(x=>x.id!==p.id&&x.cat===p.cat).slice(0,4);
  if(others.length){btBlock.classList.remove('hidden');const btList=document.getElementById('bt-list');btList.innerHTML='';others.forEach(op=>{const d=document.createElement('div');d.className='bt-item';const th=op.photos?.[0]||'';d.innerHTML=`${th?`<img class="bt-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="bt-img" style="display:flex;align-items:center;justify-content:center;font-size:1rem">${op.cat==='perfume'?'🌸':'👔'}</div>`}<div class="bt-info"><div class="bt-name">${escH(op.name)}</div><div class="bt-price">${fmt(op.price)}</div></div>`;d.addEventListener('click',()=>navigate('product',op));btList.appendChild(d);});}else btBlock.classList.add('hidden');
  renderReviews(p.id);
}
function noteRow(label,notes){return `<div class="note-row"><div class="note-layer">${label}</div><div class="note-items">${notes.split(',').map(n=>`<span class="note-chip">${escH(n.trim())}</span>`).join('')}</div></div>`;}

document.getElementById('qty-minus').addEventListener('click',()=>{if(S.qty>1){S.qty--;document.getElementById('qty-val').textContent=S.qty;}});
document.getElementById('qty-plus').addEventListener('click',()=>{if(S.qty<99){S.qty++;document.getElementById('qty-val').textContent=S.qty;}});
document.getElementById('btn-add-cart').addEventListener('click',()=>{
  if(S.currentProduct?.cat==='clothes'&&S.currentProduct.sizes?.length&&!S.selectedSize){showToast('⚠️ Выберите размер','error');return;}
  addToCart({...S.currentProduct,selectedSize:S.selectedSize},S.qty);showToast('✓ Добавлено в корзину','success');
});
document.getElementById('btn-back-product').addEventListener('click',()=>navigate('home'));
document.getElementById('btn-product-wishlist').addEventListener('click',()=>{toggleWishlist(S.currentProduct.id);document.getElementById('btn-product-wishlist').classList.toggle('active',S.wishlist.includes(S.currentProduct.id));});
document.getElementById('btn-product-share').addEventListener('click',()=>{
  const text=`${S.currentProduct.name} — ${fmt(S.currentProduct.price)} в FixStore 🛍`;
  if(tg?.openTelegramLink)tg.openTelegramLink(`https://t.me/share/url?text=${encodeURIComponent(text)}`);
  else navigator.share?.({title:'FixStore',text}).catch(()=>navigator.clipboard?.writeText(text).then(()=>showToast('✓ Скопировано','success')));
});
document.getElementById('btn-product-compare').addEventListener('click',()=>{
  const p=S.currentProduct;if(!p||p.cat!=='perfume')return;
  const idx=S.compareList.findIndex(c=>c.id===p.id);
  if(idx>=0){S.compareList.splice(idx,1);showToast('Убрано из сравнения');}
  else if(S.compareList.length>=2){showToast('⚠️ Максимум 2 товара','error');return;}
  else{S.compareList.push(p);showToast('✓ Добавлено к сравнению','success');}
  openProduct(p);updateCompareBadge();
});
document.getElementById('btn-size-guide').addEventListener('click',()=>document.getElementById('modal-size').classList.remove('hidden'));

/* Carousel */
function buildCarousel(photos){
  const track=document.getElementById('carousel-track'),dots=document.getElementById('carousel-dots');
  track.innerHTML='';dots.innerHTML='';S.carouselIdx=0;
  const imgs=photos.length?photos:[''];
  imgs.forEach((src,i)=>{const slide=document.createElement('div');slide.className='carousel-slide';if(src)slide.innerHTML=`<img src="${escH(src)}" onerror="this.style.display='none'"/>`;else slide.innerHTML=`<div class="carousel-ph">${S.currentProduct?.cat==='perfume'?'🌸':'👔'}</div>`;track.appendChild(slide);if(imgs.length>1){const d=document.createElement('div');d.className='carousel-dot'+(i===0?' active':'');d.addEventListener('click',()=>goSlide(i));dots.appendChild(d);}});
  document.getElementById('carousel-prev').classList.toggle('hidden',imgs.length<=1);
  document.getElementById('carousel-next').classList.toggle('hidden',imgs.length<=1);
  updateCarousel();
}
function updateCarousel(){document.getElementById('carousel-track').style.transform=`translateX(-${S.carouselIdx*100}%)`;document.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===S.carouselIdx));}
function goSlide(idx){const n=document.querySelectorAll('.carousel-slide').length;S.carouselIdx=(idx+n)%n;updateCarousel();}
document.getElementById('carousel-prev').addEventListener('click',()=>goSlide(S.carouselIdx-1));
document.getElementById('carousel-next').addEventListener('click',()=>goSlide(S.carouselIdx+1));
(()=>{const w=document.getElementById('product-carousel');let sx=0;w.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});w.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)goSlide(S.carouselIdx+(d<0?1:-1));});})();

/* Reviews */
function renderReviews(pid){
  const rv=S.reviews[pid]||[],el=document.getElementById('reviews-list'),empty=document.getElementById('reviews-empty');
  el.innerHTML='';if(!rv.length){empty.style.display='';return;}empty.style.display='none';
  rv.forEach(r=>{const d=document.createElement('div');d.className='review-card';d.innerHTML=`<div class="review-top"><div class="review-av">${r.avatar?`<img src="${escH(r.avatar)}" onerror="this.textContent='${(r.author||'?').charAt(0).toUpperCase()}'"/>`:((r.author||'?').charAt(0).toUpperCase())}</div><div class="review-meta"><div class="review-author">${escH(r.author||'Аноним')}</div><div class="review-date">${r.date}</div></div><div class="review-stars">${'★'.repeat(r.rating)}</div></div><div class="review-text">${escH(r.text)}</div>${r.photo?`<img class="review-photo" src="${escH(r.photo)}" onerror="this.style.display='none'"/>`:''} `;el.appendChild(d);});
}
document.getElementById('btn-add-review').addEventListener('click',()=>{S.reviewRating=0;document.querySelectorAll('.rs').forEach(r=>r.classList.remove('active'));document.getElementById('review-text').value='';document.getElementById('review-photo').value='';document.getElementById('modal-review').classList.remove('hidden');});
document.querySelectorAll('.rs').forEach(r=>{r.addEventListener('click',()=>{S.reviewRating=+r.dataset.v;document.querySelectorAll('.rs').forEach((x,i)=>x.classList.toggle('active',i<S.reviewRating));});});
document.getElementById('btn-review-cancel').addEventListener('click',()=>document.getElementById('modal-review').classList.add('hidden'));
document.getElementById('btn-review-submit').addEventListener('click',()=>{
  if(!S.reviewRating){showToast('⚠️ Выберите оценку','error');return;}
  const text=document.getElementById('review-text').value.trim();if(!text){showToast('⚠️ Напишите отзыв','error');return;}
  const pid=S.currentProduct.id;if(!S.reviews[pid])S.reviews[pid]=[];
  S.reviews[pid].unshift({author:S.user.googleName||S.user.name,date:new Date().toLocaleDateString('ru-RU'),rating:S.reviewRating,text,photo:document.getElementById('review-photo').value.trim()||null,avatar:S.user.googlePicture||S.user.photo_url||null});
  sv.reviews();document.getElementById('modal-review').classList.add('hidden');renderReviews(pid);openProduct(S.currentProduct);showToast('✓ Отзыв опубликован','success');
});

/* ================================================================
   CART
================================================================ */
function addToCart(p,qty=1){
  if(!p)return;
  const key=p.id+(p.selectedSize?'_'+p.selectedSize:''),ex=S.cart.find(i=>i._key===key);
  if(ex)ex.qty+=qty;else S.cart.push({...p,_key:key,qty});
  sv.cart();updateBadges();
}
function removeFromCart(key){S.cart=S.cart.filter(i=>i._key!==key);sv.cart();renderCart();updateBadges();}
function changeQty(key,d){const item=S.cart.find(i=>i._key===key);if(!item)return;item.qty+=d;if(item.qty<=0)return removeFromCart(key);sv.cart();renderCart();updateBadges();}
function cartItemsTotal(){return S.cart.reduce((s,i)=>s+i.price*i.qty,0);}
function deliveryCost(){
  const thresh=S.settings.freeDeliveryThreshold||0;
  const itemsTotal=cartItemsTotal();
  if(thresh&&itemsTotal>=thresh)return 0;
  if(S.deliveryMode==='meeting')return 0;
  if(S.deliveryMode==='pvz'&&S.selectedPvz)return S.selectedPvz.price||0;
  return 0;
}
function discountAmount(itemsTotal){
  let disc=0;
  if(S.spinPromo?.pct)disc=Math.floor(itemsTotal*S.spinPromo.pct/100);
  if(S.promoCode&&S.promoCodes[S.promoCode])disc=Math.max(disc,Math.floor(itemsTotal*S.promoCodes[S.promoCode].pct/100));
  if(!disc){if(itemsTotal>=7000)disc=Math.floor(itemsTotal*.10);else if(itemsTotal>=3000)disc=Math.floor(itemsTotal*.05);}
  return disc;
}
function cartTotal(){const items=cartItemsTotal();return Math.max(0,items-discountAmount(items))+deliveryCost();}

function renderCart(){
  const isEmpty=!S.cart.length;
  document.getElementById('cart-empty').classList.toggle('hidden',!isEmpty);
  document.getElementById('cart-content').classList.toggle('hidden',isEmpty);
  if(isEmpty)return;
  const el=document.getElementById('cart-items');el.innerHTML='';
  S.cart.forEach(item=>{const th=item.photos?.[0]||'';const div=document.createElement('div');div.className='cart-item';div.innerHTML=`${th?`<img class="ci-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="ci-img-ph">${item.cat==='perfume'?'🌸':'👔'}</div>`}<div class="ci-info"><div class="ci-name">${escH(item.name)}${item.selectedSize?` <span style="font-size:.72rem;color:var(--text3)">(${item.selectedSize})</span>`:''}</div><div class="ci-price">${fmt(item.price)} / шт.</div><div class="ci-qty"><button class="ci-qty-btn" data-k="${item._key}" data-d="-1">−</button><span class="ci-qty-val">${item.qty}</span><button class="ci-qty-btn" data-k="${item._key}" data-d="1">+</button></div></div><button class="ci-remove" data-k="${item._key}">🗑</button>`;el.appendChild(div);});
  el.querySelectorAll('.ci-qty-btn').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.k,+b.dataset.d)));
  el.querySelectorAll('.ci-remove').forEach(b=>b.addEventListener('click',()=>removeFromCart(b.dataset.k)));
  /* Upsell */
  const uSec=document.getElementById('upsell-section'),uList=document.getElementById('upsell-list');uList.innerHTML='';
  const cartIds=S.cart.map(i=>i.id),upsells=S.products.filter(p=>!cartIds.includes(p.id)).slice(0,5);
  if(upsells.length){uSec.classList.remove('hidden');upsells.forEach(p=>{const d=document.createElement('div');d.className='upsell-item';const th=p.photos?.[0]||'';d.innerHTML=`${th?`<img class="upsell-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="upsell-img-ph">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="upsell-name">${escH(p.name)}</div><div class="upsell-price">${fmt(p.price)}</div>`;d.addEventListener('click',()=>{addToCart(p,1);renderCart();showToast('✓ Добавлено','success');});uList.appendChild(d);});}else uSec.classList.add('hidden');
  /* Tier */
  const items=cartItemsTotal(),thresh=S.settings.freeDeliveryThreshold||5000,tierEl=document.getElementById('tier-banner');
  if(items>=7000){tierEl.textContent='✅ Максимальная скидка 10% применена';tierEl.classList.remove('hidden');}
  else if(items>=3000){tierEl.textContent=`🎁 До скидки 10% ещё ${fmt(7000-items)}`;tierEl.classList.remove('hidden');}
  else if(thresh&&items<thresh){tierEl.textContent=`🚚 До бесплатной доставки ещё ${fmt(thresh-items)}`;tierEl.classList.remove('hidden');}
  else{tierEl.textContent=`🎁 До скидки 5% ещё ${fmt(3000-items)}`;tierEl.classList.remove('hidden');}
  initCartCitySelect();updateSummary();
}

function initCartCitySelect(){
  const cs=document.getElementById('pvz-city-select');
  if(cs.children.length)return;
  PVZ_CITIES.forEach(city=>{const o=document.createElement('option');o.value=city;o.textContent=city;if(city===S.widgetCity)o.selected=true;cs.appendChild(o);});
}
document.getElementById('pvz-city-select').addEventListener('change',function(){S.widgetCity=this.value;S.selectedPvz=null;document.getElementById('pvz-selected-info').classList.add('hidden');updateSummary();});
function updateSummary(){
  const items=cartItemsTotal(),disc=discountAmount(items),del=deliveryCost();
  document.getElementById('sum-items').textContent=fmt(items);
  const dr=document.getElementById('discount-row');
  if(disc>0){dr.style.display='';document.getElementById('sum-discount').textContent='−'+fmt(disc);}else dr.style.display='none';
  document.getElementById('sum-delivery').textContent=(S.deliveryMode==='meeting'||del===0)?'Бесплатно':del+' ₽';
  document.getElementById('sum-total').textContent=fmt(Math.max(0,items-disc)+del);
}
document.getElementById('btn-apply-promo').addEventListener('click',()=>{
  const code=document.getElementById('promo-input').value.trim().toUpperCase();
  const res=document.getElementById('promo-result');const pc=S.promoCodes[code];
  if(pc&&(!pc.limit||pc.used<pc.limit)){S.promoCode=code;S.promoDiscount=pc.pct;res.className='promo-result ok';res.textContent=`✓ Скидка ${pc.pct}% применена`;res.classList.remove('hidden');pc.used=(pc.used||0)+1;sv.promos();updateSummary();showToast(`✓ Промокод принят`,'success');}
  else{res.className='promo-result err';res.textContent=code in S.promoCodes?'✗ Лимит исчерпан':'✗ Промокод не найден';res.classList.remove('hidden');}
});
document.querySelectorAll('.delivery-tab').forEach(tab=>{tab.addEventListener('click',()=>{document.querySelectorAll('.delivery-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');S.deliveryMode=tab.dataset.mode;document.getElementById('pvz-block').classList.toggle('hidden',S.deliveryMode!=='pvz');document.getElementById('meeting-info').classList.toggle('hidden',S.deliveryMode!=='meeting');updateSummary();});});
document.getElementById('btn-back-cart').addEventListener('click',()=>navigate('home'));
document.getElementById('btn-clear-cart').addEventListener('click',()=>{if(!S.cart.length)return;S.cart=[];sv.cart();renderCart();updateBadges();showToast('Корзина очищена');});
document.getElementById('btn-checkout').addEventListener('click',()=>{
  const minAmt=S.settings.minOrderAmount||0;
  if(minAmt&&cartItemsTotal()<minAmt){showToast(`⚠️ Минимальный заказ ${fmt(minAmt)}`,'error');return;}
  if(S.deliveryMode==='pvz'&&!S.selectedPvz){showToast('⚠️ Выберите пункт выдачи','error');return;}
  navigate('payment');
});

/* ── Yandex PVZ Widget ── */
function initWidgetCitySelect(){
  const sel=document.getElementById('widget-city-select');
  if(sel.children.length)return;
  PVZ_CITIES.forEach(city=>{const o=document.createElement('option');o.value=city;o.textContent=city;if(city===S.widgetCity)o.selected=true;sel.appendChild(o);});
}
function openPvzModal(){
  initWidgetCitySelect();
  document.getElementById('modal-pvz').classList.remove('hidden');
  setTimeout(()=>initYaWidget(S.widgetCity),300);
}
document.getElementById('btn-open-pvz-widget').addEventListener('click',openPvzModal);
document.getElementById('btn-change-pvz').addEventListener('click',openPvzModal);
document.getElementById('widget-city-select').addEventListener('change',function(){
  S.widgetCity=this.value;
  document.getElementById('delivery-widget').innerHTML='';
  setTimeout(()=>initYaWidget(S.widgetCity),100);
  // sync cart city select too
  const cs=document.getElementById('pvz-city-select');
  for(const opt of cs.options){if(opt.value===S.widgetCity)opt.selected=true;}
});
function initYaWidget(city){
  if(!window.YaDelivery){document.addEventListener('YaNddWidgetLoad',()=>initYaWidget(city),{once:true});return;}
  const container=document.getElementById('delivery-widget');container.innerHTML='';
  try{
    window.YaDelivery.createWidget({
      containerId:'delivery-widget',
      params:{
        city:city||'Ростов-на-Дону',
        size:{height:'420px',width:'100%'},
        source_platform_station:'05e809bb-4521-42d9-a936-0fb0744c0fb3',
        physical_dims_weight_gross:10000,
        delivery_price:'от 129',
        delivery_term:'от 1 дня',
        show_select_button:true,
        filter:{
          type:['pickup_point','terminal'],
          is_yandex_branded:false,
          payment_methods:['already_paid','card_on_receipt'],
          payment_methods_filter:'or',
        }
      }
    });
  }catch(e){container.innerHTML=`<div style="padding:14px;color:var(--text2);text-align:center;font-size:.83rem">Загрузка карты... Попробуйте обновить</div>`;}
}
document.addEventListener('YaNddWidgetPointSelected',function(e){
  const d=e.detail;
  S.selectedPvz={
    id:d.id,
    name:d.name||'Пункт выдачи',
    addr:d.address?.full_address||[d.address?.street,d.address?.house].filter(Boolean).join(', ')||'',
    city:d.address?.locality||S.widgetCity,
    price:Math.round(d.tariff?.delivery_cost)||199,
  };
  document.getElementById('pvz-sel-name').textContent=S.selectedPvz.name;
  document.getElementById('pvz-sel-addr').textContent=S.selectedPvz.addr;
  document.getElementById('pvz-selected-info').classList.remove('hidden');
  document.getElementById('modal-pvz').classList.add('hidden');
  updateSummary();showToast('✓ ПВЗ выбран: '+S.selectedPvz.name,'success');
});
document.getElementById('modal-pvz').addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden');});

/* ================================================================
   PAYMENT
================================================================ */
function renderPayment(){
  const prev=document.getElementById('payment-items-preview');prev.innerHTML='';
  const items=cartItemsTotal(),disc=discountAmount(items);
  S.cart.forEach(item=>{const d=document.createElement('div');d.className='pip-row';d.innerHTML=`<span>${escH(item.name)} ×${item.qty}</span><span>${fmt(item.price*item.qty)}</span>`;prev.appendChild(d);});
  if(disc>0){const d=document.createElement('div');d.className='pip-row';d.innerHTML=`<span style="color:var(--green)">Скидка</span><span style="color:var(--green)">−${fmt(disc)}</span>`;prev.appendChild(d);}
  const del=deliveryCost();
  if(del){const d=document.createElement('div');d.className='pip-row';d.innerHTML=`<span>Доставка (${S.selectedPvz?.name||'ПВЗ'})</span><span>${del} ₽</span>`;prev.appendChild(d);}
  document.getElementById('payment-total').textContent=fmt(cartTotal());
  document.getElementById('balance-display').textContent=S.user.balance;
  updatePayBtn();
}
function updatePayBtn(){
  const txt=document.getElementById('btn-pay-text'),warn=document.getElementById('balance-insufficient');
  if(S.payMethod==='balance'){const ok=S.user.balance>=cartTotal();warn.classList.toggle('hidden',ok);txt.textContent=ok?`Оплатить ${fmt(cartTotal())} с баланса`:'Недостаточно средств';}
  else{warn.classList.add('hidden');txt.textContent=`К оплате ${fmt(cartTotal())}`;}
  document.getElementById('robokassa-info-block').classList.toggle('hidden',S.payMethod==='balance');
}
document.querySelectorAll('input[name="paymethod"]').forEach(r=>r.addEventListener('change',()=>{S.payMethod=r.value;updatePayBtn();}));
document.getElementById('btn-back-payment').addEventListener('click',()=>navigate('cart'));
document.getElementById('btn-pay').addEventListener('click',processPayment);
function rkUrl(amount,invId,desc){
  const cfg=S.robokassa;
  if(!cfg.merchantLogin||!cfg.password1){showToast('⚠️ Настройте Robokassa в /admin','error');return null;}
  const sig=md5(`${cfg.merchantLogin}:${amount.toFixed(2)}:${invId}:${cfg.password1}`);
  const p=new URLSearchParams({MerchantLogin:cfg.merchantLogin,OutSum:amount.toFixed(2),InvId:String(invId),Description:desc,SignatureValue:sig});
  if(cfg.testMode)p.set('IsTest','1');
  if(S.payMethod==='robokassa_sbp')p.set('IncCurrLabel','SBER_PAYME');
  return `https://auth.robokassa.ru/Merchant/Index.aspx?${p}`;
}
function processPayment(){
  const total=cartTotal(),invId=Math.floor(Date.now()/1000)%999999+Math.floor(Math.random()*1000);
  if(S.payMethod==='balance'){if(S.user.balance<total){showToast('⚠️ Недостаточно средств','error');return;}S.user.balance-=total;sv.user();finalizeOrder(invId);return;}
  const url=rkUrl(total,invId,`Заказ FixStore #${invId}`);if(!url)return;
  if(tg?.openLink)tg.openLink(url);else window.open(url,'_blank');
  showToast('⏳ После оплаты вернитесь в магазин');
  setTimeout(()=>finalizeOrder(invId),3000);
}
function finalizeOrder(invId){
  const order={
    id:invId,
    items:S.cart.map(i=>({name:i.name,qty:i.qty,price:i.price})),
    total:cartTotal(),
    delivery:S.deliveryMode==='pvz'?(S.selectedPvz?.name||'ПВЗ'):'Личная встреча · Шахты',
    pvzAddr:S.selectedPvz?.addr||'',
    pvzName:S.selectedPvz?.name||'',
    payMethod:S.payMethod,
    status:'pending',
    date:new Date().toLocaleDateString('ru-RU'),
    userId:S.user.id,
    userUsername:S.user.username,
  };
  S.orders.unshift(order);sv.orders();
  S.cart=[];sv.cart();S.promoCode=null;S.promoDiscount=0;S.spinPromo=null;S.selectedPvz=null;
  updateBadges();navigate('success',invId);
}

/* ================================================================
   PROFILE
================================================================ */
function renderProfile(){
  const u=S.user;
  document.getElementById('profile-name').textContent=u.googleName||u.name;
  document.getElementById('profile-username').textContent=u.username?`@${u.username}`:'';
  document.getElementById('profile-balance').textContent=u.balance;
  document.getElementById('balance-display').textContent=u.balance;
  document.getElementById('stat-orders').textContent=S.orders.filter(o=>!o.userId||o.userId===u.id).length;
  document.getElementById('stat-refs').textContent=u.referrals||0;
  document.getElementById('stat-bonus').textContent=(u.bonus||0)+' ₽';
  const photoSrc=u.googlePicture||u.photo_url||null;
  const av=document.getElementById('profile-avatar'),aImg=document.getElementById('profile-avatar-img');
  if(photoSrc){aImg.src=photoSrc;aImg.classList.remove('hidden');av.classList.add('hidden');}
  else{av.textContent=(u.googleName||u.name||'?').charAt(0).toUpperCase();av.classList.remove('hidden');aImg.classList.add('hidden');}
  document.getElementById('google-linked-badge').classList.toggle('hidden',!u.googleLinked);
  document.getElementById('ref-link').value=`https://t.me/FixVetStoreBot?start=ref${u.id}`;
  document.getElementById('admin-access-card').classList.toggle('hidden',!isAdmin());
  /* Daily bonus */
  const today=new Date().toDateString();
  document.getElementById('daily-bonus-card').classList.toggle('hidden',u.lastBonusDate===today);
  renderGoogleSection();renderOrders();
}
document.getElementById('btn-claim-bonus').addEventListener('click',()=>{
  S.user.balance+=10;S.user.bonus=(S.user.bonus||0)+10;S.user.lastBonusDate=new Date().toDateString();sv.user();
  document.getElementById('daily-bonus-card').classList.add('hidden');
  document.getElementById('profile-balance').textContent=S.user.balance;
  showToast('🎁 +10 ₽ начислено!','success');
});
function renderOrders(){
  const list=document.getElementById('orders-list'),empty=document.getElementById('orders-empty');
  const myOrders=S.orders.filter(o=>!o.userId||o.userId===S.user.id);list.innerHTML='';
  if(!myOrders.length){empty.style.display='';return;}empty.style.display='none';
  const scMap={pending:'status-pending',processing:'status-processing',shipped:'status-shipped',done:'status-done'};
  const sLabel={pending:'⏳ Обработка',processing:'🔧 Сборка',shipped:'📬 Отправлен',done:'✅ Выдан'};
  myOrders.slice(0,15).forEach(o=>{const d=document.createElement('div');d.className='order-card';d.innerHTML=`<div class="order-header"><div class="order-id">Заказ #${o.id}</div><span class="order-status ${scMap[o.status]||'status-pending'}">${sLabel[o.status]||'⏳ Обработка'}</span></div><div class="order-info">${o.date} · ${fmt(o.total)} · ${o.pvzName||o.delivery||'—'}</div><button class="btn-reorder" data-oid="${o.id}">🔁 Повторить заказ</button>`;list.appendChild(d);});
  list.querySelectorAll('.btn-reorder').forEach(btn=>btn.addEventListener('click',()=>{
    const o=S.orders.find(x=>String(x.id)===btn.dataset.oid);if(!o)return;
    o.items.forEach(item=>{const p=S.products.find(x=>x.name===item.name);if(p)addToCart(p,item.qty);});
    navigate('cart');showToast('✓ Товары добавлены в корзину','success');
  }));
}
document.getElementById('btn-goto-admin').addEventListener('click',()=>navigate('admin'));
document.getElementById('btn-back-admin').addEventListener('click',()=>navigate('profile'));
document.getElementById('btn-support').addEventListener('click',()=>{
  const tgSupport=(S.settings.supportTg||'@FixVetStoreBot').replace('@','');
  if(tg?.openTelegramLink)tg.openTelegramLink(`https://t.me/${tgSupport}`);else window.open(`https://t.me/${tgSupport}`,'_blank');
});

/* Google Auth */
function renderGoogleSection(){
  const u=S.user;
  document.getElementById('google-unlinked').classList.toggle('hidden',u.googleLinked);
  document.getElementById('google-linked-info').classList.toggle('hidden',!u.googleLinked);
  if(u.googleLinked){document.getElementById('google-email-display').textContent=u.googleEmail||'';document.getElementById('google-link-date').textContent='Привязан '+u.googleLinkDate;}
  if(!u.googleLinked&&S.settings.googleClientId&&window.google?.accounts?.id){
    const wrap=document.getElementById('google-signin-btn-wrap');wrap.innerHTML='';
    try{window.google.accounts.id.initialize({client_id:S.settings.googleClientId,callback:handleGoogleSignIn});window.google.accounts.id.renderButton(wrap,{theme:'outline',size:'large',locale:'ru'});}catch(e){}
  }
}
window.handleGoogleSignIn=function(response){
  try{
    const payload=JSON.parse(atob(response.credential.split('.')[1]));
    S.user.googleEmail=payload.email;S.user.googleName=payload.name;S.user.googlePicture=payload.picture;S.user.googleLinked=true;S.user.googleLinkDate=new Date().toLocaleDateString('ru-RU');
    if(!S.user.name||S.user.name==='Гость')S.user.name=payload.name;
    sv.user();renderProfile();showToast('✓ Google аккаунт привязан','success');
  }catch(e){showToast('Ошибка авторизации Google','error');}
};
document.getElementById('btn-google-manual').addEventListener('click',()=>{
  if(!S.settings.googleClientId){showToast('⚠️ Google Client ID не настроен в /admin','error');return;}
  window.google?.accounts?.id?.prompt()||showToast('Google SDK ещё загружается...','error');
});
document.getElementById('btn-google-unlink').addEventListener('click',()=>{S.user.googleLinked=false;S.user.googleEmail=null;S.user.googleName=null;S.user.googlePicture=null;S.user.googleLinkDate=null;sv.user();renderProfile();showToast('Google отвязан');});

/* Referral */
document.getElementById('btn-copy-ref').addEventListener('click',()=>navigator.clipboard?.writeText(document.getElementById('ref-link').value).then(()=>showToast('✓ Скопировано','success')));
document.getElementById('btn-share-ref').addEventListener('click',()=>{const l=document.getElementById('ref-link').value;if(tg?.openTelegramLink)tg.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(l)}&text=${encodeURIComponent('Заходи в FixStore 🛍 Духи и одежда с доставкой!')}`);else navigator.share?.({title:'FixStore',url:l}).catch(()=>{});});

/* Top-up */
document.getElementById('btn-topup').addEventListener('click',()=>{S.topupAmount=0;document.getElementById('topup-custom').value='';document.querySelectorAll('.topup-amt').forEach(b=>b.classList.remove('selected'));document.getElementById('modal-topup').classList.remove('hidden');});
document.getElementById('btn-topup-cancel').addEventListener('click',()=>document.getElementById('modal-topup').classList.add('hidden'));
document.getElementById('modal-topup').addEventListener('click',function(e){if(e.target===this)this.classList.add('hidden');});
document.querySelectorAll('.topup-amt').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.topup-amt').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');S.topupAmount=+btn.dataset.amt;document.getElementById('topup-custom').value='';});});
document.getElementById('topup-custom').addEventListener('input',function(){S.topupAmount=+this.value||0;document.querySelectorAll('.topup-amt').forEach(b=>b.classList.remove('selected'));});
document.getElementById('btn-topup-confirm').addEventListener('click',()=>{
  const amt=S.topupAmount;if(!amt||amt<50){showToast('⚠️ Минимум 50 ₽','error');return;}
  const invId=Math.floor(Date.now()/1000)%999999;const url=rkUrl(amt,invId,'Пополнение FixStore');if(!url)return;
  document.getElementById('modal-topup').classList.add('hidden');
  if(tg?.openLink)tg.openLink(url);else window.open(url,'_blank');
  showToast('⏳ После оплаты баланс обновится');
  setTimeout(()=>{S.user.balance+=amt;sv.user();document.getElementById('profile-balance').textContent=S.user.balance;showToast(`✓ Баланс +${fmt(amt)}`,'success');},3500);
});

/* ================================================================
   SPIN WHEEL
================================================================ */
function buildSpinWheel(){
  const canvas=document.getElementById('wheel-canvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');const cx=120,cy=120,r=116;
  const total=SPIN_PRIZES.reduce((s,p)=>s+p.weight,0);let start=-Math.PI/2;
  SPIN_PRIZES.forEach(p=>{const slice=(p.weight/total)*Math.PI*2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,start,start+slice);ctx.closePath();ctx.fillStyle=p.color;ctx.fill();ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=1.5;ctx.stroke();ctx.save();ctx.translate(cx,cy);ctx.rotate(start+slice/2);ctx.textAlign='right';ctx.fillStyle='#fff';ctx.font='bold 12px Jost,sans-serif';ctx.fillText(p.label,r-10,5);ctx.restore();start+=slice;});
}
function openSpin(){
  buildSpinWheel();document.getElementById('modal-spin').classList.remove('hidden');
  const today=new Date().toDateString(),used=S.spinUsedDate===today;
  document.getElementById('spin-sub').textContent=used?'Следующий шанс завтра!':'Один бесплатный шанс в день!';
  const btn=document.getElementById('btn-spin');btn.disabled=used;btn.style.opacity=used?'.5':'1';
  btn.textContent=used?'Возвращайтесь завтра!':'Попытать удачу';
  document.getElementById('spin-result').classList.add('hidden');
}
document.getElementById('btn-spin-open').addEventListener('click',openSpin);
document.getElementById('btn-spin').addEventListener('click',()=>{
  const today=new Date().toDateString();if(S.spinUsedDate===today){showToast('Следующий шанс завтра!','error');return;}
  const total=SPIN_PRIZES.reduce((s,p)=>s+p.weight,0);let rnd=Math.random()*total,winIdx=0;
  for(let i=0;i<SPIN_PRIZES.length;i++){rnd-=SPIN_PRIZES[i].weight;if(rnd<=0){winIdx=i;break;}}
  const prize=SPIN_PRIZES[winIdx];
  let angleAcc=0;const totalW=total;
  for(let i=0;i<winIdx;i++)angleAcc+=SPIN_PRIZES[i].weight/totalW*360;
  const sectorAngle=SPIN_PRIZES[winIdx].weight/totalW*360,sectorMid=angleAcc+sectorAngle/2;
  const finalAngle=360*8+(270-sectorMid);
  const canvas=document.getElementById('wheel-canvas');
  canvas.style.transition='transform 5s cubic-bezier(.17,.67,.12,.99)';
  canvas.style.transform=`rotate(${finalAngle}deg)`;
  S.spinUsedDate=today;sv.spin();document.getElementById('btn-spin').disabled=true;document.getElementById('btn-spin').style.opacity='.5';
  setTimeout(()=>{
    canvas.style.transition='none';
    const res=document.getElementById('spin-result');
    if(prize.code){S.spinPromo=prize;res.className='spin-result';res.textContent=`🎉 Скидка ${prize.pct}%! Применена к следующему заказу.`;}
    else{res.className='spin-result bad';res.textContent='😔 Не повезло. Возвращайтесь завтра!';}
    res.classList.remove('hidden');document.getElementById('btn-spin').textContent='Возвращайтесь завтра!';document.getElementById('spin-sub').textContent='Следующий шанс завтра!';
  },5300);
});

/* ================================================================
   QUIZ
================================================================ */
document.getElementById('btn-quiz-open').addEventListener('click',()=>{S.quizStep=0;S.quizAnswers=[];renderQuizStep();document.getElementById('modal-quiz').classList.remove('hidden');});
function renderQuizStep(){
  const body=document.getElementById('quiz-body');if(S.quizStep>=QUIZ_STEPS.length){renderQuizResult();return;}
  const step=QUIZ_STEPS[S.quizStep];
  body.innerHTML=`<div class="quiz-step">Шаг ${S.quizStep+1} из ${QUIZ_STEPS.length}</div><div class="quiz-question">${step.q}</div><div class="quiz-options">${step.opts.map((o,i)=>`<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}</div>`;
  body.querySelectorAll('.quiz-opt').forEach(btn=>{btn.addEventListener('click',()=>{S.quizAnswers.push(+btn.dataset.i);S.quizStep++;renderQuizStep();});});
}
function renderQuizResult(){
  const body=document.getElementById('quiz-body');
  const profiles=['fresh','dark','floral','spicy'],profile=profiles[S.quizAnswers[0]||0];
  const keywords={fresh:['свеж','морск','цитр','бергам'],dark:['уд','сандал','мускус','восточн'],floral:['роза','цветоч','жасмин'],spicy:['пряный','перец','специи']}[profile]||[];
  let recs=S.products.filter(p=>p.cat==='perfume'&&(p.tags||[]).some(t=>keywords.some(k=>t.toLowerCase().includes(k)))).slice(0,3);
  if(!recs.length)recs=S.products.filter(p=>p.cat==='perfume').slice(0,3);
  const names={fresh:'Свежий и лёгкий',dark:'Восточный и таинственный',floral:'Цветочный и романтичный',spicy:'Пряный и дерзкий'};
  body.innerHTML=`<div style="text-align:center;margin-bottom:12px"><div style="font-family:var(--fd);font-size:1.05rem;font-weight:600;color:var(--gold);margin-bottom:5px">Ваш профиль: ${names[profile]||'Универсальный'}</div><div style="font-size:.8rem;color:var(--text2)">Подходящие ароматы:</div></div><div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">${recs.length?recs.map(p=>{const th=p.photos?.[0]||'';return`<div data-pid="${p.id}" style="display:flex;align-items:center;gap:10px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--rs);padding:9px;cursor:pointer">${th?`<img src="${escH(th)}" style="width:44px;height:44px;border-radius:7px;object-fit:cover" onerror="this.style.display='none'"/>`:`<div style="width:44px;height:44px;border-radius:7px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:1.3rem">🌸</div>`}<div><div style="font-size:.85rem;font-weight:600">${escH(p.name)}</div><div style="font-size:.78rem;color:var(--gold)">${fmt(p.price)}</div></div></div>`;}).join(''):'<div style="color:var(--text3);text-align:center;font-size:.82rem">Добавьте ароматы в каталог</div>'}</div><button class="btn-outline full" onclick="document.getElementById('modal-quiz').classList.add('hidden')">Закрыть</button>`;
  body.querySelectorAll('[data-pid]').forEach(row=>{const p=S.products.find(x=>x.id===row.dataset.pid);if(p)row.addEventListener('click',()=>{document.getElementById('modal-quiz').classList.add('hidden');navigate('product',p);});});
}

/* ================================================================
   BADGES & MISC
================================================================ */
function updateBadges(){
  const cc=S.cart.reduce((s,i)=>s+i.qty,0),wc=S.wishlist.length;
  ['cart-badge','nav-cart-badge'].forEach(id=>{const el=document.getElementById(id);if(el){el.textContent=cc||'';el.style.display=cc?'':'none';}});
  ['wishlist-badge','nav-wish-badge'].forEach(id=>{const el=document.getElementById(id);if(el){el.textContent=wc||'';el.style.display=wc?'':'none';}});
}
document.querySelectorAll('.nav-btn').forEach(btn=>{btn.addEventListener('click',()=>navigate(btn.dataset.page));});
document.querySelectorAll('.modal-overlay').forEach(m=>{m.addEventListener('click',function(e){if(e.target===this&&this.id!=='modal-pvz')this.classList.add('hidden');});});

/* ================================================================
   ADMIN PANEL
================================================================ */
function renderAdmin(){
  document.getElementById('admin-products-count').textContent=S.products.length;
  document.getElementById('admin-orders-count').textContent=S.orders.length;
  const revenue=S.orders.reduce((s,o)=>s+o.total,0);
  document.getElementById('admin-revenue').textContent=fmt(revenue);
  document.getElementById('admin-avg-check').textContent=S.orders.length?fmt(revenue/S.orders.length):'0 ₽';
  document.getElementById('admin-prod-count-badge').textContent=S.products.length;
  /* Settings */
  document.getElementById('admin-username').value=S.settings.adminUsername||'fixvet';
  document.getElementById('admin-tg-id').value=S.settings.adminTgId||'';
  document.getElementById('store-support-tg').value=S.settings.supportTg||'@FixVetStoreBot';
  document.getElementById('admin-google-id').value=S.settings.googleClientId||'';
  document.getElementById('bot-token').value=S.botToken||'';
  document.getElementById('free-delivery-threshold').value=S.settings.freeDeliveryThreshold||5000;
  document.getElementById('min-order-amount').value=S.settings.minOrderAmount||0;
  /* RK */
  document.getElementById('rk-login').value=S.robokassa.merchantLogin||'';
  document.getElementById('rk-pass1').value=S.robokassa.password1||'';
  document.getElementById('rk-pass2').value=S.robokassa.password2||'';
  document.getElementById('rk-testmode').checked=S.robokassa.testMode!==false;
  /* Drop */
  if(S.drop){document.getElementById('admin-drop-name').value=S.drop.name||'';}
  initPhotoInputs();renderAdminProducts();renderAdminOrders();renderAdminPromos();renderSetsAdmin();renderPriceDropSelect();
  document.getElementById('admin-cat').dispatchEvent(new Event('change'));
}

/* Collapsibles */
['store','rk','drop','promo','orders','sets','notif','pricedrop'].forEach(k=>{
  const t=document.getElementById(`${k}-toggle`);if(!t)return;
  t.addEventListener('click',()=>{
    const body=document.getElementById(`${k}-body`),caret=document.getElementById(`${k}-caret`);
    body.classList.toggle('open');caret.classList.toggle('open');
  });
});

/* Save settings */
document.getElementById('btn-save-settings').addEventListener('click',()=>{
  S.settings.adminUsername=document.getElementById('admin-username').value.trim().replace('@','');
  S.settings.adminTgId=+document.getElementById('admin-tg-id').value||0;
  S.settings.supportTg=document.getElementById('store-support-tg').value.trim();
  S.settings.googleClientId=document.getElementById('admin-google-id').value.trim();
  S.settings.freeDeliveryThreshold=+document.getElementById('free-delivery-threshold').value||0;
  S.settings.minOrderAmount=+document.getElementById('min-order-amount').value||0;
  S.botToken=document.getElementById('bot-token').value.trim();
  sv.settings();sv.bot();showToast('✓ Настройки сохранены','success');
});

/* Robokassa */
document.getElementById('btn-save-rk').addEventListener('click',()=>{
  S.robokassa={merchantLogin:document.getElementById('rk-login').value.trim(),password1:document.getElementById('rk-pass1').value.trim(),password2:document.getElementById('rk-pass2').value.trim(),testMode:document.getElementById('rk-testmode').checked};
  sv.rk();document.getElementById('rk-saved-ok').classList.remove('hidden');setTimeout(()=>document.getElementById('rk-saved-ok').classList.add('hidden'),2000);showToast('✓ Robokassa сохранена','success');
});

/* Drop */
document.getElementById('btn-save-drop').addEventListener('click',()=>{
  const name=document.getElementById('admin-drop-name').value.trim(),date=document.getElementById('admin-drop-date').value;
  if(!name||!date){showToast('⚠️ Заполните название и дату','error');return;}
  S.drop={name,date};sv.drop();showToast('✓ Дроп запущен!','success');renderDropBanner();
});
document.getElementById('btn-clear-drop').addEventListener('click',()=>{S.drop=null;sv.drop();document.getElementById('drop-banner').classList.add('hidden');showToast('Баннер убран');});

/* Promo codes */
function renderAdminPromos(){
  const el=document.getElementById('promo-list-admin');el.innerHTML='';
  Object.entries(S.promoCodes).forEach(([code,pc])=>{const d=document.createElement('div');d.className='promo-row-admin';const linfo=pc.limit?(' (лимит: '+pc.limit+', исп: '+(pc.used||0)+')'):'(безлимит)';d.innerHTML='<div class="promo-info"><span class="promo-code-tag">'+escH(code)+'</span> <span class="promo-pct-tag">−'+pc.pct+'% '+linfo+'</span></div><button class="btn-danger-sm" data-code="'+escH(code)+'">✕</button>';d.querySelector('.btn-danger-sm').addEventListener('click',()=>{delete S.promoCodes[code];sv.promos();renderAdminPromos();showToast('Промокод удалён');});el.appendChild(d);});
  if(!Object.keys(S.promoCodes).length)el.innerHTML='<div style="color:var(--text3);font-size:.78rem;padding:8px 0">Промокодов пока нет</div>';
}
document.getElementById('btn-add-promo').addEventListener('click',()=>{
  const code=document.getElementById('new-promo-code').value.trim().toUpperCase();
  const pct=+document.getElementById('new-promo-pct').value;
  const limit=+document.getElementById('new-promo-limit').value||0;
  if(!code||!pct||pct<1||pct>80){showToast('⚠️ Укажите код и скидку 1–80%','error');return;}
  S.promoCodes[code]={pct,limit,used:0};sv.promos();renderAdminPromos();
  document.getElementById('new-promo-code').value='';document.getElementById('new-promo-pct').value='';document.getElementById('new-promo-limit').value='';
  showToast(`✓ Промокод ${code} добавлен`,'success');
});

/* Orders admin */
function renderAdminOrders(){
  const el=document.getElementById('admin-orders-list'),empty=document.getElementById('admin-orders-empty');
  let orders=S.orders;
  if(S.adminOrderFilter!=='all')orders=orders.filter(o=>o.status===S.adminOrderFilter);
  el.innerHTML='';
  if(!orders.length){empty.style.display='';return;}empty.style.display='none';
  const statuses=['pending','processing','shipped','done'];
  const sLabel={pending:'⏳ Новый',processing:'🔧 Сборка',shipped:'📬 Отправлен',done:'✅ Выдан'};
  orders.forEach(o=>{const d=document.createElement('div');d.className='admin-order-row';d.innerHTML=`<div class="aor-top"><div class="aor-id">#${o.id} · ${o.date}${o.userUsername?` · @${o.userUsername}`:''}</div><div class="aor-total">${fmt(o.total)}</div></div><div class="aor-info">${(o.items||[]).map(i=>`${i.name} ×${i.qty}`).join(', ')} · ${o.delivery||''} ${o.pvzAddr?`· ${o.pvzAddr}`:''}</div><div class="aor-status-row">${statuses.map(st=>`<button class="status-btn${o.status===st?' active-status':''}" data-oid="${o.id}" data-st="${st}">${sLabel[st]}</button>`).join('')}</div>`;el.appendChild(d);});
  el.querySelectorAll('.status-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const o=S.orders.find(x=>String(x.id)===btn.dataset.oid);if(!o)return;
    o.status=btn.dataset.st;sv.orders();renderAdminOrders();renderOrders();showToast(`✓ Статус: ${btn.textContent}`,'success');
  }));
}
document.querySelectorAll('[data-ofilter]').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('[data-ofilter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');S.adminOrderFilter=btn.dataset.ofilter;renderAdminOrders();});});

/* Export CSV */
document.getElementById('btn-export-csv').addEventListener('click',()=>{
  const rows=[['ID','Дата','Статус','Сумма','Доставка','Товары','Пользователь']];
  S.orders.forEach(o=>rows.push([o.id,o.date,o.status,o.total,o.delivery||'',(o.items||[]).map(i=>`${i.name}x${i.qty}`).join('; '),o.userUsername||o.userId||'']));
  const csv=rows.map(r=>r.map(c=>`"${String(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`fixstore-orders-${new Date().toISOString().slice(0,10)}.csv`;a.click();URL.revokeObjectURL(url);
  showToast('✓ CSV скачан','success');
});

/* Sets / Bundles */
function renderSetsAdmin(){
  const el=document.getElementById('sets-list-admin');el.innerHTML='';
  if(!S.sets.length){el.innerHTML='<div style="color:var(--text3);font-size:.78rem;padding:8px 0">Наборов пока нет</div>';return;}
  S.sets.forEach(set=>{const d=document.createElement('div');d.className='admin-product-row';d.innerHTML=`<div class="ap-info"><div class="ap-name">${escH(set.name)}</div><div class="ap-sub">${fmt(set.price)} · ${(set.productIds||[]).length} товаров</div></div><button class="ap-delete" data-sid="${set.id}">🗑</button>`;d.querySelector('.ap-delete').addEventListener('click',()=>{S.sets=S.sets.filter(s=>s.id!==set.id);sv.sets();renderSetsAdmin();renderMiniSections?.();showToast('Набор удалён');});el.appendChild(d);});
}
document.getElementById('btn-add-set').addEventListener('click',()=>{
  const name=document.getElementById('set-name').value.trim();
  const productIds=document.getElementById('set-products').value.split(',').map(s=>s.trim()).filter(Boolean);
  const price=+document.getElementById('set-price').value;
  const photo=document.getElementById('set-photo').value.trim();
  if(!name||!price){showToast('⚠️ Укажите название и цену','error');return;}
  const items=S.products.filter(p=>productIds.includes(p.id));
  const origPrice=items.reduce((s,p)=>s+p.price,0)||Math.round(price*1.2);
  S.sets.push({id:'set'+Date.now(),name,productIds,price,originalPrice:origPrice,photo});sv.sets();
  document.getElementById('set-name').value='';document.getElementById('set-products').value='';document.getElementById('set-price').value='';document.getElementById('set-photo').value='';
  renderSetsAdmin();showToast('✓ Набор создан','success');
});

/* Price drop */
function renderPriceDropSelect(){
  const sel=document.getElementById('pricedrop-product');sel.innerHTML='';
  S.products.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=`${p.name} (${fmt(p.price)})`;sel.appendChild(o);});
}
document.getElementById('btn-apply-pricedrop').addEventListener('click',()=>{
  const pid=document.getElementById('pricedrop-product').value;
  const newPrice=+document.getElementById('pricedrop-new-price').value;
  if(!pid||!newPrice||newPrice<1){showToast('⚠️ Выберите товар и укажите цену','error');return;}
  const p=S.products.find(x=>x.id===pid);if(!p)return;
  const oldPrice=p.price;p.oldPrice=oldPrice;p.price=newPrice;sv.products();
  const res=document.getElementById('pricedrop-result');
  res.textContent=`✓ Цена на «${p.name}» снижена с ${fmt(oldPrice)} до ${fmt(newPrice)}. Покупатели из вишлиста увидят снижение.`;
  res.classList.remove('hidden');renderPriceDropSelect();renderAdminProducts();showToast(`✓ Цена снижена: ${fmt(oldPrice)} → ${fmt(newPrice)}`,'success');
});

/* Notifications */
const notifTemplates={new_drop:'🔥 Новый дроп в FixStore! Не пропустите — ограниченная партия. Заходите прямо сейчас!',sale:'💰 Горячие скидки в FixStore! Только сегодня — снижение цен на популярные позиции. Успейте!',order_shipped:'📦 Ваш заказ отправлен! Ожидайте в ближайшие дни. Спасибо за покупку в FixStore!'};
document.getElementById('notif-template').addEventListener('change',function(){if(notifTemplates[this.value])document.getElementById('notif-text').value=notifTemplates[this.value];});
document.getElementById('btn-copy-notif').addEventListener('click',()=>{const txt=document.getElementById('notif-text').value.trim();if(!txt){showToast('⚠️ Введите текст','error');return;}navigator.clipboard?.writeText(txt).then(()=>showToast('✓ Текст скопирован','success'));});

/* Admin search products */
document.getElementById('admin-search-products').addEventListener('input',function(){renderAdminProducts(this.value.toLowerCase());});

/* Product form */
function initPhotoInputs(){
  const list=document.getElementById('photo-inputs-list');list.innerHTML='';addPhotoInput();
}
function addPhotoInput(){
  const list=document.getElementById('photo-inputs-list');
  if(list.children.length>=8){showToast('⚠️ Максимум 8 фото','error');return;}
  const row=document.createElement('div');row.className='photo-input-row';
  const inp=document.createElement('input');inp.type='text';inp.placeholder=`Фото ${list.children.length+1}: https://...`;
  inp.addEventListener('input',updatePhotoPreview);
  const rm=document.createElement('button');rm.className='btn-rm-photo';rm.textContent='✕';rm.type='button';
  rm.addEventListener('click',()=>{row.remove();updatePhotoPreview();});
  row.appendChild(inp);row.appendChild(rm);list.appendChild(row);
}
document.getElementById('btn-add-photo-input').addEventListener('click',addPhotoInput);
function updatePhotoPreview(){
  const grid=document.getElementById('photos-preview-grid');grid.innerHTML='';
  document.querySelectorAll('.photo-input-row input').forEach((inp,i)=>{if(!inp.value.trim())return;const div=document.createElement('div');div.className='preview-thumb'+(i===0?' main':'');div.innerHTML=`<img src="${escH(inp.value.trim())}" onerror="this.parentElement.style.display='none'"/>`;grid.appendChild(div);});
}
document.getElementById('admin-cat').addEventListener('change',function(){
  document.getElementById('admin-notes-block').style.display=this.value==='perfume'?'':'none';
  document.getElementById('admin-sizes-block').classList.toggle('hidden',this.value!=='clothes');
});

/* Add/Edit product */
document.getElementById('btn-admin-add').addEventListener('click',()=>{
  const name=document.getElementById('admin-name').value.trim();
  const price=+document.getElementById('admin-price').value;
  const cat=document.getElementById('admin-cat').value;
  if(!name||!price){showToast('⚠️ Укажите название и цену','error');return;}
  const photos=Array.from(document.querySelectorAll('.photo-input-row input')).map(i=>i.value.trim()).filter(Boolean);
  const editId=document.getElementById('edit-product-id').value;
  const product={
    id:editId||'p'+Date.now(),cat,name,price,
    oldPrice:+document.getElementById('admin-old-price').value||null,
    stock:document.getElementById('admin-stock').value!==''?+document.getElementById('admin-stock').value:null,
    sold:+document.getElementById('admin-sold').value||0,
    desc:document.getElementById('admin-desc').value.trim(),
    tags:document.getElementById('admin-tags').value.split(',').map(t=>t.trim()).filter(Boolean),
    badges:{new:document.getElementById('badge-new').checked,hit:document.getElementById('badge-hit').checked,original:document.getElementById('badge-orig').checked,last:document.getElementById('badge-last').checked},
    topNotes:document.getElementById('admin-top-notes').value.trim(),
    midNotes:document.getElementById('admin-mid-notes').value.trim(),
    baseNotes:document.getElementById('admin-base-notes').value.trim(),
    sizes:document.getElementById('admin-sizes').value.split(',').map(s=>s.trim()).filter(Boolean),
    photos,
    createdAt:editId?(S.products.find(p=>p.id===editId)?.createdAt||Date.now()):Date.now(),
  };
  if(editId){const idx=S.products.findIndex(p=>p.id===editId);if(idx>=0)S.products[idx]=product;}
  else S.products.unshift(product);
  sv.products();renderAdminProducts();renderProducts();renderMiniSections();
  clearProductForm();showToast(editId?'✓ Товар обновлён':'✓ Товар добавлен','success');
});
document.getElementById('btn-admin-cancel-edit').addEventListener('click',clearProductForm);
function clearProductForm(){
  document.getElementById('edit-product-id').value='';
  document.getElementById('admin-name').value='';document.getElementById('admin-price').value='';document.getElementById('admin-old-price').value='';
  document.getElementById('admin-stock').value='';document.getElementById('admin-sold').value='';document.getElementById('admin-desc').value='';
  document.getElementById('admin-tags').value='';document.getElementById('admin-top-notes').value='';document.getElementById('admin-mid-notes').value='';
  document.getElementById('admin-base-notes').value='';document.getElementById('admin-sizes').value='';
  document.getElementById('badge-new').checked=false;document.getElementById('badge-hit').checked=false;
  document.getElementById('badge-orig').checked=false;document.getElementById('badge-last').checked=false;
  document.getElementById('btn-admin-add').textContent='Добавить товар';document.getElementById('admin-cat').value='perfume';
  document.getElementById('btn-admin-cancel-edit').style.display='none';
  initPhotoInputs();updatePhotoPreview();
  document.getElementById('product-form-title').textContent='➕ Добавить товар';
}
function loadProductIntoForm(p){
  document.getElementById('edit-product-id').value=p.id;
  document.getElementById('admin-name').value=p.name||'';document.getElementById('admin-cat').value=p.cat||'perfume';
  document.getElementById('admin-price').value=p.price||'';document.getElementById('admin-old-price').value=p.oldPrice||'';
  document.getElementById('admin-stock').value=p.stock??'';document.getElementById('admin-sold').value=p.sold||0;
  document.getElementById('admin-desc').value=p.desc||'';document.getElementById('admin-tags').value=(p.tags||[]).join(', ');
  document.getElementById('badge-new').checked=!!p.badges?.new;document.getElementById('badge-hit').checked=!!p.badges?.hit;
  document.getElementById('badge-orig').checked=!!p.badges?.original;document.getElementById('badge-last').checked=!!p.badges?.last;
  document.getElementById('admin-top-notes').value=p.topNotes||'';document.getElementById('admin-mid-notes').value=p.midNotes||'';
  document.getElementById('admin-base-notes').value=p.baseNotes||'';document.getElementById('admin-sizes').value=(p.sizes||[]).join(', ');
  /* Photos */
  const list=document.getElementById('photo-inputs-list');list.innerHTML='';
  (p.photos||['']).forEach(src=>{const row=document.createElement('div');row.className='photo-input-row';const inp=document.createElement('input');inp.type='text';inp.value=src;inp.addEventListener('input',updatePhotoPreview);const rm=document.createElement('button');rm.className='btn-rm-photo';rm.textContent='✕';rm.type='button';rm.addEventListener('click',()=>{row.remove();updatePhotoPreview();});row.appendChild(inp);row.appendChild(rm);list.appendChild(row);});
  if(!p.photos?.length)addPhotoInput();
  updatePhotoPreview();
  document.getElementById('btn-admin-add').textContent='Сохранить изменения';
  document.getElementById('btn-admin-cancel-edit').style.display='';
  document.getElementById('product-form-title').textContent='✏️ Редактировать товар';
  document.getElementById('admin-cat').dispatchEvent(new Event('change'));
  document.getElementById('product-form-card').scrollIntoView({behavior:'smooth'});
}

function renderAdminProducts(query=''){
  const el=document.getElementById('admin-products-list'),empty=document.getElementById('admin-no-products');
  let list=S.products;if(query)list=list.filter(p=>p.name.toLowerCase().includes(query));
  el.innerHTML='';
  if(!list.length){empty.style.display='';return;}empty.style.display='none';
  list.forEach(p=>{
    const th=p.photos?.[0]||'';
    const d=document.createElement('div');d.className='admin-product-row';
    const imgHtml=th?('<img class="ap-img" src="'+escH(th)+'" onerror="this.style.display=\'none\'"/>'):('<div class="ap-img" style="display:flex;align-items:center;justify-content:center;font-size:1.1rem">'+(p.cat==='perfume'?'🌸':'👔')+'</div>');
    const stockInfo=p.stock!=null?(p.stock>0?' · '+p.stock+' шт.':' · ❌ нет'):'';
    d.innerHTML=imgHtml+'<div class="ap-info"><div class="ap-name">'+escH(p.name)+'</div><div class="ap-sub">ID: '+p.id+' · '+fmt(p.price)+stockInfo+'</div></div><div class="ap-actions"><button class="ap-edit" data-id="'+p.id+'" title="Редактировать">✏️</button><button class="ap-delete" data-id="'+p.id+'" title="Удалить">🗑</button></div>';
    d.querySelector('.ap-edit').addEventListener('click',()=>loadProductIntoForm(p));
    d.querySelector('.ap-delete').addEventListener('click',()=>{if(!confirm('Удалить «'+p.name+'»?'))return;S.products=S.products.filter(x=>x.id!==p.id);sv.products();renderAdminProducts(query);renderProducts();document.getElementById('admin-products-count').textContent=S.products.length;document.getElementById('admin-prod-count-badge').textContent=S.products.length;showToast('Товар удалён');});
    el.appendChild(d);
  });
}

/* ================================================================
   INIT
================================================================ */
function init(){
  loadState();
  /* Splash */
  setTimeout(()=>{
    const splash=document.getElementById('splash');
    splash.classList.add('fade-out');
    setTimeout(()=>{splash.style.display='none';document.getElementById('app').classList.remove('hidden');navigate('home');},500);
  },1600);
}
init();
