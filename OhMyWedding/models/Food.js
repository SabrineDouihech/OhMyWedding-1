module.exports = (sequelize, Sequelize) => {
    const Food = sequelize.define('Food', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        persons: {
            type: Sequelize.INTEGER
        },
        foodtype: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        }
    }, { // options
        //     timestamps: false  	
    });
    return Food;
}
