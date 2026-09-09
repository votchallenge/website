(() => {
  const layer = document.querySelector('.banner-mosaic');
  if (!layer) return;
  const canvas = layer.querySelector('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  const images = layer.querySelector('.banner-gifs');
  const button = layer.parentElement.querySelector('.mosaic-toggle');
  const sources = JSON.parse(layer.dataset.sequences).filter(url => typeof url === 'string');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches;
  let visible = true;
  let frame = 0;
  let lastTime = 0;
  let elapsed = 0;
  let width = 0;
  let height = 0;
  let tiles = [];
  const random = (min, max) => min + Math.random() * (max - min);
  const variant = () => ({ phase: random(0, Math.PI * 2), hue: random(190, 225), shape: Math.floor(random(0, 3)) });

  function replaceImage(tile) {
    if (!sources.length) return;
    const options = sources.filter(url => url !== tile.source);
    const source = options.length ? options[Math.floor(Math.random() * options.length)] : sources[0];
    if (source === tile.source) return;
    const img = new Image();
    img.alt = '';
    img.decoding = 'async';
    img.onload = () => {
      if (!tile.element.isConnected || tile.pending !== img) return;
      // Real GIFs use image elements: drawing an HTMLImageElement to canvas
      // does not reliably capture its animated frames across browsers.
      tile.element.replaceChildren(img);
      tile.source = source;
    };
    img.onerror = () => { if (tile.pending === img) tile.pending = null; };
    tile.pending = img;
    img.src = source;
  }

  function resize() {
    width = layer.clientWidth;
    height = layer.clientHeight;
    const scale = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    const columns = Math.max(2, Math.min(8, Math.ceil(width / 190)));
    const rows = Math.max(2, Math.min(6, Math.ceil(height / 135)));
    images.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    images.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    images.replaceChildren();
    tiles = Array.from({ length: columns * rows }, (_, index) => {
      const element = document.createElement('div');
      images.append(element);
      const tile = { ...variant(), element, x: index % columns * width / columns,
        y: Math.floor(index / columns) * height / rows, w: width / columns,
        h: height / rows, next: elapsed + random(2500, 9000), changed: elapsed - 1000 };
      replaceImage(tile);
      return tile;
    });
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    tiles.forEach(tile => {
      if (elapsed > tile.next) {
        Object.assign(tile, variant(), { next: elapsed + random(4000, 11000), changed: elapsed });
        replaceImage(tile);
      }
      context.save();
      context.beginPath();
      context.rect(tile.x + 3, tile.y + 3, tile.w - 6, tile.h - 6);
      context.clip();
      context.fillStyle = `hsl(${tile.hue} 48% 27%)`;
      context.fillRect(tile.x, tile.y, tile.w, tile.h);
      context.globalAlpha = Math.min(1, (elapsed - tile.changed) / 700);
      const time = elapsed / 1600 + tile.phase;
      // Small synthetic tracking scenes stand in for the future sequence GIFs.
      context.strokeStyle = '#ffffff18';
      context.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const x = tile.x + ((i * tile.w / 4 + time * 8) % tile.w);
        context.beginPath(); context.moveTo(x, tile.y); context.lineTo(x, tile.y + tile.h); context.stroke();
      }
      const x = tile.x + tile.w * (.5 + .24 * Math.sin(time));
      const y = tile.y + tile.h * (.5 + .2 * Math.cos(time * .7));
      const size = Math.min(tile.w, tile.h) * .19;
      context.fillStyle = '#d6e9fa';
      context.beginPath();
      if (tile.shape === 0) context.arc(x, y, size, 0, Math.PI * 2);
      else if (tile.shape === 1) context.rect(x - size, y - size * .7, size * 2, size * 1.4);
      else { context.moveTo(x, y - size); context.lineTo(x + size, y + size); context.lineTo(x - size, y + size); context.closePath(); }
      context.fill();
      context.strokeStyle = '#8ecbff';
      context.lineWidth = 2;
      context.strokeRect(x - size - 7, y - size - 7, size * 2 + 14, size * 2 + 14);
      context.restore();
    });
  }

  function tick(now) {
    frame = 0;
    if (lastTime && now - lastTime < 1000 / 24) { frame = requestAnimationFrame(tick); return; }
    elapsed += lastTime ? Math.min(now - lastTime, 100) : 0;
    lastTime = now;
    draw();
    frame = requestAnimationFrame(tick);
  }

  function update() {
    cancelAnimationFrame(frame);
    lastTime = 0;
    const running = !paused && !reducedMotion.matches && visible && !document.hidden;
    // GIF playback has no pause API; hide the images when stopped and show
    // the static canvas instead, including for reduced-motion preferences.
    images.hidden = !running;
    button.hidden = reducedMotion.matches;
    const label = paused ? 'Play animation' : 'Pause animation';
    button.querySelector('span').textContent = paused ? '▶' : 'Ⅱ';
    button.setAttribute('aria-label', label);
    button.title = label;
    button.setAttribute('aria-pressed', String(paused));
    if (running) frame = requestAnimationFrame(tick);
    else draw();
  }
  button.addEventListener('click', () => { paused = !paused; update(); });
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; update(); });
  document.addEventListener('visibilitychange', update);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); }).observe(layer);
  new ResizeObserver(resize).observe(layer);
  resize();
  update();
})();
