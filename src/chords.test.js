const solfege=require('./solfege.js');

test('Cmaj7 chord notes', () => {
  let cmaj7 = new solfege.Chord("C", 1);
  expect(cmaj7.notes).toEqual(["C", "E", "G", "B"]);
  expect(cmaj7.name).toEqual("Cmaj7");
});

test('Dm7 chord notes', () => {
  let dm7 = new solfege.Chord("C", 2);
  expect(dm7.notes).toEqual(["D", "F", "A", "C"]);
  expect(dm7.name).toEqual("Dm7");
});

test('Em7 chord notes', () => {
  let em7 = new solfege.Chord("C", 3);
  expect(em7.notes).toEqual(["E", "G", "B", "D"]);
  expect(em7.name).toEqual("Em7");
});

test('Fmaj7 chord notes', () => {
  let fmaj7 = new solfege.Chord("C", 4);
  expect(fmaj7.notes).toEqual(["F", "A", "C", "E"]);
  expect(fmaj7.name).toEqual("Fmaj7");
});

test('G7 chord notes', () => {
  let g7 = new solfege.Chord("C", 5);
  expect(g7.notes).toEqual(["G", "B", "D", "F"]);
  expect(g7.name).toEqual("G7");
});

test('Am7 chord notes', () => {
  let am7 = new solfege.Chord("C", 6);
  expect(am7.notes).toEqual(["A", "C", "E", "G"]);
  expect(am7.name).toEqual("Am7");
});

test('Hm7b5 chord notes', () => {
  let hm7b5 = new solfege.Chord("C", 7);
  expect(hm7b5.notes).toEqual(["B", "D", "F", "A"]);
  expect(hm7b5.name).toEqual("Bm7b5");
});
