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
const flatNotes  = ["B",  "E",  "A",  "D",  "G",  "C",  "F" ];
const sharpKeys  = ["G",  "D",  "A",  "E",  "B",  "F#", "C#"];
const sharpNotes = ["F",  "C",  "G",  "D",  "A",  "E",  "B" ];

class Scale {
  constructor(base, mode) {
		this.base  = base;
		this.roman = NAMES_MODES[mode-1][0];
  	this.name  = NAMES_MODES[mode-1][1];
		this.notes = CMajScale.slice();

		if (flatKeys.indexOf(this.base)>=0) {
			let start = flatKeys.indexOf(this.base);
			for (var i=0; i<=start; i++) {
				let noteIndex = this.notes.indexOf(flatNotes[i]);
				this.notes[noteIndex] = this.notes[noteIndex] + "b";
			}
			let b = this.notes.indexOf(this.base);
			this.notes = this.notes.slice(b).concat(this.notes.slice(0, b));
		} else if (sharpKeys.indexOf(this.base)>=0) {
			let start = sharpKeys.indexOf(this.base);
			for (var i=0; i<=start; i++) {
				let noteIndex = this.notes.indexOf(sharpNotes[i]);
				this.notes[noteIndex] = this.notes[noteIndex] + "#";
			}
			let b = this.notes.indexOf(this.base);
			this.notes = this.notes.slice(b).concat(this.notes.slice(0, b));
		}
		this.notes = this.notes.slice(mode-1).concat(this.notes.slice(0, mode-1));
	}
}

module.exports = Scale;
