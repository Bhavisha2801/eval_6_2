const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "firstname" : {type : String , required: true},
    "middlename" : {type : String},
    "lastname" : {type : String , required: true},
    "age" : {type : Number , required: true},
    "email" : {type : String , required: true},
    "address" : {type : String , required: true},
    "gender" : {type : String , required: true},
    "type" : {type : String , default:"customer"},
    "createdAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now },  
})

module.exports = mongoose.model('user',user);