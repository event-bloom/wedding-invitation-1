/* ================================================================
   wedding.js — Reusable Wedding Invitation Scripts
   
   1. Countdown Timer  — edit WEDDING_DATE below
   2. Scroll Reveal    — add class="reveal" to any element
   3. RSVP Form        — hook up to your backend / WhatsApp
================================================================ */

/* ── 1. COUNTDOWN ───────────────────────────────────────────── */
// ↓ EDIT THIS DATE per client (YYYY-MM-DDTHH:MM:SS)
const WEDDING_DATE = new Date('2026-05-18T10:30:00');

function updateCountdown() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p class="section-script light" style="margin:0;">Today is the day! 🎉</p>';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2,'0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ── 2. SCROLL REVEAL ───────────────────────────────────────── */
// Add class="reveal" to any element to fade it in on scroll
// Add class="reveal-stagger" to a parent to stagger children

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  revealObserver.observe(el);
});


/* ── 3. RSVP FORM ───────────────────────────────────────────── */
// Option A: Send to WhatsApp
// Option B: Send to Google Forms / Formspree / your backend
// Swap the handler below as needed

const rsvpForm = document.querySelector('.rsvp-form');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name     = this.querySelector('input[type="text"]').value.trim();
    const phone    = this.querySelector('input[type="tel"]').value.trim();
    const guests   = this.querySelector('select').value;
    const attending = this.querySelector('input[name="attending"]:checked');

    if (!name || !attending) {
      alert('Please fill in your name and RSVP choice.');
      return;
    }

    // ── Option A: WhatsApp ──────────────────────────────────
    // Replace 94771234567 with the couple's WhatsApp number
    const msg = `RSVP 💌\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}\nAttending: ${attending.value === 'yes' ? 'Joyfully Accepts' : 'Regretfully Declines'}`;
    const waURL = `https://wa.me/94785000848?text=${encodeURIComponent(msg)}`;
    window.open(waURL, '_blank');

    // ── Option B: Fetch to Formspree ─────────────────────────
    // Uncomment and replace YOUR_FORM_ID:
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, guests, attending: attending.value })
    }).then(() => {
      rsvpForm.innerHTML = '<p class="section-script light" style="margin:0;">Thank you! 🌸</p>';
    });
    */

    // Show confirmation
    rsvpForm.innerHTML = `
      <div class="text-center" style="padding: 2rem 0;">
        <p class="section-script light" style="margin-bottom:0.5rem;">Thank you, ${name}!</p>
        <p style="font-family: var(--font-sans); color: rgba(255,255,255,0.6); font-size:0.9rem;">
          Your RSVP has been received. We can't wait to celebrate with you.
        </p>
      </div>
    `;
  });
}


/* ── 4. SMOOTH NAV (if you add a nav bar later) ─────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
