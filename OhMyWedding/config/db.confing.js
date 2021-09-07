require("dotenv").config();
const Sequelize = require("sequelize");
const operatorsAliases = {
  $like: Sequelize.Op.like,
}
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/User")(sequelize, Sequelize);
db.role = require("../models/Role")(sequelize, Sequelize);
db.dressing = require("../models/Dressing")(sequelize, Sequelize);
db.favorite = require("../models/Favourite")(sequelize, Sequelize);
db.food = require("../models/Food")(sequelize, Sequelize);
db.host = require("../models/Hosts")(sequelize, Sequelize);
db.invitationcard = require("../models/InvitationCard")(sequelize, Sequelize);
db.luxurycars = require("../models/LuxuryCars")(sequelize, Sequelize);
db.musicalband = require("../models/MusicalBand")(sequelize, Sequelize);
db.packages = require("../models/Packages")(sequelize, Sequelize);
db.reservation = require("../models/Reservation")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.dressing.hasMany(db.packages);
db.food.hasMany(db.packages);
db.host.hasMany(db.packages);
db.invitationcard.hasMany(db.packages);
db.luxurycars.hasMany(db.packages);
db.musicalband.hasMany(db.packages);
db.packages.hasMany(db.reservation);
db.user.hasMany(db.favorite);
db.favorite.belongsTo(db.user);
db.user.hasMany(db.reservation)

module.exports = db;
