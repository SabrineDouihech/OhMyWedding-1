module.exports = (sequelize, Sequelize) => {
    const LuxuryCars = sequelize.define('LuxuryCars', {
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
        brand: {
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

    return LuxuryCars;
}


// INSERT INTO LuxuryCars(name,image,description,price,brand,state) VALUES ("RS","https://i.ytimg.com/vi/PJFEz6qw0sM/maxresdefault.jpg","WOW",1200,"Audi","2020-09-13");
// INSERT INTO LuxuryCars(name,image,description,price,brand,state) VALUES ("RS","http://www.automobilsport.com/uploads/_neustart39/cars/A214848_small.jpg","WOW",1200,"Audi","2020-09-13");
// INSERT INTO LuxuryCars(name,image,description,price,brand,state) VALUES ("RS","https://www.edmunds.com/audi/rs-7/","WOW",1200,"Audi","2020-09-13");
