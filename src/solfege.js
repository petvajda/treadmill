var exports = module.exports = {};

const NAMES_MODES = [
	["I",   "Ionian"],
	["II",  "Dorian"],
	["III", "Phrygian"],
	["IV",  "Lydian"],
	["V",   "Mixolydian"],
	["VI",  "Aeolian"],
	["VII", "Locrian"]
];

const CMajScale  = ["C",  "D",  "E",  "F",  "G",  "A",  "B" ];
const flatKeys   = ["F",  "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];
const flatNotes  = CMajScale.map(x =>
									 CMajScale[(6+(3*CMajScale.indexOf(x)))%(CMajScale.length)]);
const sharpKeys  = ["G",  "D",  "A",  "E",  "B",  "F#", "C#"];
const sharpNotes = CMajScale.map(x =>
									 CMajScale[(3+(4*CMajScale.indexOf(x)))%(CMajScale.length)]);

exports.Scale = class {
  constructor(majorBase, mode) {
		if (mode <= 0 || mode > 7 || !Number.isInteger(mode)) {
			throw new Error("Mode not supported " + mode);
		}
		this.majorBase  = majorBase;
		this.mode  = NAMES_MODES[mode-1][0];
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
		this.notes = this.notes.slice(mode-1).concat(this.notes.slice(0, mode-1));
		this.name  = this.notes[0] + " " + NAMES_MODES[mode-1][1];
	}
};

exports.flatNotes  = flatNotes;
exports.sharpNotes = sharpNotes;
