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
