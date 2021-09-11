const { QueryTypes } = require("sequelize");
const {
  favorite,
  sequelize: db,
  user: User,
} = require("../../config/db.confing");

const addToFavorites = async function (req, res) {
  const { type, itemId } = req.body;
  
  const userId = req.userId;
  try {
    if (
      ![
        "packages",
        "food",
        "invitationcards",
        "dressings",
        "luxurycars",
        "hosts",
        "musicalbands",
      ].includes(type.toLowerCase())
    )
      throw new Error("INVALID TYPE");

    const destroyed = await favorite.destroy({
      where: { itemId, UserId: userId, type },
    });

    if (destroyed) return res.status(204).send("unfavorited");

    const packages = await favorite.create({ type, UserId: userId, itemId });
    console.log("message", packages);
    res.status(201).send(packages);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getFavorites = async function (req, res) {
  try {
    const UserId = req.userId;
    const favorites = await favorite.findAll({
      where: { UserId },
      include: User,
    });
    const result = await Promise.all(
      favorites.map(async ({ dataValues: { id, type, itemId, User } }) => {
        const [item] = await db.query(
          `SELECT * FROM ${type} where id=${itemId} LIMIT 1`,
          { type: QueryTypes.SELECT }
        );
        return { User, id, type, item };
      })
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const deleteFavorites = async function (req, res) {
  console.log(req.params.id);
  try {
    await favorite.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json("okay");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getFavorites,
  addToFavorites,
  deleteFavorites,
};
