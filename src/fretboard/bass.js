SVG.on(document, 'DOMContentLoaded', function() {
  var draw = SVG('drawing')
  var numberOfStrings = 4;
  var numberOfFrets = 24;
  var numberOfSingleDots = 4;
  var numberOfOctaves = 2;

  draw.font({ fill: '#003333', family: 'arial', size: '12px' })
  draw.text('G').move(0, 20);
  draw.text('D').move(0, 40);
  draw.text('A').move(0, 60);
  draw.text('E').move(0, 80);

  for (var i = 0; i < numberOfStrings; i++) {
    draw.line(20, 25 + i * 20, 500, 25 + i * 20).stroke({
      width: 1
    });
  }

  for (var i = 0; i <= numberOfFrets; i++) {
    draw.line(20 + i * 20, 25, 20 + i * 20, 85).stroke({
      width: 1
    });
  }

  var offset = 0;
  for (var o = 0; o < numberOfOctaves; o++) {
    for (var i = 0; i < numberOfSingleDots; i++) {
      draw.circle(10).fill('#003333').move(offset + 65 + i * 40, 50)
    }
    draw.circle(10).fill('#003333').move(offset + 245, 30);
    draw.circle(10).fill('#003333').move(offset + 245, 70);
    offset = 240;
  }
})
