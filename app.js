const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Personal importation
const createMongoClient = require('./helpers/database').createMongoClient;
const noteRouter = require('./routes/note');
const homeRouter = require('./routes/home');
const errorRouter = require('./routes/error');
const rootPath = require('./helpers/path');

//Create app
const app = express();

// Decode body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootPath, 'public')));

console.log(rootPath);


//Set view template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//notes router
app.use(noteRouter);

//Home router
app.use(homeRouter);


//Don't existe router
app.use(errorRouter);


createMongoClient()
    .then(() => {
        app.listen(3000, () => console.log('The server is running succesfully'));
    })
    .catch(err => console.log(err));



