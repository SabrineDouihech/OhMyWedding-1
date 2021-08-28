var Hostes = require("../../models/Hosts");








const getHostes = async function (req, res) {
    try {
        const hosts = await Hostes.findAll({});
        res.status(201).send(hosts);
    } catch (error) {
        res.status(200).send(error);
    }
};
module.exports = { getHostes };
