console.log("starting notes.js ")

const fs = require('fs');

var addNote=(title,body)=>{
   
   var notes = [];
   var note ={
   	title,
   	body
   };

   try{
   	  	var notestring =  fs.readFileSync('notes_data.json');
  	notes = JSON.parse(notestring);


   } catch(e){

   }


   notes.push(note);
   fs.writeFileSync('notes_data.json',JSON.stringify(notes));


};

var getAll=()=>{
	console.log('getting all note');
}

module.exports={
	addNote,
	getAll
};


