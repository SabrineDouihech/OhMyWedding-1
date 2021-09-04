const { QueryTypes } = require("sequelize");
const {
  favorite,
  sequelize: db,
  user: User,
} = require("../../config/db.confing");

const addToFavorites = async function (req, res) {
  const { type, userId, itemId } = req.body;
  try {
    if (
      ![
        "packages",
        "food",
        "invitationcard",
        "dressing",
        "car",
        "hosts",
        "musicalband",
      ].includes(type.toLowerCase())
    )
      throw new Error("INVALID TYPE");

    const destroyed = await favorite.destroy({
      where: { itemId, UserId: userId, type },
    });

    if (destroyed) return res.status(204).send("unfavorited");

    const packages = await favorite.create({ type, UserId: userId, itemId });
    res.status(201).send(packages);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getFavorites = async function (req, res) {
  try {
    const { userId: UserId } = req.params;
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
  try {
    db.favorite
      .destroy({
        where: { id: req.params.id },
      })
      .then(() => {
        res.send("deleted favorite");
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getFavorites, addToFavorites, deleteFavorites };
