function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();

    var numberOfStrings = 4;
    var numberOfFrets = 25;
    var numberOfSingleDots = 4;
    var numberOfOctaves = 2;

    ctx.font = '12px arial';
    ctx.fillText('G', 5, 30);
    ctx.fillText('D', 5, 50);
    ctx.fillText('A', 5, 70);
    ctx.fillText('E', 5, 90);

    for (var i = 0; i < numberOfStrings; i++) {
      ctx.fillRect(20, 25 + i * 20, 480, 1);
    }

    for (var i = 0; i < numberOfFrets; i++) {
      ctx.fillRect(20 + i * 20, 25, 1, 60);
    }

    var offset = 0;
    for (var o = 0; o < numberOfOctaves; o++) {
      console.log(o);

      ctx.beginPath();
      for (var i = 0; i < numberOfSingleDots; i++) {
        ctx.arc(offset + 70.5 + i * 40, 55.5, 5, 0, Math.PI * 2, true);
      }
      ctx.fill();
      ctx.beginPath();
      ctx.arc(offset + 250.5, 35.5, 5, 0, Math.PI * 2, true);
      ctx.arc(offset + 250.5, 75.5, 5, 0, Math.PI * 2, true);
      ctx.fill();
      offset = 240;
    }
  }
}
