var Favourite = require("../../models/Favourite");
const User = require("../../models/User");
const { QueryTypes } = require("sequelize");
const db = require("../../db");

// const addToFavorites = async function (req, res) {
//   const { type, userId, itemId } = req.body;
//   try {
//     if (!["packages"].includes(type)) throw new Error("INVALID TYPE");

//     const destroyed = await Favourite.destroy({
//       where: { itemId, UserId: userId, type },
//     });

//     if (destroyed) 
//       return res.status(204).send("unfavorited");
    
//     const packages = await Favourite.create({ type, UserId: userId, itemId });
//     res.status(201).send(packages);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };

// const addToFavorites = async function (req, res) {
//   const packageId = { id: req.params.id };
//   try {
//     const package = await Packages.update(packageId);
//     res.status(200).send(package);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

// const getFavorites = async function (req, res) {
//   try {
//     const { userId: UserId } = req.params;
//     const favorites = await Favourite.findAll({
//       where: { UserId },
//       include: User,
//     });
//     const result = await Promise.all(
//       favorites.map(async ({ dataValues: { id, type, itemId, User } }) => {
//         const [item] = await db.query(
//           `SELECT * FROM ${type} where id=${itemId} LIMIT 1`,
//           { type: QueryTypes.SELECT }
//         );
//         return { User, id, type, item };
//       })
//     );
//     res.status(200).send(result);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// module.exports = { getFavorites, addToFavorites };
