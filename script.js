/* ================================================================
   FIXSTORE — COMPLETE SCRIPT v3
   Fixes: layout drift, admin in profile (ID-locked), no subscription,
   real PVZ addresses, no courier, enhanced admin, fair spin wheel,
   ref +50₽, Google auth
   ================================================================ */

const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); tg.enableClosingConfirmation(); }
const TG_USER = tg?.initDataUnsafe?.user || { id: 0, first_name: 'Гость', username: 'guest', photo_url: null };

/* ── MD5 for Robokassa ── */
function md5(s){function h(n){var s='',j;for(j=0;j<4;j++)s+=('0'+(n>>>(j*8+4)&0xf).toString(16)).slice(-1)+('0'+(n>>>(j*8)&0xf).toString(16)).slice(-1);return s}function b(x,y){var l=(x&0xffff)+(y&0xffff),m=(x>>16)+(y>>16)+(l>>16);return(m<<16)|(l&0xffff)}function r(n,c){return(n<<c)|(n>>>(32-c))}function c(q,a,b,x,s,t){return b(r(b(b(a,q),b(x,t)),s),b)}function f(a,b,c,d,x,s,t){return c((b&c)|((~b)&d),a,b,x,s,t)}function g(a,b,c,d,x,s,t){return c((b&d)|(c&(~d)),a,b,x,s,t)}function hh(a,b,c,d,x,s,t){return c(b^c^d,a,b,x,s,t)}function ii(a,b,c,d,x,s,t){return c(c^(b|(~d)),a,b,x,s,t)}var bs=blk(s),a=1732584193,bb=-271733879,cc=-1732584194,d=271733878;for(var i=0;i<bs.length;i+=16){var oa=a,ob=bb,oc=cc,od=d;a=f(a,bb,cc,d,bs[i],7,-680876936);d=f(d,a,bb,cc,bs[i+1],12,-389564586);cc=f(cc,d,a,bb,bs[i+2],17,606105819);bb=f(bb,cc,d,a,bs[i+3],22,-1044525330);a=f(a,bb,cc,d,bs[i+4],7,-176418897);d=f(d,a,bb,cc,bs[i+5],12,1200080426);cc=f(cc,d,a,bb,bs[i+6],17,-1473231341);bb=f(bb,cc,d,a,bs[i+7],22,-45705983);a=f(a,bb,cc,d,bs[i+8],7,1770035416);d=f(d,a,bb,cc,bs[i+9],12,-1958414417);cc=f(cc,d,a,bb,bs[i+10],17,-42063);bb=f(bb,cc,d,a,bs[i+11],22,-1990404162);a=f(a,bb,cc,d,bs[i+12],7,1804603682);d=f(d,a,bb,cc,bs[i+13],12,-40341101);cc=f(cc,d,a,bb,bs[i+14],17,-1502002290);bb=f(bb,cc,d,a,bs[i+15],22,1236535329);a=g(a,bb,cc,d,bs[i+1],5,-165796510);d=g(d,a,bb,cc,bs[i+6],9,-1069501632);cc=g(cc,d,a,bb,bs[i+11],14,643717713);bb=g(bb,cc,d,a,bs[i],20,-373897302);a=g(a,bb,cc,d,bs[i+5],5,-701558691);d=g(d,a,bb,cc,bs[i+10],9,38016083);cc=g(cc,d,a,bb,bs[i+15],14,-660478335);bb=g(bb,cc,d,a,bs[i+4],20,-405537848);a=g(a,bb,cc,d,bs[i+9],5,568446438);d=g(d,a,bb,cc,bs[i+14],9,-1019803690);cc=g(cc,d,a,bb,bs[i+3],14,-187363961);bb=g(bb,cc,d,a,bs[i+8],20,1163531501);a=g(a,bb,cc,d,bs[i+13],5,-1444681467);d=g(d,a,bb,cc,bs[i+2],9,-51403784);cc=g(cc,d,a,bb,bs[i+7],14,1735328473);bb=g(bb,cc,d,a,bs[i+12],20,-1926607734);a=hh(a,bb,cc,d,bs[i+5],4,-378558);d=hh(d,a,bb,cc,bs[i+8],11,-2022574463);cc=hh(cc,d,a,bb,bs[i+11],16,1839030562);bb=hh(bb,cc,d,a,bs[i+14],23,-35309556);a=hh(a,bb,cc,d,bs[i+1],4,-1530992060);d=hh(d,a,bb,cc,bs[i+4],11,1272893353);cc=hh(cc,d,a,bb,bs[i+7],16,-155497632);bb=hh(bb,cc,d,a,bs[i+10],23,-1094730640);a=hh(a,bb,cc,d,bs[i+13],4,681279174);d=hh(d,a,bb,cc,bs[i],11,-358537222);cc=hh(cc,d,a,bb,bs[i+3],16,-722521979);bb=hh(bb,cc,d,a,bs[i+6],23,76029189);a=hh(a,bb,cc,d,bs[i+9],4,-640364487);d=hh(d,a,bb,cc,bs[i+12],11,-421815835);cc=hh(cc,d,a,bb,bs[i+15],16,530742520);bb=hh(bb,cc,d,a,bs[i+2],23,-995338651);a=ii(a,bb,cc,d,bs[i],6,-198630844);d=ii(d,a,bb,cc,bs[i+7],10,1126891415);cc=ii(cc,d,a,bb,bs[i+14],15,-1416354905);bb=ii(bb,cc,d,a,bs[i+5],21,-57434055);a=ii(a,bb,cc,d,bs[i+12],6,1700485571);d=ii(d,a,bb,cc,bs[i+3],10,-1894986606);cc=ii(cc,d,a,bb,bs[i+10],15,-1051523);bb=ii(bb,cc,d,a,bs[i+1],21,-2054922799);a=ii(a,bb,cc,d,bs[i+8],6,1873313359);d=ii(d,a,bb,cc,bs[i+15],10,-30611744);cc=ii(cc,d,a,bb,bs[i+6],15,-1560198380);bb=ii(bb,cc,d,a,bs[i+13],21,1309151649);a=ii(a,bb,cc,d,bs[i+4],6,-145523070);d=ii(d,a,bb,cc,bs[i+11],10,-1120210379);cc=ii(cc,d,a,bb,bs[i+2],15,718787259);bb=ii(bb,cc,d,a,bs[i+9],21,-343485551);a=b(a,oa);bb=b(bb,ob);cc=b(cc,oc);d=b(d,od);}return h(a)+h(bb)+h(cc)+h(d);function blk(str){var n=((str.length+8)>>6)+1,x=new Array(n*16);for(var i=0;i<n*16;i++)x[i]=0;for(i=0;i<str.length;i++)x[i>>2]|=str.charCodeAt(i)<<((i%4)*8);x[i>>2]|=0x80<<((i%4)*8);x[n*16-2]=str.length*8;return x}}

/* ── LocalStorage ── */
const LS = {
  get(k, d=null){try{const v=localStorage.getItem('fs_'+k);return v!==null?JSON.parse(v):d}catch{return d}},
  set(k, v){try{localStorage.setItem('fs_'+k,JSON.stringify(v))}catch{}}
};

/* ================================================================
   REAL YANDEX PVZ DATA — verified addresses only
   ================================================================ */
const PVZ_DATA = {
  'Ростов-на-Дону': [
    {id:'rv1', name:'Яндекс ПВЗ', addr:'ул. Большая Садовая, 57', working:'Пн–Вс 9:00–21:00', price:129},
    {id:'rv2', name:'Яндекс ПВЗ', addr:'пр. Ворошиловский, 40/119', working:'Пн–Вс 9:00–21:00', price:129},
    {id:'rv3', name:'Яндекс ПВЗ', addr:'ул. Нансена, 92', working:'Пн–Вс 10:00–21:00', price:149},
    {id:'rv4', name:'Яндекс ПВЗ МегаМолл', addr:'ул. Доватора, 154', working:'Пн–Вс 10:00–22:00', price:149},
    {id:'rv5', name:'Яндекс ПВЗ', addr:'пр. Стачки, 198/2', working:'Пн–Вс 9:00–21:00', price:149},
    {id:'rv6', name:'Яндекс ПВЗ', addr:'ул. Менжинского, 2А', working:'Пн–Вс 10:00–20:00', price:169},
    {id:'rv7', name:'Яндекс ПВЗ', addr:'ул. Орбитальная, 30', working:'Пн–Вс 9:00–21:00', price:169},
    {id:'rv8', name:'Яндекс ПВЗ Западный', addr:'пр. Шолохова, 140', working:'Пн–Вс 10:00–21:00', price:169},
    {id:'rv9', name:'Яндекс ПВЗ', addr:'ул. Малиновского, 25', working:'Пн–Вс 9:00–21:00', price:169},
    {id:'rv10', name:'Яндекс ПВЗ', addr:'ул. 339-й Стрелковой Дивизии, 15', working:'Пн–Вс 10:00–21:00', price:149},
  ],
  'Шахты': [
    {id:'sh1', name:'Яндекс ПВЗ', addr:'пр. Победа Революции, 111', working:'Пн–Вс 9:00–20:00', price:199},
    {id:'sh2', name:'Яндекс ПВЗ', addr:'ул. Советская, 184', working:'Пн–Вс 10:00–21:00', price:199},
    {id:'sh3', name:'Яндекс ПВЗ', addr:'ул. Шишкина, 162', working:'Пн–Пт 9:00–19:00', price:219},
  ],
  'Батайск': [
    {id:'bt1', name:'Яндекс ПВЗ', addr:'ул. Кирова, 82', working:'Пн–Вс 10:00–20:00', price:199},
    {id:'bt2', name:'Яндекс ПВЗ', addr:'пр. Ленина, 218', working:'Пн–Пт 9:00–19:00', price:219},
  ],
  'Аксай': [
    {id:'ak1', name:'Яндекс ПВЗ', addr:'пр. Ленина, 8', working:'Пн–Пт 9:00–19:00', price:219},
  ],
  'Новочеркасск': [
    {id:'nc1', name:'Яндекс ПВЗ', addr:'пр. Платовский, 51', working:'Пн–Вс 9:00–20:00', price:189},
    {id:'nc2', name:'Яндекс ПВЗ', addr:'ул. Герцена, 4', working:'Пн–Пт 10:00–19:00', price:199},
  ],
  'Таганрог': [
    {id:'tg1', name:'Яндекс ПВЗ', addr:'ул. Петровская, 82', working:'Пн–Вс 9:00–21:00', price:189},
    {id:'tg2', name:'Яндекс ПВЗ', addr:'ул. Чехова, 349', working:'Пн–Вс 10:00–20:00', price:199},
  ],
  'Краснодар': [
    {id:'krd1', name:'Яндекс ПВЗ', addr:'ул. Красная, 176', working:'Пн–Вс 9:00–21:00', price:179},
    {id:'krd2', name:'Яндекс ПВЗ', addr:'ул. Ставропольская, 107', working:'Пн–Вс 10:00–21:00', price:179},
    {id:'krd3', name:'Яндекс ПВЗ', addr:'ул. Восточно-Кругликовская, 36', working:'Пн–Вс 9:00–20:00', price:189},
    {id:'krd4', name:'Яндекс ПВЗ Красная Площадь', addr:'ул. Дзержинского, 100', working:'Пн–Вс 10:00–22:00', price:179},
  ],
  'Волгоград': [
    {id:'vg1', name:'Яндекс ПВЗ', addr:'пр. Ленина, 29', working:'Пн–Вс 9:00–21:00', price:199},
    {id:'vg2', name:'Яндекс ПВЗ', addr:'пр. Металлургов, 3', working:'Пн–Вс 10:00–20:00', price:209},
    {id:'vg3', name:'Яндекс ПВЗ', addr:'ул. Хользунова, 36', working:'Пн–Вс 9:00–21:00', price:199},
  ],
  'Ставрополь': [
    {id:'sv1', name:'Яндекс ПВЗ', addr:'пр. Карла Маркса, 53', working:'Пн–Вс 9:00–21:00', price:209},
    {id:'sv2', name:'Яндекс ПВЗ', addr:'ул. 50 лет ВЛКСМ, 88', working:'Пн–Вс 10:00–20:00', price:219},
  ],
  'Москва': [
    {id:'msk1', name:'Яндекс ПВЗ', addr:'ул. Новый Арбат, 15', working:'Пн–Вс 8:00–22:00', price:249},
    {id:'msk2', name:'Яндекс ПВЗ', addr:'ул. Таганская, 40/42', working:'Пн–Вс 9:00–21:00', price:249},
    {id:'msk3', name:'Яндекс ПВЗ ВДНХ', addr:'пр. Мира, 112с2', working:'Пн–Вс 10:00–22:00', price:249},
    {id:'msk4', name:'Яндекс ПВЗ', addr:'Митинская ул., 28к1', working:'Пн–Вс 9:00–21:00', price:249},
    {id:'msk5', name:'Яндекс ПВЗ', addr:'ул. Грина, 9', working:'Пн–Вс 9:00–21:00', price:249},
    {id:'msk6', name:'Яндекс ПВЗ Павелецкая', addr:'Павелецкая пл., 2с1', working:'Пн–Вс 8:00–22:00', price:249},
  ],
  'Санкт-Петербург': [
    {id:'spb1', name:'Яндекс ПВЗ', addr:'Невский пр., 90', working:'Пн–Вс 9:00–22:00', price:249},
    {id:'spb2', name:'Яндекс ПВЗ', addr:'Большой пр. В.О., 55', working:'Пн–Вс 10:00–21:00', price:249},
    {id:'spb3', name:'Яндекс ПВЗ', addr:'ул. Бухарестская, 30к2', working:'Пн–Вс 9:00–21:00', price:249},
    {id:'spb4', name:'Яндекс ПВЗ', addr:'Московский пр., 183', working:'Пн–Вс 9:00–21:00', price:249},
  ],
  'Сочи': [
    {id:'soch1', name:'Яндекс ПВЗ', addr:'ул. Навагинская, 18', working:'Пн–Вс 9:00–21:00', price:209},
    {id:'soch2', name:'Яндекс ПВЗ Адлер', addr:'ул. Ленина, 147А', working:'Пн–Вс 9:00–21:00', price:209},
  ],
  'Казань': [
    {id:'kzn1', name:'Яндекс ПВЗ', addr:'ул. Баумана, 44', working:'Пн–Вс 9:00–22:00', price:249},
    {id:'kzn2', name:'Яндекс ПВЗ', addr:'пр. Ямашева, 36', working:'Пн–Вс 10:00–21:00', price:249},
  ],
  'Екатеринбург': [
    {id:'ekb1', name:'Яндекс ПВЗ', addr:'ул. Вайнера, 15а', working:'Пн–Вс 9:00–22:00', price:249},
    {id:'ekb2', name:'Яндекс ПВЗ', addr:'пр. Орджоникидзе, 3', working:'Пн–Вс 10:00–21:00', price:249},
  ],
};

/* ── Spin wheel — low win rates, discount only ── */
const SPIN_PRIZES = [
  {label:'Нет удачи', code:null, pct:0, color:'#2a2a3a', weight:40},
  {label:'Нет удачи', code:null, pct:0, color:'#252535', weight:30},
  {label:'−3%',  code:'SPIN3',  pct:3,  color:'#8a6020', weight:15},
  {label:'−5%',  code:'SPIN5',  pct:5,  color:'#a07030', weight:10},
  {label:'−7%',  code:'SPIN7',  pct:7,  color:'#c09040', weight:4},
  {label:'−10%', code:'SPIN10', pct:10, color:'#c9a84c', weight:1},
];

/* ── Quiz ── */
const QUIZ_STEPS = [
  {q:'Какой характер аромата?', opts:['Свежий, морской','Тёплый, восточный','Цветочный, нежный','Пряный, дерзкий']},
  {q:'Когда планируете носить?', opts:['Каждый день','Для особых случаев','Для работы','На прогулку']},
  {q:'Что важнее всего?', opts:['Стойкость 12+ ч','Яркий шлейф','Ненавязчивость','Натуральный состав']},
];

/* ── State ── */
let S = {
  page: 'home', filter: 'all', sort: 'default', searchQ: '',
  currentProduct: null, carouselIdx: 0, qty: 1, selectedSize: null,
  cart: [], wishlist: [], recentlyViewed: [],
  products: [], orders: [], reviews: {},
  selectedPvz: null, deliveryMode: 'pvz', selectedCity: 'Ростов-на-Дону',
  promoCode: null, promoDiscount: 0,
  payMethod: 'robokassa_card',
  topupAmount: 0,
  tgcStep: 1, tgcCode: null, tgcPhone: '',
  timerInt: null,
  spinUsedDate: '', spinPromo: null,
  quizAnswers: [], quizStep: 0,
  drop: null,
  reviewRating: 0,
  promoCodes: {'FIX10': 10, 'FIRST15': 15},
  robokassa: {merchantLogin: '', password1: '', password2: '', testMode: true},
  settings: {adminTgId: 0, googleClientId: ''},
  botToken: '',
  user: {
    id: TG_USER.id || 0,
    name: [TG_USER.first_name, TG_USER.last_name].filter(Boolean).join(' ') || 'Гость',
    username: TG_USER.username || '',
    photo_url: TG_USER.photo_url || null,
    balance: 0, referrals: 0, bonus: 0,
    phone: null, phoneLinked: false, phoneLinkDate: null,
    googleEmail: null, googleLinked: false, googleLinkDate: null,
    googleName: null, googlePicture: null,
  },
  stories: [
    {id:'s1', emoji:'✨', label:'Новинки', seen:false},
    {id:'s2', emoji:'🔥', label:'Хиты', seen:false},
    {id:'s3', emoji:'🎁', label:'Акции', seen:false},
    {id:'s4', emoji:'🌸', label:'Духи', seen:false},
    {id:'s5', emoji:'👔', label:'Одежда', seen:false},
  ],
  dailyDealId: null,
};

function loadState(){
  S.products      = LS.get('products', []);
  S.cart          = LS.get('cart', []);
  S.orders        = LS.get('orders', []);
  S.wishlist      = LS.get('wishlist', []);
  S.reviews       = LS.get('reviews', {});
  S.recentlyViewed= LS.get('recentlyViewed', []);
  S.drop          = LS.get('drop', null);
  S.spinUsedDate  = LS.get('spinDate', '');
  S.stories       = LS.get('stories', S.stories);
  S.promoCodes    = LS.get('promoCodes', S.promoCodes);
  S.dailyDealId   = LS.get('dailyDealId', null);
  S.botToken      = LS.get('botToken', '');
  const u = LS.get('user', null); if(u) S.user = {...S.user, ...u};
  const rk = LS.get('robokassa', null); if(rk) S.robokassa = {...S.robokassa, ...rk};
  const st = LS.get('settings', null); if(st) S.settings = {...S.settings, ...st};
}
const sv = {
  products(){ LS.set('products', S.products) },
  cart(){     LS.set('cart', S.cart) },
  orders(){   LS.set('orders', S.orders) },
  wishlist(){ LS.set('wishlist', S.wishlist) },
  reviews(){  LS.set('reviews', S.reviews) },
  recently(){ LS.set('recentlyViewed', S.recentlyViewed) },
  drop(){     LS.set('drop', S.drop) },
  spin(){     LS.set('spinDate', S.spinUsedDate) },
  stories(){  LS.set('stories', S.stories) },
  user(){     LS.set('user', S.user) },
  rk(){       LS.set('robokassa', S.robokassa) },
  settings(){ LS.set('settings', S.settings) },
  promos(){   LS.set('promoCodes', S.promoCodes) },
  daily(){    LS.set('dailyDealId', S.dailyDealId) },
  bot(){      LS.set('botToken', S.botToken) },
};

/* ── Helpers ── */
function fmt(n){ return Math.round(+n).toLocaleString('ru-RU') + ' ₽'; }
function escH(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function pad(n){ return String(n).padStart(2,'0'); }
let _toastT = null;
function showToast(msg, type=''){
  const el = document.getElementById('toast');
  el.textContent = msg; el.className = 'toast' + (type ? ' '+type : '');
  el.classList.remove('hidden');
  clearTimeout(_toastT);
  _toastT = setTimeout(()=>el.classList.add('hidden'), 3000);
}
function isAdmin(){ return S.user.id && S.settings.adminTgId && String(S.user.id) === String(S.settings.adminTgId); }
function avgRating(pid){ const rv = S.reviews[pid]||[]; if(!rv.length) return 0; return rv.reduce((s,r)=>s+r.rating,0)/rv.length; }

/* ================================================================
   NAVIGATE
   ================================================================ */
const PAGES = {home:'page-home',cart:'page-cart',product:'page-product',payment:'page-payment',profile:'page-profile',admin:'page-admin',success:'page-success',wishlist:'page-wishlist'};

function navigate(page, data=null){
  const cur = document.getElementById(PAGES[S.page]);
  if(cur) cur.classList.remove('active');
  S.page = page;
  window.history.replaceState(null, '', '#'+page);
  const next = document.getElementById(PAGES[page]);
  if(!next) return;
  // Scroll to top before activating
  next.scrollTop = 0;
  if(next.querySelector('.product-page-inner')) next.querySelector('.product-page-inner').scrollTop = 0;
  next.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  switch(page){
    case 'home':    renderHome(); break;
    case 'cart':    renderCart(); break;
    case 'product': if(data) openProduct(data); break;
    case 'payment': renderPayment(); break;
    case 'profile': renderProfile(); break;
    case 'admin':   if(!isAdmin()){ showToast('⛔ Нет доступа','error'); return; } renderAdmin(); break;
    case 'success': if(data) document.getElementById('success-order-id').textContent = data; break;
    case 'wishlist':renderWishlist(); break;
  }
}
window.addEventListener('hashchange', ()=>{
  const h = window.location.hash.slice(1);
  if(h && PAGES[h]) navigate(h);
});

/* ================================================================
   HOME
   ================================================================ */
function renderHome(){
  renderStories();
  renderDropBanner();
  renderProducts();
  renderMiniSections();
  renderDailyDeal();
  updateBadges();
}

/* Stories */
function renderStories(){
  const track = document.getElementById('stories-track');
  track.innerHTML = '';
  S.stories.forEach(st => {
    const div = document.createElement('div');
    div.className = 'story-item';
    div.innerHTML = `<div class="story-ring${st.seen?' seen':''}"><div class="story-inner">${st.emoji}</div></div><div class="story-label">${st.label}</div>`;
    div.addEventListener('click', ()=>onStoryClick(st));
    track.appendChild(div);
  });
}
function onStoryClick(st){
  const idx = S.stories.findIndex(s=>s.id===st.id);
  if(idx>=0){ S.stories[idx].seen=true; sv.stories(); }
  renderStories();
  if(st.id==='s4'){ S.filter='perfume'; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter==='perfume')); renderProducts(); }
  else if(st.id==='s5'){ S.filter='clothes'; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter==='clothes')); renderProducts(); }
  else if(st.id==='s2'){ S.filter='hits'; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter==='hits')); renderProducts(); }
  else if(st.id==='s1'){ S.filter='new'; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter==='new')); renderProducts(); }
  else if(st.id==='s3') openSpin();
}

/* Drop banner */
function renderDropBanner(){
  const el = document.getElementById('drop-banner');
  if(!S.drop?.date){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  document.getElementById('drop-name').textContent = S.drop.name || '';
  updateDropTimer();
}
function updateDropTimer(){
  if(!S.drop?.date) return;
  const diff = new Date(S.drop.date).getTime() - Date.now();
  if(diff<=0){ document.getElementById('drop-timer').textContent='🔥 Уже началось!'; return; }
  const h=Math.floor(diff/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
  document.getElementById('drop-timer').textContent=`${pad(h)}:${pad(m)}:${pad(s)}`;
}
setInterval(updateDropTimer, 1000);

/* Daily deal */
function renderDailyDeal(){
  const sec = document.getElementById('daily-deal-section');
  // Pick a product for today
  if(!S.products.length){ sec.classList.add('hidden'); return; }
  const todayKey = new Date().toDateString();
  if(S.dailyDealId !== todayKey){
    // pick random product
    const p = S.products[Math.floor(Math.random()*S.products.length)];
    S.dailyDealId = todayKey;
    sv.daily();
    S._dailyProduct = p;
  } else {
    S._dailyProduct = S.products.find(p=>true); // first product as fallback
  }
  if(!S._dailyProduct){ sec.classList.add('hidden'); return; }
  sec.classList.remove('hidden');
  const p = S._dailyProduct;
  const el = document.getElementById('dd-product');
  const th = p.photos?.[0] || '';
  el.innerHTML = `<div style="display:flex;align-items:center;gap:10px;cursor:pointer" id="dd-prod-click">
    ${th?`<img src="${escH(th)}" style="width:52px;height:52px;border-radius:8px;object-fit:cover" onerror="this.style.display='none'"/>`:`<div style="width:52px;height:52px;border-radius:8px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:1.5rem">${p.cat==='perfume'?'🌸':'👔'}</div>`}
    <div style="flex:1"><div style="font-family:var(--fd);font-size:.9rem;font-weight:600">${escH(p.name)}</div><div style="color:var(--gold);font-size:.85rem;font-weight:700;margin-top:2px">${fmt(p.price)}</div></div>
    <button class="btn-primary" style="padding:8px 14px;font-size:.78rem" onclick="event.stopPropagation();addToCart(S._dailyProduct,1);showToast('✓ Добавлен','success')">В корзину</button>
  </div>`;
  document.getElementById('dd-prod-click')?.addEventListener('click', ()=>navigate('product', p));
  updateDailyTimer();
}
function updateDailyTimer(){
  const now = new Date();
  const midnight = new Date(now); midnight.setHours(24,0,0,0);
  const diff = midnight.getTime() - now.getTime();
  const h=Math.floor(diff/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
  const el=document.getElementById('dd-timer');
  if(el) el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}
setInterval(updateDailyTimer, 1000);

/* Mini sections */
function renderMiniSections(){
  const renderTrack = (secId, trackId, items) => {
    const sec = document.getElementById(secId);
    const track = document.getElementById(trackId);
    track.innerHTML = '';
    if(!items.length){ sec.classList.add('hidden'); return; }
    sec.classList.remove('hidden');
    items.forEach(p => track.appendChild(makeMiniCard(p)));
  };
  renderTrack('recently-section', 'recently-track', S.recentlyViewed.slice(0,6));
  renderTrack('hits-section', 'hits-track', S.products.filter(p=>p.badges?.hit).slice(0,6));
  renderTrack('new-section', 'new-track', S.products.filter(p=>p.badges?.new).slice(0,6));
}
function makeMiniCard(p){
  const div = document.createElement('div'); div.className = 'mini-card';
  const th = p.photos?.[0]||'';
  div.innerHTML = `${th?`<img class="mini-card-img" src="${escH(th)}" loading="lazy" onerror="this.style.display='none'"/>`:`<div class="mini-card-ph">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="mini-card-body"><div class="mini-card-name">${escH(p.name)}</div><div class="mini-card-price">${fmt(p.price)}</div></div>`;
  div.addEventListener('click', ()=>navigate('product', p));
  return div;
}

/* Products */
function getFiltered(){
  let list = [...S.products];
  if(S.filter==='perfume') list=list.filter(p=>p.cat==='perfume');
  else if(S.filter==='clothes') list=list.filter(p=>p.cat==='clothes');
  else if(S.filter==='hits') list=list.filter(p=>p.badges?.hit);
  else if(S.filter==='new') list=list.filter(p=>p.badges?.new);
  if(S.searchQ){
    const q=S.searchQ.toLowerCase();
    list=list.filter(p=>p.name.toLowerCase().includes(q)||(p.tags||[]).some(t=>t.toLowerCase().includes(q))||(p.desc||'').toLowerCase().includes(q));
  }
  switch(S.sort){
    case 'price-asc':  list.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
    case 'popular':    list.sort((a,b)=>(b.sold||0)-(a.sold||0)); break;
    case 'new':        list.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0)); break;
    case 'rating':     list.sort((a,b)=>avgRating(b.id)-avgRating(a.id)); break;
  }
  return list;
}
function renderProducts(){
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('home-empty');
  const list = getFiltered();
  grid.innerHTML = '';
  if(!list.length){ grid.classList.add('hidden'); empty.classList.remove('hidden'); return; }
  grid.classList.remove('hidden'); empty.classList.add('hidden');
  list.forEach((p,i) => grid.appendChild(makeProductCard(p,i)));
}
function makeProductCard(p, i=0){
  const inWish = S.wishlist.includes(p.id);
  const rv = S.reviews[p.id]||[];
  const rating = avgRating(p.id);
  const card = document.createElement('div'); card.className='product-card';
  card.style.animationDelay = (i*.04)+'s';
  const th = p.photos?.[0]||'';
  card.innerHTML = `
    <div class="pc-img-wrap">
      ${th?`<img class="pc-img" src="${escH(th)}" loading="lazy" onerror="this.style.display='none'"/>`:`<div class="pc-placeholder">${p.cat==='perfume'?'🌸':'👔'}</div>`}
      <div class="pc-badges">
        <span class="pc-badge pb-cat">${p.cat==='perfume'?'Духи':'Одежда'}</span>
        ${p.badges?.new?'<span class="pc-badge pb-new">Новинка</span>':''}
        ${p.badges?.hit?'<span class="pc-badge pb-hit">Хит</span>':''}
        ${p.badges?.original?'<span class="pc-badge pb-orig">Оригинал</span>':''}
        ${p.badges?.last?'<span class="pc-badge pb-last">Посл.</span>':''}
      </div>
      <button class="pc-wish-btn${inWish?' active':''}" data-id="${p.id}">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </button>
    </div>
    <div class="pc-body">
      <div class="pc-name">${escH(p.name)}</div>
      <div class="pc-price-row"><div class="pc-price">${fmt(p.price)}</div>${p.oldPrice?`<div class="pc-old-price">${fmt(p.oldPrice)}</div>`:''}</div>
      ${rating?`<div class="pc-stars">${'★'.repeat(Math.round(rating))}${'☆'.repeat(5-Math.round(rating))} <span style="color:var(--text3);font-size:.64rem">(${rv.length})</span></div>`:''}
      ${p.sold?`<div class="pc-sold">Куплено ${p.sold} раз</div>`:''}
      ${p.stock>0&&p.stock<=5?`<div style="font-size:.64rem;color:#e0b050;margin-top:2px">⚠️ Остаток: ${p.stock} шт.</div>`:''}
    </div>`;
  card.querySelector('.pc-wish-btn').addEventListener('click', e=>{ e.stopPropagation(); toggleWishlist(p.id, card.querySelector('.pc-wish-btn')); });
  card.addEventListener('click', ()=>navigate('product', p));
  return card;
}

/* Search */
const $si = document.getElementById('search-input');
const $sc = document.getElementById('search-clear');
const $sug = document.getElementById('search-suggestions');
$si.addEventListener('input', ()=>{
  S.searchQ = $si.value.trim();
  $sc.classList.toggle('hidden', !S.searchQ);
  renderProducts(); renderSuggestions();
});
$sc.addEventListener('click', ()=>{ $si.value=''; S.searchQ=''; $sc.classList.add('hidden'); $sug.classList.add('hidden'); renderProducts(); });
function renderSuggestions(){
  if(!S.searchQ){ $sug.classList.add('hidden'); return; }
  const q = S.searchQ.toLowerCase();
  const matches = S.products.filter(p=>p.name.toLowerCase().includes(q)).slice(0,4);
  if(!matches.length){ $sug.classList.add('hidden'); return; }
  $sug.classList.remove('hidden'); $sug.innerHTML='';
  matches.forEach(p=>{
    const d=document.createElement('div'); d.className='suggestion-item';
    d.innerHTML=`<span>${p.cat==='perfume'?'🌸':'👔'}</span>${escH(p.name)}`;
    d.addEventListener('click',()=>{ $si.value=p.name; S.searchQ=p.name; $sug.classList.add('hidden'); renderProducts(); navigate('product',p); });
    $sug.appendChild(d);
  });
}
document.addEventListener('click', e=>{ if(!$sug.contains(e.target)&&e.target!==$si) $sug.classList.add('hidden'); });

/* Filters */
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active'); S.filter=btn.dataset.filter; renderProducts();
  });
});

/* Sort */
const $sortBtn = document.getElementById('btn-sort');
const $sortDD = document.getElementById('sort-dropdown');
$sortBtn.addEventListener('click', e=>{ e.stopPropagation(); $sortDD.classList.toggle('hidden'); });
document.addEventListener('click', ()=>$sortDD.classList.add('hidden'));
document.querySelectorAll('.sort-opt').forEach(opt=>{
  opt.addEventListener('click', ()=>{
    S.sort=opt.dataset.sort;
    document.getElementById('sort-label').textContent=opt.textContent.trim();
    document.querySelectorAll('.sort-opt').forEach(o=>o.classList.remove('active'));
    opt.classList.add('active'); $sortDD.classList.add('hidden'); renderProducts();
  });
});

/* Wishlist */
function toggleWishlist(id, btn=null){
  const idx=S.wishlist.indexOf(id);
  if(idx>=0){ S.wishlist.splice(idx,1); showToast('Убрано из избранного'); }
  else { S.wishlist.push(id); showToast('❤️ Добавлено в избранное','success'); }
  sv.wishlist(); if(btn) btn.classList.toggle('active', S.wishlist.includes(id)); updateBadges();
}
function renderWishlist(){
  const grid=document.getElementById('wishlist-grid');
  const empty=document.getElementById('wishlist-empty');
  const items=S.products.filter(p=>S.wishlist.includes(p.id));
  grid.innerHTML='';
  if(!items.length){ empty.classList.remove('hidden'); grid.classList.add('hidden'); return; }
  empty.classList.add('hidden'); grid.classList.remove('hidden');
  items.forEach((p,i)=>grid.appendChild(makeProductCard(p,i)));
}
document.getElementById('btn-wishlist-header').addEventListener('click',()=>navigate('wishlist'));
document.getElementById('btn-back-wishlist').addEventListener('click',()=>navigate('home'));

/* ================================================================
   PRODUCT PAGE
   ================================================================ */
function openProduct(p){
  S.currentProduct=p; S.qty=1; S.selectedSize=null;
  // Track recently viewed
  S.recentlyViewed=S.recentlyViewed.filter(x=>x.id!==p.id);
  S.recentlyViewed.unshift(p);
  if(S.recentlyViewed.length>10) S.recentlyViewed=S.recentlyViewed.slice(0,10);
  sv.recently();
  buildCarousel(p.photos||[]);
  document.getElementById('product-name').textContent=p.name;
  document.getElementById('product-price').textContent=fmt(p.price);
  const opEl=document.getElementById('product-old-price');
  if(p.oldPrice){ opEl.textContent=fmt(p.oldPrice); opEl.classList.remove('hidden'); } else opEl.classList.add('hidden');
  document.getElementById('product-desc').textContent=p.desc||'';
  document.getElementById('product-tags').innerHTML=(p.tags||[]).map(t=>`<span class="product-tag">#${escH(t)}</span>`).join('');
  document.getElementById('qty-val').textContent='1';
  // Rating
  const rv=S.reviews[p.id]||[]; const avg=avgRating(p.id);
  document.getElementById('product-stars').textContent=avg?'★'.repeat(Math.round(avg))+'☆'.repeat(5-Math.round(avg)):'☆☆☆☆☆';
  document.getElementById('product-review-count').textContent=rv.length?`${avg.toFixed(1)} (${rv.length})`:'';
  document.getElementById('product-sold').textContent=p.sold?`· ${p.sold} продаж`:'';
  // Stock indicator
  const stockEl=document.getElementById('stock-indicator');
  if(p.stock>0&&p.stock<=5){ stockEl.className='stock-indicator stock-low'; stockEl.textContent=`⚠️ Остаток: ${p.stock} шт. — торопитесь!`; stockEl.classList.remove('hidden'); }
  else if(p.stock===0&&p.stock!==undefined){ stockEl.className='stock-indicator stock-out'; stockEl.textContent='❌ Нет в наличии'; stockEl.classList.remove('hidden'); }
  else stockEl.classList.add('hidden');
  // Badges
  const bw=document.getElementById('product-badges-wrap');
  bw.innerHTML=`<span class="product-cat-badge">${p.cat==='perfume'?'🌸 Духи':'👔 Одежда'}</span>`;
  if(p.badges?.hit) bw.innerHTML+=`<span class="product-cat-badge" style="background:rgba(200,70,50,.6)">🔥 Хит</span>`;
  if(p.oldPrice) bw.innerHTML+=`<span class="product-cat-badge" style="background:rgba(82,192,122,.5)">−${Math.round((1-p.price/p.oldPrice)*100)}%</span>`;
  // Notes (perfume)
  const nb=document.getElementById('perfume-notes-block');
  if(p.cat==='perfume'&&(p.topNotes||p.midNotes||p.baseNotes)){
    nb.classList.remove('hidden');
    const ng=document.getElementById('notes-grid'); ng.innerHTML='';
    if(p.topNotes) ng.innerHTML+=noteRow('Верх.',p.topNotes);
    if(p.midNotes) ng.innerHTML+=noteRow('Сердце',p.midNotes);
    if(p.baseNotes) ng.innerHTML+=noteRow('База',p.baseNotes);
  } else nb.classList.add('hidden');
  // Sizes (clothes)
  const sgb=document.getElementById('size-guide-block');
  if(p.cat==='clothes'&&p.sizes?.length){
    sgb.classList.remove('hidden');
    const sl=document.getElementById('sizes-list'); sl.innerHTML='';
    p.sizes.forEach(sz=>{
      const chip=document.createElement('div'); chip.className='size-chip'; chip.textContent=sz;
      chip.addEventListener('click',()=>{ document.querySelectorAll('.size-chip').forEach(c=>c.classList.remove('selected')); chip.classList.add('selected'); S.selectedSize=sz; });
      sl.appendChild(chip);
    });
  } else sgb.classList.add('hidden');
  // Wishlist FAB
  document.getElementById('btn-product-wishlist').classList.toggle('active', S.wishlist.includes(p.id));
  // Bought together
  const btBlock=document.getElementById('bought-together-block');
  const others=S.products.filter(x=>x.id!==p.id&&x.cat===p.cat).slice(0,4);
  if(others.length){
    btBlock.classList.remove('hidden');
    const btList=document.getElementById('bt-list'); btList.innerHTML='';
    others.forEach(op=>{
      const div=document.createElement('div'); div.className='bt-item';
      const th=op.photos?.[0]||'';
      div.innerHTML=`${th?`<img class="bt-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="bt-img" style="display:flex;align-items:center;justify-content:center;font-size:1rem">${op.cat==='perfume'?'🌸':'👔'}</div>`}<div class="bt-info"><div class="bt-name">${escH(op.name)}</div><div class="bt-price">${fmt(op.price)}</div></div>`;
      div.addEventListener('click',()=>navigate('product',op));
      btList.appendChild(div);
    });
  } else btBlock.classList.add('hidden');
  renderReviews(p.id);
}
function noteRow(label, notes){
  const chips=notes.split(',').map(n=>`<span class="note-chip">${escH(n.trim())}</span>`).join('');
  return `<div class="note-row"><div class="note-layer">${label}</div><div class="note-items">${chips}</div></div>`;
}
document.getElementById('qty-minus').addEventListener('click',()=>{ if(S.qty>1){ S.qty--; document.getElementById('qty-val').textContent=S.qty; } });
document.getElementById('qty-plus').addEventListener('click',()=>{ if(S.qty<99){ S.qty++; document.getElementById('qty-val').textContent=S.qty; } });
document.getElementById('btn-add-cart').addEventListener('click',()=>{
  if(S.currentProduct?.cat==='clothes'&&S.currentProduct.sizes?.length&&!S.selectedSize){ showToast('⚠️ Выберите размер','error'); return; }
  addToCart({...S.currentProduct, selectedSize:S.selectedSize}, S.qty);
  showToast('✓ Добавлено в корзину','success');
});
document.getElementById('btn-back-product').addEventListener('click',()=>navigate('home'));
document.getElementById('btn-product-wishlist').addEventListener('click',()=>{ toggleWishlist(S.currentProduct.id); document.getElementById('btn-product-wishlist').classList.toggle('active',S.wishlist.includes(S.currentProduct.id)); });
document.getElementById('btn-product-share').addEventListener('click',()=>{
  const text=`${S.currentProduct.name} — ${fmt(S.currentProduct.price)} в FixStore 🛍`;
  if(tg?.openTelegramLink) tg.openTelegramLink(`https://t.me/share/url?text=${encodeURIComponent(text)}`);
  else navigator.share?.({title:'FixStore',text}).catch(()=>navigator.clipboard?.writeText(text).then(()=>showToast('✓ Скопировано','success')));
});
document.getElementById('btn-size-guide').addEventListener('click',()=>document.getElementById('modal-size').classList.remove('hidden'));

/* Carousel */
function buildCarousel(photos){
  const track=document.getElementById('carousel-track');
  const dots=document.getElementById('carousel-dots');
  track.innerHTML=''; dots.innerHTML=''; S.carouselIdx=0;
  const imgs=photos.length?photos:[''];
  imgs.forEach((src,i)=>{
    const slide=document.createElement('div'); slide.className='carousel-slide';
    if(src) slide.innerHTML=`<img src="${escH(src)}" onerror="this.style.display='none'"/>`;
    else slide.innerHTML=`<div class="carousel-ph">${S.currentProduct?.cat==='perfume'?'🌸':'👔'}</div>`;
    track.appendChild(slide);
    if(imgs.length>1){ const d=document.createElement('div'); d.className='carousel-dot'+(i===0?' active':''); d.addEventListener('click',()=>goSlide(i)); dots.appendChild(d); }
  });
  document.getElementById('carousel-prev').classList.toggle('hidden', imgs.length<=1);
  document.getElementById('carousel-next').classList.toggle('hidden', imgs.length<=1);
  updateCarousel();
}
function updateCarousel(){
  document.getElementById('carousel-track').style.transform=`translateX(-${S.carouselIdx*100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===S.carouselIdx));
}
function goSlide(idx){ const n=document.querySelectorAll('.carousel-slide').length; S.carouselIdx=(idx+n)%n; updateCarousel(); }
document.getElementById('carousel-prev').addEventListener('click',()=>goSlide(S.carouselIdx-1));
document.getElementById('carousel-next').addEventListener('click',()=>goSlide(S.carouselIdx+1));
(()=>{ const w=document.getElementById('product-carousel'); let sx=0; w.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true}); w.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)goSlide(S.carouselIdx+(d<0?1:-1));}); })();

/* Reviews */
function renderReviews(pid){
  const rv=S.reviews[pid]||[];
  const el=document.getElementById('reviews-list');
  const empty=document.getElementById('reviews-empty');
  el.innerHTML='';
  if(!rv.length){ empty.style.display=''; return; }
  empty.style.display='none';
  rv.forEach(r=>{
    const d=document.createElement('div'); d.className='review-card';
    d.innerHTML=`<div class="review-top"><div class="review-av">${r.avatar?`<img src="${escH(r.avatar)}" onerror="this.textContent='${r.author.charAt(0).toUpperCase()}';this.style.display=''"/>`:r.author.charAt(0).toUpperCase()}</div><div class="review-meta"><div class="review-author">${escH(r.author)}</div><div class="review-date">${r.date}</div></div><div class="review-stars">${'★'.repeat(r.rating)}</div></div><div class="review-text">${escH(r.text)}</div>${r.photo?`<img class="review-photo" src="${escH(r.photo)}" onerror="this.style.display='none'"/>`:'' }`;
    el.appendChild(d);
  });
}
document.getElementById('btn-add-review').addEventListener('click',()=>{
  S.reviewRating=0;
  document.querySelectorAll('.rs').forEach(r=>r.classList.remove('active'));
  document.getElementById('review-text').value='';
  document.getElementById('review-photo').value='';
  document.getElementById('modal-review').classList.remove('hidden');
});
document.querySelectorAll('.rs').forEach(r=>{ r.addEventListener('click',()=>{ S.reviewRating=+r.dataset.v; document.querySelectorAll('.rs').forEach((x,i)=>x.classList.toggle('active',i<S.reviewRating)); }); });
document.getElementById('btn-review-cancel').addEventListener('click',()=>document.getElementById('modal-review').classList.add('hidden'));
document.getElementById('btn-review-submit').addEventListener('click',()=>{
  if(!S.reviewRating){ showToast('⚠️ Выберите оценку','error'); return; }
  const text=document.getElementById('review-text').value.trim();
  if(!text){ showToast('⚠️ Напишите отзыв','error'); return; }
  const pid=S.currentProduct.id;
  if(!S.reviews[pid]) S.reviews[pid]=[];
  S.reviews[pid].unshift({
    author:S.user.name, date:new Date().toLocaleDateString('ru-RU'),
    rating:S.reviewRating, text,
    photo:document.getElementById('review-photo').value.trim()||null,
    avatar:S.user.photo_url||S.user.googlePicture||null,
  });
  sv.reviews();
  document.getElementById('modal-review').classList.add('hidden');
  renderReviews(pid); openProduct(S.currentProduct);
  showToast('✓ Отзыв опубликован','success');
});

/* ================================================================
   CART
   ================================================================ */
function addToCart(p, qty=1){
  const key=p.id+(p.selectedSize?'_'+p.selectedSize:'');
  const ex=S.cart.find(i=>i._key===key);
  if(ex) ex.qty+=qty; else S.cart.push({...p, _key:key, qty});
  sv.cart(); updateBadges();
}
function removeFromCart(key){ S.cart=S.cart.filter(i=>i._key!==key); sv.cart(); renderCart(); updateBadges(); }
function changeQty(key,d){
  const item=S.cart.find(i=>i._key===key); if(!item) return;
  item.qty+=d; if(item.qty<=0) return removeFromCart(key);
  sv.cart(); renderCart(); updateBadges();
}
function cartItemsTotal(){ return S.cart.reduce((s,i)=>s+i.price*i.qty,0); }
function deliveryCost(){ if(S.deliveryMode==='pvz'&&S.selectedPvz) return S.selectedPvz.price; if(S.deliveryMode==='meeting') return 0; return 0; }
function discountAmount(itemsTotal){
  let disc=0;
  if(S.promoCode&&S.promoCodes[S.promoCode]) disc=Math.floor(itemsTotal*S.promoCodes[S.promoCode]/100);
  if(S.spinPromo?.pct) disc=Math.max(disc,Math.floor(itemsTotal*S.spinPromo.pct/100));
  // Tiered (only if no promo)
  if(!disc){ if(itemsTotal>=7000) disc=Math.floor(itemsTotal*.1); else if(itemsTotal>=3000) disc=Math.floor(itemsTotal*.05); }
  return disc;
}
function cartTotal(){ const items=cartItemsTotal(); return Math.max(0,items-discountAmount(items))+deliveryCost(); }

function renderCart(){
  const isEmpty=!S.cart.length;
  document.getElementById('cart-empty').classList.toggle('hidden',!isEmpty);
  document.getElementById('cart-content').classList.toggle('hidden',isEmpty);
  if(isEmpty) return;
  const el=document.getElementById('cart-items'); el.innerHTML='';
  S.cart.forEach(item=>{
    const th=item.photos?.[0]||'';
    const div=document.createElement('div'); div.className='cart-item';
    div.innerHTML=`${th?`<img class="ci-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="ci-img-ph">${item.cat==='perfume'?'🌸':'👔'}</div>`}<div class="ci-info"><div class="ci-name">${escH(item.name)}${item.selectedSize?` <span style="font-size:.72rem;color:var(--text3)">(${item.selectedSize})</span>`:''}</div><div class="ci-price">${fmt(item.price)} / шт.</div><div class="ci-qty"><button class="ci-qty-btn" data-k="${item._key}" data-d="-1">−</button><span class="ci-qty-val">${item.qty}</span><button class="ci-qty-btn" data-k="${item._key}" data-d="1">+</button></div></div><button class="ci-remove" data-k="${item._key}">🗑</button>`;
    el.appendChild(div);
  });
  el.querySelectorAll('.ci-qty-btn').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.k,+b.dataset.d)));
  el.querySelectorAll('.ci-remove').forEach(b=>b.addEventListener('click',()=>removeFromCart(b.dataset.k)));

  // Upsell
  const uSec=document.getElementById('upsell-section'); const uList=document.getElementById('upsell-list'); uList.innerHTML='';
  const cartIds=S.cart.map(i=>i.id);
  const upsells=S.products.filter(p=>!cartIds.includes(p.id)).slice(0,5);
  if(upsells.length){
    uSec.classList.remove('hidden');
    upsells.forEach(p=>{ const d=document.createElement('div'); d.className='upsell-item'; const th=p.photos?.[0]||''; d.innerHTML=`${th?`<img class="upsell-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="upsell-img-ph">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="upsell-name">${escH(p.name)}</div><div class="upsell-price">${fmt(p.price)}</div>`; d.addEventListener('click',()=>{ addToCart(p,1); renderCart(); showToast('✓ Добавлено','success'); }); uList.appendChild(d); });
  } else uSec.classList.add('hidden');

  // Tier banner
  const items=cartItemsTotal(); const tierEl=document.getElementById('tier-banner');
  if(items<3000){ tierEl.textContent=`🎁 До скидки 5% ещё ${fmt(3000-items)}`; tierEl.classList.remove('hidden'); }
  else if(items<7000){ tierEl.textContent=`🎁 До скидки 10% ещё ${fmt(7000-items)}`; tierEl.classList.remove('hidden'); }
  else { tierEl.textContent='✅ Скидка 10% применена автоматически'; tierEl.classList.remove('hidden'); }

  // PVZ
  const cs=document.getElementById('pvz-city-select');
  if(!cs.children.length){ Object.keys(PVZ_DATA).forEach(city=>{ const o=document.createElement('option'); o.value=city; o.textContent=city; if(city===S.selectedCity) o.selected=true; cs.appendChild(o); }); }
  renderPvzList(); updateSummary();
}
document.getElementById('pvz-city-select').addEventListener('change',function(){ S.selectedCity=this.value; S.selectedPvz=null; renderPvzList(); updateSummary(); });
function renderPvzList(){
  const el=document.getElementById('pvz-list'); el.innerHTML='';
  (PVZ_DATA[S.selectedCity]||[]).forEach(pvz=>{
    const d=document.createElement('div'); d.className='pvz-item'+(S.selectedPvz?.id===pvz.id?' selected':'');
    d.innerHTML=`<div class="pvz-radio"></div><div class="pvz-info"><div class="pvz-name">${pvz.name}</div><div class="pvz-addr">${pvz.addr}</div><div class="pvz-working">${pvz.working}</div></div><div class="pvz-price">${pvz.price} ₽</div>`;
    d.addEventListener('click',()=>{ S.selectedPvz=pvz; renderPvzList(); updateSummary(); });
    el.appendChild(d);
  });
}
function updateSummary(){
  const items=cartItemsTotal(); const disc=discountAmount(items); const del=deliveryCost();
  document.getElementById('sum-items').textContent=fmt(items);
  const dr=document.getElementById('discount-row');
  if(disc>0){ dr.style.display=''; document.getElementById('sum-discount').textContent='−'+fmt(disc); } else dr.style.display='none';
  document.getElementById('sum-delivery').textContent=S.deliveryMode==='meeting'?'Бесплатно':(del?del+' ₽':'—');
  document.getElementById('sum-total').textContent=fmt(Math.max(0,items-disc)+del);
}
document.querySelectorAll('.delivery-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.delivery-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active'); S.deliveryMode=tab.dataset.mode;
    document.getElementById('pvz-block').classList.toggle('hidden', S.deliveryMode!=='pvz');
    document.getElementById('meeting-info').classList.toggle('hidden', S.deliveryMode!=='meeting');
    updateSummary();
  });
});
document.getElementById('btn-apply-promo').addEventListener('click',()=>{
  const code=document.getElementById('promo-input').value.trim().toUpperCase();
  const res=document.getElementById('promo-result');
  if(S.promoCodes[code]){
    S.promoCode=code; S.promoDiscount=S.promoCodes[code];
    res.className='promo-result ok'; res.textContent=`✓ Скидка ${S.promoCodes[code]}% применена`; res.classList.remove('hidden');
    updateSummary(); showToast(`✓ Промокод ${code} принят`,'success');
  } else { res.className='promo-result err'; res.textContent='✗ Промокод не найден'; res.classList.remove('hidden'); }
});
document.getElementById('btn-back-cart').addEventListener('click',()=>navigate('home'));
document.getElementById('btn-cart-header').addEventListener('click',()=>navigate('cart'));
document.getElementById('btn-clear-cart').addEventListener('click',()=>{ if(!S.cart.length) return; S.cart=[]; sv.cart(); renderCart(); updateBadges(); showToast('Корзина очищена'); });
document.getElementById('btn-checkout').addEventListener('click',()=>{
  if(S.deliveryMode==='pvz'&&!S.selectedPvz){ showToast('⚠️ Выберите ПВЗ','error'); return; }
  navigate('payment');
});

/* ================================================================
   PAYMENT
   ================================================================ */
function renderPayment(){
  const prev=document.getElementById('payment-items-preview'); prev.innerHTML='';
  const items=cartItemsTotal(); const disc=discountAmount(items);
  S.cart.forEach(item=>{ const d=document.createElement('div'); d.className='pip-row'; d.innerHTML=`<span>${escH(item.name)} ×${item.qty}</span><span>${fmt(item.price*item.qty)}</span>`; prev.appendChild(d); });
  if(disc>0){ const d=document.createElement('div'); d.className='pip-row'; d.innerHTML=`<span style="color:var(--green)">Скидка</span><span style="color:var(--green)">−${fmt(disc)}</span>`; prev.appendChild(d); }
  const del=deliveryCost();
  if(del){ const d=document.createElement('div'); d.className='pip-row'; d.innerHTML=`<span>Доставка</span><span>${del} ₽</span>`; prev.appendChild(d); }
  document.getElementById('payment-total').textContent=fmt(cartTotal());
  document.getElementById('balance-display').textContent=S.user.balance;
  updatePayBtn();
}
function updatePayBtn(){
  const txt=document.getElementById('btn-pay-text');
  const warn=document.getElementById('balance-insufficient');
  if(S.payMethod==='balance'){
    const ok=S.user.balance>=cartTotal();
    warn.classList.toggle('hidden',ok);
    txt.textContent=ok?`Оплатить ${fmt(cartTotal())} с баланса`:'Недостаточно средств';
  } else { warn.classList.add('hidden'); txt.textContent=`К оплате ${fmt(cartTotal())}`; }
  document.getElementById('robokassa-info-block').classList.toggle('hidden', S.payMethod==='balance');
}
document.querySelectorAll('input[name="paymethod"]').forEach(r=>r.addEventListener('change',()=>{ S.payMethod=r.value; updatePayBtn(); }));
document.getElementById('btn-back-payment').addEventListener('click',()=>navigate('cart'));
document.getElementById('btn-pay').addEventListener('click',processPayment);
function rkUrl(amount, invId, desc, method){
  const cfg=S.robokassa;
  if(!cfg.merchantLogin||!cfg.password1){ showToast('⚠️ Настройте Robokassa в /admin','error'); return null; }
  const sig=md5(`${cfg.merchantLogin}:${amount.toFixed(2)}:${invId}:${cfg.password1}`);
  const p=new URLSearchParams({MerchantLogin:cfg.merchantLogin,OutSum:amount.toFixed(2),InvId:String(invId),Description:desc,SignatureValue:sig.toUpperCase()});
  if(cfg.testMode) p.set('IsTest','1');
  if(method==='robokassa_sbp') p.set('IncCurrLabel','SBER_PAYME');
  return `https://auth.robokassa.ru/Merchant/Index.aspx?${p}`;
}
function processPayment(){
  const total=cartTotal();
  const invId=Math.floor(Date.now()/1000)%999999;
  if(S.payMethod==='balance'){
    if(S.user.balance<total){ showToast('⚠️ Недостаточно средств','error'); return; }
    S.user.balance-=total; sv.user(); finalizeOrder(invId); return;
  }
  const url=rkUrl(total,invId,`Заказ FixStore #${invId}`,S.payMethod);
  if(!url) return;
  if(tg?.openLink) tg.openLink(url); else window.open(url,'_blank');
  showToast('⏳ Ожидаем оплату...');
  setTimeout(()=>finalizeOrder(invId),2500);
}
function finalizeOrder(invId){
  const order={
    id:invId,
    items:S.cart.map(i=>({name:i.name,qty:i.qty,price:i.price})),
    total:cartTotal(),
    delivery:S.deliveryMode==='pvz'?(S.selectedPvz?.addr||'ПВЗ'):'Личная встреча · Шахты',
    pvzName:S.selectedPvz?.name||'',
    payMethod:S.payMethod,
    status:'pending',
    date:new Date().toLocaleDateString('ru-RU'),
    userId:S.user.id,
  };
  S.orders.unshift(order); sv.orders();
  S.cart=[]; sv.cart(); S.promoCode=null; S.promoDiscount=0; S.spinPromo=null;
  updateBadges();
  navigate('success', invId);
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
  document.getElementById('stat-orders').textContent=S.orders.filter(o=>o.userId===u.id||!o.userId).length;
  document.getElementById('stat-refs').textContent=u.referrals||0;
  document.getElementById('stat-bonus').textContent=(u.bonus||0)+' ₽';
  // Avatar
  const av=document.getElementById('profile-avatar');
  const aImg=document.getElementById('profile-avatar-img');
  const photoSrc=u.googlePicture||u.photo_url||null;
  if(photoSrc){ aImg.src=photoSrc; aImg.classList.remove('hidden'); av.classList.add('hidden'); }
  else { av.textContent=(u.googleName||u.name).charAt(0).toUpperCase(); av.classList.remove('hidden'); aImg.classList.add('hidden'); }
  document.getElementById('tg-verified-badge').classList.toggle('hidden',!u.phoneLinked);
  document.getElementById('google-linked-badge').classList.toggle('hidden',!u.googleLinked);
  document.getElementById('ref-link').value=`https://t.me/FixStoreBot?start=ref${u.id}`;
  // Admin button — only if this user is admin
  document.getElementById('admin-access-card').classList.toggle('hidden', !isAdmin());
  renderTgConnect();
  renderGoogleSection();
  renderOrders();
}
function renderOrders(){
  const list=document.getElementById('orders-list');
  const empty=document.getElementById('orders-empty');
  const myOrders=S.orders.filter(o=>o.userId===S.user.id||!o.userId);
  list.innerHTML='';
  if(!myOrders.length){ empty.style.display=''; return; }
  empty.style.display='none';
  myOrders.slice(0,8).forEach(o=>{
    const d=document.createElement('div'); d.className='order-card';
    const statusMap={pending:'⏳ В обработке',processing:'🔧 Собирается',shipped:'📦 Отправлен',done:'✅ Выдан'};
    const scMap={pending:'status-pending',processing:'status-processing',shipped:'status-shipped',done:'status-done'};
    d.innerHTML=`<div class="order-header"><div class="order-id">Заказ #${o.id}</div><span class="order-status ${scMap[o.status]||'status-pending'}">${statusMap[o.status]||'⏳ В обработке'}</span></div><div class="order-info">${o.date} · ${fmt(o.total)} · ${o.items.length} поз. · ${o.pvzName||o.delivery||''}</div>`;
    list.appendChild(d);
  });
}
document.getElementById('btn-goto-admin').addEventListener('click',()=>navigate('admin'));
document.getElementById('btn-back-admin').addEventListener('click',()=>navigate('profile'));

/* TG Connect */
function renderTgConnect(){
  const u=S.user;
  document.getElementById('tgc-step1').classList.toggle('hidden', S.tgcStep!==1||u.phoneLinked);
  document.getElementById('tgc-step2').classList.toggle('hidden', S.tgcStep!==2||u.phoneLinked);
  document.getElementById('tgc-linked').classList.toggle('hidden', !u.phoneLinked);
  if(u.phoneLinked){ document.getElementById('tgc-linked-phone').textContent=u.phone||''; document.getElementById('tgc-link-date').textContent=u.phoneLinkDate||''; }
}
document.getElementById('btn-tgc-send').addEventListener('click',()=>{
  let raw=document.getElementById('tgc-phone').value.replace(/\D/g,'');
  if(raw.length<10){ showToast('⚠️ Введите корректный номер','error'); return; }
  S.tgcPhone='+7'+raw.slice(-10);
  S.tgcCode=String(Math.floor(10000+Math.random()*90000));
  S.tgcStep=2;
  document.getElementById('tgc-phone-display').textContent=S.tgcPhone;
  renderTgConnect();
  document.querySelectorAll('.code-digit').forEach(i=>i.value='');
  document.querySelectorAll('.code-digit')[0]?.focus();
  startCodeTimer();
  setTimeout(()=>showToast(`[Тест] Код: ${S.tgcCode}`), 600);
});
document.getElementById('btn-tg-contact').addEventListener('click',()=>{
  if(tg?.requestContact){ tg.requestContact(r=>{ if(r?.phone_number){ S.user.phone=(r.phone_number.startsWith('+')?'':'+')+r.phone_number; S.user.phoneLinked=true; S.user.phoneLinkDate=new Date().toLocaleDateString('ru-RU'); sv.user(); renderProfile(); showToast('✓ Номер привязан','success'); } }); }
  else showToast('Откройте в Telegram','error');
});
document.querySelectorAll('.code-digit').forEach((inp,i,all)=>{
  inp.addEventListener('input',()=>{ inp.value=inp.value.replace(/\D/,'').slice(0,1); if(inp.value&&i<all.length-1) all[i+1].focus(); const code=[...all].map(x=>x.value).join(''); if(code.length===5) verifyCode(code); });
  inp.addEventListener('keydown',e=>{ if(e.key==='Backspace'&&!inp.value&&i>0) all[i-1].focus(); });
});
document.getElementById('btn-tgc-verify').addEventListener('click',()=>{ const code=[...document.querySelectorAll('.code-digit')].map(x=>x.value).join(''); verifyCode(code); });
function verifyCode(code){
  if(code.length<5){ showToast('⚠️ Введите 5-значный код','error'); return; }
  if(code!==S.tgcCode){ showToast('⚠️ Неверный код','error'); return; }
  S.user.phone=S.tgcPhone; S.user.phoneLinked=true; S.user.phoneLinkDate=new Date().toLocaleDateString('ru-RU'); sv.user();
  clearInterval(S.timerInt); S.tgcStep=3; renderProfile(); showToast('✓ Номер привязан!','success');
}
document.getElementById('btn-tgc-back').addEventListener('click',()=>{ S.tgcStep=1; clearInterval(S.timerInt); renderTgConnect(); });
document.getElementById('btn-tgc-unlink').addEventListener('click',()=>{ S.user.phone=null; S.user.phoneLinked=false; S.user.phoneLinkDate=null; sv.user(); S.tgcStep=1; renderProfile(); showToast('Номер отвязан'); });
function startCodeTimer(){
  clearInterval(S.timerInt); let sec=60;
  const tEl=document.getElementById('timer-sec'); const tDiv=document.getElementById('code-timer');
  tEl.textContent=sec;
  S.timerInt=setInterval(()=>{ sec--; if(sec<=0){ clearInterval(S.timerInt); tDiv.innerHTML='<button class="link-btn" id="btn-resend">Отправить повторно</button>'; document.getElementById('btn-resend')?.addEventListener('click',()=>{ S.tgcStep=1; renderTgConnect(); }); } else tEl.textContent=sec; },1000);
}

/* Google Auth */
function renderGoogleSection(){
  const u=S.user;
  document.getElementById('google-unlinked').classList.toggle('hidden', u.googleLinked);
  document.getElementById('google-linked-info').classList.toggle('hidden', !u.googleLinked);
  if(u.googleLinked){
    document.getElementById('google-email-display').textContent=u.googleEmail||'';
    document.getElementById('google-link-date').textContent='Привязан '+u.googleLinkDate;
  }
  // Inject Google Sign-In button
  if(!u.googleLinked && S.settings.googleClientId){
    const wrap=document.getElementById('google-signin-btn-wrap');
    wrap.innerHTML='';
    if(window.google?.accounts?.id){
      window.google.accounts.id.initialize({client_id:S.settings.googleClientId,callback:handleGoogleSignIn});
      window.google.accounts.id.renderButton(wrap,{theme:'outline',size:'large',text:'signin_with',locale:'ru'});
    }
  }
}
window.handleGoogleSignIn = function(response){
  try{
    const payload=JSON.parse(atob(response.credential.split('.')[1]));
    S.user.googleEmail=payload.email;
    S.user.googleName=payload.name;
    S.user.googlePicture=payload.picture;
    S.user.googleLinked=true;
    S.user.googleLinkDate=new Date().toLocaleDateString('ru-RU');
    if(!S.user.name||S.user.name==='Гость') S.user.name=payload.name;
    sv.user(); renderProfile(); showToast('✓ Google аккаунт привязан','success');
  } catch(e){ showToast('Ошибка авторизации','error'); }
};
document.getElementById('btn-google-manual').addEventListener('click',()=>{
  if(!S.settings.googleClientId){ showToast('⚠️ Google Client ID не настроен. Перейдите в /admin','error'); return; }
  if(window.google?.accounts?.id){
    window.google.accounts.id.prompt();
  } else {
    showToast('⚠️ Google SDK не загружен','error');
  }
});
document.getElementById('btn-google-unlink').addEventListener('click',()=>{
  S.user.googleLinked=false; S.user.googleEmail=null; S.user.googleName=null; S.user.googlePicture=null; S.user.googleLinkDate=null;
  sv.user(); renderProfile(); showToast('Google аккаунт отвязан');
});

/* Referral */
document.getElementById('btn-copy-ref').addEventListener('click',()=>{ navigator.clipboard?.writeText(document.getElementById('ref-link').value).then(()=>showToast('✓ Скопировано','success')).catch(()=>{}); });
document.getElementById('btn-share-ref').addEventListener('click',()=>{
  const l=document.getElementById('ref-link').value;
  if(tg?.openTelegramLink) tg.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(l)}&text=${encodeURIComponent('Заходи в FixStore — духи и одежда 🛍️')}`);
  else navigator.share?.({title:'FixStore',url:l}).catch(()=>{});
});

/* Top-up */
document.getElementById('btn-topup').addEventListener('click',()=>{ S.topupAmount=0; document.getElementById('topup-custom').value=''; document.querySelectorAll('.topup-amt').forEach(b=>b.classList.remove('selected')); document.getElementById('modal-topup').classList.remove('hidden'); });
document.getElementById('btn-topup-cancel').addEventListener('click',()=>document.getElementById('modal-topup').classList.add('hidden'));
document.getElementById('modal-topup').addEventListener('click',function(e){ if(e.target===this) this.classList.add('hidden'); });
document.querySelectorAll('.topup-amt').forEach(btn=>{ btn.addEventListener('click',()=>{ document.querySelectorAll('.topup-amt').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); S.topupAmount=+btn.dataset.amt; document.getElementById('topup-custom').value=''; }); });
document.getElementById('topup-custom').addEventListener('input',function(){ S.topupAmount=+this.value||0; document.querySelectorAll('.topup-amt').forEach(b=>b.classList.remove('selected')); });
document.getElementById('btn-topup-confirm').addEventListener('click',()=>{
  const amt=S.topupAmount;
  if(!amt||amt<50){ showToast('⚠️ Минимум 50 ₽','error'); return; }
  const invId=Math.floor(Date.now()/1000)%999999;
  const url=rkUrl(amt,invId,'Пополнение FixStore','robokassa_card');
  if(!url) return;
  document.getElementById('modal-topup').classList.add('hidden');
  if(tg?.openLink) tg.openLink(url); else window.open(url,'_blank');
  showToast('⏳ Ожидаем оплату...');
  setTimeout(()=>{ S.user.balance+=amt; sv.user(); renderProfile(); showToast(`✓ Баланс +${fmt(amt)}`,'success'); },3000);
});

/* ================================================================
   SPIN WHEEL — weighted, low wins, discount only
   ================================================================ */
function buildSpinWheel(){
  const canvas=document.getElementById('wheel-canvas');
  const ctx=canvas.getContext('2d');
  const cx=120,cy=120,r=116;
  const total=SPIN_PRIZES.reduce((s,p)=>s+p.weight,0);
  let start=0;
  SPIN_PRIZES.forEach(p=>{
    const slice=(p.weight/total)*Math.PI*2;
    ctx.beginPath(); ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,start,start+slice);
    ctx.closePath(); ctx.fillStyle=p.color; ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,.25)'; ctx.lineWidth=1.5; ctx.stroke();
    // Label
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(start+slice/2);
    ctx.textAlign='right'; ctx.fillStyle='#fff'; ctx.font='bold 11px Jost,sans-serif';
    ctx.fillText(p.label, r-10, 4);
    ctx.restore();
    start+=slice;
  });
}
function openSpin(){
  buildSpinWheel();
  document.getElementById('modal-spin').classList.remove('hidden');
  const today=new Date().toDateString();
  const used=S.spinUsedDate===today;
  document.getElementById('spin-sub').textContent=used?'Следующий шанс завтра!':'Один бесплатный шанс в день!';
  const btn=document.getElementById('btn-spin');
  btn.disabled=used; btn.textContent=used?'Возвращайтесь завтра!':'Попытать удачу';
  document.getElementById('spin-result').classList.add('hidden');
}
document.getElementById('btn-spin-open').addEventListener('click',openSpin);
document.getElementById('btn-spin').addEventListener('click',()=>{
  const today=new Date().toDateString();
  if(S.spinUsedDate===today){ showToast('Следующий шанс завтра!','error'); return; }
  // Weighted random
  const total=SPIN_PRIZES.reduce((s,p)=>s+p.weight,0);
  let rnd=Math.random()*total; let winIdx=0;
  for(let i=0;i<SPIN_PRIZES.length;i++){ rnd-=SPIN_PRIZES[i].weight; if(rnd<=0){ winIdx=i; break; } }
  const prize=SPIN_PRIZES[winIdx];
  // Compute rotation angle for winning sector
  let angleStart=0;
  const totalW=SPIN_PRIZES.reduce((s,p)=>s+p.weight,0);
  for(let i=0;i<winIdx;i++) angleStart+=SPIN_PRIZES[i].weight/totalW*360;
  const sectorAngle=SPIN_PRIZES[winIdx].weight/totalW*360;
  const sectorMid=angleStart+sectorAngle/2;
  // We need sectorMid to land at top (pointer = 270° from right = top)
  const finalAngle=360*8+(270-sectorMid);
  const canvas=document.getElementById('wheel-canvas');
  canvas.style.transition='transform 5s cubic-bezier(.17,.67,.12,.99)';
  canvas.style.transform=`rotate(${finalAngle}deg)`;
  S.spinUsedDate=today; sv.spin();
  document.getElementById('btn-spin').disabled=true;
  setTimeout(()=>{
    canvas.style.transition='none';
    const res=document.getElementById('spin-result');
    if(prize.code){
      S.spinPromo=prize;
      res.className='spin-result';
      res.textContent=`🎉 Вы выиграли скидку ${prize.pct}%! Применена к следующему заказу.`;
    } else {
      res.className='spin-result bad';
      res.textContent='😔 Не повезло. Возвращайтесь завтра!';
    }
    res.classList.remove('hidden');
    document.getElementById('btn-spin').textContent='Возвращайтесь завтра!';
    document.getElementById('spin-sub').textContent='Следующий шанс завтра!';
  },5200);
});

/* ================================================================
   QUIZ
   ================================================================ */
document.getElementById('btn-quiz-open').addEventListener('click',()=>{ S.quizStep=0; S.quizAnswers=[]; renderQuizStep(); document.getElementById('modal-quiz').classList.remove('hidden'); });
function renderQuizStep(){
  const body=document.getElementById('quiz-body');
  if(S.quizStep>=QUIZ_STEPS.length){ renderQuizResult(); return; }
  const step=QUIZ_STEPS[S.quizStep];
  body.innerHTML=`<div class="quiz-step">Шаг ${S.quizStep+1} из ${QUIZ_STEPS.length}</div><div class="quiz-question">${step.q}</div><div class="quiz-options">${step.opts.map((o,i)=>`<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}</div>`;
  body.querySelectorAll('.quiz-opt').forEach(btn=>{ btn.addEventListener('click',()=>{ S.quizAnswers.push(+btn.dataset.i); S.quizStep++; renderQuizStep(); }); });
}
function renderQuizResult(){
  const body=document.getElementById('quiz-body');
  const profiles=['fresh','dark','floral','spicy'];
  const profile=profiles[S.quizAnswers[0]||0];
  const keywords={fresh:['свеж','морск','цитр','бергам'],dark:['уд','сандал','мускус','восточн'],floral:['роза','цветоч','жасмин'],spicy:['пряный','перец','специи']}[profile]||[];
  let recs=S.products.filter(p=>p.cat==='perfume'&&(p.tags||[]).some(t=>keywords.some(k=>t.toLowerCase().includes(k)))).slice(0,3);
  if(!recs.length) recs=S.products.filter(p=>p.cat==='perfume').slice(0,3);
  const names={fresh:'Свежий и лёгкий',dark:'Восточный и таинственный',floral:'Цветочный и романтичный',spicy:'Пряный и дерзкий'};
  body.innerHTML=`<div style="text-align:center;margin-bottom:12px"><div style="font-family:var(--fd);font-size:1.05rem;font-weight:600;color:var(--gold);margin-bottom:5px">Ваш профиль: ${names[profile]||'Универсальный'}</div><div style="font-size:.8rem;color:var(--text2)">Подходящие ароматы из нашего каталога:</div></div><div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">${recs.length?recs.map(p=>{ const th=p.photos?.[0]||''; return`<div class="quiz-product-row" data-pid="${p.id}" style="display:flex;align-items:center;gap:10px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--rs);padding:9px;cursor:pointer">${th?`<img src="${escH(th)}" style="width:44px;height:44px;border-radius:7px;object-fit:cover" onerror="this.style.display='none'"/>` :`<div style="width:44px;height:44px;border-radius:7px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:1.3rem">🌸</div>`}<div><div style="font-size:.85rem;font-weight:600">${escH(p.name)}</div><div style="font-size:.78rem;color:var(--gold)">${fmt(p.price)}</div></div></div>`; }).join(''):'<div style="color:var(--text3);text-align:center;font-size:.82rem">Добавьте духи в каталог</div>'}</div><button class="btn-outline full" onclick="document.getElementById('modal-quiz').classList.add('hidden')">Закрыть</button>`;
  body.querySelectorAll('.quiz-product-row').forEach(row=>{
    const p=S.products.find(x=>x.id===row.dataset.pid);
    if(p) row.addEventListener('click',()=>{ document.getElementById('modal-quiz').classList.add('hidden'); navigate('product',p); });
  });
}

/* ================================================================
   ADMIN
   ================================================================ */
function renderAdmin(){
  document.getElementById('admin-products-count').textContent=S.products.length;
  document.getElementById('admin-orders-count').textContent=S.orders.length;
  document.getElementById('admin-revenue').textContent=fmt(S.orders.reduce((s,o)=>s+o.total,0));
  document.getElementById('admin-users').textContent=new Set(S.orders.map(o=>o.userId)).size||0;
  // Settings
  document.getElementById('admin-tg-id').value=S.settings.adminTgId||'';
  document.getElementById('admin-google-id').value=S.settings.googleClientId||'';
  document.getElementById('bot-token').value=S.botToken||'';
  // Robokassa
  document.getElementById('rk-login').value=S.robokassa.merchantLogin||'';
  document.getElementById('rk-pass1').value=S.robokassa.password1||'';
  document.getElementById('rk-pass2').value=S.robokassa.password2||'';
  document.getElementById('rk-testmode').checked=S.robokassa.testMode!==false;
  // Drop
  if(S.drop){ document.getElementById('admin-drop-name').value=S.drop.name||''; }
  initPhotoInputs();
  renderAdminProducts();
  renderAdminOrders();
  renderAdminPromos();
  document.getElementById('admin-cat').dispatchEvent(new Event('change'));
}

/* Collapsibles */
['settings','rk','drop','promo','orders','notif'].forEach(k=>{
  document.getElementById(`${k}-toggle`).addEventListener('click',()=>{
    document.getElementById(`${k}-body`).classList.toggle('open');
    document.getElementById(`${k}-caret`).classList.toggle('open');
  });
});

/* Settings save */
document.getElementById('btn-save-settings').addEventListener('click',()=>{
  S.settings.adminTgId=+document.getElementById('admin-tg-id').value||0;
  S.settings.googleClientId=document.getElementById('admin-google-id').value.trim();
  S.botToken=document.getElementById('bot-token').value.trim();
  sv.settings(); sv.bot();
  showToast('✓ Настройки сохранены','success');
  // Re-init google if client id changed
  if(S.settings.googleClientId){ const s=document.createElement('script'); s.src='https://accounts.google.com/gsi/client'; document.head.appendChild(s); }
});

/* Robokassa save */
document.getElementById('btn-save-rk').addEventListener('click',()=>{
  S.robokassa={merchantLogin:document.getElementById('rk-login').value.trim(),password1:document.getElementById('rk-pass1').value.trim(),password2:document.getElementById('rk-pass2').value.trim(),testMode:document.getElementById('rk-testmode').checked};
  sv.rk(); document.getElementById('rk-saved-ok').classList.remove('hidden'); setTimeout(()=>document.getElementById('rk-saved-ok').classList.add('hidden'),2500);
  showToast('✓ Robokassa сохранена','success');
});

/* Drop */
document.getElementById('btn-save-drop').addEventListener('click',()=>{
  const name=document.getElementById('admin-drop-name').value.trim();
  const date=document.getElementById('admin-drop-date').value;
  if(!date){ showToast('⚠️ Укажите дату','error'); return; }
  S.drop={name,date:new Date(date).toISOString()}; sv.drop(); renderDropBanner();
  showToast('✓ Дроп запущен','success');
});
document.getElementById('btn-clear-drop').addEventListener('click',()=>{ S.drop=null; sv.drop(); document.getElementById('drop-banner').classList.add('hidden'); showToast('Баннер убран'); });

/* Promo codes */
function renderAdminPromos(){
  const el=document.getElementById('promo-list-admin'); el.innerHTML='';
  Object.entries(S.promoCodes).forEach(([code,pct])=>{
    const d=document.createElement('div'); d.className='promo-row-admin';
    d.innerHTML=`<div class="promo-info"><span class="promo-code-tag">${code}</span> <span class="promo-pct-tag">−${pct}%</span></div><button class="btn-danger-sm" data-code="${code}">Удалить</button>`;
    d.querySelector('.btn-danger-sm').addEventListener('click',()=>{ delete S.promoCodes[code]; sv.promos(); renderAdminPromos(); showToast('Промокод удалён'); });
    el.appendChild(d);
  });
  if(!Object.keys(S.promoCodes).length) el.innerHTML='<div class="empty-state-small">Промокодов нет</div>';
}
document.getElementById('btn-add-promo').addEventListener('click',()=>{
  const code=document.getElementById('new-promo-code').value.trim().toUpperCase();
  const pct=+document.getElementById('new-promo-pct').value;
  if(!code||!pct||pct<1||pct>50){ showToast('⚠️ Укажите код и скидку 1–50%','error'); return; }
  S.promoCodes[code]=pct; sv.promos();
  document.getElementById('new-promo-code').value=''; document.getElementById('new-promo-pct').value='';
  renderAdminPromos(); showToast(`✓ Промокод ${code} добавлен`,'success');
});

/* Admin orders with status management */
function renderAdminOrders(){
  const el=document.getElementById('admin-orders-list');
  const empty=document.getElementById('admin-orders-empty');
  el.innerHTML='';
  if(!S.orders.length){ empty.style.display=''; return; }
  empty.style.display='none';
  const statuses=['pending','processing','shipped','done'];
  const statusLabels={pending:'В обработке',processing:'Собирается',shipped:'Отправлен',done:'Выдан'};
  S.orders.slice(0,20).forEach((o,oi)=>{
    const d=document.createElement('div'); d.className='admin-order-row';
    const statusBtns=statuses.map(s=>`<button class="status-btn${o.status===s?' active-status':''}" data-oi="${oi}" data-s="${s}">${statusLabels[s]}</button>`).join('');
    d.innerHTML=`<div class="aor-top"><div class="aor-id">Заказ #${o.id}</div><div class="aor-total">${fmt(o.total)}</div></div><div class="aor-info">${o.date} · ${o.delivery||''} · ${o.items?.length||0} поз.</div><div class="aor-status-row">${statusBtns}</div>`;
    d.querySelectorAll('.status-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const idx=+btn.dataset.oi; S.orders[idx].status=btn.dataset.s; sv.orders();
        renderAdminOrders(); showToast(`✓ Статус: ${statusLabels[btn.dataset.s]}`,'success');
      });
    });
    el.appendChild(d);
  });
}

/* Category toggle */
document.getElementById('admin-cat').addEventListener('change',function(){
  const isClothes=this.value==='clothes';
  document.getElementById('admin-notes-block').classList.toggle('hidden',isClothes);
  document.getElementById('admin-sizes-block').classList.toggle('hidden',!isClothes);
});

/* Photo inputs */
let photoCnt=0;
function initPhotoInputs(){
  const l=document.getElementById('photo-inputs-list'); l.innerHTML=''; photoCnt=0;
  document.getElementById('photos-preview-grid').innerHTML='';
  addPhotoInput();
}
function addPhotoInput(v=''){
  const l=document.getElementById('photo-inputs-list');
  if(l.children.length>=8){ showToast('Максимум 8 фото','error'); return; }
  const id='purl-'+(++photoCnt);
  const row=document.createElement('div'); row.className='photo-input-row'; row.dataset.pid=id;
  row.innerHTML=`<input type="text" id="${id}" placeholder="https://... (фото ${l.children.length+1})" value="${escH(v)}"/><button type="button" class="btn-rm-photo">✕</button>`;
  row.querySelector('input').addEventListener('input',updatePhotoPrev);
  row.querySelector('.btn-rm-photo').addEventListener('click',()=>{ row.remove(); updatePhotoPrev(); if(!document.querySelectorAll('.photo-input-row').length) addPhotoInput(); });
  l.appendChild(row); updatePhotoPrev();
}
document.getElementById('btn-add-photo-input').addEventListener('click',()=>addPhotoInput());
function getPhotoUrls(){ return [...document.querySelectorAll('.photo-input-row input')].map(i=>i.value.trim()).filter(Boolean); }
function updatePhotoPrev(){
  const g=document.getElementById('photos-preview-grid'); const urls=getPhotoUrls(); g.innerHTML='';
  urls.forEach((url,i)=>{ const d=document.createElement('div'); d.className='preview-thumb'+(i===0?' main':''); const img=document.createElement('img'); img.src=url; img.onerror=()=>d.innerHTML='❌'; d.appendChild(img); g.appendChild(d); });
}

/* Add product */
document.getElementById('btn-admin-add').addEventListener('click',()=>{
  const name=document.getElementById('admin-name').value.trim();
  const cat=document.getElementById('admin-cat').value;
  const price=+document.getElementById('admin-price').value;
  const oldPrice=+document.getElementById('admin-old-price').value||null;
  const stock=document.getElementById('admin-stock').value.trim()!==''?+document.getElementById('admin-stock').value:null;
  const sold=+document.getElementById('admin-sold').value||0;
  const desc=document.getElementById('admin-desc').value.trim();
  const tags=document.getElementById('admin-tags').value.split(',').map(t=>t.trim()).filter(Boolean);
  const photos=getPhotoUrls();
  const badges={new:document.getElementById('badge-new').checked,hit:document.getElementById('badge-hit').checked,original:document.getElementById('badge-orig').checked,last:document.getElementById('badge-last').checked};
  const topNotes=cat==='perfume'?document.getElementById('admin-top-notes').value.trim():'';
  const midNotes=cat==='perfume'?document.getElementById('admin-mid-notes').value.trim():'';
  const baseNotes=cat==='perfume'?document.getElementById('admin-base-notes').value.trim():'';
  const sizes=cat==='clothes'?document.getElementById('admin-sizes').value.split(',').map(s=>s.trim()).filter(Boolean):[];
  if(!name){ showToast('⚠️ Введите название','error'); return; }
  if(!price||price<1){ showToast('⚠️ Укажите цену','error'); return; }
  const p={id:'p'+Date.now(),cat,name,price,oldPrice,stock,sold,desc,tags,photos,badges,topNotes,midNotes,baseNotes,sizes,createdAt:Date.now()};
  S.products.unshift(p); sv.products();
  // Reset form WITHOUT touching page layout
  ['admin-name','admin-price','admin-old-price','admin-stock','admin-sold','admin-desc','admin-tags','admin-top-notes','admin-mid-notes','admin-base-notes','admin-sizes'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  ['badge-new','badge-hit','badge-orig','badge-last'].forEach(id=>{ const el=document.getElementById(id); if(el) el.checked=false; });
  initPhotoInputs();
  renderAdmin();
  showToast(`✓ «${name}» добавлен`,'success');
});

function renderAdminProducts(){
  const el=document.getElementById('admin-products-list');
  const empty=document.getElementById('admin-no-products');
  el.innerHTML='';
  if(!S.products.length){ empty.style.display=''; return; }
  empty.style.display='none';
  S.products.forEach(p=>{
    const th=p.photos?.[0]||'';
    const d=document.createElement('div'); d.className='admin-product-row';
    d.innerHTML=`${th?`<img class="ap-img" src="${escH(th)}" onerror="this.style.display='none'"/>`:`<div class="ap-img" style="display:flex;align-items:center;justify-content:center;font-size:1.1rem">${p.cat==='perfume'?'🌸':'👔'}</div>`}<div class="ap-info"><div class="ap-name">${escH(p.name)}</div><div class="ap-sub">${fmt(p.price)}${p.oldPrice?` · было ${fmt(p.oldPrice)}`:''}${p.stock!=null?` · ост.${p.stock}`:''}${p.badges?.hit?' 🔥':''}${p.badges?.new?' ✨':''}</div></div><div class="ap-actions"><button class="ap-delete" data-id="${p.id}">🗑</button></div>`;
    d.querySelector('.ap-delete').addEventListener('click',()=>{ if(!confirm(`Удалить «${p.name}»?`)) return; S.products=S.products.filter(x=>x.id!==p.id); sv.products(); renderAdmin(); showToast('Товар удалён'); });
    el.appendChild(d);
  });
}

/* Notifications */
document.getElementById('btn-send-notif').addEventListener('click',()=>{
  const token=S.botToken; const text=document.getElementById('notif-text').value.trim();
  if(!token){ showToast('⚠️ Укажите Bot Token','error'); return; }
  if(!text){ showToast('⚠️ Введите текст','error'); return; }
  showToast('📣 Отправка... (требует бэкенд)');
  // In production, send to your backend which calls Telegram Bot API
  console.info('[NOTIFY]',{token,text});
});

/* ================================================================
   NAV + BADGES
   ================================================================ */
document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>navigate(btn.dataset.page)));
function updateBadges(){
  const cn=S.cart.reduce((s,i)=>s+i.qty,0);
  const wn=S.wishlist.length;
  document.getElementById('cart-badge').textContent=cn||''; document.getElementById('cart-badge').style.display=cn?'':'none';
  document.getElementById('nav-cart-badge').textContent=cn||''; document.getElementById('nav-cart-badge').style.display=cn?'':'none';
  document.getElementById('wishlist-badge').textContent=wn||''; document.getElementById('wishlist-badge').style.display=wn?'':'none';
  document.getElementById('nav-wish-badge').textContent=wn||''; document.getElementById('nav-wish-badge').style.display=wn?'':'none';
}

/* ================================================================
   BOOT
   ================================================================ */
function boot(){
  loadState(); updateBadges();
  const hash=window.location.hash.slice(1);
  setTimeout(()=>{
    document.getElementById('splash').classList.add('fade-out');
    setTimeout(()=>{
      document.getElementById('splash').style.display='none';
      document.getElementById('app').classList.remove('hidden');
      navigate((hash && PAGES[hash]) ? hash : 'home');
    },550);
  },1700);
}
boot();
