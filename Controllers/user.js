const userModel = require('../Models/user')
// const branchModel = require('../Models/branchDetail')
const masterAccount = require('../Models/masterAccount');
const savingAccount = require('../Models/savingAccount');
const fixedAccount = require('../Models/fixedAccount');
// const user = require('../Models/user');


async function createUser(req , res , next){
    let userDetail = req.body;
    let response = await userModel.insertMany([userDetail])
    res.json(response)
}

async function createMasterdata(req , res , next){
    let userDetail = req.body;
    let response = await masterAccount.insertMany([userDetail])
    res.json(response)
}


async function getUser(req,res,next){
    try {
        let respone = await masterAccount.find({})
        res.json(respone)
    } catch (error) {
        res.status(500).json(error)
    }
}


async function createSavingData(req , res , next){
    let userDetail = req.body;
    let response = await savingAccount.insertMany([userDetail])
    res.json(response)
}


async function createFixedData(req , res , next){
    let userDetail = req.body;
    let response = await fixedAccount.insertMany([userDetail])
    res.json(response)
}

async function deleteFixedAccount(req,res,next){
    let userId = req.params.userId;
    let respone = await fixedAccount.deleteOne({_id : userId})
    res.json(respone)
}



module.exports = {
    createUser,
    getUser,
    createMasterdata,
    createSavingData,
    createFixedData,
    deleteFixedAccount
}