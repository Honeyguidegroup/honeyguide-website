document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.nav'),toggle=document.querySelector('.menu-toggle');
 if(toggle&&nav) toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
 const progress=document.getElementById('progress');
 if(progress) window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+'%'},{passive:true});
 const video=document.querySelector('.hero-video'); if(video){video.addEventListener('error',()=>video.style.display='none');}
});


// V10 content polish: progressive founder details + one-tap admin WhatsApp.
document.addEventListener('DOMContentLoaded',()=>{
  const wa='https://wa.me/2348161324694?text='+encodeURIComponent('Hello Ganiyat, I would like to make an enquiry about HoneyGuide Group Limited.');
  document.querySelectorAll('h3').forEach(h=>{
    if(h.textContent.trim()==='Ganiyat Niya' && !h.parentElement.querySelector('.ganiyat-wa')){
      const a=document.createElement('a'); a.className='ganiyat-wa'; a.href=wa; a.target='_blank'; a.rel='noopener'; a.innerHTML='WhatsApp Ganiyat <span>↗</span>'; h.parentElement.appendChild(a);
    }
  });
  const career=document.querySelector('.eyebrow')?.textContent.includes('DOCUMENTED MILESTONES');
  if(career){
    const cards=document.querySelectorAll('.cards .card');
    cards.forEach(card=>{
      if(card.textContent.includes('Industrial project experience')){
        const p=card.querySelector('p');
        if(p) p.textContent='Jerry began on the Dangote Fertilizer Project as a rigger in the hydrotest department, received a Best Rigger award, and was later appointed to an HSE role, where he worked in safety and site responsibility.';
      }
    });
  }
  const story=document.querySelector('.section-head h2');
  if(story && location.pathname.includes('/pages/story.html')){
    const section=[...document.querySelectorAll('.timeline')].find(x=>x.textContent.includes('Education & industrial experience'));
    if(section){
      const p=section.querySelector('p');
      if(p) p.textContent='Later education and industrial experience built on those early lessons. Jerry began as a rigger on the Dangote Fertilizer Project, was recognised as Best Rigger, and was later appointed to an HSE role. These stages added discipline, safety responsibility and professional progression to the commercial lessons learned from Madam Grace.';
    }
  }
});
