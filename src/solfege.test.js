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
  let cmaj = new Scale("C", 2);
  expect(cmaj.notes).toEqual(["D", "E", "F", "G", "A", "B", "C"]);
});

test('E Phrygian scale notes', () => {
  let cmaj = new Scale("C", 3);
  expect(cmaj.notes).toEqual(["E", "F", "G", "A", "B", "C", "D"]);
});

test('F Lydian scale notes', () => {
  let cmaj = new Scale("C", 4);
  expect(cmaj.notes).toEqual(["F", "G", "A", "B", "C", "D", "E"]);
});

test('G Mixolydian scale notes', () => {
  let cmaj = new Scale("C", 5);
  expect(cmaj.notes).toEqual(["G", "A", "B", "C", "D", "E", "F"]);
});

test('A Aeolian scale notes', () => {
  let cmaj = new Scale("C", 6);
  expect(cmaj.notes).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
});

test('B Locrian scale notes', () => {
  let cmaj = new Scale("C", 7);
  expect(cmaj.notes).toEqual(["B", "C", "D", "E", "F", "G", "A"]);
});
