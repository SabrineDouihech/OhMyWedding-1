var db = require("../../config/db.confing");

const getReservation = async function (req, res) {
  try {
    const reserves = await db.reservation.findAll();
    res.status(200).send(reserves);
  } catch (error) {
    res.status(200).send(error);
  }
};

const postReservation = async function (req, res) {
  try {
    const reserve = await db.reservation.create({
      total: req.body.total,
      rest: req.body.rest,
      reservation: req.body.reservation,
      item_id: req.body.item_id,
      type: req.body.type

    })
    res.status(200).send(reserve)
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = { getReservation, postReservation };
