const express = require('express');

//Own importation 
const noteController = require('../controllers/noteController');

const Router = express.Router();

//Get add note
Router.get('/note/add', noteController.getAddNote);

//Add notes
Router.post('/note/add', noteController.postAddNote);


//Update notes
Router.post('/note/edit', noteController.postEditNote);


//Get all notes
Router.get('/note', noteController.getAllNote);


//Delete notes
Router.post('/note/delete', noteController.postDeleteNote);



module.exports = Router;