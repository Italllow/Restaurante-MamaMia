// script.js - interações simples (menu mobile, reveal on scroll)
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');
mobileToggle.addEventListener('click', ()=>{
  nav.classList.toggle('open');
});

// Simple reveal using IntersectionObserver
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  })
},{threshold:0.12});
reveals.forEach(r=>obs.observe(r));

function handleReserve(e){
  e.preventDefault();
  const msg = document.getElementById('msg');
  msg.textContent = 'Pedido recebido! Entraremos em contato para confirmar.';
  e.target.reset();
  setTimeout(()=>{msg.textContent=''},4000);
}

// hide header on scroll down, show on scroll up
let lastScroll = window.pageYOffset;
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  const current = window.pageYOffset;
  if (current > lastScroll && current > 100) {
    // scrolling down
    header.classList.add('hidden');
  } else {
    // scrolling up
    header.classList.remove('hidden');
  }
  lastScroll = current;
});
