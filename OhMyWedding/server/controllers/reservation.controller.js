var Reservation = require("../../models/Reservation");








const getReservation = async function (req, res) {
    try {
        const reservation = await Reservation.findAll({});
        res.status(200).send(reservation);
    } catch (error) {
        res.status(200).send(error);
    }
};
module.exports = { getReservation };