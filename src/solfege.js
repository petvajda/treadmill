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
const flatNotes  = ["Bb", "Eb", "Ab", "Db", "Gb", "Cb", "Fb"];
const sharpKeys  = ["G",  "D",  "A",  "E",  "B",  "F#", "C#"];
const sharpNotes = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"];

class Scale {
  constructor(base, mode) {
  	this.roman = NAMES_MODES[mode-1][0];
  	this.name  = NAMES_MODES[mode-1][1];
  	this.base  = base;
		this.notes = CMajScale.slice(mode-1).concat(CMajScale.slice(0, mode-1));
  }
}

module.exports = Scale;
