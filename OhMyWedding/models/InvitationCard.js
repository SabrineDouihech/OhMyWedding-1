var { DataTypes } = require('sequelize');
const db = require('../db/index');
const Packages = require('./Packages')

const InvitationCard = db.define('InvitationCard', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    state: {
        type: DataTypes.STRING
    },
}, { // options
    timestamps: false
})

// INSERT INTO InvitationCards(name, image, description, price, state) VALUES("Invitation Cards", "https://www.afghanweddingcards.com/wp-content/uploads/2019/03/1169-1.jpg","yess", 25, "2020-09-13");
// INSERT INTO InvitationCards(name, image, description, price, state) VALUES("Invitation Cards", "https://i.pinimg.com/736x/9c/85/23/9c8523899cb958a781eee212e57d0c58.jpg","yess" ,25, "2020-09-13");
// INSERT INTO InvitationCards(name, image, description, price, state) VALUES("Invitation Cards", "https://5.imimg.com/data5/KS/OC/VN/ANDROID-40258478/product-jpeg-500x500.jpg", "yess",25, "2020-09-13");



InvitationCard.hasMany(Packages);
Packages.belongsTo(InvitationCard);
module.exports = InvitationCard