const { exception } = require('console');
const mongoDb = require('mongodb');

//Get a mongoCLient
const MongoCLient = mongoDb.MongoClient;

let _db;

const createMongoClient = () => {
    return MongoCLient.connect('mongodb+srv://obed:ducrtkDG0soST5Or@cluster0.vjhlc.mongodb.net/Cluster0?retryWrites=true&w=majority')
        .then(client => {
            _db = client.db();
        })
        .catch(err => console.log(err))
};

//Get instance
const getDB = () => {
    if (_db) {
        return _db;
    }
    throw exception('Connection to database fail');
}


module.exports = {
    createMongoClient,
    getDB
};

