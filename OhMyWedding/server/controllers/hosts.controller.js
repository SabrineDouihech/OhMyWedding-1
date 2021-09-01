
var db = require('../../config/db.confing');








const getHostes = async function (req, res) {
    try {
        const hosts = await db.host.findAll({});
        res.status(201).send(hosts);
    } catch (error) {

        res.status(200).send(error);
    }
};



const postHoste = async function (req, res) {
    try {
        const hostes = await db.host.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            persons: req.body.persons,
            availabledate: req.body.availabledate,
            state: req.body.state
        })
        res.status(200).send(hostes)
    } catch (error) {

        res.status(400).send(error)
    }
}
module.exports = { getHostes, postHoste };
