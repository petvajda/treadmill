const Scale = require('./solfege.js');

test('C Major scale name to equal Ionian', () => {
  let cmaj = new Scale("C", 1);
  expect(cmaj.name).toBe("Ionian");
});

test('C Major scale roman name to equal I', () => {
  var cmaj = new Scale("C", 1);
  expect(cmaj.roman).toBe("I");
});

test('H Locrian scale name to equal Locrian', () => {
  var hloc = new Scale("H", 7);
  expect(hloc.name).toBe("Locrian");
});

test('H Locrian scale roman name to equal Ionian', () => {
  var hloc = new Scale("H", 7);
  expect(hloc.roman).toBe("VII");
});
