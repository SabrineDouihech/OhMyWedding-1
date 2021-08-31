var Reservation = require("../../models/Reservation");
var db = require('../../config/db.confing');
const getReservation = async function (req, res) {
  try {
    const r = await db.reservation.findAll();
    res.status(200).send(r);
  }
  catch (error) {
    res.status(200).send(error);
  }
};
module.exports = { getReservation };