const Scale = require('./solfege.js');

test('C Major 1st degree scale name to equal Ionian', () => {
  let cmaj = new Scale("C", 1);
  expect(cmaj.name).toBe("Ionian");
});

test('C Major 1st degree scale roman name to equal I', () => {
  var cmaj = new Scale("C", 1);
  expect(cmaj.roman).toBe("I");
});

test('C Major 7th degree scale name to equal Locrian', () => {
  var hloc = new Scale("H", 7);
  expect(hloc.name).toBe("Locrian");
});

test('C Major 7th degree scale roman name to equal VII', () => {
  var hloc = new Scale("H", 7);
  expect(hloc.roman).toBe("VII");
});

test('C Major scale notes', () => {
  let cmaj = new Scale("C", 1);
  expect(cmaj.notes).toEqual(["C", "D", "E", "F", "G", "A", "B"]);
});

test('D Dorian scale notes', () => {
  let ddor = new Scale("C", 2);
  expect(ddor.notes).toEqual(["D", "E", "F", "G", "A", "B", "C"]);
});

test('E Phrygian scale notes', () => {
  let ephr = new Scale("C", 3);
  expect(ephr.notes).toEqual(["E", "F", "G", "A", "B", "C", "D"]);
});

test('F Lydian scale notes', () => {
  let flyd = new Scale("C", 4);
  expect(flyd.notes).toEqual(["F", "G", "A", "B", "C", "D", "E"]);
});

test('G Mixolydian scale notes', () => {
  let gmix = new Scale("C", 5);
  expect(gmix.notes).toEqual(["G", "A", "B", "C", "D", "E", "F"]);
});

test('A Aeolian scale notes', () => {
  let aaeo = new Scale("C", 6);
  expect(aaeo.notes).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
});

test('B Locrian scale notes', () => {
  let bloc = new Scale("C", 7);
  expect(bloc.notes).toEqual(["B", "C", "D", "E", "F", "G", "A"]);
});

test('F Major scale notes', () => {
  let fmaj = new Scale("F", 1);
  expect(fmaj.notes).toEqual(["F", "G", "A", "Bb", "C", "D", "E"]);
});

test('Bb Major scale notes', () => {
  let bbmaj = new Scale("Bb", 1);
  expect(bbmaj.notes).toEqual(["Bb", "C", "D", "Eb", "F", "G", "A"]);
});

test('G Major scale notes', () => {
  let gmaj = new Scale("G", 1);
  expect(gmaj.notes).toEqual(["G", "A", "B", "C", "D", "E", "F#"]);
});

test('D Major scale notes', () => {
  let dmaj = new Scale("D", 1);
  expect(dmaj.notes).toEqual(["D", "E", "F#", "G", "A", "B", "C#"]);
});
