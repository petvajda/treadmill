// var exports = module.exports = {};

//exports.pattern = (noteValue=8, noteCount=4) => {
const pattern = (noteValue=8, noteCount=4) => {
  var notesString = "tabstave notation=true time=4/4 tablature=false\n";
  notesString = notesString + "notes :"+ noteValue + " ";
  for (var i = 0; i < noteValue ; i++ ) {
    if (Math.random() >= 0.5) {
      notesString = notesString + "B/4 ";
    } else {
      notesString = notesString +  "## ";
    }
  }
  return notesString;
};
