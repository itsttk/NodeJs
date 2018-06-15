console.log('Starting app!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');


const argv = yargs.argv;
var command = process.argv[2];

console.log('command:' , command);
console.log('yargs:' , argv);


if(command==='add'){
	notes.addNote(argv.title,argv.body);
}
else if (command==='list'){
    notes.getAll();
}
else
{
 console.log('command not recognised');
}




