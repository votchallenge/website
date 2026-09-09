// Navigation works without JavaScript; enhance it with a mobile disclosure.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  navigation.classList.add('collapsible');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
}

// Keep historical result tables readable without widening the entire page.
document.querySelectorAll('#main_content table').forEach((table, index) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-scroll';
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', table.caption?.textContent || `Scrollable table ${index + 1}`);
  table.before(wrapper);
  wrapper.append(table);
});

document.querySelectorAll('.copy-bibtex').forEach(button => {
  button.addEventListener('click', async () => {
    const citation = button.closest('.publication-bibtex')?.querySelector('pre');
    if (!citation || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(citation.textContent);
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2000);
    } catch {
      button.textContent = 'Copy failed';
    }
  });
});
