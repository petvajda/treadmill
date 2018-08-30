const solfege=require('./solfege.js');

test('D Dorian scale notes', () => {
  let ddor = new solfege.Scale("C", 2);
  expect(ddor.notes).toEqual(["D", "E", "F", "G", "A", "B", "C"]);
});

test('G Dorian scale notes', () => {
  let ddor = new solfege.Scale("F", 2);
  expect(ddor.notes).toEqual(["G", "A", "Bb", "C", "D", "E", "F"]);
});

test('C Dorian scale notes', () => {
  let cdor = new solfege.Scale("Bb", 2);
  expect(cdor.notes).toEqual(["C", "D", "Eb", "F", "G", "A", "Bb"]);
});

test('A Dorian scale notes', () => {
  let ador = new solfege.Scale("G", 2);
  expect(ador.notes).toEqual(["A", "B", "C", "D", "E", "F#", "G"]);
});

test('E Dorian scale notes', () => {
  let edor = new solfege.Scale("D", 2);
  expect(edor.notes).toEqual(["E", "F#", "G", "A", "B", "C#", "D"]);
});

test('E Phrygian scale notes', () => {
  let ephr = new solfege.Scale("C", 3);
  expect(ephr.notes).toEqual(["E", "F", "G", "A", "B", "C", "D"]);
});

test('A Phrygian scale notes', () => {
  let ephr = new solfege.Scale("F", 3);
  expect(ephr.notes).toEqual(["A", "Bb", "C", "D", "E", "F", "G"]);
});

test('B Phrygian scale notes', () => {
  let ephr = new solfege.Scale("G", 3);
  expect(ephr.notes).toEqual(["B", "C", "D", "E", "F#", "G", "A"]);
});

test('F Lydian scale notes', () => {
  let flyd = new solfege.Scale("C", 4);
  expect(flyd.notes).toEqual(["F", "G", "A", "B", "C", "D", "E"]);
});

test('C Lydian scale notes', () => {
  let clyd = new solfege.Scale("G", 4);
  expect(clyd.notes).toEqual(["C", "D", "E", "F#", "G", "A", "B"]);
});

test('Eb Lydian scale notes', () => {
  let eblyd = new solfege.Scale("Bb", 4);
  expect(eblyd.notes).toEqual(["Eb", "F", "G", "A", "Bb", "C", "D"]);
});

test('G Mixolydian scale notes', () => {
  let gmix = new solfege.Scale("C", 5);
  expect(gmix.notes).toEqual(["G", "A", "B", "C", "D", "E", "F"]);
});

test('Db Mixolydian scale notes', () => {
  let dbmix = new solfege.Scale("Gb", 5);
  expect(dbmix.notes).toEqual(["Db", "Eb", "F", "Gb", "Ab", "Bb", "Cb"]);
});

test('H Mixolydian scale notes', () => {
  let hmix = new solfege.Scale("E", 5);
  expect(hmix.notes).toEqual(["B", "C#", "D#", "E", "F#", "G#", "A"]);
});

test('A Aeolian scale notes', () => {
  let aaeo = new solfege.Scale("C", 6);
  expect(aaeo.notes).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
});

test('D# Aeolian scale notes', () => {
  let dsaeo = new solfege.Scale("F#", 6);
  expect(dsaeo.notes).toEqual(["D#", "E#", "F#", "G#", "A#", "B", "C#"]);
});

test('B Locrian scale notes', () => {
  let bloc = new solfege.Scale("C", 7);
  expect(bloc.notes).toEqual(["B", "C", "D", "E", "F", "G", "A"]);
});

test('Bb Locrian scale notes', () => {
  let bbloc = new solfege.Scale("Cb", 7);
  expect(bbloc.notes).toEqual(["Bb", "Cb", "Db", "Eb", "Fb", "Gb", "Ab"]);
});
