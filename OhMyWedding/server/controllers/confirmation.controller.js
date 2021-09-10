var db = require("../../config/db.confing");

const getConfirmation = async function (req, res) {
    try {
        const confirme = await db.reservation.findOne({
            where: {
                _id: req.params.userId
            }
        }).then((confirm) => {
            res.send(confirm);
        })

    } catch (error) {
        res.status(404).send(error)
    }
}


const postConfirmation = async function (req, res) {
    try {
        const cofirmation = await db.reservation.create({
            total: req.params.userId,
            rest: req.params.userId,
            reserveDate: req.params.userId,
            item_id: req.params.userId,
            type: req.body.type,

        })
        res.status(200).send(cofirmation)
    } catch (err) {
        res.status(201).send(err)
    }
}

module.exports = { getConfirmation, postConfirmation }