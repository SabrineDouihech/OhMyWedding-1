var Food = require("../../models/Food");



const getFood = async function (req, res) {
    try {
      const packages = await Food.findAll({});
      res.status(200).send(packages);
    } 
    catch (error) {
      res.status(400).send(error);
    }
  };



  module.exports = { getFood };