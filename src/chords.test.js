const solfege=require('./solfege.js');

test('Cmaj7 chord notes', () => {
  let cmaj = new solfege.Chord("C", 1);
  expect(cmaj.notes).toEqual(["C", "E", "G", "B"]);
});

test('Dm7 chord notes', () => {
  let cmaj = new solfege.Chord("C", 2);
  expect(cmaj.notes).toEqual(["D", "F", "A", "C"]);
});
