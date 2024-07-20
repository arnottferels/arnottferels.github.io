import './hoisted.CXXZfqj0.js';
import './index.CTbVEFV3.js';
function l() {
  document.querySelectorAll('.frontmatter-detail').forEach((o) => {
    const s = o.querySelector('.collapsible-btn'),
      e = o.querySelector('.collapsible-content');
    s &&
      e &&
      (e.classList.remove('active'),
      e.querySelectorAll('*').forEach((t) => {
        t.style.display = 'none';
      }),
      s.addEventListener('click', () => {
        e.classList.toggle('active'),
          e.classList.contains('active')
            ? e.querySelectorAll('*').forEach((t) => {
                t.style.display = '';
              })
            : e.querySelectorAll('*').forEach((t) => {
                t.style.display = 'none';
              });
      }));
  });
}
window.addEventListener('DOMContentLoaded', () => {
  l();
});
window.addEventListener('astro:after-swap', l);
window.addEventListener('astro:page-load', l);
