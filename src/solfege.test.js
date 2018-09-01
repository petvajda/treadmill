const solfege=require('./solfege.js');

test('Make sure flat notes generated poperly', () => {
  expect(solfege.flatNotes).toEqual(["B",  "E",  "A",  "D",  "G",  "C",  "F"]);
});

test('Make sure sharp notes generated poperly', () => {
  expect(solfege.sharpNotes).toEqual(["F",  "C",  "G",  "D",  "A",  "E",  "B"]);
});

test('C Major 1st degree scale name to equal Ionian', () => {
  let cmaj = new solfege.Scale("C", 1);
  expect(cmaj.name).toBe("C Ionian");
});

test('C Major 1st degree scale name to equal Ionian', () => {
  let cmaj = new solfege.Scale("C", 1);
  expect(cmaj.name).toBe("C Ionian");
});

test('C Major 1st degree scale roman name to equal I', () => {
  var cmaj = new solfege.Scale("C", 1);
  expect(cmaj.mode).toBe("I");
});

test('C Major 2nd degree scale name to equal Dorian', () => {
  var ddor = new solfege.Scale("C", 2);
  expect(ddor.name).toBe("D Dorian");
});

test('C Major 7th degree scale name to equal Locrian', () => {
  var bloc = new solfege.Scale("C", 7);
  expect(bloc.name).toBe("B Locrian");
});

test('C Major 7th degree scale roman name to equal VII', () => {
  var bloc = new solfege.Scale("C", 7);
  expect(bloc.mode).toBe("VII");
});

test('Not supported mode high', () => {
  expect(() => {
    e = new solfege.Scale("C", 8)
  }).toThrowError("Mode not supported 8");
});

test('Not supported mode low', () => {
  expect(() => {
    e = new solfege.Scale("C", 0)
  }).toThrowError("Mode not supported 0");
});

test('Not supported mode not integer', () => {
  expect(() => {
    e = new solfege.Scale("C", 1.5)
  }).toThrowError("Mode not supported 1.5");
});

test('Not supported base note H', () => {
  expect(() => {
    e = new solfege.Scale("H", 1)
  }).toThrowError("majorBase note not supported H");
});

test('Not supported base note Fb', () => {
  expect(() => {
    e = new solfege.Scale("Fb", 1)
  }).toThrowError("majorBase note not supported Fb");
});

test('Not supported base note A#', () => {
  expect(() => {
    e = new solfege.Scale("A#", 1)
  }).toThrowError("majorBase note not supported A#");
});

test('C Dorian scale toSring', () => {
  let cmaj = new solfege.Scale("Bb", 2);
  expect(cmaj.toString()).toBe("C Dorian: C D Eb F G A Bb");
});

test('randomKey() returns a new possible key', () => {
  let allKeys = solfege.flatKeys.concat(solfege.sharpKeys).concat("C");
  let r = solfege.randomKey();
  expect(allKeys.indexOf(r)).not.toBe(-1);
});
