(function() {
  var canvas = document.getElementById("rain-canvas");
  var ctx = canvas.getContext("2d");
  var drops = [];
  var N = 90;
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function init() {
    drops = [];
    for (var i = 0; i < N; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: Math.random() * 18 + 8,
        speed: Math.random() * 2.5 + 1.2,
        opacity: Math.random() * 0.3 + 0.15,
        w: Math.random() < 0.4 ? 0.5 : 1
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach(function(d) {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 1, d.y + d.len);
      ctx.strokeStyle = "rgba(140,190,255," + d.opacity + ")";
      ctx.lineWidth = d.w;
      ctx.stroke();
      d.y += d.speed;
      if (d.y - d.len > canvas.height) {
        d.y = -d.len;
        d.x = Math.random() * canvas.width;
        d.opacity = Math.random() * 0.3 + 0.15;
        d.speed = Math.random() * 2.5 + 1.2;
      }
    });
    requestAnimationFrame(draw);
  }
  resize(); init(); draw();
  window.addEventListener("resize", function() { resize(); init(); });
})();