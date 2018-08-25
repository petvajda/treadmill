const Scale = require('./solfege.js');

test('C Major scale notes', () => {
  let cmaj = new Scale("C", 1);
  expect(cmaj.notes).toEqual(["C", "D", "E", "F", "G", "A", "B"]);
});

test('F Major scale notes', () => {
  let fmaj = new Scale("F", 1);
  expect(fmaj.notes).toEqual(["F", "G", "A", "Bb", "C", "D", "E"]);
});

test('Bb Major scale notes', () => {
  let bbmaj = new Scale("Bb", 1);
  expect(bbmaj.notes).toEqual(["Bb", "C", "D", "Eb", "F", "G", "A"]);
});

test('Eb Major scale notes', () => {
  let ebmaj = new Scale("Eb", 1);
  expect(ebmaj.notes).toEqual(["Eb", "F", "G", "Ab", "Bb", "C", "D"]);
});

test('Ab Major scale notes', () => {
  let abmaj = new Scale("Ab", 1);
  expect(abmaj.notes).toEqual(["Ab", "Bb", "C", "Db", "Eb", "F", "G"]);
});

test('Db Major scale notes', () => {
  let dbmaj = new Scale("Db", 1);
  expect(dbmaj.notes).toEqual(["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"]);
});

test('G Major scale notes', () => {
  let gmaj = new Scale("G", 1);
  expect(gmaj.notes).toEqual(["G", "A", "B", "C", "D", "E", "F#"]);
});

test('D Major scale notes', () => {
  let dmaj = new Scale("D", 1);
  expect(dmaj.notes).toEqual(["D", "E", "F#", "G", "A", "B", "C#"]);
});

test('A Major scale notes', () => {
  let amaj = new Scale("A", 1);
  expect(amaj.notes).toEqual(["A", "B", "C#", "D", "E", "F#", "G#"]);
});

test('B Major scale notes', () => {
  let bmaj = new Scale("B", 1);
  expect(bmaj.notes).toEqual(["B", "C#", "D#", "E", "F#", "G#", "A#"]);
});

test('F# Major scale notes', () => {
  let fsmaj = new Scale("F#", 1);
  expect(fsmaj.notes).toEqual(["F#", "G#", "A#", "B", "C#", "D#", "E#"]);
});
