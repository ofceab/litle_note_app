const { exception } = require('console');
const mongoDb = require('mongodb');
const getDb = require('../helpers/database').getDB;

class Note {

    constructor(title, description, id) {
        this.title = title;
        this.description = description;
        this.id = id;
    }

    //Save a note in the database
    save() {
        const db = getDb();
        return db.collection('notes').insertOne(this)
            .then(note => console.log(note))
            .catch(err => console.log(err));
    }

    //Fetch all notes
    static getAllNote() {
        const db = getDb();
        return db.collection('notes').find().toArray()
            .then(results => console.log(results))
            .catch(err => console.log(err));
    }

    updateNote() {
        const db = getDb();
        if (this.id != undefined) {
            return db.collection('notes').updateOne({ _id: new mongoDb.ObjectID(this.id) }, { $set: this })
                .then(note => console.log(note))
                .catch(err => console.log(err));

        }
        throw exception("Can't modify a note without his id");
    }

    //Delete a note
    static deleteNote(noteId) {
        const db = getDb();
        return db.collection('notes').deleteOne({ _id: new mongoDb.ObjectID(noteId) })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
}


module.exports = Note;