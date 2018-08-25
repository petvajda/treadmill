const Scale = require('./solfege.js');

test('D Dorian scale notes', () => {
  let ddor = new Scale("C", 2);
  expect(ddor.notes).toEqual(["D", "E", "F", "G", "A", "B", "C"]);
});

test('G Dorian scale notes', () => {
  let ddor = new Scale("F", 2);
  expect(ddor.notes).toEqual(["G", "A", "Bb", "C", "D", "E", "F"]);
});

test('C Dorian scale notes', () => {
  let cdor = new Scale("Bb", 2);
  expect(cdor.notes).toEqual(["C", "D", "Eb", "F", "G", "A", "Bb"]);
});

test('A Dorian scale notes', () => {
  let ador = new Scale("G", 2);
  expect(ador.notes).toEqual(["A", "B", "C", "D", "E", "F#", "G"]);
});

test('E Dorian scale notes', () => {
  let edor = new Scale("D", 2);
  expect(edor.notes).toEqual(["E", "F#", "G", "A", "B", "C#", "D"]);
});

test('E Phrygian scale notes', () => {
  let ephr = new Scale("C", 3);
  expect(ephr.notes).toEqual(["E", "F", "G", "A", "B", "C", "D"]);
});

test('A Phrygian scale notes', () => {
  let ephr = new Scale("F", 3);
  expect(ephr.notes).toEqual(["A", "Bb", "C", "D", "E", "F", "G"]);
});

test('B Phrygian scale notes', () => {
  let ephr = new Scale("G", 3);
  expect(ephr.notes).toEqual(["B", "C", "D", "E", "F#", "G", "A"]);
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
