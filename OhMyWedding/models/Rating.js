module.exports = (sequelize, Sequelize) => {
    const Rating = sequelize.define(
        "Rating",
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            rating: {
                type: Sequelize.STRING,
            },
        }, {
        // options
        timestamps: false,
    }
    );
    return Rating;
};