const Note = require('../models/note');


// add a note by the POST method
const postAddNote = (req, res) => {
    const note = new Note(req.body.title, req.body.description);
    note.save()
        .then(() => {
            //TODO
            res.redirect('')
        })
        .catch(err => console.log(err));
}


//To get note list 
const getAddNote = (req, res) => {
    res.render(); //TODO
}

//To delete a note by the POST method so by an id
//For security purpose we'll use the POST method
const postDeleteNote = (req, res) => {
    Note.deleteNote(req.body.noteId)
        .then(() => {
            res.render();//TODO
        })
}


//To edit a note by the POST method
const postEditNote = (req, res) => {
    const note = new Note(req.body.title, req.body.description);
    note.updateNote()
        .then(() => {
            res.redirect(); //TODO
        });
}


//Get all note
const getAllNote = (req, res) => {
    Note.getAllNote()
        .then(notes => {
            console.log(notes);
            res.render('note/index'); //TODO
        })
}

module.exports = {
    getAddNote,
    postDeleteNote,
    postAddNote,
    postEditNote,
    getAllNote
}