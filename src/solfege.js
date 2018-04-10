const NAMES_MODES = [
	["I",   "Ionian"],
	["II",  "Dorian"],
	["III", "Phrygian"],
	["IV",  "Lydian"],
	["V",   "Mixolydian"],
	["VI",  "Aeolian"],
	["VII", "Locrian"]
]

class Scale {
  constructor(base, mode) {
  	this.roman = NAMES_MODES[mode-1][0];
  	this.name  = NAMES_MODES[mode-1][1];
  	this.base  = base;
  }
}

module.exports = Scale;