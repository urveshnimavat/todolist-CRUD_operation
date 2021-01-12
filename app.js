const yargs = require("yargs");
const notesOperation = require("./notes.js");
const { title } = require("process");

// console.log(process.argv);

//create
yargs.command({
    command:"add",
    describe:"Add Notes",
    builder:{
        title:{
            describe:"title required",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Add Notes....')
        // console.log('Title : '+argv.title)
        // console.log('Description : '+argv.desc);
        const note = {
            title : argv.title,
            desc : argv.desc
        }
        notesOperation.writeNote(note);
    }
})

//delete
yargs.command({
    command: "remove",
    describe: "Remove Note",
    handler: function(argv){
        notesOperation.removeNote(argv.title)
    }
})

//update
yargs.command({
    command: "update",
    describe: "Update Note",
    handler: function (argv){
        const note = {
            title: argv.title,
            desc: argv.desc
        }
        notesOperation.updateNote(note);
    }
})

//read
yargs.command({
    command: "list",
    describe: "List Notes",
    handler: function(){
        notesOperation.readNote();
    }
})

yargs.argv