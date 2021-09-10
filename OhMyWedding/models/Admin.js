module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define(
        "Admin",
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            adminname: {
                type: Sequelize.STRING,
            },

            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },

            phoneNumber: {
                type: Sequelize.INTEGER,
            },
        },
        {
            // options
            timestamps: false,
        }
    );

    return Admin;
};