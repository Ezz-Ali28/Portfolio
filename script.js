// Basic interactions: nav toggle, year, contact form (mailto), CV download guard
document.addEventListener('DOMContentLoaded', () => {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex' || nav.style.display === '') {
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    } else {
      nav.style.display = 'flex';
    }
  });

  // contact form: open mail client with filled subject/body (no server)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    // open mail client
    window.location.href = `mailto:ezz500549@gmail.com?subject=${subject}&body=${body}`;
  });

  // reset button
  document.getElementById('reset-form').addEventListener('click', () => form.reset());

  // download CV link: make sure path exists or fallback
  const cvLink = document.getElementById('download-cv');
  fetch(cvLink.getAttribute('href'), { method: 'HEAD' })
    .catch(() => {
      // file not found — change to open in new tab to the user's LinkedIn instead
      cvLink.setAttribute('href', 'https://www.linkedin.com/in/ezz-ali-282838210/');
      cvLink.setAttribute('target', '_blank');
      cvLink.textContent = 'View LinkedIn';
    });
});
