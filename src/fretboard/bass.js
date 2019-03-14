function draw() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext) {
	  var ctx = canvas.getContext('2d');
	  ctx.beginPath();
	  var numberOfStrings = 4;
	  var numberOfFrets = 25;
	  var numberOfDots = 4;
	  var numberOfOctaves = 2;
  
	  for (var i = 0; i < numberOfStrings; i++) {
		ctx.fillRect(5, 25 + i * 20, 480, 1);
	  }
  
	  for (var i = 0; i < numberOfFrets; i++) {
		ctx.fillRect(5 + i * 20, 25, 1, 60);
	  }
  
	  var offset = 0;
	  for (var o = 0; o < numberOfOctaves; o++) {
		console.log(o);
  
		ctx.beginPath();
		for (var i = 0; i < numberOfDots; i++) {
		  ctx.arc(offset + 55.5 + i * 40, 55.5, 5, 0, Math.PI * 2, true);
		}
		ctx.fill();
		ctx.beginPath();
		ctx.arc(offset + 235.5, 35.5, 5, 0, Math.PI * 2, true);
		ctx.arc(offset + 235.5, 75.5, 5, 0, Math.PI * 2, true);
		ctx.fill();
		offset = 240;
	  }
	}
  }
  