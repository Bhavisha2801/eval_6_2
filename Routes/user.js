const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controllers/user')
const { engine } = require("express-handlebars")


app.use(bodyParser.json([]));


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.post('/user',userController.createUser)
app.post('/masteraccount',userController.createMasterdata)
app.get('/masteraccount',userController.getUser)
app.post('./savingaccount',userController.createSavingData)
app.post('./fixedaccount',userController.createFixedData)
app.delete('./fixedaccount',userController.deleteFixedAccount)



module.exports = app;
