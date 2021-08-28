var Reservation = require("../../models/Reservation");

const getReservation = async function (req, res) {
    try {
        const r = await Reservation.findAll();
        res.status(200).send(r);
      } 
      catch (error) {
        res.status(200).send(error);
      }
};
module.exports = { getReservation };