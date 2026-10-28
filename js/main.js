// FIXED main.js - ST10538510 Akanyang Montshiwa - Part 3 All JS
// 1. Footer Year - SAFE (was crashing file)
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 2. Mobile Menu Toggle - supports both 'show' and 'active' classes
const toggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    nav.classList.toggle('active');
  });
}

// 3. FAQ Accordion - FIXED + arrow toggle
document.querySelectorAll('.faq-question, .accordion-header').forEach(q => {
  q.addEventListener('click', () => {
    const a = q.nextElementSibling;
    if (!a) return;
    const isOpen = a.style.display === 'block' || a.classList.contains('active');
    
    // Optional: close others
    document.querySelectorAll('.faq-answer, .accordion-content').forEach(other => {
      if (other !== a) {
        other.style.display = 'none';
        other.classList.remove('active');
        if (other.previousElementSibling) {
          other.previousElementSibling.innerHTML = other.previousElementSibling.innerHTML.replace('▲','▼');
        }
      }
    });

    if (isOpen) {
      a.style.display = 'none';
      a.classList.remove('active');
      q.innerHTML = q.innerHTML.replace('▲','▼');
    } else {
      a.style.display = 'block';
      a.classList.add('active');
      q.innerHTML = q.innerHTML.replace('▼','▲');
    }
  });
});

// 4. Lightbox - FIXED with background close
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

document.querySelectorAll('.lightbox-img, .gallery-img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    if (lightbox && lightboxImg) {
      lightbox.style.display = 'flex';
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
    }
  });
});
if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.classList.remove('active');
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.classList.remove('active');
    }
  });
}

// 5. Service Search (your code - kept)
const searchInput = document.getElementById('serviceSearch');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll('.service-card').forEach(c => {
      c.style.display = c.textContent.toLowerCase().includes(term) ? 'block' : 'none';
    });
  });
}

// 5b. TABS FOR SERVICES.HTML - ADDED - THIS WAS MISSING FOR MARKS!
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;
    // Remove active from all buttons and contents
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => {
      t.style.display = 'none';
      t.classList.remove('active');
    });
    // Show clicked
    btn.classList.add('active');
    const target = document.getElementById(tabId);
    if (target) {
      target.style.display = 'block';
      target.classList.add('active');
    }
  });
});
// Auto-open first tab
const firstTab = document.querySelector('.tab-button');
if (firstTab && document.querySelectorAll('.tab-content').length > 0) {
  const firstContent = document.getElementById(firstTab.dataset.tab);
  if (firstContent && firstContent.style.display === '') {
    // don't auto-click if you want manual
  }
}

// 6. LEAFLET MAPS - Your fixed version - perfect, kept
function initMaps() {
  if (typeof L !== 'undefined') {
    if (document.getElementById('map1') && !document.getElementById('map1')._leaflet_id) {
      const m1 = L.map('map1').setView([-25.7479, 28.2293], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m1);
      L.marker([-25.7479, 28.2293]).addTo(m1).bindPopup('Pretoria Office<br>123 Church Street');
    }
    if (document.getElementById('map2') && !document.getElementById('map2')._leaflet_id) {
      const m2 = L.map('map2').setView([-26.2628, 27.8588], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m2);
      L.marker([-26.2628, 27.8588]).addTo(m2).bindPopup('Soweto Distribution<br>45 Vilakazi Street');
    }
  }
}
initMaps();
setTimeout(initMaps, 1000);

// 7. FORM VALIDATION - Your fixed version - perfect, kept
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const msg = document.getElementById('contactMessage')?.value.trim();
    if (!name || !email || !msg) {
      alert('Please fill all fields!');
      return;
    }
    const successEl = document.getElementById('contactSuccess');
    if (successEl) successEl.style.display = 'block';
    contactForm.reset();
  });
}

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (enquiryForm.checkValidity()) {
      alert('Enquiry submitted! Thank you!');
      enquiryForm.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  });
}
