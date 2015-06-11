const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  require('atom-watcher')();
}

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, Math.floor(Math.random() * 20) + 21, 0, 2 * Math.PI, false);
  ctx.fillStyle = randomColor();
  ctx.fill();
}

canvas.addEventListener('click', function(evt) {
  drawCircle(evt.x, evt.y);
});
