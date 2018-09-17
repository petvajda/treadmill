
VF = Vex.Flow;

const pattern = (noteValue=8) => {
  var notes = [];
  for (var i = 0; i < noteValue ; i++ ) {
    if (Math.random() >= 0.5) {
      noteString = noteValue.toString();
    } else {
      noteString = noteValue.toString()+ "r";
    }
    var note = new VF.StaveNote({keys: ["b/4"], duration: noteString });
    notes.push(note);
  }
  return notes;
};

const setUp = () => {
  var div = document.getElementById("notes")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  renderer.resize(500, 500);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  var stave = new VF.Stave(10, 40, 400);
  stave.addClef("bass").addTimeSignature("4/4");
  stave.setContext(context).draw();
  var duration = 8;
  var notes = pattern(duration);
  var voice = new VF.Voice({num_beats: duration,  beat_value: duration});
  voice.addTickables(notes);
  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 300);
  voice.draw(context, stave);
};

setUp();
