(()=>{
const R = n => 'R ' + n.toLocaleString('en-ZA').replace(/,/g,' ').replace(/ /g,' ');

/* ---------- vehicle data ---------- */
const MODELS = [
 {id:'e2',name:'E2',kind:'ev',groups:['ev'],body:'hatch',badge:'Electric',tag:'City electric hatch',plan:'5 yr / 100 000 km',
  blurb:"South Africa's most affordable EV at launch. Rear-wheel drive, 325 km of range, a 70-litre front trunk and 375 litres of boot space.",
  labels:{range:'Range (WLTP)',power:'Power',accel:'0–100 km/h',energy:'Battery',extra:'DC fast charge',cover:'Warranty'},
  derivs:[
   {n:'Aspire',stock:'import',price:339900,rangeKm:325,range:'325 km',power:'85 kW / 150 Nm',accel:'11.5 s',energy:'39.4 kWh LFP',extra:'30–80% in 25 min',cover:'4 yr / 150 000 km',ac:{h:'6.5 h',span:'10–100%'},dc:{t:'25 min'},
    img:{src:'e2-aspire-street.webp',fit:'scene'},
    feat:['15" steel wheels, all-LED lights','14.6" touchscreen with Apple CarPlay and Android Auto','Blind spot detection and rear cross traffic alert','Rear camera and rear parking sensors','Vehicle-to-load power supply']},
   {n:'Apex',stock:'import',price:389900,rangeKm:325,range:'325 km',power:'85 kW / 150 Nm',accel:'11.5 s',energy:'39.4 kWh LFP',extra:'30–80% in 25 min',cover:'4 yr / 150 000 km',ac:{h:'6.5 h',span:'10–100%'},dc:{t:'25 min'},
    img:{src:'e2-apex-green.webp',fit:'cut',ground:[6,5]},
    feat:['16" alloys, two-tone paint, privacy glass','Adaptive cruise and automatic emergency braking','360° camera with transparent chassis view','6-way power seat, wireless charging, 6 speakers','256-colour ambient lighting']}
  ]},
 {id:'e5emi',name:'E5 EM-i',kind:'phev',groups:['phev'],body:'suv',badge:'Plug-in hybrid',tag:'Midsize plug-in hybrid SUV',plan:'5 yr / 75 000 km',
  blurb:'Electric for the daily run, petrol for the long road. Up to 105 km on battery alone and a claimed 943 km on one tank and charge.',
  labels:{range:'Total range (WLTP)',power:'Electric motor',accel:'0–100 km/h',energy:'Battery',extra:'Electric range',cover:'Warranty'},
  derivs:[
   {n:'Aspire',stock:'import',price:599999,rangeKm:943,evKm:105,range:'943 km',power:'160 kW / 262 Nm',accel:'8.0 s',energy:'18.4 kWh',extra:'105 km',cover:'6 yr / 150 000 km',ac:{kw:'7 kW'},dc:{t:'20 min'},
    img:{src:'e5emi-aspire-silver.webp',fit:'cut',ground:[12,13]},
    feat:['18" alloy wheels and 6 airbags','7 kW home charging capability','Claimed 6.2 l/100 km (WLTP)','5 yr / 75 000 km service plan']},
   {n:'Apex',stock:'import',price:679999,rangeKm:943,evKm:105,range:'943 km',power:'160 kW / 262 Nm',accel:'8.1 s',energy:'18.4 kWh',extra:'105 km',cover:'6 yr / 150 000 km',ac:{kw:'7 kW'},dc:{t:'20 min'},
    img:{src:'e5emi-apex-green.webp',fit:'cut',ground:[12,13]},
    feat:['19" low-drag alloy wheels','256-colour ambient lighting','Split-folding rear seat','Ivory White interior option']}
  ]},
 {id:'e5',name:'E5',kind:'ev',groups:['ev'],body:'suv',badge:'Electric',tag:'Midsize electric SUV',home7:'about 9–10 h',plan:'6 yr / 120 000 km',
  blurb:'The flagship electric SUV. 160 kW, a short-blade LFP battery, heat pump and 100 kW DC charging, with up to 450 km of range.',
  labels:{range:'Range (WLTP)',power:'Power',accel:'0–100 km/h',energy:'Battery',extra:'DC fast charge',cover:'Warranty'},
  derivs:[
   {n:'Aspire',stock:'import',price:699999,rangeKm:430,range:'430 km',power:'160 kW / 320 Nm',accel:'6.9 s',energy:'60.22 kWh LFP',extra:'30–80% in 20 min',cover:'6 yr / 150 000 km',ac:{h:'6.1 h',span:'10–100%',kw:'up to 11 kW'},dc:{t:'20 min'},
    img:{src:'e5-aspire-side.webp',fit:'cut',ground:[13,12]},
    feat:['18" alloy wheels','15.4" screen, 10.2" digital cluster','Heat pump and ventilated front seats','6 yr / 120 000 km service plan']},
   {n:'Apex Plus',stock:'import',price:788888,rangeKm:450,range:'450 km',power:'160 kW / 320 Nm',accel:'7.6 s',energy:'68.39 kWh LFP',extra:'30–80% in 20 min',cover:'6 yr / 150 000 km',ac:{h:'7 h',span:'10–100%',kw:'up to 11 kW'},dc:{t:'20 min'},
    img:{src:'e5-apex-front.webp',fit:'cut',ground:[7,6]},
    feat:['Larger 68.39 kWh battery, 450 km range','Head-up display and panoramic sunroof','1 000 W, 16-speaker Flyme audio','19" alloys, powered tailgate']}
  ]},
 {id:'rd6',name:'Riddara RD6',kind:'ev',groups:['ev','bakkie'],body:'bakkie',badge:'Electric bakkie',tag:'Electric double cab',plan:'6 yr / 120 000 km',
  blurb:'A bakkie that drives like an SUV. Up to 315 kW, over a ton of payload, up to 3 000 kg towing and a 70-litre front trunk.',
  labels:{range:'Range (NEDC)',power:'Power',accel:'0–100 km/h',energy:'Battery',extra:'Payload / tow',cover:'Warranty'},
  derivs:[
   {n:'Aspire Econ 2WD',stock:'import',price:611900,rangeKm:null,range:'369 km',power:'180 kW / 309 Nm',accel:'9.0 s',energy:'63 kWh LFP',extra:'1 115 kg / 2 500 kg',cover:'6 yr / 150 000 km',ac:{h:'7.9 h',span:'20–100%',kw:'6.6 kW'},dc:{t:'32 min',kw:'90 kW'},
    img:{src:'rd6-aspire-2wd-white.webp',fit:'scene'},
    feat:['Rear-wheel drive, 3 drive modes','17" alloys with all-terrain tyres','90 kW DC charging, 30–80% in 32 min','6.6 kW power outlet in the load bin']},
   {n:'Aspire Econ 4WD',stock:'import',price:681900,rangeKm:null,range:'390 km',power:'280 kW / 485 Nm',accel:'7.0 s',energy:'73 kWh LFP',extra:'1 235 kg / 3 000 kg',cover:'6 yr / 150 000 km',ac:{h:'9.3 h',span:'20–100%',kw:'6.6 kW'},dc:{t:'30 min',kw:'90 kW'},
    img:{src:'rd6-aspire-4wd-black.webp',fit:'scene'},
    feat:['Dual-motor four-wheel drive','Sand, Mud and Off-road modes','95% maximum climbing gradient','4 airbags, 360° camera']},
   {n:'Apex 4WD',stock:'waitlist',price:781900,rangeKm:null,range:'424 km',power:'315 kW / 595 Nm',accel:'4.5 s*',energy:'73 kWh LFP',extra:'1 030 kg / 3 000 kg',cover:'6 yr / 150 000 km',ac:{h:'9.3 h',span:'20–100%',kw:'6.6 kW'},dc:{t:'30 min',kw:'110 kW'},
    img:{src:'rd6-apex-4wd-green.webp',fit:'scene'},
    feat:['14.6" screen, 10.2" cluster, 8 speakers','L2+ driver assistance with 14 functions','815 mm wading and Wading mode','LED headlights, 18" alloys, 6 airbags']}
  ]}
];
const COLORS={ev:'#1F6B73',phev:'#1F6B73'};
const STOCK={
 import:{label:'In import',detail:'ETA about 2 weeks',short:'in import',cta:'Reserve'},
 waitlist:{label:'Out of stock',detail:'next batch date to be confirmed',short:'waiting list',cta:'Join the waiting list'}
};
const stockOf=d=>STOCK[d.stock];
const stockChip=d=>`<span class="stock s-${d.stock}"><i aria-hidden="true"></i>${stockOf(d).label} · ${stockOf(d).detail}</span>`;
const CHARGER_FEAT='Free home charger installation (<a href="terms.html#charger">T&amp;Cs&nbsp;apply</a>)';
const WA=msg=>'https://wa.me/27836249080?text='+encodeURIComponent(msg);
const EFT_NOTE='<div class="eft-note" role="note"><p>Eco EV will never change our banking details by email or WhatsApp. Always phone us on <a href="tel:+27836249080">083 624 9080</a> to confirm banking details before you pay.</p></div>';
const WA_ICON='<i class="wa-ico" aria-hidden="true"></i>';

/* ---------- car renders ---------- */
const SHAPES={
 suv:{w:[150,470],r:38,arch:46,
  body:'M40,166 L36,124 Q38,100 62,82 L96,68 Q110,62 140,61 L400,60 Q425,61 440,70 L492,104 Q500,108 520,110 L560,118 Q576,122 578,138 L578,162 Q578,166 572,166 L516,166 A46,46 0 0 0 424,166 L196,166 A46,46 0 0 0 104,166 Z',
  glass:'M112,77 L142,69 L396,68 Q414,69 428,78 L466,103 L118,103 Z',
  lines:['M262,69 L258,103','M346,68 L350,103','M58,122 L566,126','M540,116 L574,125','M38,104 L66,99','M200,104 L200,160']},
 hatch:{w:[170,450],r:34,arch:41,
  body:'M70,166 L66,128 Q66,104 84,92 L120,70 Q132,64 160,63 L370,64 Q392,65 408,78 L452,108 Q462,112 488,116 L520,122 Q532,126 532,142 L532,162 Q532,166 526,166 L491,166 A41,41 0 0 0 409,166 L211,166 A41,41 0 0 0 129,166 Z',
  glass:'M128,79 L162,71 L364,71 Q382,72 394,82 L428,107 L124,107 Z',
  lines:['M276,71 L276,107','M82,126 L522,130','M500,118 L528,126','M68,108 L90,104']},
 crossover:{w:[160,460],r:37,arch:45,
  body:'M48,166 L44,126 Q44,104 64,90 L104,72 Q120,64 150,62 L380,62 Q408,63 428,76 L484,108 Q494,112 516,114 L556,120 Q570,124 570,140 L570,162 Q570,166 564,166 L505,166 A45,45 0 0 0 415,166 L205,166 A45,45 0 0 0 115,166 Z',
  glass:'M116,80 L152,70 L376,70 Q400,71 416,82 L458,107 L120,107 Z',
  lines:['M270,70 L268,107','M60,124 L560,128','M532,118 L566,128','M50,90 L94,82','M46,108 L72,104']},
 bakkie:{w:[140,480],r:40,arch:50,
  body:'M30,166 L28,110 L220,110 L232,62 Q236,56 250,56 L420,56 Q436,57 448,68 L490,104 Q498,108 520,110 L566,116 Q580,120 580,138 L580,162 Q580,166 574,166 L530,166 A50,50 0 0 0 430,166 L190,166 A50,50 0 0 0 90,166 Z',
  glass:'M240,70 Q244,64 256,64 L416,64 Q428,65 438,74 L474,104 L236,104 Z',
  lines:['M345,64 L345,104','M30,124 L572,126','M546,113 L578,122','M30,110 L30,128','M220,110 L224,166']}
};
let uid=0;
function carSVG(shapeKey,color,opts={}){
  const s=SHAPES[shapeKey],id='c'+(++uid),spokes=opts.spokes||5,drive=opts.drive||'';
  const wheels=s.w.map(x=>`
    <circle cx="${x}" cy="166" r="${s.r}" fill="#F7F4EF" stroke="${color}" stroke-width="1.4" filter="url(#${id}g)"/>
    <circle cx="${x}" cy="166" r="${s.r*0.62}" fill="none" stroke="${color}" stroke-opacity=".55" stroke-width="1"/>
    ${Array.from({length:spokes},(_,k)=>k*360/spokes).map(a=>{const r1=s.r*0.18,r2=s.r*0.6,t=a*Math.PI/180;return `<line x1="${(x+r1*Math.cos(t)).toFixed(1)}" y1="${(166+r1*Math.sin(t)).toFixed(1)}" x2="${(x+r2*Math.cos(t+.25)).toFixed(1)}" y2="${(166+r2*Math.sin(t+.25)).toFixed(1)}" stroke="${color}" stroke-opacity=".5" stroke-width="1"/>`}).join('')}
    <circle cx="${x}" cy="166" r="3" fill="${color}"/>`).join('');
  const motors=(drive==='4wd'?s.w:drive==='rwd'?[s.w[0]]:[]).map(x=>`<circle cx="${x}" cy="166" r="${s.r+7}" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="3 5" opacity=".8" filter="url(#${id}g)"/>`).join('')
    +(drive==='4wd'?`<line x1="${s.w[0]}" y1="190" x2="${s.w[1]}" y2="190" stroke="${color}" stroke-opacity=".5" stroke-dasharray="2 6"/>`:'');
  const car=`
    <path d="${s.body}" fill="url(#${id}f)" stroke="${color}" stroke-width="1.6" stroke-linejoin="round" filter="url(#${id}g)"/>
    <path d="${s.glass}" fill="url(#${id}w)" stroke="${color}" stroke-opacity=".7" stroke-width="1"/>
    ${s.lines.map(d=>`<path d="${d}" fill="none" stroke="${color}" stroke-opacity=".45" stroke-width="1"/>`).join('')}
    <path class="trace-pulse" d="${s.body}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" filter="url(#${id}g)"/>
    ${wheels}${motors}`;
  return `<svg viewBox="0 0 620 300" role="img" aria-label="${opts.label||'Vehicle render'}">
   <defs>
    <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".16"/><stop offset=".7" stop-color="${color}" stop-opacity=".03"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient>
    <linearGradient id="${id}w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".22"/><stop offset=".5" stop-color="#ffffff" stop-opacity=".2"/><stop offset="1" stop-color="${color}" stop-opacity=".08"/></linearGradient>
    <radialGradient id="${id}p" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient>
    <linearGradient id="${id}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <mask id="${id}k"><rect x="0" y="206" width="620" height="94" fill="url(#${id}m)"/></mask>
    <filter id="${id}g" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
   </defs>
   <ellipse cx="310" cy="206" rx="300" ry="22" fill="url(#${id}p)"/>
   <line x1="0" y1="206" x2="620" y2="206" stroke="${color}" stroke-opacity=".25" stroke-width="1"/>
   <g transform="translate(10,40)">${car}</g>
   <g mask="url(#${id}k)" opacity=".35"><g transform="translate(10,372) scale(1,-1)">${car.replace('class="trace-pulse"','class="trace-pulse" opacity="0"')}</g></g>
  </svg>`;
}

const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function variant(m,i){const n=m.derivs[i].n;return {spokes:[5,6,10][i]||5,drive:/4wd/i.test(n)?'4wd':/2wd/i.test(n)?'rwd':''}}
function imgOf(m,d){return d.img||m.img||null}
function photo(m,d){const im=imgOf(m,d);if(!im)return '';
  const img=cls=>`<img${cls} alt="Geely ${m.name} ${d.n}" src="images/${im.src}" loading="lazy">`;
  if(im.fit!=='cut')return img(` class="photo ${im.fit}"`);
  const g=im.ground||[8,8];
  return `<div class="photo cut${im.small?' small':''}" data-gl="${g[0]}" data-gr="${g[1]}">${img('')}</div>`}
window.__photo=photo;
/* The CSP blocks inline style attributes, so the tyre extents for the ground shadow are set through the CSSOM */
function applyGround(root){root.querySelectorAll('.photo.cut[data-gl]').forEach(el=>{el.style.setProperty('--gl',el.dataset.gl+'%');el.style.setProperty('--gr',el.dataset.gr+'%')})}
/* A missing photo falls back to the light-traced render (replaces inline onerror handlers, which the CSP blocks) */
document.addEventListener('error',e=>{const img=e.target;if(img.tagName!=='IMG')return;const vis=img.closest('.m-visual');if(!vis)return;
  vis.classList.remove('has-photo','is-cut','is-scene');(img.closest('.photo')||img).remove()},true);
/* hero car */
const HERO=MODELS.find(m=>m.id==='rd6').derivs[2];document.getElementById('heroStock').innerHTML=stockChip(HERO);
const heroCar=document.getElementById('heroCar');heroCar.classList.add('has-photo','is-scene');
heroCar.insertAdjacentHTML('beforeend',`<div class="swap">${carSVG('bakkie','#1F6B73',{label:'Light-traced render of the Riddara RD6 Apex 4WD',spokes:10,drive:'4wd'})}</div><img class="photo scene" alt="Geely Riddara RD6 Apex 4WD in blue" src="images/rd6-hero-blue.webp" fetchpriority="high">`);

/* ---------- model stages ---------- */
let filter='all';
const state={}; MODELS.forEach(m=>state[m.id]=0); state.rd6=2;
const list=document.getElementById('modelList');
function specHTML(m,d){
  const L=m.labels;
  return ['range','power','accel','energy','extra','cover'].map(k=>`<div class="spec"><dt>${L[k]}</dt><dd>${d[k]}</dd></div>`).join('');
}
function renderModel(m){
  const d=m.derivs[state[m.id]];
  return `<article class="model" data-kind="${m.kind}" data-groups="${m.groups.join(' ')}" id="m-${m.id}" aria-labelledby="mn-${m.id}">
    <div class="m-info">
      <div class="m-top">
        <div><h3 class="m-name" id="mn-${m.id}">${m.name}</h3><div class="m-tag">${m.tag}</div></div>
        <span class="badge">${m.badge}</span>
      </div>
      <p class="m-blurb">${m.blurb}</p>
      <div class="derivs" role="group" aria-label="${m.name} derivatives">
        ${m.derivs.map((x,i)=>`<button class="deriv" data-m="${m.id}" data-i="${i}" aria-pressed="${i===state[m.id]}"><i class="dot s-${x.stock}" aria-hidden="true"></i>${x.n}<span class="vh">, ${stockOf(x).label.toLowerCase()}</span></button>`).join('')}
      </div>
      <div class="price"><span class="amt num">${R(d.price)}</span><span class="note">${m.name} ${d.n} · straight purchase</span></div>
      <div>${stockChip(d)}</div>
      <dl class="specs">${specHTML(m,d)}</dl>
      <ul class="feats">${[...d.feat,CHARGER_FEAT].map(f=>`<li>${f}</li>`).join('')}</ul>
      <div class="m-actions">
        <a href="#reserve" class="btn" data-res="${m.id}">${d.stock==='waitlist'?stockOf(d).cta:'Reserve '+d.n}</a>
        <a href="#compare" class="btn ghost" data-cmp="${m.id}">Compare</a>
      </div>
      <a class="wa-link" href="${WA(`Hi Eco EV, I'm interested in the ${m.name} ${d.n}.`)}" target="_blank" rel="noopener noreferrer">${WA_ICON}Ask on WhatsApp</a>
    </div>
    <div class="m-visual${imgOf(m,d)?' has-photo is-'+imgOf(m,d).fit:''}">
      <span class="big" aria-hidden="true">${d.n.split(' ')[0]}</span>
      <div class="swap">${carSVG(m.body,COLORS[m.kind],{label:`Light-traced render of the ${m.name} ${d.n}`,...variant(m,state[m.id])})}</div>
      ${photo(m,d)}
      <span class="slot">${m.name} ${d.n}</span>
    </div>
  </article>`;
}
function drawModels(){list.innerHTML=MODELS.map(renderModel).join('');applyGround(list);applyFilter()}
drawModels();

list.addEventListener('click',e=>{
  const b=e.target.closest('.deriv');
  if(b){state[b.dataset.m]=+b.dataset.i;const m=MODELS.find(x=>x.id===b.dataset.m);
    const el=document.getElementById('m-'+m.id);el.outerHTML=renderModel(m);applyGround(document.getElementById('m-'+m.id));
    document.querySelector(`#m-${m.id} .deriv[data-i="${b.dataset.i}"]`).focus();applyFilter();return}
  const c=e.target.closest('[data-cmp]');
  if(c){const sel=document.getElementById('cmp0');sel.value=c.dataset.cmp+':'+state[c.dataset.cmp];drawCompare()}
});

const filters=document.getElementById('filters');
filters.addEventListener('click',e=>{
  const b=e.target.closest('.chip');if(!b)return;filter=b.dataset.f;
  filters.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));applyFilter();
});
function applyFilter(){list.querySelectorAll('.model').forEach(el=>{el.hidden=!(filter==='all'||el.dataset.groups.split(' ').includes(filter))})}

/* ---------- compare ---------- */
const ALL=[];MODELS.forEach(m=>m.derivs.forEach((d,i)=>ALL.push({key:m.id+':'+i,m,d,label:m.name+' '+d.n})));
const defaults=['rd6:2','e5:1','e2:1'];
const pick=document.getElementById('cmpPick');
pick.innerHTML=[0,1,2].map(i=>`<label for="cmp${i}">Vehicle ${i+1}<select id="cmp${i}">${ALL.map(a=>`<option value="${a.key}">${a.label}</option>`).join('')}</select></label>`).join('');
[0,1,2].forEach(i=>{const s=document.getElementById('cmp'+i);s.value=defaults[i];s.addEventListener('change',drawCompare)});
function drawCompare(){
  const sel=[0,1,2].map(i=>ALL.find(a=>a.key===document.getElementById('cmp'+i).value));
  const rows=[
    ['Price',a=>R(a.d.price),a=>-a.d.price],
    ['Powertrain',a=>a.m.badge,null],
    ['Range',a=>a.d.range+(/NEDC/.test(a.m.labels.range)?' (NEDC)':' (WLTP)'),a=>a.d.rangeKm||0],
    ['Power',a=>a.d.power,a=>parseFloat(a.d.power)||0],
    ['0–100 km/h',a=>/s\*?$/.test(a.d.accel)?a.d.accel:'—',a=>/s\*?$/.test(a.d.accel)?-parseFloat(a.d.accel):-99],
    ['Battery',a=>a.d.energy,null],
    ['More',a=>`${a.d.extra}<small class="lab">${a.m.labels.extra}</small>`,null],
    ['Availability',a=>stockChip(a.d),null],
    ['Warranty / plan',a=>a.d.cover,null]
  ];
  const t=document.getElementById('cmpTable');
  t.innerHTML=`<thead><tr><th scope="col"><span class="eyebrow">Spec</span></th>${sel.map(a=>`<th scope="col">${a.label}</th>`).join('')}</tr></thead><tbody>${
    rows.map(([lab,fmt,score])=>{
      let best=-1;if(score){const sc=sel.map(score);const mx=Math.max(...sc);if(sc.filter(v=>v===mx).length<3)best=sc.indexOf(mx)}
      return `<tr><th scope="row">${lab}</th>${sel.map((a,i)=>`<td class="${i===best?'best':''}">${fmt(a)}</td>`).join('')}</tr>`}).join('')
  }</tbody>`;
  document.getElementById('cmpNote').hidden=!sel.some(a=>a.key==='rd6:2');
}
drawCompare();

/* ---------- reservation ---------- */
const fModel=document.getElementById('fModel'),fDeriv=document.getElementById('fDeriv'),form=document.getElementById('resForm');
fModel.innerHTML=MODELS.map(m=>`<option value="${m.id}">${m.name}</option>`).join('');
function fillDerivs(){const m=MODELS.find(x=>x.id===fModel.value);fDeriv.innerHTML=m.derivs.map((d,i)=>`<option value="${i}">${d.n} · ${R(d.price)} · ${stockOf(d).short}</option>`).join('');syncSubmit()}
function selDeriv(){return MODELS.find(x=>x.id===fModel.value).derivs[+fDeriv.value]}
function syncSubmit(){const b=form.querySelector('button[type=submit]');if(!b.disabled)b.textContent=submitLabel()}
function submitLabel(){const d=selDeriv();return d&&d.stock==='waitlist'?'Join the waiting list':'Reserve this car'}
fDeriv.addEventListener('change',syncSubmit);
fModel.addEventListener('change',fillDerivs);fModel.value='rd6';fillDerivs();fDeriv.value='2';syncSubmit();
const done=document.getElementById('done'),err=document.getElementById('fErr');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('fName').value.trim(),phone=document.getElementById('fPhone').value.trim();
  if(!name){err.textContent='Add your name so we know who the car is for.';document.getElementById('fName').focus();return}
  if(phone.replace(/\D/g,'').length<9){err.textContent='Add a mobile number with at least 9 digits so we can call you.';document.getElementById('fPhone').focus();return}
  const consent=document.getElementById('fConsent'),marketing=document.getElementById('fMarketing');
  if(!consent.checked){err.textContent='Please tick the box to agree to the Privacy Notice, so we can use your details to reply.';consent.setAttribute('aria-invalid','true');consent.focus();return}
  consent.removeAttribute('aria-invalid');
  err.textContent='';
  const m=MODELS.find(x=>x.id===fModel.value),d=m.derivs[+fDeriv.value];
  const ref='ECO-'+Math.random().toString(36).slice(2,7).toUpperCase();
  const pay=form.querySelector('input[name=pay]:checked').value;
  const summary=`Reservation ${ref}\n${m.name} ${d.n} · ${R(d.price)}\nAvailability: ${stockOf(d).label}, ${stockOf(d).detail}\nPayment: ${pay}\nName: ${name}\nMobile: ${phone}\nEmail: ${document.getElementById('fEmail').value.trim()||'—'}\nNotes: ${document.getElementById('fNote').value.trim()||'—'}\nPrivacy consent: Yes\nNews and offers: ${marketing.checked?'Yes':'No'}`;
  document.getElementById('fRef').value=ref;document.getElementById('fPrice').value=R(d.price);document.getElementById('fStock').value=stockOf(d).label+' · '+stockOf(d).detail;
  const body=new URLSearchParams(new FormData(form));body.set('model',m.name);body.set('derivative',d.n);
  /* an unticked checkbox is left out of FormData, so send both answers explicitly */
  body.set('consent','Yes');body.set('marketing',marketing.checked?'Yes':'No');
  const btn=form.querySelector('button[type=submit]');btn.disabled=true;btn.textContent='Sending…';
  const show=ok=>{
    done.hidden=false;
    done.innerHTML=ok
      ?`<div class="eyebrow">Reservation received</div><div class="ref">${ref}</div><p class="fine">Thank you. The Eco EV team will contact you on the number you gave to confirm your quote. Keep this reference.</p>${EFT_NOTE}<p class="fine">Want a faster reply? <a class="wa-link" href="${WA(`Hi Eco EV, I've just reserved online. My reference is ${ref}.`)}" target="_blank" rel="noopener noreferrer">${WA_ICON}WhatsApp us</a></p><pre id="sum"></pre>`
      :`<div class="eyebrow">Not sent</div><div class="ref">${ref}</div><p class="fine">Your reservation didn't go through. Check your connection and try again, or copy the details and send them to us.</p><pre id="sum"></pre><div><button type="button" class="btn ghost" id="copy">Copy details</button></div>`;
    document.getElementById('sum').textContent=summary;
    const cp=document.getElementById('copy');
    if(cp)cp.addEventListener('click',()=>{navigator.clipboard.writeText(summary).then(()=>{cp.textContent='Copied'}).catch(()=>{const r=document.createRange();r.selectNodeContents(document.getElementById('sum'));const sl=getSelection();sl.removeAllRanges();sl.addRange(r);cp.textContent='Selected, press copy'})});
    if(ok){form.querySelectorAll('input:not([type=hidden]):not([type=radio]):not([type=checkbox]),textarea').forEach(i=>i.value='');consent.checked=marketing.checked=false}
    done.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()})
    .then(r=>show(r.ok)).catch(()=>show(false))
    .finally(()=>{btn.disabled=false;btn.textContent=submitLabel()});
});

document.addEventListener('click',e=>{const r=e.target.closest('[data-res]');if(!r)return;fModel.value=r.dataset.res;fillDerivs();fDeriv.value=r.dataset.di??state[r.dataset.res];syncSubmit()});
/* "Ask about the charger offer" adds a line to the notes without wiping what's there */
document.addEventListener('click',e=>{const a=e.target.closest('[data-note]');if(!a)return;const n=document.getElementById('fNote'),t=a.dataset.note;
  if(!n.value.includes(t))n.value=n.value.trim()?n.value.trim()+'\n'+t:t});

document.getElementById('fConsent').addEventListener('change',e=>{if(e.target.checked&&/Privacy Notice/.test(err.textContent)){err.textContent='';e.target.removeAttribute('aria-invalid')}});

/* ---------- FAQ: every figure comes from MODELS / STOCK so it can't drift from the cards ---------- */
const byId=id=>MODELS.find(m=>m.id===id);
const cycle=m=>(m.labels.range.match(/\((\w+)\)/)||[])[1];
const listJoin=a=>a.length<2?a.join(''):a.slice(0,-1).join(', ')+' and '+a[a.length-1];
/* "E2 325 km" when every derivative agrees, else "E5 Aspire 430 km, Apex Plus 450 km" */
const perDeriv=(m,f)=>{const v=m.derivs.map(f);return new Set(v).size===1?`${m.name} ${v[0]}`:`${m.name} `+m.derivs.map((d,i)=>`${d.n} ${v[i]}`).join(', ')};
const rangeLine=m=>m.kind==='phev'?`${m.name} ${m.derivs[0].evKm} km electric, ${m.derivs[0].range} total`:perDeriv(m,d=>d.range);
const phev=MODELS.find(m=>m.kind==='phev');
/* one line per model; derivatives that share a figure are grouped. Percentages differ by model (E2/E5 from 10%, Riddara from 20%) so each time carries its own */
const kwOf=(m,k)=>{const v=new Set(m.derivs.map(d=>d[k].kw));return v.size===1&&[...v][0]?[...v][0]:''};
const timeGroups=(m,f)=>{const g=new Map();m.derivs.forEach(d=>{const t=f(d);if(t)g.set(t,[...(g.get(t)||[]),d.n])});
  return g.size===1?[...g.keys()][0]:[...g].map(([t,ns])=>`${listJoin(ns)} ${t}`).join(', ')};
/* home7: models quoted on a faster charger also get their time on the included 7 kW wall charger */
const acLines=MODELS.filter(m=>m.derivs.every(d=>d.ac.h)).map(m=>{const kw=kwOf(m,'ac');
  if(m.home7)return `${m.name}: ${timeGroups(m,d=>`about ${d.ac.h}`)} (${m.derivs[0].ac.span}) on an ${kw.replace('up to ','')} charger. On the included 7&nbsp;kW home charger, allow ${m.home7}, still a full charge overnight`;
  return `${m.name}${kw?` (${kw})`:''}: ${timeGroups(m,d=>`about ${d.ac.h} (${d.ac.span})`)}`});
const acNoTime=MODELS.filter(m=>m.derivs.some(d=>!d.ac.h));
const dcLines=MODELS.map(m=>{const kw=kwOf(m,'dc');const per=m.derivs.some(d=>d.dc.kw)&&!kw;
  return `${m.name}${kw?` (up to ${kw})`:''}: ${timeGroups(m,d=>`about ${d.dc.t}${per?` (up to ${d.dc.kw})`:''}`)}`});
const wait=[];MODELS.forEach(m=>m.derivs.forEach((d,i)=>d.stock==='waitlist'&&wait.push({m,d,i})));
const cyc=c=>MODELS.filter(m=>cycle(m)===c);
const FAQ=[
 ['How do I buy?',`<p>Reserve online, we send you a firm quote, then you order and pay by EFT and we deliver. Current stock is ${STOCK.import.label.toLowerCase()}, with an ${STOCK.import.detail.replace('ETA about','ETA of about').replace(/\b2 weeks/,'two weeks')}.</p>${EFT_NOTE}`],
 ['Can I get finance?','<p>Finance through a partner is coming soon. Choose Finance on the reservation form or mention it in your notes, and we\'ll let you know as soon as it\'s available.</p>'],
 ['How does charging at home work?',`<p>You plug in overnight at a wall charger at home, so the car is ready each morning. Typical home charging times: ${acLines.join('. ')}.${acNoTime.map(m=>` The ${m.name} charges at up to ${m.derivs[0].ac.kw} at home; we confirm its charging time on your quote.`).join('')}</p><p>Every vehicle comes with a 3&nbsp;kW portable charger and a 7&nbsp;kW home wall charger. We install the wall charger free on delivery day, with up to 15&nbsp;m of cable included. Installation in Gauteng, Limpopo and the Free State. <a href="terms.html#charger">T&amp;Cs&nbsp;apply</a>.</p>`],
 ['How far can I drive on a charge?',`<p>${cyc('WLTP').map(rangeLine).join('; ')} (WLTP). ${cyc('NEDC').map(rangeLine).join('; ')} (NEDC).</p><p>Real range depends on speed, load, heat and towing.</p>`],
 ['What about long trips?',`<p>Top up at DC fast chargers along the way. Typical 30–80% fast-charge times: ${dcLines.join('. ')}.</p><p>The ${phev.name} plug-in hybrid can also run on petrol, for ${phev.derivs[0].range} in total.</p>`],
 ['Can I charge from solar?',`<p>Yes, an EV can charge from a home solar system.</p><p><a class="wa-link" href="${WA('Hi Eco EV, I\'d like to ask about charging an EV from solar.')}" target="_blank" rel="noopener noreferrer">${WA_ICON}Ask us about pairing your home charger with solar</a></p>`],
 ['What warranty do I get?',`<p>Every model has an 8-year / 200 000 km battery warranty and 5 years of unlimited roadside assistance.</p><p>${MODELS.slice().reverse().map(m=>`${m.name}: ${m.derivs[0].cover} warranty, ${m.plan} service plan`).join('. ')}.</p>`],
 ...wait.map(({m,d,i})=>[`When is the ${m.name} ${d.n} available?`,`<p>It's ${STOCK.waitlist.label.toLowerCase()} and the next batch date isn't confirmed yet. <a href="#reserve" data-res="${m.id}" data-di="${i}">Join the waiting list</a> and we'll contact you first.</p>`]),
 ['Where are you based?','<p>Eco EV is in Limpopo. Call <a href="tel:+27836249080">083 624 9080</a> or <a href="https://wa.me/27836249080?text=Hi%20Eco%20EV%2C%20I\'d%20like%20to%20arrange%20a%20viewing." target="_blank" rel="noopener noreferrer">WhatsApp us</a> to arrange a viewing or delivery.</p>']
];
const faqList=document.getElementById('faqList');
faqList.innerHTML=FAQ.map(([q,a],i)=>`<div class="faq-item"><h3><button class="faq-q" id="fq${i}" aria-expanded="false" aria-controls="fa${i}">${q}</button></h3><div class="faq-a" id="fa${i}" role="region" aria-labelledby="fq${i}"><div>${a}</div></div></div>`).join('');
const faqBtns=[...faqList.querySelectorAll('.faq-q')];
const faqSet=(b,open)=>{b.setAttribute('aria-expanded',open);document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open',open)};
faqList.addEventListener('click',e=>{const b=e.target.closest('.faq-q');if(!b)return;const open=b.getAttribute('aria-expanded')!=='true';faqBtns.forEach(x=>faqSet(x,x===b&&open))});
faqList.addEventListener('keydown',e=>{const i=faqBtns.indexOf(e.target);if(i<0)return;
  const to={ArrowDown:i+1,ArrowUp:i-1,Home:0,End:faqBtns.length-1}[e.key];if(to===undefined)return;
  e.preventDefault();faqBtns[(to+faqBtns.length)%faqBtns.length].focus()});
faqSet(faqBtns[0],true);

/* ---------- floating WhatsApp: step aside while the reservation form (fields, submit) or the contact WhatsApp card is on screen ---------- */
const waFloat=document.getElementById('waFloat'),waSeen=new Set();
const waIO=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?waSeen.add(e.target):waSeen.delete(e.target));waFloat.classList.toggle('away',waSeen.size>0)},{rootMargin:'0px 0px 40px 0px'});
[form,document.querySelector('.c-wa')].forEach(el=>waIO.observe(el));

/* ---------- nav ---------- */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40),{passive:true});

})();
