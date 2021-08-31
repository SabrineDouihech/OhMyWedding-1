module.exports = (sequelize, Sequelize) => {
    const Favourite = sequelize.define('Favourite', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        itemId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, { // options
        timestamps: false

    });

    return Favourite;
}