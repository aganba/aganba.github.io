const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showSection(name) {
  pages.forEach(p => p.classList.toggle('active', p.id === name));
  links.forEach(l => l.classList.toggle('active', l.dataset.section === name));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.section);
    history.pushState(null, '', `#${link.dataset.section}`);
  });
});

// Support direct URL hash on load
const hash = location.hash.replace('#', '');
if (hash && document.getElementById(hash)) {
  showSection(hash);
}

// Pub subnav: scroll with dynamic offset to account for wrapped rows on mobile
document.querySelectorAll('.pub-subnav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.getElementById(this.getAttribute('href').slice(1));
    if (!target) return;
    const navbarH = document.getElementById('navbar').offsetHeight;
    const subnavH = document.querySelector('.pub-subnav').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarH - subnavH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
