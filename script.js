const screens = [...document.querySelectorAll('.screen')];
function showScreen(id){
  screens.forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
const gateScene=document.querySelector('.gate-scene');
document.getElementById('openGate').addEventListener('click',()=>{
  gateScene.classList.add('open');
  const btn=document.getElementById('openGate');
  btn.disabled=true; btn.textContent='WELCOME, PRINCESS 💗';
  setTimeout(()=>showScreen('giftScreen'),1900);
});

const giftArea=document.getElementById('giftArea');
const celebration=document.getElementById('celebration');
document.getElementById('openGift').addEventListener('click',()=>{
  giftArea.classList.add('open');
  document.getElementById('openGift').style.display='none';
  setTimeout(()=>{
    giftArea.style.display='none';
    celebration.classList.add('show');
    fireworks();
  },850);
});
function fireworks(){
  for(let i=0;i<34;i++){
    const p=document.createElement('span');
    p.textContent=['✦','✧','♡','✨'][i%4];
    p.className='firework';
    p.style.cssText=`position:fixed;z-index:10;left:${Math.random()*100}vw;top:${Math.random()*75+5}vh;color:${['#fff','#d84d8d','#ffd1e3'][i%3]};font-size:${14+Math.random()*22}px;pointer-events:none;animation:burst ${1+Math.random()*1.3}s ease-out forwards`;
    document.body.appendChild(p);setTimeout(()=>p.remove(),2400);
  }
}
const style=document.createElement('style');
style.textContent='@keyframes burst{0%{opacity:0;transform:scale(.2) translateY(25px)}25%{opacity:1}100%{opacity:0;transform:scale(1.5) translateY(-100px)}}';
document.head.appendChild(style);

document.getElementById('toPhotos').addEventListener('click',()=>showScreen('photosScreen'));
let current=0;
const frames=[...document.querySelectorAll('.photo-frame')];
const dots=[...document.querySelectorAll('#dots i')];
function nextPhoto(){
  frames[current].classList.remove('active');dots[current].classList.remove('selected');
  current=(current+1)%frames.length;
  frames[current].classList.add('active');dots[current].classList.add('selected');
}
let slideshowTimer;
document.getElementById('toPhotos').addEventListener('click',()=>{
  clearInterval(slideshowTimer);slideshowTimer=setInterval(nextPhoto,2600);
});
document.getElementById('toLetter').addEventListener('click',()=>{
  clearInterval(slideshowTimer);showScreen('letterScreen');typeLetter();
});

const letter=`To,
THE PRINCESS

Subject: Happy Princess Day - MERI SUPU Ke Liye Ek Chhota Sa Letter

DEAR SUPU....

Kaise hhh MERI PRINCESS??

Pata hai aaj Princess Day hai, toh maine socha koi normal sa "Happy Princess Day" wala message nhi, ek proper letter likh duu tumhare liye lekin yeh letter bhi kam hh tumhare liye🫠❤️... Kyunki tum normal toh hai hi nahi, tum meri life ka ek bohot special hissa ho🫶🏻💐...

Tumhe pata hai, jab bhi mera mood kharab hota hai n, tumse baat Krna hi kaafi hoti hai mood theek karne ke liye. Tum hasti ho toh lagta hai duniya theek hh👉🏻👈🏻..

Is PRINCESSS DAYYY pe main bas itna bolna chahta hu, tum hamesha aise hi rehna. MERI SUPU 😋, MERI PRINCESS💗 banke rehna mere saath...

Tum meri life ki sabse sweet wali problem hai, jisse main kabhi solve karna hi nahi chahta.✨🌷

HAPPIESTTT PRINCESS DAYY MAHH SUPU 🤭 👑

~ BY UR BINU`;
let typingStarted=false;
function typeLetter(){
  if(typingStarted)return;typingStarted=true;
  const target=document.getElementById('typedLetter');let i=0;
  const timer=setInterval(()=>{
    target.textContent=letter.slice(0,i++);
    if(i>letter.length){clearInterval(timer);document.querySelector('.cursor').style.display='none';}
  },22);
}
