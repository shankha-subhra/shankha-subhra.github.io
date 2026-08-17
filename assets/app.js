
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const profile3d=document.querySelector('.hero-profile-card');
document.addEventListener('mousemove',(e)=>{
  if(!profile3d) return;
  const x=(e.clientX/window.innerWidth-.5)*10;
  const y=(e.clientY/window.innerHeight-.5)*8;
  profile3d.style.transform=`translate(-50%,-50%) translateZ(120px) rotateY(${(-8+x*.3).toFixed(2)}deg) rotateX(${(4-y*.25).toFixed(2)}deg)`;
});

document.querySelectorAll('.footer-panel').forEach(panel=>{
  panel.addEventListener('mousemove',e=>{
    const r=panel.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    panel.style.transform=`perspective(900px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg) translateY(-2px)`;
  });
  panel.addEventListener('mouseleave',()=>panel.style.transform='');
});

document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${(-y*8).toFixed(2)}deg) rotateY(${(x*10).toFixed(2)}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  });
});


document.querySelectorAll('.info-card,.panel3d,.metric3d').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});
const projectSearch=document.querySelector('[data-project-search]');
if(projectSearch){
  projectSearch.addEventListener('input',()=>{
    const q=projectSearch.value.toLowerCase().trim();
    document.querySelectorAll('.project-mini').forEach(card=>{
      card.style.display=card.innerText.toLowerCase().includes(q)?'block':'none';
    });
  });
}


const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
if (isTouchDevice) {
  document.querySelectorAll('.tilt,.card3d,.info-card,.panel3d,.metric3d,.project-mini,.footer-panel,.cta')
    .forEach(el => {
      el.style.transform = 'none';
      el.onmousemove = null;
      el.onmouseleave = null;
    });
}

// Mobile navigation logic
const nav = document.querySelector('nav');
if (nav) {
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.innerHTML = '<span></span><span></span><span></span>';
  menuBtn.setAttribute('aria-label', 'Toggle menu');
  
  const menu = document.querySelector('.menu');
  if (menu) {
    nav.insertBefore(menuBtn, menu);

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
      });
    });
  }
}
