var db = require('../../db');
const User = require('../../models/User');

const SelectAll = async function (req, res) {
    try {
        const user = await User.findAll({});
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
}

const CreateUser = async function (req,res){
    try {
        console.log("data")
        const data = await User.create({
            username: req.body.username,
            eMail:req.body.eMail,
            password: req.body.password,
            identityCard: req.body.identityCard,
            phoneNumber: req.body.phoneNumber,
        })
        console.log(data)
        res.status(200).send(data)
    } catch (err) {
        res.status(500).send(err)
    }
}






module.exports = { SelectAll,CreateUser }







