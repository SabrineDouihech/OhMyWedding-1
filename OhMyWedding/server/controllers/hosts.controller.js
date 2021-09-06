var db = require("../../config/db.confing");

const getHostes = async function (req, res) {
    try {
        const hosts = await db.host.findAll({});
        res.status(201).send(hosts);
    } catch (error) {

        res.status(200).send(error);
    }
};

const getOneHoste = async function (req, res) {
    try {
        db.host.findOne({
            where: {
                id: req.params.id
            }
        }).then((host) => {
            res.send(host)
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const postHoste = async function (req, res) {
    try {
        const hostes = await db.host.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            persons: req.body.persons,
            availabledate: req.body.availabledate,
            state: 'Not Reserved',
        })
        res.status(200).send(hostes)
    } catch (error) {

        res.status(400).send(error)
    }
}

const deleteHoste = async function (req, res) {
    try {
        db.host.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.send({ message: "deleted host" })
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const updateHost = async function (req, res) {
    try {
        db.host.update({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            persons: req.body.persons,
            availabledate: req.body.availabledate,
            state: 'Not Reserved',
        }, {
            where: {
                id: req.params.id
            }

        }).then((hot) => {
            res.status(200).send(hot)
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { getHostes, postHoste, getOneHoste, deleteHoste, updateHost };
