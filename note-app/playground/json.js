// var personString ='{"name": "ttk","age":"24"}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);




const fs = require('fs');

var originalNote={
	title:'some tittle',
	body: 'some bidy'
};

//original notestring
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);


var noteString= fs.readFileSync('notes.json');

//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

