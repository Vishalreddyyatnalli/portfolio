// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', ()=>{
  if(nav.style.display === 'block') { nav.style.display = 'none'; navToggle.textContent = '☰'}
  else { nav.style.display = 'block'; navToggle.textContent = '×' }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      if(nav && window.innerWidth <= 880) { nav.style.display='none'; navToggle.textContent='☰' }
    }
  })
});

// Modal project details
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(html){
  modalContent.innerHTML = html;
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal() });

// project detail data
const projects = {
  crop: `
    <h2>Machine Learning Crop Recommendation</h2>
    <p>This project analyzes soil properties, weather, and historical crop yields to recommend suitable crops. It includes data cleaning, feature engineering, model training (Decision Trees, Random Forest), and a simple inference API.</p>
    <ul>
      <li>Tech: Python, scikit-learn, pandas, Flask (or FastAPI)</li>
      <li>Highlights: Data pipelines, model evaluation, accuracy tuning</li>
    </ul>
    <p><a href="#projects">Back</a></p>
  `,
  spotify: `
    <h2>Spotify Clone</h2>
    <p>A responsive UI that replicates key Spotify features: playback, playlists, and authentication. Built as a learning project to practice React, Node.js, and handling media streams.</p>
    <ul>
      <li>Tech: React, Node.js, Express, MongoDB</li>
      <li>Highlights: Auth flow, responsive player, REST APIs</li>
    </ul>
    <p><a href="#projects">Back</a></p>
  `
}

document.querySelectorAll('[data-open]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.getAttribute('data-open');
    if(projects[key]) openModal(projects[key]);
  })
});

// small accessibility nicety: close modal with ESC
window.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeModal() });
