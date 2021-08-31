var LuxuryCars = require("../../models/LuxuryCars");
var db = require('../../config/db.confing');

const getLuxuryCars = async function (req, res) {
    try {
        const lc = await db.luxurycars.findAll();
        res.status(200).send(lc);
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
};



const postLuxuryCar = async function (req, res) {
    try {
        const lux = await db.luxurycars.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            brand: req.body.brand,
            availabledate: req.body.availabledate,
            state: req.body.state
        });
        res.status(200).send(lux);
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
}
module.exports = { getLuxuryCars, postLuxuryCar };
