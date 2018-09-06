const solfege=require('./solfege.js');

test('Cmaj7 chord notes', () => {
  let cmaj7 = new solfege.Chord("C", 1);
  expect(cmaj7.notes).toEqual(["C", "E", "G", "B"]);
});

test('Dm7 chord notes', () => {
  let dm7 = new solfege.Chord("C", 2);
  expect(dm7.notes).toEqual(["D", "F", "A", "C"]);
});

test('Em7 chord notes', () => {
  let em7 = new solfege.Chord("C", 3);
  expect(em7.notes).toEqual(["E", "G", "B", "D"]);
});

test('Fmaj7 chord notes', () => {
  let fmaj7 = new solfege.Chord("C", 4);
  expect(fmaj7.notes).toEqual(["F", "A", "C", "E"]);
});

test('G7 chord notes', () => {
  let g7 = new solfege.Chord("C", 5);
  expect(g7.notes).toEqual(["G", "B", "D", "F"]);
});

test('Am7 chord notes', () => {
  let am7 = new solfege.Chord("C", 6);
  expect(am7.notes).toEqual(["A", "C", "E", "G"]);
});

test('Hm7b5 chord notes', () => {
  let hm7b5 = new solfege.Chord("C", 7);
  expect(hm7b5.notes).toEqual(["B", "D", "F", "A"]);
});
