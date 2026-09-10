// Powers .image-gallery grids: opens a fullscreen modal with prev/next/close controls.
document.querySelectorAll('.image-gallery').forEach(gallery => {
  const dataEl = gallery.querySelector('.image-gallery-data');
  const items = dataEl ? JSON.parse(dataEl.textContent) : [];
  const modal = gallery.querySelector('.image-gallery-modal');
  if (!modal || !items.length) return;
  const image = modal.querySelector('.image-gallery-modal-image');
  const caption = modal.querySelector('.image-gallery-caption');
  let index = 0;
  let trigger = null;

  function show(i) {
    index = (i + items.length) % items.length;
    image.src = items[index].src;
    image.alt = items[index].alt;
    caption.textContent = items[index].alt;
  }
  function open(i, from) {
    trigger = from;
    show(i);
    modal.hidden = false;
    modal.querySelector('.image-gallery-close').focus();
    document.addEventListener('keydown', onKeydown);
  }
  function close() {
    modal.hidden = true;
    document.removeEventListener('keydown', onKeydown);
    trigger?.focus();
  }
  function onKeydown(event) {
    if (event.key === 'Escape') close();
    else if (event.key === 'ArrowLeft') show(index - 1);
    else if (event.key === 'ArrowRight') show(index + 1);
  }

  gallery.querySelectorAll('.image-gallery-item').forEach(button => {
    button.addEventListener('click', () => open(Number(button.dataset.index), button));
  });
  modal.querySelector('.image-gallery-close').addEventListener('click', close);
  modal.querySelector('.image-gallery-prev').addEventListener('click', () => show(index - 1));
  modal.querySelector('.image-gallery-next').addEventListener('click', () => show(index + 1));
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
});
