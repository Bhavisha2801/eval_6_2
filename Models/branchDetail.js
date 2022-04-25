const mongoose = require('mongoose');

const branchDetail = new mongoose.Schema({
    "firstname" : {type : String , required: true},
    "address" : {type : String , required: true},
    "IFSC" : {type : String , required: true},
    "MICR" : {type : Number , required: true},
    "createdAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now },  
})

module.exports = mongoose.model('branchDetail',branchDetail);