const mongoose = require('mongoose');

const fixedAccount = new mongoose.Schema({
    "account_number" : {type : Number , required: true},
    "balance" : {type : Number , required: true},
    "insertRate" : {type : Number , required: true},
    "maturityDate" : {type : Number , required: true},
    "createdAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now },  
})

module.exports = mongoose.model('fixedAccount',fixedAccount);