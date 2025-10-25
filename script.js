// Minimal enhancements
document.getElementById('year').textContent = new Date().getFullYear();

// Lightweight contact form handler for GitHub Pages (no server).
// You can plug this into Formspree or another free form backend later.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    // Compose WhatsApp message as a fallback so it's "sticky"
    const msg = `Hi Snowhite Laundry! My name is ${data.get('name')}.\nContact: ${data.get('contact')}\nNeed: ${data.get('message')}`;
    const wa = `https://wa.me/27824729429?text=${encodeURIComponent(msg)}`;
    window.open(wa, '_blank', 'noopener');
    alert('Thanks! We opened WhatsApp so you can send us your request immediately. If you prefer email, write to Margi.defreitas@gmail.com.');
    form.reset();
  });
}
