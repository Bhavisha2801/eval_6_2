const mongoose = require('mongoose');

const masterAccount = new mongoose.Schema({
    "balance" : {type : Number , required: true},
    "createdAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now },  

})

module.exports = mongoose.model('masterAccount',masterAccount);