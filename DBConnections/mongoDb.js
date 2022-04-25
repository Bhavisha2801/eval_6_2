const mongoose = require('mongoose');

class mongo {
    constructor(){
        this.createMongoConnection();
    }


    createMongoConnection(){
        mongoose.connect(`mongodb://myuser:mypassword@localhost:27017/eval`)


        mongoose.connection.once('open',() => {
            console.log("mongodb is connected");
        })
        mongoose.connection.on('error',()=>{
            console.log("error occured in mongodb")
        })
    }
}

module.exports = mongo;