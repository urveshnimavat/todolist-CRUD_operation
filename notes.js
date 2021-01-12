const fs = require("fs");
const FILE_NAME = 'notes.json';

//create new note
function writeNote(note){
    const allNotes = loadNotes();

    const duplicateNote = allNotes.filter(function (noteElement){
        return noteElement.title === note.title;
    })

    if (duplicateNote.length === 0){
        allNotes.push(note);
        saveNotes(allNotes);
    }
    else{
        console.log("Notes Alreafy exist!");
    }
}

//save note
function saveNotes(notesToSave){
    const noteJson = JSON.stringify(notesToSave);
    fs.writeFileSync('notes.json',noteJson);
    console.log("Notes Saved!");
}

//load note
function loadNotes(){
    try {
        const bufferNote = fs.readFileSync(FILE_NAME);
        const notesJson = bufferNote.toString();
        const notes = JSON.parse(notesJson);
        return notes;
    }
    catch (e){
        return [];
    }
}

//remove note
function removeNote(title){
    const allNotes = loadNotes();
    const notesToKeep = allNotes.filter(function(note){
        return title!==note.title;
    })
    saveNotes(notesToKeep);
}

//update note
function updateNote(newNote){
    const allNotes = loadNotes();
    const notesToKeep = allNotes.filter(function(note){
        return newNote.title!==note.title;
    })
    notesToKeep.push(newNote);
    saveNotes(notesToKeep);
}

//read note
function readNote(){
    const bufferNote = fs.readFileSync(FILE_NAME);
    const notesJson = bufferNote.toString();
    const notes = JSON.parse(notesJson);
    console.log(notes);
}

module.exports = {
    writeNote,
    removeNote,
    updateNote,
    readNote
}