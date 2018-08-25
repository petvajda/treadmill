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
