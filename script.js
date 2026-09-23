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
