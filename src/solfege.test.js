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
  var hloc = new Scale("B", 7);
  expect(hloc.name).toBe("Locrian");
});

test('C Major 7th degree scale roman name to equal VII', () => {
  var hloc = new Scale("B", 7);
  expect(hloc.roman).toBe("VII");
});

test('Not supported mode high', () => {
  expect(() => {
    e = new Scale("C", 8)
  }).toThrowError("Mode not supported 8");
});

test('Not supported mode low', () => {
  expect(() => {
    e = new Scale("C", 0)
  }).toThrowError("Mode not supported 0");
});

test('Not supported mode not integer', () => {
  expect(() => {
    e = new Scale("C", 1.5)
  }).toThrowError("Mode not supported 1.5");
});

test('Not supported base note', () => {
  expect(() => {
    e = new Scale("H", 1)
  }).toThrowError("Base note not supported H");
});
