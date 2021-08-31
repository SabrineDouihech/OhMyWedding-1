module.exports = (sequelize, Sequelize) => {
    const MusicalBand = sequelize.define('MusicalBand', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        bandtype: {
            type: Sequelize.STRING
        },
        availabledate: {
            type: Sequelize.DATE
        },
        state: {
            type: Sequelize.STRING
        },
    }, { // options
        timestamps: false
    });

    return MusicalBand;
}