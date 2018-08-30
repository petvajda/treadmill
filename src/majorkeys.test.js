const solfege=require('./solfege.js');

test('C Major scale notes', () => {
  let cmaj = new solfege.Scale("C", 1);
  expect(cmaj.notes).toEqual(["C", "D", "E", "F", "G", "A", "B"]);
});

test('F Major scale notes', () => {
  let fmaj = new solfege.Scale("F", 1);
  expect(fmaj.notes).toEqual(["F", "G", "A", "Bb", "C", "D", "E"]);
});

test('Bb Major scale notes', () => {
  let bbmaj = new solfege.Scale("Bb", 1);
  expect(bbmaj.notes).toEqual(["Bb", "C", "D", "Eb", "F", "G", "A"]);
});

test('Eb Major scale notes', () => {
  let ebmaj = new solfege.Scale("Eb", 1);
  expect(ebmaj.notes).toEqual(["Eb", "F", "G", "Ab", "Bb", "C", "D"]);
});

test('Ab Major scale notes', () => {
  let abmaj = new solfege.Scale("Ab", 1);
  expect(abmaj.notes).toEqual(["Ab", "Bb", "C", "Db", "Eb", "F", "G"]);
});

test('Db Major scale notes', () => {
  let dbmaj = new solfege.Scale("Db", 1);
  expect(dbmaj.notes).toEqual(["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"]);
});

test('Gb Major scale notes', () => {
  let gbmaj = new solfege.Scale("Gb", 1);
  expect(gbmaj.notes).toEqual(["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"]);
});

test('Cb Major scale notes', () => {
  let cbmaj = new solfege.Scale("Cb", 1);
  expect(cbmaj.notes).toEqual(["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"]);
});

test('G Major scale notes', () => {
  let gmaj = new solfege.Scale("G", 1);
  expect(gmaj.notes).toEqual(["G", "A", "B", "C", "D", "E", "F#"]);
});

test('D Major scale notes', () => {
  let dmaj = new solfege.Scale("D", 1);
  expect(dmaj.notes).toEqual(["D", "E", "F#", "G", "A", "B", "C#"]);
});

test('A Major scale notes', () => {
  let amaj = new solfege.Scale("A", 1);
  expect(amaj.notes).toEqual(["A", "B", "C#", "D", "E", "F#", "G#"]);
});

test('E Major scale notes', () => {
  let emaj = new solfege.Scale("E", 1);
  expect(emaj.notes).toEqual(["E", "F#", "G#", "A", "B", "C#", "D#"]);
});

test('B Major scale notes', () => {
  let bmaj = new solfege.Scale("B", 1);
  expect(bmaj.notes).toEqual(["B", "C#", "D#", "E", "F#", "G#", "A#"]);
});

test('F# Major scale notes', () => {
  let fsmaj = new solfege.Scale("F#", 1);
  expect(fsmaj.notes).toEqual(["F#", "G#", "A#", "B", "C#", "D#", "E#"]);
});

test('C# Major scale notes', () => {
  let csmaj = new solfege.Scale("C#", 1);
  expect(csmaj.notes).toEqual(["C#", "D#", "E#", "F#", "G#", "A#", "B#"]);
});
