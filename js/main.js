// 1. Footer Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// 2. Mobile Menu Toggle
const toggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('mainNav');
if(toggle){ toggle.addEventListener('click', ()=> nav.classList.toggle('show')); }

// 3. FAQ Accordion
document.querySelectorAll('.faq-question').forEach(q=>{
  q.addEventListener('click', ()=>{
    const a = q.nextElementSibling;
    a.style.display = a.style.display==='block'?'none':'block';
  });
});

// 4. Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
document.querySelectorAll('.lightbox-img').forEach(img=>{
  img.addEventListener('click', ()=>{
    lightbox.style.display='flex';
    lightboxImg.src=img.src;
  });
});
if(closeBtn) closeBtn.addEventListener('click', ()=> lightbox.style.display='none');

// 5. Service Search
const searchInput = document.getElementById('serviceSearch');
if(searchInput){
  searchInput.addEventListener('input', ()=>{
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll('.service-card').forEach(c=>{
      c.style.display = c.textContent.toLowerCase().includes(term)?'block':'none';
    });
  });
}

// 6. LEAFLET MAPS - FIXED (This was missing!)
function initMaps(){
  if(typeof L !== 'undefined'){
    if(document.getElementById('map1')){
      const m1 = L.map('map1').setView([-25.7479, 28.2293], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m1);
      L.marker([-25.7479, 28.2293]).addTo(m1).bindPopup('Pretoria Office<br>123 Church Street');
    }
    if(document.getElementById('map2')){
      const m2 = L.map('map2').setView([-26.2628, 27.8588], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m2);
      L.marker([-26.2628, 27.8588]).addTo(m2).bindPopup('Soweto Distribution<br>45 Vilakazi Street');
    }
  }
}
initMaps();
setTimeout(initMaps, 1000);

// 7. FORM VALIDATION - FIXED (This was missing!)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const msg = document.getElementById('contactMessage').value.trim();
    if(!name || !email || !msg){
      alert('Please fill all fields!');
      return;
    }
    document.getElementById('contactSuccess').style.display='block';
    contactForm.reset();
  });
}

const enquiryForm = document.getElementById('enquiryForm');
if(enquiryForm){
  enquiryForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(enquiryForm.checkValidity()){
      alert('Enquiry submitted! Thank you!');
      enquiryForm.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  });
}