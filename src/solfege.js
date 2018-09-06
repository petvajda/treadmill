var exports = module.exports = {};

const MODE_NAMES = [
	["I",   "Ionian"],
	["II",  "Dorian"],
	["III", "Phrygian"],
	["IV",  "Lydian"],
	["V",   "Mixolydian"],
	["VI",  "Aeolian"],
	["VII", "Locrian"]
];

const CHORD_NAMES = [
	["I",   "maj7"],
	["II",  "m7"],
	["III", "m7"],
	["IV",  "maj7"],
	["V",   "7"],
	["VI",  "m7"],
	["VII", "m7b5"]
];

const CMajScale  = ["C",  "D",  "E",  "F",  "G",  "A",  "B" ];
const flatKeys   = ["F",  "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];
const flatNotes  = CMajScale.map(x =>
					CMajScale[(6+(3*CMajScale.indexOf(x)))%(CMajScale.length)]);
const sharpKeys  = ["G",  "D",  "A",  "E",  "B",  "F#", "C#"];
const sharpNotes = CMajScale.map(x =>
					CMajScale[(3+(4*CMajScale.indexOf(x)))%(CMajScale.length)]);

exports.flatNotes  = flatNotes;
exports.sharpNotes = sharpNotes;
exports.flatKeys   = flatKeys;
exports.sharpKeys  = sharpKeys;

exports.Scale = class {
  constructor(majorBase, mode) {
		if (mode <= 0 || mode > 7 || !Number.isInteger(mode)) {
			throw new Error("Mode not supported " + mode);
		}
		this.majorBase  = majorBase;
		this.mode  = MODE_NAMES[mode-1][0];
		this.notes = CMajScale.slice();

		if (flatKeys.indexOf(this.majorBase)>=0) {
			var start = flatKeys.indexOf(this.majorBase);
			var mod = "b";
			var modNotes = flatNotes;
		} else if (sharpKeys.indexOf(this.majorBase)>=0) {
			var start = sharpKeys.indexOf(this.majorBase);
			var mod = "#";
			var modNotes = sharpNotes;
		} else if (!(CMajScale.indexOf(this.majorBase)>=0)) {
			throw new Error("majorBase note not supported " + majorBase);
		}

		if (typeof mod != 'undefined') {
			for (var i=0; i<=start; i++) {
				let noteIndex = this.notes.indexOf(modNotes[i]);
				this.notes[noteIndex] = this.notes[noteIndex] + mod;
			}
			let b = this.notes.indexOf(this.majorBase);
			this.notes = this.notes.slice(b).concat(this.notes.slice(0, b));
		}
		this.notes = this.notes.slice(mode-1).
			concat(this.notes.slice(0, mode-1));
		this.name  = this.notes[0] + " " + MODE_NAMES[mode-1][1];
	}
	toString() {
		return this.name + ': ' + this.notes.join(' ');
	}
};

exports.Chord = class {
  constructor(majorBase, mode) {
		if (mode <= 0 || mode > 7 || !Number.isInteger(mode)) {
			throw new Error("Mode not supported " + mode);
		}
		this.majorBase  = majorBase;
		this.mode  = CHORD_NAMES[mode-1][0];
		this.notes = [];
		let baseSale = new exports.Scale(majorBase, 1);
		for (var i = 0; i < 4 ; i++ ){
			this.notes[i] = baseSale.notes[(mode-1+i*2)%7];
		}
		
	}
};

exports.randomKey = () => {
	let allKeys = flatKeys.concat(sharpKeys).concat("C");
	const i = Math.floor(Math.random() * Math.floor(allKeys.length));
	return allKeys[i];
};

exports.randomModesSequence = () => {
	// Generate sequence like this [3, 7, 2, 4, 6, 1, 5]
	let sequence = [];
	let start = Math.floor(Math.random() * Math.floor(7));
	for (var i = 1; i < 8 ; i++ ){
		sequence[start] = i;
		start = (start + 2)%7;
	}
	return sequence;
};
