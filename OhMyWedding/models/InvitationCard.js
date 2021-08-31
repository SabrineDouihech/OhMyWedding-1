module.exports = (sequelize, Sequelize) => {
  const InvitationCard = sequelize.define(
    "InvitationCard",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      persons: {
        type: Sequelize.INTEGER,
      },
      availabledate: {
        type: Sequelize.DATE,
      },
      state: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
      timestamps: false,
    }
  );

  return InvitationCard;
};

// INSERT INTO InvitationCards(name, image, description, price, state) VALUES("Invitation Cards", "https://www.afghanweddingcards.com/wp-content/uploads/2019/03/1169-1.jpg","yess", 25, "2020-09-13");
// INSERT INTO InvitationCards(name, image, description, price, state) VALUES("Invitation Cards", "https://i.pinimg.com/736x/9c/85/23/9c8523899cb958a781eee212e57d0c58.jpg","yess" ,25, "2020-09-13");
// INSERT INTO InvitationCards(name, image, description, price, state) VALUES("Invitation Cards", "https://5.imimg.com/data5/KS/OC/VN/ANDROID-40258478/product-jpeg-500x500.jpg", "yess",25, "2020-09-13");
