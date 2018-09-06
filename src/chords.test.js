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

test('Dmaj7 chord notes', () => {
  let dmaj7 = new solfege.Chord("D", 1);
  expect(dmaj7.notes).toEqual(["D", "F#", "A", "C#"]);
  expect(dmaj7.name).toEqual("Dmaj7");
});

test('Bbmaj7 chord notes', () => {
  let bbmaj7 = new solfege.Chord("Bb", 1);
  expect(bbmaj7.notes).toEqual(["Bb", "D", "F", "A"]);
  expect(bbmaj7.name).toEqual("Bbmaj7");
});

test('Ebm7 chord notes', () => {
  let ebm7 = new solfege.Chord("Db", 2);
  expect(ebm7.notes).toEqual(["Eb", "Gb", "Bb", "Db"]);
  expect(ebm7.name).toEqual("Ebm7");
});

test('Ebm7 chord notes from another major key', () => {
  let ebm7 = new solfege.Chord("Cb", 3);
  expect(ebm7.notes).toEqual(["Eb", "Gb", "Bb", "Db"]);
  expect(ebm7.name).toEqual("Ebm7");
});

test('Ebm7 chord notes from yet an another major key', () => {
  let ebm7 = new solfege.Chord("Gb", 6);
  expect(ebm7.notes).toEqual(["Eb", "Gb", "Bb", "Db"]);
  expect(ebm7.name).toEqual("Ebm7");
});

test('Not supported mode high', () => {
  expect(() => {
    e = new solfege.Chord("C", 8)
  }).toThrowError("Mode not supported 8");
});

test('Not supported mode low', () => {
  expect(() => {
    e = new solfege.Chord("C", 0)
  }).toThrowError("Mode not supported 0");
});

test('Not supported mode not integer', () => {
  expect(() => {
    e = new solfege.Chord("C", 1.5)
  }).toThrowError("Mode not supported 1.5");
});

test('Not supported base note H', () => {
  expect(() => {
    e = new solfege.Chord("H", 1)
  }).toThrowError("majorBase note not supported H");
});

test('Not supported base note Fb', () => {
  expect(() => {
    e = new solfege.Chord("Fb", 1)
  }).toThrowError("majorBase note not supported Fb");
});

test('Not supported base note A#', () => {
  expect(() => {
    e = new solfege.Chord("A#", 1)
  }).toThrowError("majorBase note not supported A#");
});

test('F#maj7 chord toSring', () => {
  let fsmaj7 = new solfege.Chord("F#", 1);
  expect(fsmaj7.toString()).toBe("F#maj7: F# A# C# E#");
});
