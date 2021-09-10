module.exports = (sequelize, Sequelize) => {
    const Packages = sequelize.define('Packages', {
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
        persons: {
            type: Sequelize.INTEGER
        },
        state: {
            type: Sequelize.STRING
        },
        availabledate: {
            type: Sequelize.DATE
        },
    }, { // options
        timestamps: false
    });

    return Packages;
}